import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import fiverrlogo from "../assets/company/fiverrlog.png";
import django from "../assets/tech/dj.png";
import python from '../assets/tech/py.png';
import vscode from '../assets/tech/vs.png';
import jupyter from '../assets/tech/ju.png';


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "Digital Marketer",
    icon: backend,
  },
  {
    title: "UI UX Designer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "framer",
    icon: framer,
  },

  {
    name: "figma",
    icon: figma,
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
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
  {
  name: "Django",
  icon: django,
},
{
  name: "Python",
  icon: python,
},
{
  name: "VS Code",
  icon: vscode,
},
{
  name: "Jupyter Notebook",
  icon: jupyter,
},
 

];

const experiences = [
  {
    title: "AI/ML/CV Developer",
    company_name: "Fiverr",
    icon: fiverrlogo,
    iconBg: "#383E56",
    date: "May 2023 - present",
    points: [
  "Developing and maintaining AI/ML applications using Python, TensorFlow, PyTorch, and related frameworks.",
  "Collaborating with cross-functional teams including data scientists, product managers, and software engineers to build scalable machine learning solutions.",
  "Implementing efficient model deployment pipelines with attention to performance, scalability, and cross-platform compatibility.",
  "Participating in code and model reviews, offering constructive feedback to ensure code quality and reproducibility of ML experiments.",
],
  },

{
    title: "Data Mining/Data Scraping Intern",
    company_name: "FastDev Labs",
    icon: web,
    iconBg: "#1A202C",
    date: "June 2024 - Sept 2024",
    points: [
      "Developed custom data scraping scripts using Python, BeautifulSoup, and Selenium to extract structured data from complex websites.",
"Automated large-scale data collection pipelines with scheduling, retries, and proxy handling for uninterrupted scraping.",
"Worked with RESTful and GraphQL APIs to fetch, parse, and normalize large datasets from multiple sources.",
"Cleaned and transformed raw scraped data using Pandas and Regex for integration into dashboards and analytics tools.",

    ],
  },
  {
    title: "Full Stack Website Developer",
    company_name: "Fiverr",
    icon: mobile, 
    iconBg: "#0C1E7F",
    date: "Oct 2024 - Present",
    points: [
     "Developed and deployed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) with responsive UI and REST API integration.",
"Built dynamic backend systems with Django and Flask, handling authentication, database operations, and API endpoints for web and mobile use cases.",
"Created and customized WordPress, Wix websites using themes, and plugins for business clients, ensuring mobile responsiveness and SEO optimization.",
"Integrated third-party services such as payment gateways, email APIs, and CRMs across various platforms to streamline client workflows and user experience.",

    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Taha Saqib is an exceptional professional who delivers high-quality work with remarkable attention to detail. Collaborating with Taha was a pleasure, as his DEEP UNDERSTANDING of the project needs ensured seamless communication and execution. Highly recommend working with him! 👍",
    name: "Akader",
    designation: "CEO",
    company: "TravelDoh",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Taha Saqib's work in Data Science and ML truly impressed us, with meticulous attention to detail and an exceptionally PROFESSIONAL touch that exceeded our expectations. Working with Taha was a pleasure, thanks to his deep understanding and politeness, plus he delivered everything on time! 🙌",
    name: "Victoria",
    designation: "CTO",
    company: "AI Sol",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Taha Saqib provided outstanding professionalism in his website development work. He was also incredibly quick to respond throughout the project, making collaboration smooth. Highly recommended! 👍",
    name: "Kampops",
    designation: "BOD",
    company: "Roofing Business",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "CHARM",
    description:
      "The CHARM project leverages AI, computer vision, and deep learning to detect poultry diseases like infectious coryza, fowl cholera, and fowl pox. Built with Django, PostgreSQL, and integrated APIs, it offers a fast, accessible diagnostic system for farmers. This report highlights CHARM’s technology stack, system design, results, and future impact on poultry health management",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "white-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/mr-taha-saqib/CHARM-Chicken-Health-Assessment-and-Remote-Monitoring",
  },
  {
    name: "AI Car Recommendation",
    description:
      "JDMRevs enhances personalized experiences for JDM car enthusiasts through AI-driven recommendations and real-time visualizations. Using technologies like machine learning, deep learning, and NLP models—such as linear regression, decision trees, random forest, and cosine similarity—it helps users customize and optimize cars to their preferences.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "pink-text-gradient",
      },
      {
        name: "Data Science",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/mr-taha-saqib/AI-Car-Recommendation-Portal",
  },
  {
    name: "Elegance Rack",
    description:
      "Elegance Rack is a MERN stack full-stack eCommerce application designed to provide users with a seamless online shopping experience. It features a responsive interface for browsing, filtering, and purchasing clothing items, secure payment gateways, and an admin panel for inventory and order management. The project emphasizes scalability, security, and user-centric design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/mr-taha-saqib/Elegance-Rack",
  },
];

export { services, technologies, experiences, testimonials, projects };
