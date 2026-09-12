/* =========================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
========================================================= */

const portfolioData = {
  name: "Akhilesh Kumar",
  profession: "Geospatial Researcher & Educator",

  social: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    scholar: "https://scholar.google.com/",
    orcid: "https://orcid.org/"
  },

  contact: {
    email: "your-email@example.com",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    scholar: "https://scholar.google.com/"
  },

  projects: [
    {
      title: "Multi-Hazard Vulnerability Assessment of Kameng River Basin",
      category: "Disaster Geography",
      description: "A geospatial and machine-learning framework for assessing multi-hazard vulnerability across the Kameng River Basin.",
      image: "assets/projects/kameng.jpg",
      tags: ["GIS", "Remote Sensing", "Machine Learning", "Hazard Mapping"],
      link: "#"
    },
    {
      title: "Waterbody Cooling Effect in Guwahati",
      category: "Urban Climate",
      description: "Assessment of the cooling influence of major water bodies on land surface temperature and surrounding urban environments.",
      image: "assets/projects/guwahati.jpg",
      tags: ["GEE", "LST", "NDWI", "UHI"],
      link: "#"
    },
    {
      title: "Land Records Management System",
      category: "Land Administration",
      description: "Integration of traditional land records with GIS and ArcGIS Pro Parcel Fabric tools for modern land-record management.",
      image: "assets/projects/land-records.jpg",
      tags: ["ArcGIS Pro", "Parcel Fabric", "GPS", "Land Records"],
      link: "#"
    },
    {
      title: "Land Surface Temperature and Waterbody Cooling in Pasighat",
      category: "Urban Climate",
      description: "A satellite-based framework for examining land surface temperature and the influence of water bodies on surrounding vegetation and urban environments.",
      image: "assets/projects/pasighat.jpg",
      tags: ["Google Earth Engine", "LST", "NDVI", "Water Bodies"],
      link: "#"
    }
  ],

  maps: [
    { title: "Kameng River Basin — Study Area", image: "assets/maps/kameng-study-area.jpg", caption: "Study-area map placeholder." },
    { title: "Guwahati — Land Surface Temperature", image: "assets/maps/guwahati-lst.jpg", caption: "LST map placeholder." },
    { title: "Kheri Roj — Land Records", image: "assets/maps/kheri-roj-parcels.jpg", caption: "Parcel mapping placeholder." },
    { title: "Pasighat — Urban Environment", image: "assets/maps/pasighat-lst.jpg", caption: "Urban LST/vegetation map placeholder." }
  ],

  publications: [
    {
      type: "BOOK CHAPTER",
      title: "Geospatial Applications in Geography",
      description: "Research contribution in the field of geospatial technologies and geographical analysis.",
      link: "#"
    },
    {
      type: "RESEARCH PAPER",
      title: "Research work currently under publication",
      description: "Add the final title, journal, DOI and publication year here after publication.",
      link: "#"
    }
  ]
};