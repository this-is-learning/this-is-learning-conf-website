import type { INavigationLink } from "./types/navigation-link.type.ts";

import Dharmen from "../public/images/dharmen.png";
import Ankur from "../public/images/ankur.png";
import Tobiloba from "../public/images/tobi.jpeg";
import Martina from "../public/images/martina.png";
import Xavier from "../public/images/xavier.jpeg";
import Mihai from "../public/images/mihai.jpeg";
import Martin from "../public/images/martin-sonn.jpeg";
import Rishab from "../public/images/rishab.jpeg";
import Tomacz from "../public/images/tomascz.jpeg";
import Maina from "../public/images/maina.jpeg";
import Srushith from "../public/images/srushith.jpeg";
import Soumaya from "../public/images/soumaya.jpeg";
import Ankita from "../public/images/ankita.jpeg";
import Dale from "../public/images/dale.jpeg";
import Neel from "../public/images/neel.jpeg";
import EseMonday from "../public/images/ese-monday.jpeg";
import IdoEverGreen from "../public/images/ido-ever.jpeg";
import Monika from "../public/images/monika.jpeg";
import DanielGlej from "../public/images/daniel-glej.jpeg";
import Okwudiri from "../public/images/okwudiri.jpeg";
import Atishay from "../public/images/atishay.jpeg";
import Basit from "../public/images/basit.jpeg";
import Sophia from "../public/images/sophia.jpeg";
import Patty from "../public/images/patty.jpeg";
import Jaroslaw from "../public/images/jaroslaw.png";
import DanielAfons from "../public/images/daniel-afons.jpeg";
import Anirudh from "../public/images/anirudh.jpeg";
import Aman from "../public/images/aman.png";
import Tomasz from "../public/images/tomasz-flis.jpeg";
import Mohammad from "../public/images/mohammad.jpeg";
import Hien from "../public/images/hien-pham.jpeg";
import Rohit from "../public/images/rohit.jpeg";
import Samuel from "../public/images/codefarmer.jpeg";
import Hritik from "../public/images/hrittik.jpeg";
import Pratik from "../public/images/pratik.jpeg";
import Jonathan from "../public/images/jonathan.png";
import Noam from "../public/images/noam.jpeg";
import DanielOstrov from "../public/images/daniel-ostrov.jpeg";
import Favorite from "../public/images/favorite.jpeg";
import Tapas from "../public/images/tapas.png";
import Shivay from "../public/images/shivay.jpeg";
import MohammadQuanit from "../public/images/quanit.png";
import Nitesh from "../public/images/nitesh.jpeg";
import Aditya from "../public/images/aditya.jpeg";
import Bode from "../public/images/bode.jpeg";
import Louella from "../public/images/louella.png";
import Armen from "../public/images/armen-var.jpeg";
import Adriana from "../public/images/adriana.jpeg";
import Ralf from "../public/images/ralf.jpeg";
import Aravind from "../public/images/aravind.png";
import Siva from "../public/images/siva.jpeg";
import Haimantika from "../public/images/haimantika.jpeg";
import Felix from "../public/images/felix.jpeg";
import Divine from "../public/images/divine.jpeg";
import Rainer from "../public/images/rainer.jpeg";
import Deepa from "../public/images/deepa.jpeg";
import Dennis from "../public/images/dennis.jpeg";
import Ayush from "../public/images/ayush.jpeg";
import Olanetsoft from "../public/images/olanetsoft.jpeg";
import Thomas from "../public/images/thomas-laforge.png";
import Sonam from "../public/images/sonam.jpeg";
import Cecilia from "../public/images/cecilia.jpeg";
import serkan from '../public/images/serkan.png';
import aakansha from '../public/images/aakansha.jpeg';

export const SITE_TITLE = "TIL-Conf";

export const NAVIGATION_LINKS: Array<INavigationLink> = [
  // {title: 'Agenda', href: '/agenda'},
  { title: "Speakers", href: "/speakers" },
  // {title: 'Sponsors', href: '/sponsors'},
  // {title: 'About', href: '/about'},
  { title: "CoC", href: "/coc" },
  // {title: 'Venue', href: '/venue'},
];

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/Thisis_Learning",
  facebook: "",
  // TODO : add logo for linkedin: 'https://linkedin.com/company/eventedge',
  // TODO : add logo for linkedin: instagram: 'https://instagram.com/eventedge',
  youtube: "https://www.youtube.com/@ThisisTechTalks",
};

