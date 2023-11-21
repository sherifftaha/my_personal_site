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
    meta,
    starbucks,
    tesla,
    shopify,
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
        title: " Front-end Web Developer",
        icon: web,
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
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Restaurant website",
        description:
            "A responsive website homepage of Little lemon restaurant, using only html and css.",
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
    {
        name: "Personal site",
        description:
            "Personal website built with React, Chakra, Formik, Yup.",
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
                name: "Formek",
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
        name: "Restaurant website",
        description:
            "A responsive website of Little lemon restaurant, with table reservation form.",
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
        name: "Dashboard",
        description:
            "A dashboard build with React, Syncfusion and tailwindcss libraries for interactive charts. It also contain full functional calendar and color picker and much more.",
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
        name: "Personal site 3D",
        description:
            "A personal website with 3D interactive objects built using React, Framer, Three.js, Emailjs, tailwindcss and more.",
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
];

export { services, technologies, experiences, testimonials, projects };