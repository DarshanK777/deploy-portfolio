"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import IconEmbed from "./iconEmbed";
import { flutter, framer, react, redux, tailwind } from "@/lib/utils";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="prose prose-neutral dark:prose-invert mb-4">
        I'm a Software Developer, curently working with Liquid Diamonds. I have
        2+ years of Experience working with React.js{" "}
        <span>
          <IconEmbed url={react} alt="react-native" />
        </span>
        , Redux
        <span>
          <IconEmbed url={redux} alt="redux" />
        </span>
        , and other libraries like TailwindCSS
        <span>
          <IconEmbed url={tailwind} alt="tailwind" />
        </span>
        , framer-motion
        <span>
          <IconEmbed url={framer} alt="framer" />
        </span>
        , etc.
      </p>

      <p className="prose prose-neutral dark:prose-invert mb-4 ">
        I have worked with multiple clients in the previous organization and was
        able to provide them with performant Full Stack Apps to work with. I
        have also have experience working with cross-platform mobile development
        frameworks as Flutter{" "}
        <span>
          <IconEmbed url={flutter} alt="flutter" />
        </span>
        / React Native{" "}
        <span>
          <IconEmbed url={react} alt="react-native" />
        </span>
        .
      </p>

      <p className="prose prose-neutral dark:prose-invert mb-4">
        Other than coding, I love to play video games such as Valorant, Apex,
        CS:GO. I also like being part of online communities like Theo's or Josh
        tried Coding, etc.
      </p>
    </motion.section>
  );
}
