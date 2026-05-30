// All locations sourced from the NPS January 2026 press release on DC beautification
// plus the Lincoln Memorial Reflecting Pool resurfacing project (April 2026)
// https://www.nps.gov/orgs/1207/dc-beautifcation-january-2026.htm

const locations = [
  // --- Full Rehabilitation (previously inoperable, fully restored) ---
  {
    name: "Meridian Hill Park Cascading Fountain",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    location: "16th St & W St NW, Columbia Heights",
    restorationNote: "Offline for 7 years. The 13-basin cascading fountain — one of the longest in North America — was restored in a $10.68M project and reopened to the public in May 2026.",
    lat: 38.9212,
    lng: -77.0356
  },
  {
    name: "Lafayette Square Fountains",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    location: "Pennsylvania Ave NW & 16th St NW, opposite the White House",
    restorationNote: "Dry for decades. A $17.4M project replaced the mechanical and electrical systems on both fountains. Water returned in April 2026 for the first time in many years.",
    lat: 38.8994,
    lng: -77.0366
  },
  {
    name: "Columbus Plaza Fountain",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    location: "Massachusetts Ave NE & 1st St NE, in front of Union Station",
    restorationNote: "The fountain at Columbus Plaza in front of Union Station was inoperable and is being fully rehabilitated as part of the NPS DC beautification initiative.",
    lat: 38.8975,
    lng: -77.0064
  },
  {
    name: "Freedom Plaza Fountain",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    location: "Pennsylvania Ave NW & 13th St NW",
    restorationNote: "The fountain at this Pennsylvania Avenue plaza — featuring L'Enfant's original city plan inlaid in granite — was inoperable and is being fully restored.",
    lat: 38.8968,
    lng: -77.0308
  },
  {
    name: "John Marshall Park Fountain",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    location: "Pennsylvania Ave NW & 4th St NW, Judiciary Square",
    restorationNote: "Fountain at this Pennsylvania Avenue park honoring Chief Justice John Marshall was non-functional and is being fully rehabilitated.",
    lat: 38.8949,
    lng: -77.0217
  },
  {
    name: "John Paul Jones Memorial",
    type: "memorial",
    restorationType: "Full Rehabilitation",
    location: "Independence Ave SW & 17th St SW, National Mall",
    restorationNote: "The fountain and memorial honoring the father of the American Navy was inoperable and is undergoing full rehabilitation as part of the NPS beautification program.",
    lat: 38.8885,
    lng: -77.0392
  },
  {
    name: "Philip Sheridan Memorial",
    type: "memorial",
    restorationType: "Full Rehabilitation",
    location: "Sheridan Circle, Massachusetts Ave NW & 23rd St NW",
    restorationNote: "The equestrian statue of Civil War General Philip Sheridan in Sheridan Circle was non-functional and is being fully restored.",
    lat: 38.9123,
    lng: -77.0504
  },
  {
    name: "Rawlins Park Fountain",
    type: "fountain",
    restorationType: "Full Rehabilitation",
    location: "E St NW & 18th St NW, Foggy Bottom",
    restorationNote: "The fountain at Rawlins Park near the State Department was inoperable and is being fully rehabilitated.",
    lat: 38.8957,
    lng: -77.0433
  },
  {
    name: "Simón Bolívar Memorial",
    type: "memorial",
    restorationType: "Full Rehabilitation",
    location: "Virginia Ave NW & 18th St NW, near Constitution Gardens",
    restorationNote: "The fountain and memorial honoring South American liberator Simón Bolívar near Constitution Ave was inoperable and is being fully restored.",
    lat: 38.8931,
    lng: -77.0420
  },

  // --- System Upgrades (operational, receiving maintenance & upgrades) ---
  {
    name: "Dupont Circle Fountain",
    type: "fountain",
    restorationType: "Maintenance & Upgrades",
    location: "Dupont Circle, Connecticut Ave NW",
    restorationNote: "The 1921 marble fountain featuring allegorical figures of the Sea, Stars, and Wind is operational and receiving system upgrades and maintenance.",
    lat: 38.9096,
    lng: -77.0434
  },
  {
    name: "Franklin Delano Roosevelt Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    location: "400 West Basin Dr SW, West Potomac Park",
    restorationNote: "FDR Memorial's extensive water features and fountains along the Tidal Basin are operational and receiving maintenance upgrades.",
    lat: 38.8830,
    lng: -77.0447
  },
  {
    name: "George Mason Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    location: "East Basin Dr SW, Tidal Basin",
    restorationNote: "The fountain at this Tidal Basin memorial honoring the author of the Virginia Declaration of Rights is receiving system upgrades.",
    lat: 38.8799,
    lng: -77.0396
  },
  {
    name: "Japanese American Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    location: "Louisiana Ave NW & D St NW, Capitol Hill",
    restorationNote: "The fountain at the Japanese American Memorial to Patriotism During World War II near the Capitol is operational and receiving upgrades.",
    lat: 38.8945,
    lng: -77.0105
  },
  {
    name: "Korean War Veterans Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    location: "West Potomac Park, southwest of the Lincoln Memorial",
    restorationNote: "The Pool of Remembrance and surrounding features are operational and receiving maintenance and system upgrades.",
    lat: 38.8878,
    lng: -77.0478
  },
  {
    name: "National Law Enforcement Officers Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    location: "400 block of E St NW, Judiciary Square",
    restorationNote: "The fountain at this memorial honoring fallen law enforcement officers is receiving system upgrades.",
    lat: 38.8968,
    lng: -77.0175
  },
  {
    name: "Taras Shevchenko Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    location: "22nd St NW & P St NW, Dupont Circle",
    restorationNote: "The fountain at this memorial honoring Ukrainian poet and national hero Taras Shevchenko is receiving maintenance and system upgrades.",
    lat: 38.9101,
    lng: -77.0490
  },
  {
    name: "United States Navy Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    location: "Pennsylvania Ave NW & 8th St NW, Penn Quarter",
    restorationNote: "The granite plaza with the Lone Sailor statue and twin fountains on Pennsylvania Avenue is receiving maintenance and system upgrades.",
    lat: 38.8939,
    lng: -77.0230
  },
  {
    name: "World War II Memorial",
    type: "memorial",
    restorationType: "Maintenance & Upgrades",
    location: "1750 Independence Ave SW, National Mall",
    restorationNote: "The 17 fountains and Rainbow Pool honoring the 16 million who served in WWII are operational and receiving maintenance and system upgrades.",
    lat: 38.8893,
    lng: -77.0402
  },

  // --- Major Separate Project ---
  {
    name: "Lincoln Memorial Reflecting Pool",
    type: "fountain",
    restorationType: "Major Resurfacing",
    location: "National Mall, between the Lincoln Memorial and Washington Monument",
    restorationNote: "The 2,029-foot pool is being resurfaced for America's 250th anniversary, replacing the gray bottom with a deep blue finish. Work began April 2026 under a $13.1M contract.",
    lat: 38.8893,
    lng: -77.0450
  }
];
