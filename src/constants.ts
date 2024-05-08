import type { INavigationLink } from "./types/navigation-link.type.ts";

import Natalia from "../public/images/natalia.png";
import Corbin from "../public/images/corbin.png";
import Dharmen from "../public/images/dharmen.png";
import Ankur from "../public/images/ankur.png";
import Tobiloba from "../public/images/tobi.jpeg";
import Martina from "../public/images/martina.png";
import Xavier from "../public/images/xavier.jpeg";
import Mihai from "../public/images/mihai.jpeg";
import Martin from "../public/images/martin-sonn.jpeg"

export const SITE_TITLE = "TIL-Conf";

export const NAVIGATION_LINKS: Array<INavigationLink> = [
  // {title: 'Agenda', href: '/agenda'},
  { title: "Speakers", href: "/speakers" },
  // {title: 'Sponsors', href: '/sponsors'},
  // {title: 'About', href: '/about'},
  {
    title: "CFP",
    href: "https://docs.google.com/forms/d/1XyoW2doQvHg51Vh29iEgE6Q6RTX8zbmxJfOg9zAZQmM/viewform?edit_requested=true",
  },
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
    speakerName: "Natalia Venditto",
    speakerImage: Natalia,
    speakerTitle: "Lead JavaScript e2e Devtools and DX @Microsoft",
    presentationTitle:
      "From frontend developer to intelligent JavaScript apps engineer: a journey of evolution",
  },
  {
    subject: "Keynote",
    speakerName: "Martina Kraus",
    speakerImage: Martina,
    speakerTitle: "Application Security Engineer | Kraus IT Consulting",
    presentationTitle: "The state of security in Single Page Applications",
  },
  {
    subject: "TIL Contributors",
    speakerName: "Corbin Crutchley",
    speakerImage: Corbin,
    speakerTitle: "Staff Frontend Engineer",
    presentationTitle: "Writing a Frontend Framework for Fun and For Profit",
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
];