export const SPEAKERS = [
  {
    subject: "Keynote",
    speakerName: "Martina Kraus",
    speakerImage: Martina,
    speakerTitle: "Application Security Engineer | Kraus IT Consulting",
    presentationTitle: "The state of security in Single Page Applications",
  },
  {
    subject: "Keynote",
    speakerName: "Aakansha Doshi",
    speakerImage: aakansha,
    speakerTitle: "Opensource Developer",
    presentationTitle: "Canvas Chronicles: Crafting Text Containers ",
  },
  {
    subject: "TIL Contributors",
    speakerName: "Tobiloba Adedeji",
    speakerImage: Tobiloba,
    speakerTitle: "Support Engineer at Million.js",
    presentationTitle: "Million Lint: The future of linting",
  },
  {
    subject: "TIL Contributors",
    speakerName: "Dharmen Shah",
    speakerImage: Dharmen,
    speakerTitle: "Team Lead @Solvative",
    presentationTitle: "Using Material 3 (M3) design with Angular",
  },
  {
    subject: "Software Engineering",
    speakerName: "Ankur Tyagi",
    speakerImage: Ankur,
    speakerTitle: "Software Engineer",
    presentationTitle: "Writing for Software Engineers",
  },
  {
    subject: "AI/ML",
    speakerName: "Xavier Portilla Edo",
    speakerImage: Xavier,
    speakerTitle: "Software Engineer",
    presentationTitle: "Build conversational AI experiences powered by LLMs",
  },
  {
    subject: "AI/ML",
    speakerName: "Mihai Maruseac",
    speakerImage: Mihai,
    speakerTitle: "Software Engineer",
    presentationTitle: "End-to-end secure ML development",
  },
  {
    subject: "Software Engineering",
    speakerName: "Martin Sonnenholzer",
    speakerImage: Martin,
    speakerTitle: "Software Engineer",
    presentationTitle: "We are Knowledge Workers -  From Chaos to Clarity",
  },
  {
    subject: "AI/ML",
    speakerName: "Rishab Kumar",
    speakerImage: Rishab,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "LangChain Legends: Crafting the LLM Apps of Tomorrow, Today!",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Tomasz Ducin",
    speakerImage: Tomacz,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Get rid of Impossible States 😱 and make your State Predictable with State Machines",
  },
  {
    subject: "TIL Contributors",
    speakerName: "Maina Wycliffe",
    speakerImage: Maina,
    speakerTitle: "Software Engineer",
    presentationTitle: "Schema First Approach to Typescript Types Design",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Srushith Repakula",
    speakerImage: Srushith,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Lessons Learned from Building a Serverless Notifications System",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Soumaya Erradi",
    speakerImage: Soumaya,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Cypress, Playwright or Selenium: choosing the right testing tool",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Ankita Sood",
    speakerImage: Ankita,
    speakerTitle: "Software Engineer",
    presentationTitle: "PWAs with Angular",
  },
  {
    subject: "Software Engineering",
    speakerName: "Dale Nguyen",
    speakerImage: Dale,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "How to Bounce Back After a Layoff: Tips and Strategies image How to Bounce Back After a Layoff: Tips and Strategies",
  },
  {
    subject: "CI/CD",
    speakerName: "Neel Shah",
    speakerImage: Neel,
    speakerTitle: "Software Engineer",
    presentationTitle: "Green DevOps: Building Sustainable Software",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Ese Monday",
    speakerImage: EseMonday,
    speakerTitle: "Software Engineer",
    presentationTitle: "Progressive Web App - The Sweet Spot",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Ido Evergreen",
    speakerImage: IdoEverGreen,
    speakerTitle: "Software Engineer",
    presentationTitle: "Optimizing Web Animation for Performance.",
  },
  {
    subject: "CI/CD",
    speakerName: "Monika",
    speakerImage: Monika,
    speakerTitle: "Software Engineer",
    presentationTitle: "Less is More: Unleashing Time-Saving CI/CD Practices",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Daniel Glejzner",
    speakerImage: DanielGlej,
    speakerTitle: "Software Engineer",
    presentationTitle: "NGCC No More: Navigating Angular v16 Upgrades",
  },
  {
    subject: "AI/ML",
    speakerName: "Okwudiri munachi victor",
    speakerImage: Okwudiri,
    speakerTitle: "Software Engineer",
    presentationTitle: "The Future of Design with AI ",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Atishay Baid",
    speakerImage: Atishay,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Optimizing Enterprise Grade Web Performance: Strategies, Metrics, and Impact",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Abdul Basit",
    speakerImage: Basit,
    speakerTitle: "Software Engineer",
    presentationTitle: "Getting started with KMP and CMP",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Sophia Iroegbu",
    speakerImage: Sophia,
    speakerTitle: "Software Engineer",
    presentationTitle: "Securing Your Django Applications: Best Practices",
  },
  {
    subject: "AI/ML",
    speakerName: "Patty O'Callaghan",
    speakerImage: Patty,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Advancing Generative AI integration with Vertex AI Node.js SDK",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Jaroslaw Zolnowski",
    speakerImage: Jaroslaw,
    speakerTitle: "Senior Technical Architect @DevIntent",
    presentationTitle:
      "From Default Drama to Signal Superpowers - Navigating Angular's Evolution for Peak Performance!",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Daniel Afonso",
    speakerImage: DanielAfons,
    speakerTitle: "Software Engineer",
    presentationTitle: "A nerdy guide to the web trending concepts",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Anirudh Varma",
    speakerImage: Anirudh,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Migrating your conventional Angular Workspace to a Monorepo in a busy company",
  },
  {
    subject: "AI/ML",
    speakerName: "Aman Sharma",
    speakerImage: Aman,
    speakerTitle: "Software Engineer",
    presentationTitle: "Building GenAI Apps",
  },
  {
    subject: "Software Engineering",
    speakerName: "Tomasz Flis",
    speakerImage: Tomasz,
    speakerTitle: "Software Engineer",
    presentationTitle: "Ups and dows - ten years of IT experience",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Mohammad-Ali A'RÂBI",
    speakerImage: Mohammad,
    speakerTitle: "Software Engineer",
    presentationTitle: "Create your CV using GitHub+Actions and LaTeX",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Hien Pham",
    speakerImage: Hien,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Leveraging ngComponentOutlet to build scalable and extendable Angular applications",
  },
  {
    subject: "CI/CD",
    speakerName: "Rohit Ghumare",
    speakerImage: Rohit,
    speakerTitle: "Software Engineer",
    presentationTitle: "Are you perfectly authorized?",
  },
  {
    subject: "CI/CD",
    speakerName: "Samuel Abada",
    speakerImage: Samuel,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Building and Deploying Mobile Apps: A Developer's Guide to Easy CI/CD",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Hrittik Roy",
    speakerImage: Hritik,
    speakerTitle: "Platform Advocate | CNCF Ambassador",
    presentationTitle: "Multitenancy in the Kubernetes Era",
  },
  {
    subject: "AI/ML",
    speakerName: "Pratik Singh",
    speakerImage: Pratik,
    speakerTitle: "Software Engineer",
    presentationTitle: "How to stop useless PRs on Open Source",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Jonathan Gelin",
    speakerImage: Jonathan,
    speakerTitle: "Software Engineer",
    presentationTitle: "Micro Frontend - Unleashing Importmap's Potential",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Noam Honig",
    speakerImage: Noam,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Meet Your New BFF: Backend to Frontend without the Duct Tape",
  },
  {
    subject: "CI/CD",
    speakerName: "Daniel Ostrovsky",
    speakerImage: DanielOstrov,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "AI-Powered E2E UI Testing: Faster Creation, Easier Maintenance",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Favourite Jome",
    speakerImage: Favorite,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "The Benefits of Using Hashnode Headless CMS for Your Blog ",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Tapas Adhikary",
    speakerImage: Tapas,
    speakerTitle: "Software Engineer",
    presentationTitle: "React 19 - The Golden Fleece ",
  },
  {
    subject: "AI/ML",
    speakerName: "Shivay Lamba",
    speakerImage: Shivay,
    speakerTitle: "Software Engineer",
    presentationTitle: "CI/CD in MLOps",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Mohammad Quanit",
    speakerImage: MohammadQuanit,
    speakerTitle: "Software Engineer",
    presentationTitle: "Write Your Own Containers using Go",
  },
  {
    subject: "CI/CD",
    speakerName: "Nitesh Solanki",
    speakerImage: Nitesh,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "GitLab CI/CD pipelines and how they can revolutionize your development process",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Aditya Oberai",
    speakerImage: Aditya,
    speakerTitle: "Software Engineer",
    presentationTitle: "Exploring the new Identity API endpoints in ASP.NET 8",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Olabode Lawal-Shittabey",
    speakerImage: Bode,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Islands Architecture: A Recipe for Modern Web Performance Optimization",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Louëlla Creemers",
    speakerImage: Louella,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Modern C#: A Dive into the Community's Most Loved New Features",
  },
  {
    subject: "TIL Contributors",
    speakerName: "Armen Vardanyan",
    speakerImage: Armen,
    speakerTitle: "Software Engineer",
    presentationTitle: "Superpowers of Angular Directives",
  },
  {
    subject: "Software Engineering",
    speakerName: "Adriana Villela",
    speakerImage: Adriana,
    speakerTitle: "Software Engineer",
    presentationTitle: "How to Be An Ethical Engineering Leader",
  },
  {
    subject: "AI/ML",
    speakerName: "Ralf Roeber",
    speakerImage: Ralf,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "How to create fast and fancy dashboards using Angular and IBM Cognos (or any other closed source application",
  },
  {
    subject: "AI/ML",
    speakerName: "Aravind Putrevu",
    speakerImage: Aravind,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Understanding Fine-tuning - A primer to customise Large Language Models",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Siva S",
    speakerImage: Siva,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Kickstart your first backend - REST API with Python FastAPI",
  },
  {
    subject: "AI/ML",
    speakerName: "Haimantika Mitra",
    speakerImage: Haimantika,
    speakerTitle: "Software Engineer",
    presentationTitle: "What the heck is a RAG?",
  },
  {
    subject: "AI/ML",
    speakerName: "Felix Jumason",
    speakerImage: Felix,
    speakerTitle: "Software Engineer",
    presentationTitle: "AI for Documentation",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Divine Odazie",
    speakerImage: Divine,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Multi-Cloud Database Deployment: Why & How (using MySQL)",
  },

  {
    subject: "Web and Mobile",
    speakerName: "Rainer Hahnekamp",
    speakerImage: Rainer,
    speakerTitle: "Software Engineer",
    presentationTitle: "Testing in Angular in 2024",
  },

  {
    subject: "Web and Mobile",
    speakerName: "Deepa Chaurasia ",
    speakerImage: Deepa,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Angular 17 Unveiled: Revolutionizing Developer Experience",
  },
  {
    subject: "Software Engineering",
    speakerName: "Dennis Candor",
    speakerImage: Dennis,
    speakerTitle: "Software Engineer",
    presentationTitle: "How Design Thinking is Building Better Communities.",
  },
  {
    subject: "Cloud and Backend",
    speakerName: "Ayush Thakur",
    speakerImage: Ayush,
    speakerTitle: "Software Engineer",
    presentationTitle: "Create a React app with Wing backend",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Idris Olubisi",
    speakerImage: Olanetsoft,
    speakerTitle: "Software Engineer",
    presentationTitle:
      "Building the Future Web: From Websites to dApps with JavaScript",
  },
  {
    subject: "Web and Mobile",
    speakerName: "Thomas Laforge",
    speakerImage: Thomas,
    speakerTitle: "Software Engineer",
    presentationTitle: "Tanstack, yet another state management library?",
  },
  {
    subject: "AI/ML",
    speakerName: "Sonam",
    speakerImage: Sonam,
    speakerTitle: "Software Engineer",
    presentationTitle: "Use rust to power python application",
  },
  {
    subject: "AI/ML",
    speakerName: "Cecelia Martinez",
    speakerImage: Cecilia,
    speakerTitle: "Software Engineer",
    presentationTitle: "Generative DevOps",
  },
  {
    subject: "TIL Contributors",
    speakerName: "Serkan Sipahi",
    speakerImage: serkan,
    speakerTitle: "Software Engineer",
    presentationTitle: "TypeScript's 'Never' Type: The Invisible Force Shaping Code?",
  }
];
