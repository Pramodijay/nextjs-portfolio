"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Pet Store Management System",
    description: "We are designing a pet store management system for the 'Happy Paws' pet store",
    image: "/images/projects/happy-paws.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: " Pizza Store Management System ",
    description: "The System is a web-based application that allows the pizza shop to handle all it's activities.",
    image: "/images/projects/pizza-stone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SANCS99/THE-PIZZA-STONE",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Electro Grid system ",
    description: "Authentication and CRUD operations",
    image: "/images/projects/electro-grid.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Pramodijay/Electro-Grid---Frontend",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Car Rental System ",
    description: " We are introducing the latest vehicle rental. mobile application called -Dream Epic.",
    image: "/images/projects/car-rental.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Danusha123/Astra-ride",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Rehabilitaion Monitoring and Guidance System",
    description: "FINAL YEAR RESEARCH PROJECT ",
    image: "/images/projects/reserach.png",
    tag: ["All", "Mobile"],
    gitUrl: "http://gitlab.sliit.lk/23-070-rehabilitation-monitoring-and-guidance-system/rehabilitation-monitoring-and-guidance-system",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
 
  
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
      <ul  className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
         
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
         
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;