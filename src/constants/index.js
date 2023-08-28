import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  hooBank,
  techystar,
  videohub,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogger",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "HooBank",
    description:
      "A modern way to banking,A conceptual UI design which displays the future of banking",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hooBank,
    source_code_link: "https://github.com/tiwariParth/ModernBankApp",
  },
  {
    name: "VideoHUB",
    description:
      "A platform where you can get free video samples and upload one of your own",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: videohub,
    source_code_link: "https://github.com/tiwariParth/Videohub",
  },
  {
    name: "TechyStar",
    description: "This is a landing page for a web based serive buissness ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "css animation",
        color: "pink-text-gradient",
      },
    ],
    image: techystar,
    source_code_link: "https://github.com/tiwariParth/Techystar-LandingPage",
  },
];

export { services, technologies, projects };
