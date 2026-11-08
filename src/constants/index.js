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
  express,
  mui,

  gsap,
  framer,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Company / technology icons imported directly
import fiverrlogo from "../assets/company/fiverrlog.png";
import django from "../assets/tech/dj.png";
import python from '../assets/tech/py.png';
import jupyter from '../assets/tech/ju.png';
import typescript from '../assets/tech/typescript.png';
import postgresql from '../assets/tech/postgresql.png';
import docker from '../assets/tech/docker.png';
import fastapi from '../assets/tech/fastapi.png';
import pytorch from '../assets/tech/pytorch.png';
import nextjs from '../assets/tech/nextjs.png';

// Project cover images
import coverSiteline from '../assets/projects/cover-siteline.png';
import coverSalesCaller from '../assets/projects/cover-sales-caller.png';
import coverContractReview from '../assets/projects/cover-contract-review.png';
import coverMicroRag from '../assets/projects/cover-micro-rag.png';
import coverGermanSme from '../assets/projects/cover-german-sme.png';
import coverSvdCf from '../assets/projects/cover-svd-cf.png';
import coverRespiratory from '../assets/projects/cover-respiratory.png';
import coverSentiment from '../assets/projects/cover-sentiment.png';
import coverQuantization from '../assets/projects/cover-quantization.png';
import coverTransformerTs from '../assets/projects/cover-transformer-ts.png';
import coverSecConnector from '../assets/projects/cover-sec-connector.png';


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
    title: "Generative AI Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Computer Vision & ML Engineer",
    icon: backend,
  },
  {
    title: "Voice AI Agent Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Jupyter Notebook",
    icon: jupyter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "framer",
    icon: framer,
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Generative AI Engineer",
    company_name: "Algorixe LLC · Detroit, MI (Remote)",
    icon: backend,
    iconBg: "#383E56",
    date: "May 2026 - Present",
    points: [
      "Lead development of an autonomous AI cold-calling platform: Twilio Voice calls driven by the Claude API that qualify leads, handle objections and book appointments, with every outcome written back to a built-in CRM.",
      "Built the product around it: FastAPI, SQLAlchemy and Alembic backend, PostgreSQL, JWT authentication with role-based access control and a Next.js dashboard, containerised with Docker Compose and Nginx.",
      "Build AI agent automations and RAG and LLM systems for US business clients.",
    ],
  },
  {
    title: "Generative AI Engineer",
    company_name: "BIG IMMERSIVE · Lahore, Pakistan",
    icon: creator,
    iconBg: "#1A202C",
    date: "Sep 2025 - Apr 2026",
    points: [
      "Developed AI solutions using large language models, deep learning and generative architectures for real-world applications.",
    ],
  },
  {
    title: "Freelance AI Engineer & Full-Stack Developer",
    company_name: "Fiverr & Upwork · Remote",
    icon: fiverrlogo,
    iconBg: "#0C1E7F",
    date: "May 2023 - Present",
    points: [
      "Delivered 120+ AI and software projects for international clients, with 50+ repeat clients across Fiverr and Upwork.",
      "AI work: LLM agents (LangGraph), RAG pipelines, voice agents, computer vision (YOLOv8) and machine-learning models in Python.",
      "Full-stack work: React, Next.js, FastAPI, Django and PostgreSQL applications, plus WordPress, SEO and performance work for small-business clients.",
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
    name: "SiteLine AI Receptionist",
    description:
      "24/7 inbound voice agent for US construction and inspection businesses. Real-time Twilio ConversationRelay calls with a Claude tool-use loop book into Google Calendar, log leads to Google Sheets, send SMS confirmations and transfer to a human on request.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Claude API", color: "pink-text-gradient" },
      { name: "Twilio", color: "green-text-gradient" },
      { name: "Voice AI", color: "white-text-gradient" },
    ],
    image: coverSiteline,
    source_code_link: "https://github.com/mr-taha-saqib/SiteLine-AI-Receptionist",
  },
  {
    name: "Autonomous AI Sales Caller & CRM",
    description:
      "AI cold-calling platform with a built-in CRM. Twilio Voice calls powered by the Claude API qualify leads, handle objections and book appointments. FastAPI, PostgreSQL and a Next.js dashboard, deployed with Docker Compose and Nginx.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Next.js", color: "white-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Claude API", color: "pink-text-gradient" },
    ],
    image: coverSalesCaller,
    source_code_link: "https://github.com/mr-taha-saqib/Autonomous-AI-Sales-Caller-CRM",
  },
  {
    name: "AI Contract Review Assistant",
    description:
      "Analyses PDF, DOCX and TXT contracts, flags liability, termination, confidentiality and payment clauses with Low, Medium or High risk, and answers questions in plain language with persistent chat history. Next.js, Prisma and OpenAI GPT-4o.",
    tags: [
      { name: "Next.js", color: "white-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" },
      { name: "Prisma", color: "pink-text-gradient" },
    ],
    image: coverContractReview,
    source_code_link: "https://github.com/mr-taha-saqib/ai-powered-legal-contract-review-risk-analysis-assistant",
  },
  {
    name: "CHARM",
    description:
      "Computer-vision platform that detects and diagnoses poultry disease from images and video. YOLOv8 detection, BoT-SORT tracking and ResNet50 classification identify infectious coryza, fowl cholera and fowl pox, served through a Django web app. University project, team of three.",
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
        name: "YOLOv8",
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
    name: "Micro-RAG over a Knowledge Graph",
    description:
      "Retrieval-augmented QA built from scratch: a TF-IDF retriever over RDF triples feeds a compact encoder-decoder Transformer in PyTorch (256-dim, 3+3 layers, 8 heads, no pretrained weights), trained on four tasks.",
    tags: [
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "RAG", color: "blue-text-gradient" },
      { name: "Transformers", color: "green-text-gradient" },
      { name: "NLP", color: "white-text-gradient" },
    ],
    image: coverMicroRag,
    source_code_link: "https://github.com/mr-taha-saqib/Micro-RAG-over-an-RDF-Knowledge-Graph",
  },
  {
    name: "German SME Transaction Classification",
    description:
      "Leakage-safe reproduction of a published SME transaction-categorisation pipeline for German text and 37 classes. GermanFinBERT reached 0.649 ± 0.027 accuracy against 0.612 ± 0.025 for FinBERT over five seeds, with calibrated routing to manual review.",
    tags: [
      { name: "Hugging Face", color: "green-text-gradient" },
      { name: "FinBERT", color: "blue-text-gradient" },
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "NLP", color: "white-text-gradient" },
    ],
    image: coverGermanSme,
    source_code_link: "https://github.com/mr-taha-saqib/german-sme-bank-transaction-classification",
  },
  {
    name: "SVD Collaborative Filtering",
    description:
      "Recommender system on MovieLens 100K and 1M. Truncated SVD at k=10 reaches an RMSE of 0.8812 against 1.0447 for a global-mean baseline; SGD matrix factorisation reaches 0.8710.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "NumPy", color: "blue-text-gradient" },
      { name: "Recommender", color: "pink-text-gradient" },
      { name: "ML", color: "white-text-gradient" },
    ],
    image: coverSvdCf,
    source_code_link: "https://github.com/mr-taha-saqib/SVD-Based-Collaborative-Filtering",
  },
  {
    name: "Respiratory Waveform Forecasting",
    description:
      "BiLSTM with Bahdanau attention that forecasts 15 seconds of the nasal-pressure waveform from 20 seconds of physiological signal in EDF files, with 32 Hz resampling, sliding-window inference and GPU or CPU execution.",
    tags: [
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "BiLSTM", color: "blue-text-gradient" },
      { name: "Time Series", color: "green-text-gradient" },
      { name: "Deep Learning", color: "white-text-gradient" },
    ],
    image: coverRespiratory,
    source_code_link: "https://github.com/mr-taha-saqib/Respiratory-Waveform-Prediction-using-BiLSTM-with-Attention",
  },
  {
    name: "SentimentFusion",
    description:
      "Sentiment dashboard with four models trained on 200,000+ Twitter and Reddit posts. The best model, an SVM, reaches 80.52% accuracy. Adds sarcasm flagging and bulk analysis of Bluesky posts.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "scikit-learn", color: "blue-text-gradient" },
      { name: "NLP", color: "white-text-gradient" },
      { name: "ML", color: "pink-text-gradient" },
    ],
    image: coverSentiment,
    source_code_link: "https://github.com/mr-taha-saqib/SentimentFusion",
  },
  {
    name: "Vision Model Quantization Benchmark",
    description:
      "Benchmarks FP16 against INT8 inference for a vision model, measuring latency, throughput and peak GPU memory. INT8 lowered memory use and improved latency and throughput.",
    tags: [
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "CUDA", color: "green-text-gradient" },
      { name: "Quantization", color: "blue-text-gradient" },
      { name: "Computer Vision", color: "white-text-gradient" },
    ],
    image: coverQuantization,
    source_code_link: "https://github.com/mr-taha-saqib/Vision-Model-Quantization-Inference-Benchmarking-FP16-vs-INT8-",
  },
  {
    name: "Transformer Time-Series Forecasting",
    description:
      "Compares autoregressive and non-autoregressive Transformer forecasters with distributional modelling, evaluated with NRMSE and CRPS.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Transformers", color: "blue-text-gradient" },
      { name: "Forecasting", color: "pink-text-gradient" },
      { name: "Deep Learning", color: "white-text-gradient" },
    ],
    image: coverTransformerTs,
    source_code_link: "https://github.com/mr-taha-saqib/Transformer-TimeSeries-Forecasting",
  },
  {
    name: "SEC Filing Connector",
    description:
      "Typed Python library and CLI for SEC EDGAR filings: ticker-to-CIK lookup, filtering by form type and date, and filing download. Pydantic v2 models, httpx client and 35 passing tests.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Pydantic", color: "blue-text-gradient" },
      { name: "httpx", color: "white-text-gradient" },
      { name: "pytest", color: "pink-text-gradient" },
    ],
    image: coverSecConnector,
    source_code_link: "https://github.com/mr-taha-saqib/SEC-Filing-Connector",
  },
  {
    name: "Elegance Rack",
    description:
      "MERN-stack e-commerce app built with one teammate: search, filtering and sorting, cart and checkout with payment integration, role-based authentication and an admin panel for inventory and orders.",
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
  {
    name: "JDMRevs: AI Car Recommendation",
    description:
      "Car recommendation project on the CarDekho vehicle dataset using linear regression, decision trees, random forests and cosine similarity.",
    tags: [
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Data Science",
        color: "white-text-gradient",
      },
      {
        name: "Recommender",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/mr-taha-saqib/AI-Car-Recommendation-Portal",
  },
];

export { services, technologies, experiences, testimonials, projects };
