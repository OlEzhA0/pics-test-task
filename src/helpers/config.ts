export const HEADER_NAV_CONFIG: HeaderNavElement[] = [
  {
    id: "howItWorking",
    name: "How it works",
    link: "/home",
    list: [
      "How it works 1",
      "How it works 2",
      "How it works 3",
      "How it works 4",
    ],
  },
  {
    id: "pricing",
    name: "Pricing",
    link: "/pricing",
  },
  {
    id: "useCases",
    name: "Use Cases",
    link: "/cases",
    list: ["Use Cases 1", "Use Cases 2", "Use Cases 3", "Use Cases 4"],
  },
  {
    id: "integrations",
    name: "Integrations",
    link: "/integrations",
    list: [
      "Integrations 1",
      "Integrations 2",
      "Integrations 3",
      "Integrations 4",
    ],
  },
  {
    id: "resources",
    name: "Resources",
    link: "/resources",
    list: ["Resources 1", "Resources 2", "Resources 3", "Resources 4"],
  },
  {
    id: "login",
    name: "Log in",
    link: "/login",
  },
];

export const FOOTER_MAIN_LINKS: FooterMainLinks = {
  Company: [
    "About us",
    "Status page",
    "Blog",
    "Help Center",
    "G Suite Maximizer",
    "Smart File Organizer",
    "DAM Quick Start Guide",
    "Metadata Playbook",
    "Book a Demo",
    "Contact",
  ],
  Features: [
    "Unrestricted Digital Library",
    "Collections",
    "Version Control",
    "Assets Sharing",
    "View Sketch online",
    "File comparison",
    "Branding",
    "Analytics & reporting",
  ],
  Integrations: [
    "Integration with Google Drive",
    "Integration with Slack",
    "Integration with Zapier",
    "Add-ons for G Suite",
    "Integration with Adobe Photoshop",
    "Integration with Adobe Illustrator",
    "Integration with Adobe Premiere Pro",
    "Integration with Adobe After Effects",
    "Integration with Zoho CRM",
    "Integration with Google Docs",
    "Integration with Google Sheets",
    "Integration with Google Forms",
    "Integration with Google Slides",
    "Integration with Easy Projects",
  ],
};

