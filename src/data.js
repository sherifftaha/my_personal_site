// All site content lives here so it can be edited without touching the layout.

export const profile = {
  name: "Sherif Taha",
  role: "Odoo Functional Consultant & Developer",
  location: "Cairo, Egypt",
  email: "Sherif.taha.hamed@gmail.com",
  github: "https://github.com/sherifftaha",
  // Leave empty to hide the matching button until the link or file is ready.
  linkedin: "",
  cv: "",
};

export const navLinks = [
  { id: "services", label: "Services" },
  { id: "case-studies", label: "Case studies" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const label = [
  { term: "Role", value: "Functional Consultant & Developer" },
  { term: "Versions", value: "Odoo 17 / 18, Odoo.sh" },
  { term: "Builds with", value: "Python, XML" },
  { term: "Training", value: "Pharmacy · ITI (RPA & BA)" },
  { term: "Location", value: "Cairo, Egypt" },
];

export const services = [
  {
    step: "01 · Diagnose",
    title: "Requirements & analysis",
    summary: "Understand how the business really runs before anything is configured.",
    points: [
      "Stakeholder interviews and workshops",
      "Current-state and target-state process maps",
      "Clear scope and implementation plan",
    ],
  },
  {
    step: "02 · Treat",
    title: "Implementation",
    summary: "Set up standard Odoo so it fits the process, not the other way round.",
    points: [
      "Sales, Purchase, Inventory, Accounting, Website",
      "Products, price lists, users and approval rules",
      "Data import, user training and go-live support",
    ],
  },
  {
    step: "03 · Follow up",
    title: "Custom development",
    summary: "Build what standard Odoo doesn't cover, and keep it maintainable.",
    points: [
      "Custom modules in Python and XML",
      "B2B portals and website themes",
      "Automations and integrations, deployed on Odoo.sh",
    ],
  },
];

export const caseStudies = [
  {
    tag: "Client project",
    status: "Built · pre-launch",
    title: "B2B wholesale portal for a fashion brand",
    client: "BlueBee · children's and maternity apparel",
    problem:
      "Wholesale merchants placed orders through chat apps. Orders, payments and stock were hard to track, and every order needed manual follow-up.",
    work: [
      "Interviewed the owners and documented the business rules and ordering flows before building",
      "Built an invite-only wholesale store on Odoo 18 with a custom wholesale module and an Arabic-first theme",
      "Added an invoice lifecycle with payment deadlines, payment-receipt upload and accountant approval",
      "Showed stock as availability levels instead of exact quantities, as the owners required",
    ],
    result:
      "The complete store is built on Odoo.sh and under owner review ahead of launch.",
    stack: ["Odoo 18", "Odoo.sh", "Python", "XML / QWeb", "B2B eCommerce"],
  },
  {
    tag: "Hospital",
    status: "In use",
    title: "Digital tools for a hospital pharmacy department",
    client: "Mansoura University Children's Hospital",
    problem:
      "The pharmacy department relied on manual calculations and paper files, which cost time and left room for error.",
    work: [
      "Built a calculation program for parenteral nutrition orders",
      "Created spreadsheet tools for recurring pharmacy tasks",
      "Moved department files to an organised cloud archive",
      "Handled day-to-day requests and support for pharmacy staff",
    ],
    result:
      "The work led to a formal role as Clinical Pharmacist for Digital Health in October 2026.",
    stack: ["Process analysis", "Automation", "Excel", "Healthcare"],
  },
  {
    tag: "Implementation exercise",
    status: "Demo",
    title: "Odoo implementation demo for a coffee roastery",
    client: "Assessed exercise with a simulated client",
    problem:
      "A roastery scenario needed to go from documented current state to a working Odoo setup, using standard features only.",
    work: [
      "Worked from current-state, target-state and implementation-plan documents",
      "Modelled products with variants and a kit recipe, with raw materials from separate suppliers",
      "Configured purchasing, sales, accounting journals and a second user for approvals",
    ],
    result:
      "An end-to-end demo on standard Odoo with no custom code, built to be presented as a client walkthrough.",
    stack: ["Odoo Online", "Sales", "Purchase", "Inventory", "Accounting"],
  },
];

export const experience = [
  {
    period: "2024 – Present",
    title: "Odoo Consultant & Developer",
    place: "Independent",
    text: "Building on Odoo since 2024, with paid client work since 2026: requirements, configuration, custom modules, themes and B2B portals.",
  },
  {
    period: "Oct 2020 – Present",
    title: "Clinical Pharmacist for Digital Health",
    place: "Mansoura University Children's Hospital",
    text: "Run the pharmacy department's digital work: calculation tools, cloud archiving and day-to-day support. Title formalised in October 2026.",
  },
  {
    period: "Sep 2019 – Oct 2020",
    title: "Hospital Pharmacist",
    place: "Mansoura University Children's Hospital",
    text: "Dispensed medications, reviewed regimens with the clinical team and counselled patients.",
  },
  {
    period: "Jul 2017 – Sep 2019",
    title: "Community Pharmacist",
    place: "Al Tarshouby Pharmacy · Al Halawany Pharmacy",
    text: "Dispensing, patient advice and stock management in busy community pharmacies.",
  },
];

export const education = [
  { title: "Information Technology Institute (ITI)", text: "RPA & Business Analysis track" },
  { title: "Pharmacy degree", text: "Followed by hospital and community practice" },
];

export const skills = [
  {
    group: "Odoo",
    primary: true,
    items: ["Sales", "Purchase", "Inventory", "Accounting", "Website & eCommerce", "Studio", "Odoo.sh"],
  },
  {
    group: "Development",
    items: ["Python", "XML / QWeb", "JavaScript", "React", "Git"],
  },
  {
    group: "Business analysis",
    items: ["Requirements gathering", "Process mapping", "User flows", "Documentation"],
  },
  {
    group: "Automation & data",
    items: ["RPA", "Excel", "Data analysis"],
  },
  {
    group: "Languages",
    items: ["Arabic (native)", "English"],
  },
];

export const earlierWork = [
  { label: "Admin dashboard (React)", url: "https://sh-dashboard-syncfusion.netlify.app" },
  { label: "Restaurant booking site (React)", url: "https://sh-little-lemon.netlify.app" },
  { label: "All repositories on GitHub", url: "https://github.com/sherifftaha" },
];
