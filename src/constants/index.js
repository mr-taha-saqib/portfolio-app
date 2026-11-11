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

import detailSiteline from '../assets/projects/detail-siteline.webp';
import detailSalesCaller from '../assets/projects/detail-sales-caller.webp';
import detailContractReview from '../assets/projects/detail-contract-review.webp';
import detailCharm from '../assets/projects/detail-charm.webp';
import detailMicroRag from '../assets/projects/detail-micro-rag.webp';
import detailSentiment from '../assets/projects/detail-sentiment.webp';
import detailQuantization from '../assets/projects/detail-quantization.webp';
import detailSec from '../assets/projects/detail-sec.webp';
import detailCarRec from '../assets/projects/detail-car-rec.webp';
import shotGerman1 from '../assets/projects/shot-german-1.webp';
import shotGerman2 from '../assets/projects/shot-german-2.webp';
import shotSvd1 from '../assets/projects/shot-svd-1.webp';
import shotSvd2 from '../assets/projects/shot-svd-2.webp';
import shotSvd3 from '../assets/projects/shot-svd-3.webp';
import shotSvd4 from '../assets/projects/shot-svd-4.webp';
import shotResp1 from '../assets/projects/shot-resp-1.webp';
import shotResp2 from '../assets/projects/shot-resp-2.webp';
import shotTs1 from '../assets/projects/shot-ts-1.webp';
import shotTs2 from '../assets/projects/shot-ts-2.webp';
import shotElegance1 from '../assets/projects/shot-elegance-1.webp';
import shotElegance2 from '../assets/projects/shot-elegance-2.webp';
import shotElegance3 from '../assets/projects/shot-elegance-3.webp';
import shotElegance4 from '../assets/projects/shot-elegance-4.webp';
import shotElegance5 from '../assets/projects/shot-elegance-5.webp';
import shotElegance6 from '../assets/projects/shot-elegance-6.webp';
import shotElegance7 from '../assets/projects/shot-elegance-7.webp';


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
      "Lead development of an autonomous AI cold-calling platform: Twilio Voice calls driven by the Claude API qualify leads, handle objections and book appointments, and every outcome is written back to a built-in CRM.",
      "Built the surrounding product: a FastAPI, SQLAlchemy and Alembic backend on PostgreSQL, JWT authentication with role-based access control, a Next.js dashboard, and Docker Compose and Nginx deployment.",
      "Design and ship AI agent automations and RAG and LLM systems for US business clients.",
    ],
  },
  {
    title: "Generative AI Engineer",
    company_name: "BIG IMMERSIVE · Lahore, Pakistan",
    icon: creator,
    iconBg: "#1A202C",
    date: "Sep 2025 - Apr 2026",
    points: [
      "Built generative AI solutions with large language models, deep learning and generative architectures for real-world applications.",
    ],
  },
  {
    title: "Freelance AI Engineer & Full-Stack Developer",
    company_name: "Fiverr & Upwork · Remote",
    icon: fiverrlogo,
    iconBg: "#0C1E7F",
    date: "May 2023 - Present",
    points: [
      "Delivered 120+ AI and software projects for international clients; more than 50 clients returned for repeat work across Fiverr and Upwork.",
      "AI: built LLM agents (LangGraph), RAG pipelines, voice agents, computer-vision systems (YOLOv8) and machine-learning models in Python.",
      "Full-stack: shipped React, Next.js, FastAPI, Django and PostgreSQL applications, plus WordPress, SEO and performance work for small businesses.",
    ],
  },
  {
    title: "Data Mining/Data Scraping Intern",
    company_name: "FastDev Labs",
    icon: web,
    iconBg: "#1A202C",
    date: "June 2024 - Sept 2024",
    points: [
      "Built custom data-scraping scripts in Python with BeautifulSoup and Selenium to extract structured data from complex websites.",
      "Automated large-scale data-collection pipelines with scheduling, retries and proxy handling for uninterrupted scraping.",
      "Consumed RESTful and GraphQL APIs to fetch, parse and normalize large datasets from multiple sources.",
      "Cleaned and transformed raw scraped data with Pandas and regular expressions for dashboards and analytics tools.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Taha Saqib is an exceptional professional who delivers high-quality work with remarkable attention to detail. Collaborating with Taha was a pleasure, as his deep understanding of the project needs ensured seamless communication and execution. Highly recommend working with him!",
    name: "Akader",
    designation: "CEO",
    company: "TravelDoh",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Taha Saqib's work in Data Science and ML truly impressed us, with meticulous attention to detail and an exceptionally professional touch that exceeded our expectations. Working with Taha was a pleasure, thanks to his deep understanding and politeness, plus he delivered everything on time!",
    name: "Victoria",
    designation: "CTO",
    company: "AI Sol",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Taha Saqib provided outstanding professionalism in his website development work. He was also incredibly quick to respond throughout the project, making collaboration smooth. Highly recommended!",
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
      "24/7 inbound voice agent for US construction and inspection businesses. Real-time Twilio ConversationRelay calls run a Claude tool-use loop that quotes from a pricing table, books into Google Calendar, logs every lead to Google Sheets, texts confirmations, shares Calendly overflow links and transfers to a human on request. AI disclosure and a recording notice are built into every greeting, at roughly one second voice-to-voice.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Claude API", color: "pink-text-gradient" },
      { name: "Twilio", color: "green-text-gradient" },
      { name: "Voice AI", color: "white-text-gradient" },
    ],
    image: coverSiteline,
    images: [coverSiteline, detailSiteline],
    source_code_link: "https://github.com/mr-taha-saqib/SiteLine-AI-Receptionist",
  },
  {
    name: "Autonomous AI Sales Caller & CRM",
    description:
      "AI cold-calling platform with a built-in CRM. Twilio Voice calls powered by the Claude API qualify leads, handle objections, book appointments and write every outcome back to PostgreSQL. FastAPI backend with SQLAlchemy and Alembic, JWT authentication with role-based access, a Next.js and TypeScript dashboard, Docker Compose and Nginx deployment, and pytest and Playwright tests.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Next.js", color: "white-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Claude API", color: "pink-text-gradient" },
    ],
    image: coverSalesCaller,
    images: [coverSalesCaller, detailSalesCaller],
    source_code_link: "https://github.com/mr-taha-saqib/Autonomous-AI-Sales-Caller-CRM",
  },
  {
    name: "AI Contract Review Assistant",
    description:
      "Upload a PDF, DOCX or TXT contract (up to 10 MB) and get liability, termination, confidentiality and payment clauses flagged with Low, Medium or High risk and explained in plain language. Context-aware Q&A keeps chat history per contract, sensitive questions get extra disclaimers, and results export as a PDF report. Next.js, TypeScript, Prisma and OpenAI GPT-4o.",
    tags: [
      { name: "Next.js", color: "white-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" },
      { name: "Prisma", color: "pink-text-gradient" },
    ],
    image: coverContractReview,
    images: [coverContractReview, detailContractReview],
    source_code_link: "https://github.com/mr-taha-saqib/ai-powered-legal-contract-review-risk-analysis-assistant",
  },
  {
    name: "CHARM",
    description:
      "Computer-vision platform that detects and diagnoses poultry disease from images and video. YOLOv8 detects chickens, BoT-SORT tracks individual birds and ResNet50 classifies infectious coryza, fowl cholera and fowl pox. The Django web app adds secure login, diagnostic history, health alerts with treatment suggestions and an admin dashboard. University project, team of three.",
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
    images: [project2, detailCharm],
    source_code_link: "https://github.com/mr-taha-saqib/CHARM-Chicken-Health-Assessment-and-Remote-Monitoring",
  },
  {
    name: "Micro-RAG over a Knowledge Graph",
    description:
      "Retrieval-augmented QA built from scratch: a TF-IDF retriever over RDF triples feeds a compact encoder-decoder Transformer in PyTorch (256-dim, 3+3 layers, 8 heads, no pretrained weights). Four tasks (text to triples, triples to text, grounded QA and a triple consistency check) share one trunk and train in a single backward pass. No LangChain and no hosted LLM.",
    tags: [
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "RAG", color: "blue-text-gradient" },
      { name: "Transformers", color: "green-text-gradient" },
      { name: "NLP", color: "white-text-gradient" },
    ],
    image: coverMicroRag,
    images: [coverMicroRag, detailMicroRag],
    source_code_link: "https://github.com/mr-taha-saqib/Micro-RAG-over-an-RDF-Knowledge-Graph",
  },
  {
    name: "German SME Transaction Classification",
    description:
      "Leakage-safe reproduction of a published SME transaction-categorization pipeline for German text and 37 classes. GermanFinBERT reached 0.649 ± 0.027 accuracy against 0.612 ± 0.025 for FinBERT over five seeds, with calibrated routing to manual review. Reliability diagrams compare model confidence before and after calibration.",
    tags: [
      { name: "Hugging Face", color: "green-text-gradient" },
      { name: "FinBERT", color: "blue-text-gradient" },
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "NLP", color: "white-text-gradient" },
    ],
    image: coverGermanSme,
    images: [coverGermanSme, shotGerman1, shotGerman2],
    source_code_link: "https://github.com/mr-taha-saqib/german-sme-bank-transaction-classification",
  },
  {
    name: "SVD Collaborative Filtering",
    description:
      "Recommender system on MovieLens 100K and 1M. Truncated SVD at k=10 reaches an RMSE of 0.8812 against 1.0447 for a global-mean baseline; SGD matrix factorization reaches 0.8710. Plots cover singular-value decay, explained variance, RMSE and MAE against rank, baseline comparison and a cross-dataset check.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "NumPy", color: "blue-text-gradient" },
      { name: "Recommender", color: "pink-text-gradient" },
      { name: "ML", color: "white-text-gradient" },
    ],
    image: coverSvdCf,
    images: [coverSvdCf, shotSvd1, shotSvd2, shotSvd3, shotSvd4],
    source_code_link: "https://github.com/mr-taha-saqib/SVD-Based-Collaborative-Filtering",
  },
  {
    name: "Respiratory Waveform Forecasting",
    description:
      "BiLSTM with Bahdanau attention that forecasts 15 seconds of the nasal-pressure waveform from 20 seconds of physiological signal in EDF files. The pipeline filters, normalizes and resamples to 32 Hz, extracts breathing frequency, runs sliding-window inference on GPU or CPU and exports predictions to CSV and EDF.",
    tags: [
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "BiLSTM", color: "blue-text-gradient" },
      { name: "Time Series", color: "green-text-gradient" },
      { name: "Deep Learning", color: "white-text-gradient" },
    ],
    image: coverRespiratory,
    images: [coverRespiratory, shotResp1, shotResp2],
    source_code_link: "https://github.com/mr-taha-saqib/Respiratory-Waveform-Prediction-using-BiLSTM-with-Attention",
  },
  {
    name: "SentimentFusion",
    description:
      "Flask sentiment dashboard with four models (Logistic Regression, SVM, Naive Bayes and Random Forest) trained on 200,000+ Twitter and Reddit posts. The best model, an SVM, reaches 80.52% accuracy. Shows confidence scores, flags likely sarcasm with a context-aware detector and analyzes batches of Bluesky posts.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "scikit-learn", color: "blue-text-gradient" },
      { name: "NLP", color: "white-text-gradient" },
      { name: "ML", color: "pink-text-gradient" },
    ],
    image: coverSentiment,
    images: [coverSentiment, detailSentiment],
    source_code_link: "https://github.com/mr-taha-saqib/SentimentFusion",
  },
  {
    name: "Vision Model Quantization Benchmark",
    description:
      "Benchmarks FP16 against INT8 inference for a vision model, measuring latency, throughput and peak GPU memory across multiple runs. INT8 lowered memory use and improved latency and throughput, while FP16 kept higher numerical precision.",
    tags: [
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "CUDA", color: "green-text-gradient" },
      { name: "Quantization", color: "blue-text-gradient" },
      { name: "Computer Vision", color: "white-text-gradient" },
    ],
    image: coverQuantization,
    images: [coverQuantization, detailQuantization],
    source_code_link: "https://github.com/mr-taha-saqib/Vision-Model-Quantization-Inference-Benchmarking-FP16-vs-INT8-",
  },
  {
    name: "Transformer Time-Series Forecasting",
    description:
      "Compares autoregressive and non-autoregressive Transformer forecasters with distributional modeling, evaluated with NRMSE and CRPS. The notebook covers preprocessing and windowing, training with hyperparameter tuning, and forecast plots against actual values.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Transformers", color: "blue-text-gradient" },
      { name: "Forecasting", color: "pink-text-gradient" },
      { name: "Deep Learning", color: "white-text-gradient" },
    ],
    image: coverTransformerTs,
    images: [coverTransformerTs, shotTs1, shotTs2],
    source_code_link: "https://github.com/mr-taha-saqib/Transformer-TimeSeries-Forecasting",
  },
  {
    name: "SEC Filing Connector",
    description:
      "Typed Python library and CLI for SEC EDGAR filings: ticker-to-CIK lookup, filtering by form type and date range, and filing download. The CLI prints a table or JSON and can save the first matching filing to a file. Pydantic v2 models, an httpx client and 35 passing tests.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Pydantic", color: "blue-text-gradient" },
      { name: "httpx", color: "white-text-gradient" },
      { name: "pytest", color: "pink-text-gradient" },
    ],
    image: coverSecConnector,
    images: [coverSecConnector, detailSec],
    source_code_link: "https://github.com/mr-taha-saqib/SEC-Filing-Connector",
  },
  {
    name: "Elegance Rack",
    description:
      "MERN-stack clothing store built with one teammate: product search, filtering and sorting, product pages, cart and checkout with payment integration, order history with status tracking, role-based authentication and an admin panel to add products and manage orders. Responsive React and Tailwind CSS interface.",
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
    image: shotElegance1,
    images: [shotElegance1, shotElegance2, shotElegance3, shotElegance4, shotElegance5, shotElegance6, shotElegance7],
    source_code_link: "https://github.com/mr-taha-saqib/Elegance-Rack",
  },
  {
    name: "JDMRevs: AI Car Recommendation",
    description:
      "JDMRevs recommends cars from user preferences such as brand, fuel type, transmission, vehicle age and budget. Built with one teammate on the CarDekho vehicle dataset, it compares regression models, ANN and RNN deep-learning models and cosine similarity; the ANN achieved the highest accuracy.",
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
    images: [gearXpert, detailCarRec],
    source_code_link: "https://github.com/mr-taha-saqib/AI-Car-Recommendation-Portal",
  },
];

export { services, technologies, experiences, testimonials, projects };
