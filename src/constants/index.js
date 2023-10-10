import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
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
    starbucks,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    meta,
    odh,
    ap,
    lin,
    fagel,
    kidney,
    wordle,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "BYU Office of Digital Humanities",
      icon: odh,
      iconBg: "white",
      date: "April 2023 - Present",
      points: [
        "Developing and maintaining web applications using HTML, PHP, CSS and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality website.",
        "Implementing responsive design and ensuring cross-browser compatibility."
      ],
    },
    {
      title: "Consulting Analyst",
      company_name: "Anglepoint Group, Inc",
      icon: ap,
      iconBg: "white",
      date: "May 2023 - August 2023",
      points: [
        "Developing and maintaining client data using Python, Excel and other related technologies.",
        "Collaborating with cross-functional teams including senior consultants, product managers, and other developers to create data analysis deliverables.",
        "Participating in meetings and providing constructive feedback to other team members.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Lin Dental Clinic",
      icon: lin,
      iconBg: "white",
      date: "June 2022 - August 2022",
      points: [
        "Managing and analyzing data using Excel VBA",
        "Implementing effective financial management system and ensuring unused software are removed.",
        "Participating in staff meetings and providing constructive feedback to other staff members."
      ],
    }
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
      name: "Fag-el-gamous",
      description:
        "Web-based platform that allows users to search, analyze, and manage data collected from Fag-el-gamous cemetry, providing a convenient and efficient solution for research purposes.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "MVC",
          color: "green-text-gradient",
        },
      ],
      image: fagel,
      source_code_link: "https://github.com/brandonjacobs1/fag-el-gamous",
    },
    {
      name: "Meal Tracker for Kidney Patients",
      description:
        "Web application that enables users to keep track of daily nutrient intake, view suggested meal plans, and receive alerts based on their current health status.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: kidney,
      source_code_link: "https://github.com/nbain00/intex-fall-2022/tree/main/kidneyproject/kidneyproject",
    },
    {
      name: "Wordle Game",
      description:
        "Wordle gives players six chances to guess a randomly selected five-letter word. There are different colorscheme options for colorblind users.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: wordle,
      source_code_link: "https://github.com/yonghee8/IS562-Wordle",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };