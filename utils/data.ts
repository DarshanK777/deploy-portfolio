import github from "@/public/images/icons/github.png";
import linkedin from "@/public/images/icons/linkedin.png";
import twitter from "@/public/images/icons/twitter.png";
import gmail from "@/public/images/icons/gmail.png";
import { medium, videoChat, ytClone } from "./image";
import { Experience, Project } from "@/types/app";
import youth from "@/public/images/company/youth.jpg";
import cybertech from "@/public/images/company/cybertech.jpg";
import ld from "@/public/images/company/ld.png";

export const connectMap = [
  {
    iconUrl: github,
    url: "https://github.com/dk5761",
    alt: "Github",
    label: "Github",
  },
  {
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/dk5761/",
    alt: "Linked In",
    label: "Linked In",
  },
  {
    iconUrl: twitter,
    url: "https://twitter.com/dk5761",
    alt: "Twitter",
    label: "Twitter",
  },
  {
    iconUrl: gmail,
    url: "mailto:darshankadam714@gmail.com",
    alt: "Gmail",
    label: "Gmail",
  },
];

export const projects: Project[] = [
  {
    name: "Youtube Clone",
    description:
      "Youtube clone created using React.js, MUI5, Vite, TypeScript. It has a UI like Youtube made using Material-ui 5 and also uses Rapid API for fetching the video data from the Youtube API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI-V5",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: ytClone,
    source_code_link: "https://github.com/",
    live_link: "https://video-sharing-dk5761.netlify.app/",
  },
  {
    name: "Video Calling",
    description:
      "Video Calling site using React, Socket.io, simple-peer and MUI v5. It also has a backend server which is responsible for handling socket calls created using Node/Express.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI-V5",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: videoChat,
    source_code_link: "https://github.com/dk5761/react-vc-ui",
    live_link: "https://video-calling-dk5761.netlify.app/",
  },
  {
    name: "Medium Clone",
    description: "Medium clone, where we can create a blog and view the blog.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity CMS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: medium,
    source_code_link: "https://github.com/dk5761/nextjs-blog",
    live_link: null,
  },
];

export const experience: Experience[] = [
  {
    name: "Liquid Diamonds",
    position: "Software Developer - React.js, Node.js",
    description:
      "Working in React.js and Node.js for creating backend and frontend./n Created a tool for diamond traders to compare suppliers diamonds and market diamonds./n Worked on a creating a Node + React Application which parse a excel, fetch the videos present in the excel from the supplier cloud and upload it on our cloud.",
    image: ld,
    start: "May, 2023",
    end: "Present",
  },
  {
    name: "Cybertech Systems and Software LTD.",
    position: "UI Developer - React.js",
    description:
      "Worked as a React Developer for the organization. Where I created multiple projects for multiple clients. The Organization mainly deals with the GIS Industry and ESRI based clients./n Integrated Maps and GIS technologies with React to create performant and functional websites./n Also worked with ReactNative to create a internal tool for Managers.",
    image: cybertech,
    start: "Nov, 2020",
    end: "May, 2023",
  },
  {
    name: "Youth Technologies",
    position: "Backend Developer - Django",
    description:
      "Worked as a Backend Developer with Python and Django./n Was responsible for implenting Authentication system in Django REST API./n Also, assisted the frontend Development in the React Native side. ",
    image: youth,
    start: "Aug, 2020",
    end: "Dec, 2020",
  },
];
