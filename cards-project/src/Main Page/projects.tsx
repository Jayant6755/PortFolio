
import {  ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Frameo – Image Platform with VS code Extension",
      category: "Web Development",
      description: "Frameo is a full-stack image-sharing platform inspired by Unsplash, built to help designers and developers find high-quality photos efficiently",
      images: "/Pictures/shubham-dhage-3JjnYjHCK0c-unsplash.jpg",
      github: "https://github.com/Jayant6755/Unsplash",
      sourcelink: "http://localhost:5173/not-found",
  
    },
    {
      title: "Tuto – Interactive Tutorial Platform for Students",
      category: "E-Learning",
      description: "An interactive tutorial platform that combines full-stack development with engaging educational content for students.",
      images: "/Pictures/5de63102937d14a8350c852d3bf689be.jpg",
      github: "https://github.com/Jayant6755/Tuto",
      sourcelink: "http://localhost:5173/not-found",
    },
 
  ];

  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-accent text-[hsl(40_60%_55%)] font-sans text-lg tracking-widest uppercase mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-white text-4xl md:text-7xl font-medium leading-tight">
              Featured
              <br />
              <span className="text-[hsl(40_10%_55%)]">Projects</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative block overflow-hidden rounded-2xl bg-[hsl(20_14%_12%)] overflow-hidden border-1 border-white/50 hover:scale-101 transition-all duration-400 "
            >
              
              <div
                className={`aspect-[16/10] relative overflow-hidden overflow-hidden`}
              >
                <img 
                src= {project.images}
                alt= {project.title} 
                className="object-cover w-full h-full "
                />
              </div>

              {/* Project Info */}
              <div className="p-8 font-serif">
                <p className="text-[hsl(40_60%_55%)] font-sans text-sm md:text-lg mb-2">{project.category}</p>
                <h3 className="text-2xl md:text-4xl font-medium mb-3 group-hover:text-accent transition-colors text-white/80">
                  {project.title}
                </h3>
                <p className="text-[hsl(40_30%_55%)] text-sm md:text-lg font-sans">
                  {project.description}
                </p>
                <div className="w-90 flex flex-row mt-4 lg:gap-4 py-2 md:lg:text-lg text-sm"> 
                  <a href={project.github} className="w-full">
                    <button className="flex items-center gap-2 border-white/50 hover:bg-[hsl(40_90%_55%)] hover:text-black border-1 bg-black rounded-lg lg:rounded-xl text-white/80 transition-colors font-sans font-medium lg:p-3 p-2 lg:w-full">
                      <Github className="lg:w-6 lg:h-6 w-4 h-4"/> Source Code
                    </button>
                  </a>
                  <a href={project.sourcelink} className="w-full lg:mr-0 mr-20">
                    <button className="flex items-center justify-center rounded-lg lg:rounded-xl gap-2 font-sans lg:w-full bg-[hsl(40_90%_55%)] text-black font-medium lg:p-3 p-2">
                      <ExternalLink className="lg:w-6 lg:h-6 w-4 h-4 "/> Live Demo 
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
