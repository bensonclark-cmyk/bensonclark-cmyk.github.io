/* =====================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT.
   Keep the commas, quotes and brackets exactly as they are.
   ===================================================================== */

window.SITE = {
  name: "Benson Clark B. Dagalea",
  role: "Geodetic Engineering student and GIS mapper, Visayas State University",
  intro: [
    "I make hazard, land cover, coastal and survey maps using remote sensing, GIS and field data. Open to thesis and local government map commissions.",
    "Based in Baybay City, Leyte. Expected graduation July 2027, licensure exam September 2027."
  ],
  experience: [
    { when: "Jun to Jul 2026", what: "On-the-job training, 240 hours, at SMARTGeo Surveying and Geomatics and ISRAEL J.A. Surveying and Services. Topographic, as-built, relocation and static GNSS surveys in Metro Manila, Cavite, Pampanga and Davao City." },
    { when: "Feb 2026", what: "GIS Operator (short-term), VSU Physical Plant Office." },
    { when: "Aug 2025 to now", what: "Freelance GIS and cartography for thesis and local projects." },
    { when: "2023 to 2026", what: "Viscan YouthMappers: Vice President for Internal Affairs, then President, then Committee Head. Organizer of VisGESC 2026." },
    { when: "2022 to 2027", what: "BS Geodetic Engineering, Visayas State University. DOST-SEI JLSS scholar." }
  ],
  credentials: [
    "Career Service Professional eligibility (CSC, 2025)",
    "Open Mapping Guru (Open Mapping Hub Asia Pacific and HOT)",
    "Disaster Risk Reduction Youth Ambassador (Mapakalamidad.ph)",
    "Training: Using UAS and Cloud Computing for Resilient Communities (HELP.NGO and DroneDeploy, 2026)"
  ],
  tools: ["QGIS", "Google Earth Engine", "ESA SNAP", "WebODM", "PostGIS", "Python", "GeoSOS-FLUS", "PLUS", "AutoCAD Civil 3D", "KoboToolbox", "HOT Tasking Manager", "uMap"],
  services: [
    { title: "Thesis and research maps", text: "Study area, land cover, hazard and suitability maps with proper layout, legend, scale and sources." },
    { title: "Remote sensing and analysis", text: "Satellite image processing, change detection, land cover projection and multi-criteria analysis." },
    { title: "Web maps and field data", text: "uMap and Tasking Manager projects, KoboToolbox forms and PostGIS databases." }
  ],
  contactText: "Tell me what the map is for, who will read it and when you need it.",
  email: "bensonclarkdagalea@gmail.com",
  location: "Baybay City, Leyte, Philippines",
  links: [
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/your-name" },
    // { label: "Facebook", url: "https://facebook.com/your-page" },
    // { label: "GitHub", url: "https://github.com/your-name" }
  ]
};

/* ---------- YOUR MAPS (newest year shows first) ----------
   To add a map: copy one block, paste it below, change the text.
   Fields you leave out are simply not shown. */
window.MAPS = [
  {
    title: "Remote Sensing-Based Map of Seagrass Extent and Condition Via Water-Adjusted Vegetation Index (WAVI) in Cuatro Islas, Inopacan Leyte",
    year: 2026,
    category: "Coursework",
    image: "images/remote-sensing-based-map-of-seagrass-extent-and-co.jpg",
    data: "Sentinel-2 Imagery",
    crs: "EPSG:32651",
    tools: "QGIS, GEE"
  },
  {
    title: "Seismic Hazard Susceptibility Map of Ormoc City, Leyte (2025)",
    year: 2025,
    category: "Project",
    image: "images/seismic-hazard-susceptibility-map-of-ormoc-city-le.jpg",
    data: "PHIVOLCS, USGS, OSM, NOAA, GADM",
    crs: "EPSG:32651",
    tools: "QGIS"
  },
   ,
  {
    title: "Land Parcels Map of Poblacion Zone 1, Javier",
    year: 2026,
    category: "Coursework",
    data: "LGU Javier",
    tools: "QGIS, Netlify",
    link: "https://javier-parcels.netlify.app/",
    embed: "https://javier-parcels.netlify.app/"
  },
  // , { title: "...", year: 2025, category: "...", image: "images/...jpg", description: "...", data: "...", crs: "EPSG:...", tools: "...", link: "https://..." }
];

/* ---------- 30 DAY MAP CHALLENGE ----------
   Add one block to "days" for each finished day. */
window.CHALLENGE = {
  year: 2026,
  title: "30 Day Map Challenge",
  intro: "One map a day for November, built from open data.",
  days: [
    {
  day: 1,
  title: "Seismic Pulse of the Philippines: Distribution of M4.5+ Earthquakes (2020-2026)",
  image: "images/challenge/day01.jpg",
  description: "Earthquakes of magnitude 4.5 and above from 2020 to 2026.",
  data: "USGS Earthquakes Hazards Program, NAMRIA",
  crs: "EPSG:32651",
  tools: "QGIS"
}
  ]
};