export const FOOTER_MAIN_ICONS: FooterMainIcons[] = [
  {
    href: "https://www.facebook.com/toptechphoto",
    title: "Facebook",
    "aria-label": "Facebook",
    rel: "noopener",
    target: "_blank",
    className: "Footer__MainIcon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    classNameSvg: "Footer__MainIconSvg",
    d:
      "M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z",
  },

  {
    href: "https://twitter.com/TopTechPhoto",
    title: "Twitter",
    "aria-label": "Twitter",
    rel: "noopener",
    target: "_blank",
    className: "Footer__MainIcon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    classNameSvg: "Footer__MainIconSvg",
    d:
      "M32 7.075a12.941 12.941 0 0 1-3.769 1.031 6.601 6.601 0 0 0 2.887-3.631 13.21 13.21 0 0 1-4.169 1.594A6.565 6.565 0 0 0 22.155 4a6.563 6.563 0 0 0-6.563 6.563c0 .512.056 1.012.169 1.494A18.635 18.635 0 0 1 2.23 5.195a6.56 6.56 0 0 0-.887 3.3 6.557 6.557 0 0 0 2.919 5.463 6.565 6.565 0 0 1-2.975-.819v.081a6.565 6.565 0 0 0 5.269 6.437 6.574 6.574 0 0 1-2.968.112 6.588 6.588 0 0 0 6.131 4.563 13.17 13.17 0 0 1-9.725 2.719 18.568 18.568 0 0 0 10.069 2.95c12.075 0 18.681-10.006 18.681-18.681 0-.287-.006-.569-.019-.85A13.216 13.216 0 0 0 32 7.076z",
  },
  {
    href: "https://www.linkedin.com/company/pics-io/",
    title: "LinkedIn",
    "aria-label": "LinkedIn",
    rel: "noopener",
    target: "_blank",
    className: "Footer__MainIcon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    classNameSvg: "Footer__MainIconSvg",
    d:
      "M12 12h5.535v2.837h.079c.77-1.381 2.655-2.837 5.464-2.837C28.92 12 30 15.637 30 20.367V30h-5.769v-8.54c0-2.037-.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509V30H12V12zM2 12h6v18H2V12zM8 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  },
];

export const FOOTER_GENERAL_INFO: FooterGeneralLink = {
  Solution: {
    "By Use Cases": [
      "Digital Asset Management",
      "Creative Project Management",
      "Brand Asset Management",
    ],
    "By Industry": [
      "Business",
      "Designers",
      "Software Developers",
      "Schools, colleges, universities",
      "Non-profits",
      "Marketing teams",
    ],
  },
  "Other products": {
    "Edit.pics.io": [
      "Online photo editor",
      "Description & features",
      "About Edit",
    ],
    "Raw.Pics.io": [
      "Converts RAW to JPEG",
      "Supported cameras and formats",
      "Converts CR2 images",
      "Converts NEF images",
      "How to convert",
      "Convert PDF to JPG",
      "Convert JPG to PDF",
    ],
  },
};

export const PRICING_FAQ: PricingFaq = {
  "Pricing FAQ": [
    "How does the 14-day free trial work?",
    "What if we need a little more time than 14 days to test Pics.io?",
    "Do you offer refunds?",
    "Which methods of payment do you accept?",
    "What if I have, say, 15 people in my team? Micro plan stops at 10 teammates… Do I have to buy Small plan?",
    "How can I get a discount?",
    "Can I test Pics.io with my teammates during the trial period?",
    "What do credits mean in Pics.io? How can I use them?",
    "Can I change my billing plan?",
    "Who are teammates in Pics.io? Are these the people we share a website with?",
    "I'm from a non-profit organization. May we get a discount?",
    "How can I unsubscribe from Pics.io?",
    "Where can I learn more detailed information about different billing plans in Pics.io?",
    "What is the difference between Pay As You Go and Free plans?",
    "What if our company wants a customized plan?",
  ],
};

export const TABLE_INFO: TableInfo = {
  Free: {
    price: {
      mo: 0,
      yr: 0,
    },
    cardColor: "0b74ad",
    cardText: "Individual users, freelancers",
    info: {
      "Basic DAM functionality": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        Uploading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Searching": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Downloading": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Version Control": {
          dataTitle: "Some text",
          main: "markDown green",
        },
      },
      "Your team and library": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Maximum size of the library, TB": {
          dataTitle: "Some text",
          main: "infinity",
        },
        "Maximum number of assets in the library": {
          dataTitle: "Some text",
          main: "text",
          text: "50K",
        },
        "Number of teammates in the team included in the plan": {
          dataTitle: "Some text",
          main: "x",
        },
        "Branded look and feel": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Sharing and collaboration": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        Commenting: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Number of public Websites": {
          dataTitle: "Some text",
          main: "x",
        },
        "Single asset sharing": {
          dataTitle: "Some text",
          main: "x",
        },
        "Number of inboxes": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Storage Syncronization": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        Manual: {
          dataTitle: "Some text",
          main: "text",
          text: "Accessible every 60 minutes",
        },
        Authomatic: {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Analyst & reporting": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Activity Logs": {
          dataTitle: "Some text",
          main: "text",
          text: "1 day",
        },
        Storage: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Library: {
          dataTitle: "Some text",
          main: "x",
        },
        Websites: {
          dataTitle: "Some text",
          main: "x",
        },
        Teammate: {
          dataTitle: "Some text",
          main: "x",
        },
        Team: {
          dataTitle: "Some text",
          main: "x",
        },
        Asset: {
          dataTitle: "Some text",
          main: "x",
        },
        "Visual comparison tool": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Metadata management": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Metadata fields management": {
          dataTitle: "Some text",
          main: "x",
        },
        "EXIF/IPTC/XMP metadata reading & writing ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Custom fields schema": {
          dataTitle: "Some text",
          main: "x",
        },
        "Automatic AI keywording for images": {
          dataTitle: "Some text",
          main: "text",
          text: "$20/1000 images",
        },
      },
      Support: {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Online knowledge base": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Email: {
          dataTitle: "Some text",
          main: "text",
          text: "72 hours turnaround",
        },
        "Online chat": {
          dataTitle: "Some text",
          main: "x",
        },
        "Customer success manager": {
          dataTitle: "Some text",
          main: "x",
        },
        "Personal support engineer": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Integration with 3d party tools and services": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Google Drive": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Amazon S3": {
          dataTitle: "Some text",
          main: "x",
        },
        Slack: {
          dataTitle: "Some text",
          main: "x",
        },
        Zapier: {
          dataTitle: "Some text",
          main: "x",
        },
        Webhooks: {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Docs": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Spreadsheets ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Forms ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Slides ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Photoshop": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Illustrator": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Premiere Pro": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe After Effects": {
          dataTitle: "Some text",
          main: "x",
        },
        "Zoho CRM": {
          dataTitle: "Some text",
          main: "x",
        },
        Wordpress: {
          dataTitle: "Some text",
          main: "x",
        },
        Shopify: {
          dataTitle: "Some text",
          main: "x",
        },
      },
    },
  },
  "Pay as you go": {
    price: {
      mo: 18,
    },
    cardColor: "00529c",
    cardText: "Individual users, freelancers",
    info: {
      "Basic DAM functionality": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        Uploading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Searching: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Downloading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Version Control": {
          dataTitle: "Some text",
          main: "markDown green",
        },
      },
      "Your team and library": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Maximum size of the library, TB": {
          dataTitle: "Some text",
          main: "infinity",
        },
        "Maximum number of assets in the library": {
          dataTitle: "Some text",
          main: "text",
          text: "50K",
        },
        "Number of teammates in the team included in the plan": {
          dataTitle: "Some text",
          main: "x",
        },
        "Branded look and feel": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Sharing and collaboration": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        Commenting: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Number of public Websites": {
          dataTitle: "Some text",
          main: "x",
        },
        "Single asset sharing": {
          dataTitle: "Some text",
          main: "x",
        },
        "Number of inboxes": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Storage Syncronization": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        Manual: {
          dataTitle: "Some text",
          main: "text",
          text: "Accessible every 60 minutes",
        },
        Authomatic: {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Analyst & reporting": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Activity Logs": {
          dataTitle: "Some text",
          main: "text",
          text: "1 day",
        },
        Storage: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Library: {
          dataTitle: "Some text",
          main: "x",
        },
        Websites: {
          dataTitle: "Some text",
          main: "x",
        },
        Teammate: {
          dataTitle: "Some text",
          main: "x",
        },
        Team: {
          dataTitle: "Some text",
          main: "x",
        },
        Asset: {
          dataTitle: "Some text",
          main: "x",
        },
        "Visual comparison tool": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Metadata management": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Metadata fields management": {
          dataTitle: "Some text",
          main: "x",
        },
        "EXIF/IPTC/XMP metadata reading & writing ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Custom fields schema": {
          dataTitle: "Some text",
          main: "x",
        },
        "Automatic AI keywording for images": {
          dataTitle: "Some text",
          main: "text",
          text: "$20/1000 images",
        },
      },
      Support: {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Online knowledge base": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Email: {
          dataTitle: "Some text",
          main: "text",
          text: "72 hours turnaround",
        },
        "Online chat": {
          dataTitle: "Some text",
          main: "x",
        },
        "Customer success manager": {
          dataTitle: "Some text",
          main: "x",
        },
        "Personal support engineer": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Integration with 3d party tools and services": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Google Drive": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Amazon S3": {
          dataTitle: "Some text",
          main: "x",
        },
        Slack: {
          dataTitle: "Some text",
          main: "x",
        },
        Zapier: {
          dataTitle: "Some text",
          main: "x",
        },
        Webhooks: {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Docs": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Spreadsheets ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Forms ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Slides ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Photoshop": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Illustrator": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Premiere Pro": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe After Effects": {
          dataTitle: "Some text",
          main: "x",
        },
        "Zoho CRM": {
          dataTitle: "Some text",
          main: "x",
        },
        Wordpress: {
          dataTitle: "Some text",
          main: "x",
        },
        Shopify: {
          dataTitle: "Some text",
          main: "x",
        },
      },
    },
  },
  Micro: {
    price: {
      mo: 120,
      yr: 1200,
    },
    cardColor: "91469b",
    cardText: "Small team, new business",
    info: {
      "Basic DAM functionality": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        Uploading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Searching: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Downloading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Version Control": {
          dataTitle: "Some text",
          main: "markDown green",
        },
      },
      "Your team and library": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Maximum size of the library, TB": {
          dataTitle: "Some text",
          main: "infinity",
        },
        "Maximum number of assets in the library": {
          dataTitle: "Some text",
          main: "text",
          text: "50K",
        },
        "Number of teammates in the team included in the plan": {
          dataTitle: "Some text",
          main: "x",
        },
        "Branded look and feel": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Sharing and collaboration": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        Commenting: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Number of public Websites": {
          dataTitle: "Some text",
          main: "x",
        },
        "Single asset sharing": {
          dataTitle: "Some text",
          main: "x",
        },
        "Number of inboxes": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Storage Syncronization": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        Manual: {
          dataTitle: "Some text",
          main: "text",
          text: "Accessible every 60 minutes",
        },
        Authomatic: {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Analyst & reporting": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Activity Logs": {
          dataTitle: "Some text",
          main: "text",
          text: "1 day",
        },
        Storage: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Library: {
          dataTitle: "Some text",
          main: "x",
        },
        Websites: {
          dataTitle: "Some text",
          main: "x",
        },
        Teammate: {
          dataTitle: "Some text",
          main: "x",
        },
        Team: {
          dataTitle: "Some text",
          main: "x",
        },
        Asset: {
          dataTitle: "Some text",
          main: "x",
        },
        "Visual comparison tool": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Metadata management": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Metadata fields management": {
          dataTitle: "Some text",
          main: "x",
        },
        "EXIF/IPTC/XMP metadata reading & writing ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Custom fields schema": {
          dataTitle: "Some text",
          main: "x",
        },
        "Automatic AI keywording for images": {
          dataTitle: "Some text",
          main: "text",
          text: "$20/1000 images",
        },
      },
      Support: {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Online knowledge base": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Email: {
          dataTitle: "Some text",
          main: "text",
          text: "72 hours turnaround",
        },
        "Online chat": {
          dataTitle: "Some text",
          main: "x",
        },
        "Customer success manager": {
          dataTitle: "Some text",
          main: "x",
        },
        "Personal support engineer": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Integration with 3d party tools and services": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Google Drive": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Amazon S3": {
          dataTitle: "Some text",
          main: "x",
        },
        Slack: {
          dataTitle: "Some text",
          main: "x",
        },
        Zapier: {
          dataTitle: "Some text",
          main: "x",
        },
        Webhooks: {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Docs": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Spreadsheets ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Forms ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Slides ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Photoshop": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Illustrator": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Premiere Pro": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe After Effects": {
          dataTitle: "Some text",
          main: "x",
        },
        "Zoho CRM": {
          dataTitle: "Some text",
          main: "x",
        },
        Wordpress: {
          dataTitle: "Some text",
          main: "x",
        },
        Shopify: {
          dataTitle: "Some text",
          main: "x",
        },
      },
    },
  },
  Small: {
    price: {
      mo: 480,
      yr: 4800,
    },
    cardColor: "e5065b",
    cardText: "Online retailers, established agencies",
    info: {
      "Basic DAM functionality": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        Uploading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Searching: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Downloading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Version Control": {
          dataTitle: "Some text",
          main: "markDown green",
        },
      },
      "Your team and library": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Maximum size of the library, TB": {
          dataTitle: "Some text",
          main: "infinity",
        },
        "Maximum number of assets in the library": {
          dataTitle: "Some text",
          main: "text",
          text: "50K",
        },
        "Number of teammates in the team included in the plan": {
          dataTitle: "Some text",
          main: "x",
        },
        "Branded look and feel": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Sharing and collaboration": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        Commenting: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Number of public Websites": {
          dataTitle: "Some text",
          main: "x",
        },
        "Single asset sharing": {
          dataTitle: "Some text",
          main: "x",
        },
        "Number of inboxes": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Storage Syncronization": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        Manual: {
          dataTitle: "Some text",
          main: "text",
          text: "Accessible every 60 minutes",
        },
        Authomatic: {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Analyst & reporting": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Activity Logs": {
          dataTitle: "Some text",
          main: "text",
          text: "1 day",
        },
        Storage: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Library: {
          dataTitle: "Some text",
          main: "x",
        },
        Websites: {
          dataTitle: "Some text",
          main: "x",
        },
        Teammate: {
          dataTitle: "Some text",
          main: "x",
        },
        Team: {
          dataTitle: "Some text",
          main: "x",
        },
        Asset: {
          dataTitle: "Some text",
          main: "x",
        },
        "Visual comparison tool": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Metadata management": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Metadata fields management": {
          dataTitle: "Some text",
          main: "x",
        },
        "EXIF/IPTC/XMP metadata reading & writing ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Custom fields schema": {
          dataTitle: "Some text",
          main: "x",
        },
        "Automatic AI keywording for images": {
          dataTitle: "Some text",
          main: "text",
          text: "$20/1000 images",
        },
      },
      Support: {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Online knowledge base": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Email: {
          dataTitle: "Some text",
          main: "text",
          text: "72 hours turnaround",
        },
        "Online chat": {
          dataTitle: "Some text",
          main: "x",
        },
        "Customer success manager": {
          dataTitle: "Some text",
          main: "x",
        },
        "Personal support engineer": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Integration with 3d party tools and services": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Google Drive": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Amazon S3": {
          dataTitle: "Some text",
          main: "x",
        },
        Slack: {
          dataTitle: "Some text",
          main: "x",
        },
        Zapier: {
          dataTitle: "Some text",
          main: "x",
        },
        Webhooks: {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Docs": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Spreadsheets ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Forms ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Slides ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Photoshop": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Illustrator": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Premiere Pro": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe After Effects": {
          dataTitle: "Some text",
          main: "x",
        },
        "Zoho CRM": {
          dataTitle: "Some text",
          main: "x",
        },
        Wordpress: {
          dataTitle: "Some text",
          main: "x",
        },
        Shopify: {
          dataTitle: "Some text",
          main: "x",
        },
      },
    },
  },
  Medium: {
    price: {
      mo: 840,
      yr: 8400,
    },
    cardColor: "00853e",
    cardText: "Medium team, established compan",
    info: {
      "Basic DAM functionality": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        Uploading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Searching: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Downloading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Version Control": {
          dataTitle: "Some text",
          main: "markDown green",
        },
      },
      "Your team and library": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Maximum size of the library, TB": {
          dataTitle: "Some text",
          main: "infinity",
        },
        "Maximum number of assets in the library": {
          dataTitle: "Some text",
          main: "text",
          text: "50K",
        },
        "Number of teammates in the team included in the plan": {
          dataTitle: "Some text",
          main: "x",
        },
        "Branded look and feel": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Sharing and collaboration": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        Commenting: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Number of public Websites": {
          dataTitle: "Some text",
          main: "x",
        },
        "Single asset sharing": {
          dataTitle: "Some text",
          main: "x",
        },
        "Number of inboxes": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Storage Syncronization": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        Manual: {
          dataTitle: "Some text",
          main: "text",
          text: "Accessible every 60 minutes",
        },
        Authomatic: {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Analyst & reporting": {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Activity Logs": {
          dataTitle: "Some text",
          main: "text",
          text: "1 day",
        },
        Storage: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Library: {
          dataTitle: "Some text",
          main: "x",
        },
        Websites: {
          dataTitle: "Some text",
          main: "x",
        },
        Teammate: {
          dataTitle: "Some text",
          main: "x",
        },
        Team: {
          dataTitle: "Some text",
          main: "x",
        },
        Asset: {
          dataTitle: "Some text",
          main: "x",
        },
        "Visual comparison tool": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Metadata management": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Metadata fields management": {
          dataTitle: "Some text",
          main: "x",
        },
        "EXIF/IPTC/XMP metadata reading & writing ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Custom fields schema": {
          dataTitle: "Some text",
          main: "x",
        },
        "Automatic AI keywording for images": {
          dataTitle: "Some text",
          main: "text",
          text: "$20/1000 images",
        },
      },
      Support: {
        value: {
          main: "markDown yellow",
          dataTitle: '',
        },
        "Online knowledge base": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Email: {
          dataTitle: "Some text",
          main: "text",
          text: "72 hours turnaround",
        },
        "Online chat": {
          dataTitle: "Some text",
          main: "x",
        },
        "Customer success manager": {
          dataTitle: "Some text",
          main: "x",
        },
        "Personal support engineer": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Integration with 3d party tools and services": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Google Drive": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Amazon S3": {
          dataTitle: "Some text",
          main: "x",
        },
        Slack: {
          dataTitle: "Some text",
          main: "x",
        },
        Zapier: {
          dataTitle: "Some text",
          main: "x",
        },
        Webhooks: {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Docs": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Spreadsheets ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Forms ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Slides ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Photoshop": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Illustrator": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Premiere Pro": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe After Effects": {
          dataTitle: "Some text",
          main: "x",
        },
        "Zoho CRM": {
          dataTitle: "Some text",
          main: "x",
        },
        Wordpress: {
          dataTitle: "Some text",
          main: "x",
        },
        Shopify: {
          dataTitle: "Some text",
          main: "x",
        },
      },
    },
  },
  Enterprise: {
    price: {
      mo: 1000,
      yr: 10000,
    },
    img: "https://landing-assets.pics.io/img/newlanding/building.svg",
    textColor: "000000",
    cardColor: "ffcc00",
    cardText:
      "Get in touch with our Sales team to discuss specific needs of your organisation",
    info: {
      "Basic DAM functionality": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        Uploading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Searching: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Downloading: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Version Control": {
          dataTitle: "Some text",
          main: "markDown green",
        },
      },
      "Your team and library": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Maximum size of the library, TB": {
          dataTitle: "Some text",
          main: "infinity",
        },
        "Maximum number of assets in the library": {
          dataTitle: "Some text",
          main: "text",
          text: "50K",
        },
        "Number of teammates in the team included in the plan": {
          dataTitle: "Some text",
          main: "x",
        },
        "Branded look and feel": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Sharing and collaboration": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        Commenting: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Number of public Websites": {
          dataTitle: "Some text",
          main: "x",
        },
        "Single asset sharing": {
          dataTitle: "Some text",
          main: "x",
        },
        "Number of inboxes": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Storage Syncronization": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        Manual: {
          dataTitle: "Some text",
          main: "text",
          text: "Accessible every 60 minutes",
        },
        Authomatic: {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Analyst & reporting": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Activity Logs": {
          dataTitle: "Some text",
          main: "text",
          text: "1 day",
        },
        Storage: {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Library: {
          dataTitle: "Some text",
          main: "x",
        },
        Websites: {
          dataTitle: "Some text",
          main: "x",
        },
        Teammate: {
          dataTitle: "Some text",
          main: "x",
        },
        Team: {
          dataTitle: "Some text",
          main: "x",
        },
        Asset: {
          dataTitle: "Some text",
          main: "x",
        },
        "Visual comparison tool": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Metadata management": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Metadata fields management": {
          dataTitle: "Some text",
          main: "x",
        },
        "EXIF/IPTC/XMP metadata reading & writing ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Custom fields schema": {
          dataTitle: "Some text",
          main: "x",
        },
        "Automatic AI keywording for images": {
          dataTitle: "Some text",
          main: "text",
          text: "$20/1000 images",
        },
      },
      Support: {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Online knowledge base": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        Email: {
          dataTitle: "Some text",
          main: "text",
          text: "72 hours turnaround",
        },
        "Online chat": {
          dataTitle: "Some text",
          main: "x",
        },
        "Customer success manager": {
          dataTitle: "Some text",
          main: "x",
        },
        "Personal support engineer": {
          dataTitle: "Some text",
          main: "x",
        },
      },
      "Integration with 3d party tools and services": {
        value: {
          main: "markDown green",
          dataTitle: '',
        },
        "Google Drive": {
          dataTitle: "Some text",
          main: "markDown green",
        },
        "Amazon S3": {
          dataTitle: "Some text",
          main: "x",
        },
        Slack: {
          dataTitle: "Some text",
          main: "x",
        },
        Zapier: {
          dataTitle: "Some text",
          main: "x",
        },
        Webhooks: {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Docs": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Spreadsheets ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Forms ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Google Slides ": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Photoshop": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Illustrator": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe Premiere Pro": {
          dataTitle: "Some text",
          main: "x",
        },
        "Adobe After Effects": {
          dataTitle: "Some text",
          main: "x",
        },
        "Zoho CRM": {
          dataTitle: "Some text",
          main: "x",
        },
        Wordpress: {
          dataTitle: "Some text",
          main: "x",
        },
        Shopify: {
          dataTitle: "Some text 123",
          main: "x",
        },
      },
    },
  },
};

