import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import admin from "@/public/images/projects/admin.png";
import store from "@/public/images/projects/store.png";
import ytClone from "@/public/images/projects/ytClone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Backend Developer - Django",
    organization: "Youth Technologies",
    description:
      "Worked as a Backend Developer with Python and Django./n Was responsible for implenting Authentication system in Django REST API. Also, assisted the frontend Development in the React Native side.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2020 - Dec 2020",
  },
  {
    title: "JavaScript Developer",
    organization: "Cybertech Systems and Software LTD.",
    description:
      "Worked as a JavaScript Developer for the organization. Where I created multiple projects for clients based on Plain JS or React.js. Also worked with React Native to create a internal Android application for Managers.",
    icon: React.createElement(GrNode),
    date: "Nov 2020 - May 2023",
  },
  {
    title: "Full-Stack Developer",
    organization: "Liquid Diamonds",
    description:
      "Working in React.js and Node.js for creating backend and frontend. Working on building a B2B app for diamonds trade and inventory insights ",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Store",
    description:
      "The E-commerce Store made using Next.js, is dependent on the Admin Dashboard Project mentioned previously. It is hosted on vercel, checkout using stripe.",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind"],
    imageUrl: store,
  },
  {
    title: "Admin Dashboard for Ecommerce",
    description:
      "Admin E-commerce app using Next js, Tailwind CSS and Clerk for authentication. Using Next.js for backend too using the API in the App Router.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Shadcn/UI", "MySql"],
    imageUrl: admin,
  },
  {
    title: "Youtube Clone",
    description:
      "Youtube clone created using React.js, MUI5, Vite, TypeScript. It has a UI like Youtube made using Material-ui 5 and also uses Rapid API for fetching the video data from the Youtube API.",
    tags: ["React", "Material UI v5", "SQL", "RapidApi"],
    imageUrl: ytClone,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Nest.js",
  "Framer Motion",
] as const;
