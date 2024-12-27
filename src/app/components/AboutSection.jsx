"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MongoDb</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React-native</li>
        <li>Docker</li>
        <li>Nextjs</li>
        <li>AWS S3</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Btech : Vignan's Institute Of Information Technology - Duvvada, Vishakapatnam</li>
        <li>Intermediate : Narayana Jr College - NAD</li>
        <li>Tenth : ST.ANN'S E.M HIGH SCHOOL - Mangalapalem</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          MERN STACK
          {/* Placing the "view" link next to the certification */}
          <a
            href="https://drive.google.com/file/d/1UoPNANFyyqTdTtCOGidpPb47TnCsaEgs/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:underline ml-2"
          >
            view
          </a>
        </li>
        <li>
        JAVASCRIPT
        {/* Placing the "view" link next to the certification */}
        <a
          href="https://drive.google.com/file/d/1TeUGSYsu5vU0HIy3CDebE91H-exW8rJ-/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 hover:underline ml-2"
        >
          view
        </a>
      </li>
      <li>
          PYTHON
          {/* Placing the "view" link next to the certification */}
          <a
            href="https://drive.google.com/file/d/1Tm02IKfmE30lhDvlaVQY9SEzRtZiN2hV/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:underline ml-2"
          >
            view
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-8">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, React-native, Node.js, Express,MongoDb,
            Nextjs, Docker, AWS S3 HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