export const TABLE_COLUMN: Array<Array<string>> = [
  ["Free", "Pay as you go", "Micro", "Small", "Medium", "Enterprise"],
];

export const MEDIUM_TABLE_COLUMN: Array<Array<string>> = [
  ["Free", "Pay as you go", "Micro"],
  ["Small", "Medium", "Enterprise"],
];

export const SMALL_TABLE_COLUMN: Array<Array<string>> = [
  ["Free", "Pay as you go"],
  ["Micro", "Small"],
  ["Medium", "Enterprise"],
];

export const EXTRA_SMALL_COLUMN: Array<Array<string>> = [
  ["Free"],
  ["Pay as you go"],
  ["Micro"],
  ["Small"],
  ["Medium"],
  ["Enterprise"],
];

export const TABLE_ROW: string[] = [
  "Basic DAM functionality",
  "Your team and library",
  "Sharing and collaboration",
  "Storage Syncronization",
  "Analyst & reporting",
  "Metadata management",
  "Support",
  "Integration with 3d party tools and services",
];

export const TABLE_DROP_ROW: TableDropRow = {
  "Basic DAM functionality": [
    "Uploading",
    "Searching",
    "Downloading",
    "Version Control",
  ],
  "Your team and library": [
    "Maximum size of the library, TB",
    "Maximum number of assets in the library",
    "Number of teammates in the team included in the plan",
    "Branded look and feel",
  ],
  "Sharing and collaboration": [
    "Commenting",
    "Number of public Websites",
    "Single asset sharing",
    "Number of inboxes",
  ],
  "Storage Syncronization": ["Manual", "Authomatic"],
  "Analyst & reporting": [
    "Activity Logs",
    "Storage",
    "Library",
    "Websites",
    "Teammate",
    "Team",
    "Asset",
    "Visual comparison tool",
  ],
  "Metadata management": [
    "Metadata fields management",
    "EXIF/IPTC/XMP metadata reading & writing ",
    "Custom fields schema",
    "Automatic AI keywording for images",
  ],
  Support: [
    "Online knowledge base",
    "Email",
    "Online chat",
    "Customer success manager",
    "Personal support engineer",
  ],
  "Integration with 3d party tools and services": [
    "Google Drive",
    "Amazon S3",
    "Slack",
    "Zapier",
    "Webhooks",
    "Google Docs",
    "Google Spreadsheets ",
    "Google Forms ",
    "Google Slides ",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Zoho CRM",
    "Wordpress",
    "Shopify",
  ],
};
