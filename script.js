const pad = (i) => String(i).padStart(2, "0");
const pagePath = (p, i, small) => `images/catalogues/${p.catalog}-${pad(i)}${small ? "-thumb" : ""}.jpg`;
const full = (p) => (p.catalog ? pagePath(p, 1, false) : `images/work-${p.n}.jpg`);
const thumb = (p) => (p.catalog ? pagePath(p, 1, true) : `images/thumbs/work-${p.n}.jpg`);

// ---------- Card builder ----------
function makeCard(p, big) {
  const a = document.createElement("a");
  a.className = "card reveal";
  a.href = p.link || full(p);
  if (p.link) { a.target = "_blank"; a.rel = "noopener"; }

  const media = document.createElement("div");
  media.className = "card-media";
  const img = document.createElement("img");
  img.src = big ? full(p) : thumb(p);
  img.alt = `${p.title} — ${p.client}`;
  img.loading = "lazy";
  img.decoding = "async";
  // square / landscape designs: show whole image instead of cropping
  img.onload = () => { if (img.naturalWidth / img.naturalHeight > 0.9) media.classList.add("fit"); };
  const view = document.createElement("span");
  view.className = "card-view";
  view.textContent = p.link ? "VIEW PROJECT ↗" : p.pages ? "OPEN CATALOGUE ↗" : "VIEW ↗";
  media.append(img, view);
  if (p.pages) {
    media.classList.add("is-catalog");
    const badge = document.createElement("span");
    badge.className = "card-badge";
    badge.textContent = `CATALOGUE · ${p.pages} PAGES`;
    media.appendChild(badge);
  }

  const info = document.createElement("div");
  info.className = "card-info";
  const t = document.createElement("strong");
  t.textContent = p.title;
  const c = document.createElement("span");
  c.textContent = p.client;
  info.append(t, c);

  a.append(media, info);
  if (!p.link) a.addEventListener("click", (e) => { e.preventDefault(); openLightbox(p); });
  return a;
}

// ---------- Highlights ----------
const highlights = PROJECTS.filter((p) => p.highlight);
const hl = document.getElementById("highlights");
highlights.forEach((p) => hl.appendChild(makeCard(p, true)));

// ---------- All work + filters ----------
const gallery = document.getElementById("gallery");
const filters = document.getElementById("filters");
const countEl = document.getElementById("count");
// archive shows highlights last, so it doesn't repeat the section above
const ARCHIVE = [...PROJECTS.filter((p) => !p.highlight), ...highlights];
let current = ARCHIVE;

// show the archive in batches so the page isn't a wall of images
const PAGE = 12;
let shown = 0;
const moreWrap = document.getElementById("moreWrap");
const moreBtn = document.getElementById("more");

function showMore() {
  current.slice(shown, shown + PAGE).forEach((p) => {
    const card = makeCard(p, false);
    card.classList.add("in");
    gallery.appendChild(card);
  });
  shown = Math.min(shown + PAGE, current.length);
  const left = current.length - shown;
  moreWrap.hidden = left <= 0;
  moreBtn.textContent = `Show more (${left} more)`;
}
moreBtn.addEventListener("click", showMore);

function renderGallery(cat) {
  current = cat === "All" ? ARCHIVE : ARCHIVE.filter((p) => p.cat === cat);
  gallery.innerHTML = "";
  shown = 0;
  showMore();
  countEl.textContent = `${current.length} DESIGNS`;
}
CATEGORIES.forEach((cat, i) => {
  const b = document.createElement("button");
  b.className = "chip" + (i === 0 ? " active" : "");
  b.setAttribute("role", "tab");
  const n = cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.cat === cat).length;
  b.innerHTML = `${cat} <sup>${n}</sup>`;
  b.addEventListener("click", () => {
    filters.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    b.classList.add("active");
    renderGallery(cat);
  });
  filters.appendChild(b);
});
renderGallery("All");

// ---------- Lightbox ----------
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
// lbList holds slides: { src, title, sub }
let lbList = [], lbIndex = 0;

function openLightbox(p) {
  if (p.pages) {
    // catalogue: flip through its pages
    lbList = Array.from({ length: p.pages }, (_, i) => ({
      src: pagePath(p, i + 1, false), title: p.title, sub: `${p.client} · Page ${i + 1} / ${p.pages}`,
    }));
    lbIndex = 0;
  } else {
    const list = (current.includes(p) ? current : highlights).filter((x) => !x.pages);
    lbList = list.map((x, i) => ({ src: full(x), title: x.title, sub: `${x.client} · ${i + 1} / ${list.length}` }));
    lbIndex = list.indexOf(p);
  }
  showLb();
  lb.hidden = false;
  document.body.style.overflow = "hidden";
}
function showLb() {
  const s = lbList[lbIndex];
  lbImg.src = s.src;
  lbImg.alt = s.title;
  document.getElementById("lbTitle").textContent = s.title;
  document.getElementById("lbClient").textContent = s.sub;
  // preload next page/design
  const next = lbList[(lbIndex + 1) % lbList.length];
  if (next) new Image().src = next.src;
}
function step(d) { lbIndex = (lbIndex + d + lbList.length) % lbList.length; showLb(); }
function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }
document.getElementById("lbClose").onclick = closeLb;
document.getElementById("lbPrev").onclick = () => step(-1);
document.getElementById("lbNext").onclick = () => step(1);
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

// ---------- Hero collage (scrolling columns of work) ----------
const collage = document.getElementById("collage");
const pool = PROJECTS.filter((p) => !p.pages).map(thumb);
for (let c = 0; c < 5; c++) {
  const col = document.createElement("div");
  col.className = "col" + (c % 2 ? " rev" : "");
  const pics = pool.filter((_, i) => i % 5 === c).slice(0, 6);
  [...pics, ...pics].forEach((src) => {
    const im = document.createElement("img");
    im.src = src; im.alt = ""; im.loading = "lazy";
    col.appendChild(im);
  });
  collage.appendChild(col);
}

// ---------- Rotating word — edit these ----------
const words = ["Posts", "Campaigns", "Posters", "Ads", "Brands"];
const rot = document.getElementById("rotator");
let wi = 0;
setInterval(() => {
  rot.classList.add("out");
  setTimeout(() => {
    wi = (wi + 1) % words.length;
    rot.textContent = words[wi];
    rot.classList.remove("out");
  }, 350);
}, 2200);

// ---------- Reveal on scroll ----------
document.querySelectorAll(".statement-text, .services-list li, .quote blockquote, .section-head, .stats div").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
