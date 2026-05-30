// All locations sourced from the NPS January 2026 press release on DC beautification
// plus the Lincoln Memorial Reflecting Pool resurfacing project (April 2026)
// https://www.nps.gov/orgs/1207/dc-beautifcation-january-2026.htm

const locations = [
  // --- Full Rehabilitation (previously inoperable, fully restored) ---
  {
    name: "Meridian Hill Park Cascading Fountain",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    restorationNote: "Offline for 7 years. The 13-basin cascading fountain — one of the longest in North America — was restored in a $10.68M project and reopened to the public in May 2026.",
    lat: 38.9208,
    lng: -77.0361
  },
  {
    name: "Lafayette Square Fountains",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    restorationNote: "Dry for decades. A $17.4M project replaced the mechanical and electrical systems on both fountains. Water returned in April 2026 for the first time in many years.",
    lat: 38.8977,
    lng: -77.0366
  },
  {
    name: "Columbus Plaza Fountain",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    restorationNote: "The fountain at Columbus Plaza in front of Union Station was inoperable and is being fully rehabilitated as part of the NPS DC beautification initiative.",
    lat: 38.8975,
    lng: -77.0064
  },
  {
    name: "Freedom Plaza Fountain",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    restorationNote: "The fountain at this Pennsylvania Avenue plaza — featuring L'Enfant's original city plan inlaid in granite — was inoperable and is being fully restored.",
    lat: 38.8955,
    lng: -77.0279
  },
  {
    name: "John Marshall Park Fountain",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    restorationNote: "Fountain at this Pennsylvania Avenue park honoring Chief Justice John Marshall was non-functional and is being fully rehabilitated.",
    lat: 38.8949,
    lng: -77.0217
  },
  {
    name: "John Paul Jones Memorial",
    type: "memorial",
    restorationType: "Full Rehabilitation",
    restorationNote: "The fountain and memorial honoring the father of the American Navy was inoperable and is undergoing full rehabilitation as part of the NPS beautification program.",
    lat: 38.8882,
    lng: -77.0467
  },
  {
    name: "Philip Sheridan Memorial",
    type: "memorial",
    restorationType: "Full Rehabilitation",
    restorationNote: "The equestrian statue of Civil War General Philip Sheridan in Sheridan Circle was non-functional and is being fully restored.",
    lat: 38.9127,
    lng: -77.0490
  },
  {
    name: "Rawlins Park Fountain",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    restorationNote: "The fountain at Rawlins Park near the State Department was inoperable and is being fully rehabilitated.",
    lat: 38.9003,
    lng: -77.0433
  },
  {
    name: "Simón Bolívar Memorial",
    type: "memorial",
    restorationType: "Full Rehabilitation",
    restorationNote: "The fountain and memorial honoring South American liberator Simón Bolívar near Constitution Ave was inoperable and is being fully restored.",
    lat: 38.8918,
    lng: -77.0460
  },

  // --- System Upgrades (operational, receiving maintenance & upgrades) ---
  {
    name: "Dupont Circle Fountain",
    type: "fountain",
    restorationType: "Maintenance & Upgrades",
    restorationNote: "The 1921 marble fountain featuring allegorical figures of the Sea, Stars, and Wind is operational and receiving system upgrades and maintenance.",
    lat: 38.9096,
    lng: -77.0434
  },
  {
    name: "Franklin Delano Roosevelt Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    restorationNote: "FDR Memorial's extensive water features and fountains along the Tidal Basin are operational and receiving maintenance upgrades.",
    lat: 38.8830,
    lng: -77.0447
  },
  {
    name: "George Mason Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    restorationNote: "The fountain at this Tidal Basin memorial honoring the author of the Virginia Declaration of Rights is receiving system upgrades.",
    lat: 38.8804,
    lng: -77.0382
  },
  {
    name: "Japanese American Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    restorationNote: "The fountain at the Japanese American Memorial to Patriotism During World War II near the Capitol is operational and receiving upgrades.",
    lat: 38.8971,
    lng: -77.0131
  },
  {
    name: "Korean War Veterans Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    restorationNote: "The Pool of Remembrance and surrounding features are operational and receiving maintenance and system upgrades.",
    lat: 38.8865,
    lng: -77.0475
  },
  {
    name: "National Law Enforcement Officers Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    restorationNote: "The fountain at this memorial honoring fallen law enforcement officers is receiving system upgrades.",
    lat: 38.8978,
    lng: -77.0190
  },
  {
    name: "Taras Shevchenko Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    restorationNote: "The fountain at this memorial honoring Ukrainian poet and national hero Taras Shevchenko is receiving maintenance and system upgrades.",
    lat: 38.9099,
    lng: -77.0476
  },
  {
    name: "United States Navy Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    restorationNote: "The granite plaza with the Lone Sailor statue and twin fountains on Pennsylvania Avenue is receiving maintenance and system upgrades.",
    lat: 38.8954,
    lng: -77.0274
  },
  {
    name: "World War II Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    restorationNote: "The 17 fountains and Rainbow Pool honoring the 16 million who served in WWII are operational and receiving maintenance and system upgrades.",
    lat: 38.8893,
    lng: -77.0402
  },

  // --- Major Separate Project ---
  {
    name: "Lincoln Memorial Reflecting Pool",
    type: "fountain",
    restorationType: "Major Resurfacing",
    restorationNote: "The 2,029-foot pool is being resurfaced for America's 250th anniversary, replacing the gray bottom with a deep blue finish. Work began April 2026 under a $13.1M contract.",
    lat: 38.8893,
    lng: -77.0457
  }
];
