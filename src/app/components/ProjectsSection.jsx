"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MENU MATE",
    description: "A FinTech-themed app that streamlines dining experiences by allowing users to scan QR codes at tables or restaurant menus to order food seamlessly.Eliminates waiting for busy waiters and avoids overcrowded bar queues.Built with React-Native, and stores order details with auto-saving into Supabase.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/GorapalliRaju/Menu-Mate",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "DEV TALK",
    description: "Developed a collaborative coding platform allowing multiple users to edit code simultaneously.Integrated a real-time chat feature to enhance communication between users using Socket.io.Used MongoDB for storing chat details, ensuring persistent data storage and retrieval.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GorapalliRaju/DevTalk",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "DEV FINDER",
    description: "Allows users to input a GitHub username and retrieves details about that user, such as their bio, repositories, followers, and other relevant information from their public GitHub profile. This tool simplifies the process of gathering information about GitHub users efficiently.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GorapalliRaju/DevFinder",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "CHAT APPLICATION",
    description: "software application that enables users to exchange messages and communicate with each other in real-time. It allows individuals or groups to have conversations, share information, and collaborate instantly over the Internet.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GorapalliRaju/chat--application",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "DICEE GAME",
    description: "A two-player game where each player rolls a dice, and the highest roll wins! Built with HTML, CSS, and JavaScript, it features a dynamic interface and real-time results. Perfect for quick, fun matches with friends or family!",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GorapalliRaju/dicee",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "DRUMKIT MUSICAL APP",
    description: " A fun musical game where users press keys to play different drum sounds! Built with HTML, CSS, and JavaScript, it features interactive animations and realistic sound effects. Perfect for exploring rhythm and having a blast!",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GorapalliRaju/drumkit",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
