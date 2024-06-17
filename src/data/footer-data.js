import logo from "../assets/images/logo-secondary.png";

const footerData = {
  logo,
  logoAlt: "Cyber Works",
  tagline: "Making IT work for you",
  navigation: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Support",
      url: "/support",
    },
  ],
  services: [
    {
      name: "Managed IT Services",
      url: "/services/it-services",
    },
    {
      name: "Security Services",
      url: "/services/security",
    },
    {
      name: "IT Consulting",
      url: "/services/it-consulting",
    },
  ],
  contact: {
    location: ["5440 S Lakeshore Drive, Suite 102", "Tempe, AZ 85283029"],
    email: "info@cybarworks.com",
    call: "(480) 948-8029",
  },
  socialLinks: {
    facebook: "",
    x: "",
    googlePlus: "",
    instagram: "",
  },
  copyright: "Copyright © 2024 — All Rights Reserved @CybarWorks, INC",
};

export default footerData;
