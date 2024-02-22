import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    // redux,
    // tailwind,
    nodejs,
    mongodb,
    git,
    // figma,
    docker,
    // meta,
    asu,
    au,
    amadeus,
    // starbucks,
    // tesla,
    // shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
    aws,
    azure,
    cpp,
    cypress,
    python,
    rust,
    sql,
    ridhika,
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
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "Frontend Engineer",
      icon: creator,
    },
    //  {
    //   title: "Data Scientist",
    //   icon: mobile,
    // },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    // {
    //   name: "rust",
    //   icon: rust,
    // },
    {
      name: "cpp",
      icon: cpp,
    },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "cypress",
      icon: cypress,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "docker",
      icon: docker,
    },
    
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "azure",
      icon: azure,
    },
        // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
     // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
     {
      name: "HTML 5",
      icon: html,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
  ];
  
  const experiences = [
    {
      title: "M.S. Computer Science",
      company_name: "Arizona State University | GPA : 4.0",
      icon: asu,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Present",
      points: [
        "Distributed Software Development",
        "Cloud Computing",
        "Software Security",
        "Software Verification, Validation and Testing",
        "Data Visualization",
        "Data Mining",
        "Natural Language Processing",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Amadeus",
      icon: amadeus,
      iconBg: "#E6DEDD",
      date: "Jul 2019 - Aug 2022",
      points: [
        "Developed Hotel Property Management Front-end web application leveraging Angular/Typescript and Integrating those with RESTful APIs.",
        "Implemented GDPR, European data protection, and privacy guidelines across all databases (SQL) operated by the Hotel Management application.",
        "Transformed a Monolithic Architecture application into Micro-service Architecture by building multiple micro-service applications for efficiently managing and scaling system.",
        "Built REST APIs handling millions of requests for multiple downstream components increased performance of product by 10K requests per hour.",
        "Developed a middleware Preference Control platform controls/modifies data of products helped in promoting or excluding a particular product based on user preference or policy.",
        "Designed and Developed test cases to verify the end-to-end functionality for Hotel Management Web application using Cypress and Protractor.",
      ],
    },
    {
      title: "Bachelor of Engineering",
      company_name: "MIT, Anna University | GPA : 8.77 / 10",
      icon: au,
      iconBg: "#E6DEDD",
      date: "Aug 2015 - May 2019",
      points: [
        "Data structures and object oriented programming in C++",
        "Cryptography and Network Security",
        "Data structures with Python",
        "Computer Architecture and Organization",
        "Digital Image Processing",
        "Microprocessors and Microcontrollers",
      ],
    },
    
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    
    
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nishanthan was a part of my team for more than 2 years. I have seen him grow both in terms of product and technical expertise. He is extremely adaptable and groomed himself as a full stack engineer-C++, C# and Angular over the course of these 2 years. His ownership and accountability skills so early in his career make him a great professional. I wish him the best and would love to see him shining and growing!",
      name: "Ridhika Malik",
      designation: "Engineering Manager",
      company: "Amadeus",
      image: ridhika,
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };