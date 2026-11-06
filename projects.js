/* =========================================================
   YOUR WORK — edit this list to add / remove / reorder designs.
   ---------------------------------------------------------
   n         : image number → images/work-NN.jpg (+ images/thumbs/work-NN.jpg)
   title     : design name
   client    : brand / client
   cat       : filter category (must match one in CATEGORIES)
   highlight : true = also shows in "Work – Highlights" on top
   link      : optional — opens this URL instead of the image viewer

   CATALOGUES use `catalog` + `pages` instead of `n`:
   pages live in images/catalogues/<catalog>-01.jpg, -02.jpg …
   (and <catalog>-01-thumb.jpg … for small versions)
   ========================================================= */
const CATEGORIES = ["All", "Catalogues", "Education", "Healthcare", "Events", "Kids & School", "Brand Campaigns"];

const PROJECTS = [
  // ---- Highlights (shown first) ----
  { catalog: "cat-a", pages: 14, title: "Product Catalog 2026", client: "Metzger", cat: "Catalogues", highlight: true },
  { catalog: "cat-b", pages: 4, title: "Medical Equipment Catalogue", client: "AUG Medical", cat: "Catalogues" },
  { n: "02", title: "Pakistan Ki Purity, Har Sip Mein", client: "Drop Water", cat: "Brand Campaigns", highlight: true },
  { n: "41", title: "HND Fashion & Textile", client: "IVY Academic Network", cat: "Education", highlight: true },
  { n: "70", title: "3 Days to Go — Grand Open House", client: "IVY Academic Network", cat: "Events", highlight: true },
  { n: "61", title: "VClick20 Video Laryngoscope", client: "AUG Medical", cat: "Healthcare" },
  { n: "58", title: "AI Startup Challenge", client: "IVY Academic Network", cat: "Events", highlight: true },
  { n: "16", title: "BTEC Art & Design", client: "IVY × Pearson", cat: "Education" },
  { n: "66", title: "Grand Open House", client: "IVY Academic Network", cat: "Events" },
  { n: "72", title: "World Tourism Day", client: "IVY Academic Network", cat: "Events" },
  { n: "48", title: "University of London — EMFSS", client: "IVY Academic Network", cat: "Education" },

  // ---- Brand campaigns ----
  { n: "01", title: "Har Sip Mein — Haris Rauf", client: "Drop Water", cat: "Brand Campaigns" },
  { n: "03", title: "Proudly with Drop", client: "Drop Water", cat: "Brand Campaigns" },
  { n: "04", title: "Pakistan Ki Purity", client: "Drop Water", cat: "Brand Campaigns" },
  // ---- Catalogues ----
  { catalog: "cat-c", pages: 2, title: "Video Laryngoscope Brochure", client: "Dahlhausen", cat: "Catalogues" },

  // ---- Healthcare: Denthetics (Instagram) ----
  { n: "77", title: "What Is a Dental Bridge?", client: "Denthetics", cat: "Healthcare", highlight: true },
  { n: "82", title: "Wisdom Tooth Extraction", client: "Denthetics", cat: "Healthcare" },
  { n: "78", title: "Dentures Don't Just Replace Teeth", client: "Denthetics", cat: "Healthcare" },
  { n: "80", title: "A Friendly Reminder", client: "Denthetics", cat: "Healthcare" },
  { n: "81", title: "Your Wishlist vs My Wishlist", client: "Denthetics", cat: "Healthcare" },
  { n: "76", title: "How to Improve Your Smile", client: "Denthetics", cat: "Healthcare" },

  // ---- Healthcare ----
  { n: "05", title: "Digiskop — Medica Invitation", client: "AUG Medical", cat: "Healthcare" },
  { n: "25", title: "Digiskop VClick 20", client: "AUG Medical", cat: "Healthcare" },
  { n: "62", title: "Maxxlite Macintosh Blade", client: "AUG Medical", cat: "Healthcare" },
  { n: "63", title: "Optika Diagnostic Station", client: "AUG Medical", cat: "Healthcare" },

  // ---- Events ----
  { n: "32", title: "2 Days to Go — Open House", client: "IVY Academic Network", cat: "Events" },
  { n: "39", title: "Grand Open House", client: "IVY Academic Network", cat: "Events" },
  { n: "73", title: "Open House — 5th October", client: "IVY Academic Network", cat: "Events" },
  { n: "52", title: "Today's The Day!", client: "IVY Academic Network", cat: "Events" },
  { n: "68", title: "Law GAT Preparation Camp", client: "IVY Academic Network", cat: "Events" },
  { n: "12", title: "12 Societies", client: "IVY Academic Network", cat: "Events" },
  { n: "36", title: "Treasurer — Leading with Integrity", client: "IVY Academic Network", cat: "Events" },
  { n: "06", title: "Where Do I Sign Up?", client: "IVY Academic Network", cat: "Events" },
  { n: "22", title: "Why IVY — State-of-the-Art Campus", client: "IVY Academic Network", cat: "Events" },

  // ---- Kids & School ----
  { n: "46", title: "Admissions Open — Early & Primary Years", client: "IVY Academic Network", cat: "Kids & School" },
  { n: "19", title: "Leader's Podium", client: "IVY Academic Network", cat: "Kids & School" },
  { n: "56", title: "Young Leaders Club", client: "IVY Academic Network", cat: "Kids & School" },
  { n: "42", title: "Little Hands, Big Ideas", client: "IVY Academic Network", cat: "Kids & School" },
  { n: "09", title: "Where Would Your Child Go First?", client: "IVY Academic Network", cat: "Kids & School" },
  { n: "74", title: "Literacy Opens Doors", client: "IVY Academic Network", cat: "Kids & School" },
  { n: "75", title: "Muse Knows", client: "IVY Academic Network", cat: "Kids & School" },
  { n: "27", title: "Back to School", client: "IVY Academic Network", cat: "Kids & School" },
  { n: "71", title: "Back to School — IGCSE", client: "IVY Academic Network", cat: "Kids & School" },

  // ---- Education ----
  { n: "07", title: "International Relations", client: "IVY Academic Network", cat: "Education" },
  { n: "08", title: "BA (Hons) Business & Management", client: "IVY Academic Network", cat: "Education" },
  { n: "11", title: "BA (Hons) Digital Marketing", client: "IVY Academic Network", cat: "Education" },
  { n: "10", title: "School of Computing", client: "IVY × Pearson", cat: "Education" },
  { n: "13", title: "BTEC Sports", client: "IVY × Pearson", cat: "Education" },
  { n: "20", title: "BTEC Information Technology", client: "IVY × Pearson", cat: "Education" },
  { n: "51", title: "BTEC Business", client: "IVY × Pearson", cat: "Education" },
  { n: "54", title: "BTEC — Four Pathways", client: "IVY × Pearson", cat: "Education" },
  { n: "17", title: "LLM — UK Degree in Pakistan", client: "IVY Academic Network", cat: "Education" },
  { n: "60", title: "LLB — Bachelors of Law", client: "IVY Academic Network", cat: "Education" },
  { n: "18", title: "Stressed About Your A-Level Results?", client: "IVY Academic Network", cat: "Education" },
  { n: "24", title: "Got Your Results?", client: "IVY Academic Network", cat: "Education" },
  { n: "14", title: "Why Wait?", client: "IVY Academic Network", cat: "Education" },
  { n: "21", title: "Admission Open — Computer Science", client: "IVY Academic Network", cat: "Education" },
  { n: "33", title: "BSc (Hons) Computer Science", client: "IVY Academic Network", cat: "Education" },
  { n: "35", title: "Computer Science — Career Pathways", client: "IVY Academic Network", cat: "Education" },
  { n: "28", title: "Software Engineering — Career Pathways", client: "IVY Academic Network", cat: "Education" },
  { n: "49", title: "BSc (Hons) Software Engineering", client: "IVY Academic Network", cat: "Education" },
  { n: "23", title: "BSc (Hons) Psychology", client: "IVY Academic Network", cat: "Education" },
  { n: "43", title: "Interior Architecture & Design", client: "IVY Academic Network", cat: "Education" },
  { n: "44", title: "Digital Marketing — Career Pathways", client: "IVY Academic Network", cat: "Education" },
  { n: "26", title: "BA (Hons) Digital Marketing", client: "IVY Academic Network", cat: "Education" },
  { n: "30", title: "Business & Management — Career Pathways", client: "IVY Academic Network", cat: "Education" },
  { n: "31", title: "BSc (Hons) Business & Management", client: "IVY Academic Network", cat: "Education" },
  { n: "40", title: "International Relations — Career Pathways", client: "IVY Academic Network", cat: "Education" },
  { n: "45", title: "Accounting with Finance", client: "IVY Academic Network", cat: "Education" },
  { n: "55", title: "Accounting with Finance", client: "IVY Academic Network", cat: "Education" },
  { n: "57", title: "Accounting with Finance — Career Pathways", client: "IVY Academic Network", cat: "Education" },
  { n: "29", title: "UK Degrees. Global Possibilities.", client: "IVY Academic Network", cat: "Education" },
  { n: "37", title: "Your Future Starts Here", client: "IVY Academic Network", cat: "Education" },
  { n: "64", title: "Why Go Far?", client: "IVY Academic Network", cat: "Education" },
  { n: "67", title: "EMFSS — One Degree, Many Directions", client: "IVY Academic Network", cat: "Education" },
  { n: "50", title: "Why Choose LRN UK Foundation?", client: "IVY Academic Network", cat: "Education" },
  { n: "59", title: "School of Creative Arts & Industries", client: "IVY Academic Network", cat: "Education" },
  { n: "34", title: "BS Psychology — Admissions 2026", client: "iTECH", cat: "Education" },
  { n: "53", title: "BS Computer Science", client: "iTECH", cat: "Education" },
];
