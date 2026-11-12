import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    cpp,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    MUCH,
    pharmacy,
    Little_lemon_html_css,
    Personal_site,
    Little_lemon_jsx,
    Dashboard,
    Personal_site_3d,
    threejs,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front-end Web Developer",
        icon: web,
    },
    {
        title: "Healthcare Domain Knowledge",
        icon: mobile,
    },
    {
        title: "IT & Systems Support",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "C++",
        icon: cpp,
    },

    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "IT support",
        company_name: "Mansoura University Children Hospital",
        icon: MUCH,
        iconBg: "#E6DEDD",
        date: "October 2020 - Present",
        points: [
            "Diagnose and resolve hardware and software issues; provide technical support for device and application problems.",
            "Install, update, and troubleshoot software applications; assist users in navigating various programs.",
            "Monitor and maintain computer networks; troubleshoot connectivity issues and implement solutions.",
            "Stay updated on technological trends; pursue professional development for skill enhancement. Implement and manage backup solutions; develop and test disaster recovery plans. Streamline workflows through process optimization and evaluate advanced tools for technology integration.",
        ],
    },
    {
        title: "Hospital Pharmacist",
        company_name: "Mansoura University Children Hospital",
        icon: MUCH,
        iconBg: "#E6DEDD",
        date: "September 2019 - October 2020",
        points: [
            "Dispense prescribed medications accurately, ensuring proper dosage and labeling.",
            "Collaborate with healthcare teams to manage medication regimens and address potential interactions.",
            "Provide patient education on medication usage, side effects, and general health practices.",
            "Oversee regulatory compliance, including adherence to pharmacy laws and controlled substance management.",
        ],
    },
    {
        title: "Community Pharmacist",
        company_name: "Al Tarshouby Pharmacy - Al Halawany Pharmacy ",
        icon: pharmacy,
        iconBg: "#E6DEDD",
        date: "July 2017 - September 2019",
        points: [
            "Dispense medications accurately, providing clear instructions on usage and potential side effects.",
            "Offer personalized health advice and information to customers on over-the-counter products.",
            "Collaborate with healthcare providers to review and manage medication regimens for optimal patient outcomes.",
            "Ensure compliance with pharmacy laws, maintain inventory, and address customer inquiries professionally.",
        ],
    },
];

const testimonials = [];

const projects = [
    {
        name: "Dashboard",
        description:
            "An admin dashboard built with React, Syncfusion and Tailwind CSS, with interactive charts, a working calendar, a kanban board and theme customization.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "syncfusion",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: Dashboard,
        source_code_link: "https://github.com/sherifftaha/dashboard-syncfusion",
        live_code_link: "https://sh-dashboard-syncfusion.netlify.app"
    },
    {
        name: "Restaurant website",
        description:
            "A responsive restaurant website in React, with a table reservation form and input validation.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
        ],
        image: Little_lemon_jsx,
        source_code_link: "https://github.com/sherifftaha/Little_Lemon_Website_React",
        live_code_link: "https://sh-little-lemon.netlify.app"
    },
    {
        name: "Personal site",
        description:
            "A personal website built with React and Chakra UI, with a validated contact form using Formik and Yup.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Chakra",
                color: "green-text-gradient",
            },
            {
                name: "Formik",
                color: "pink-text-gradient",
            },
            {
                name: "Yup",
                color: "yellow-text-gradient",
            },
        ],
        image: Personal_site,
        source_code_link: "https://github.com/sherifftaha/personalSite1",
        live_code_link: "https://react-chakra-formik-yup.netlify.app"
    },
    {
        name: "Personal site 3D",
        description:
            "This site: interactive 3D scenes with Three.js, animations with Framer Motion and a working contact form with EmailJS.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Framer",
                color: "green-text-gradient",
            },
            {
                name: "Three.js",
                color: "yellow-text-gradient",
            },
            {
                name: "Emailjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: Personal_site_3d,
        source_code_link: "https://github.com/sherifftaha/my_personal_site",
        live_code_link: "https://sherif-taha.netlify.app"
    },
    {
        name: "Restaurant website",
        description:
            "A responsive restaurant homepage built from scratch with plain HTML and CSS.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: Little_lemon_html_css,
        source_code_link: "https://github.com/sherifftaha/Little_lemon_project_html-css",
        live_code_link: "https://little-lemon-html-css-only.netlify.app"
    },
];

export { services, technologies, experiences, testimonials, projects };