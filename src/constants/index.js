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
    // {
    //     id: "work",
    //     title: "Work",
    // },
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
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
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
        source_code_link: "https://github.com/",
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
        source_code_link: "https://github.com/",
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
        source_code_link: "https://github.com/",
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
        source_code_link: "https://github.com/",
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
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };