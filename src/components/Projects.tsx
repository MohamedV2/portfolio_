import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    { id: 1, title: "Project 1", description: "A cool React project" },
    { id: 2, title: "Project 2", description: "An awesome JavaScript game" },
    { id: 3, title: "Project 3", description: "A useful web application" },
  ];

  return (
    <section id="projects" className="my-8">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

