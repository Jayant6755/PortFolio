import { ExternalLink, Github } from "lucide-react";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);

  const projects = [
    {
      title: "Frameo",
      subtitle: "Image Platform with VS Code Extension",
      category: "Web Development",
      description: "An image-sharing platform inspired by Unsplash, built to help designers and developers source resources directly within their IDE ecosystem.",
      images: "/Pictures/shubham-dhage-3JjnYjHCK0c-unsplash.jpg",
      github: "https://github.com/Jayant6755/Frameo",
      sourcelink: "https://frameo-three.vercel.app/",
    },
    {
      title: "Tuto",
      subtitle: "Interactive E-Learning Platform",
      category: "E-Learning Infrastructure",
      description: "An interactive educational system combining real-time rich text sync with engaging multi-tier modular learning workflows.",
      images: "/Pictures/5de63102937d14a8350c852d3bf689be.jpg",
      github: "https://github.com/Jayant6755/Tuto",
      sourcelink: "http://localhost:5173/not-found",
    },
    {
      title: "MovieGenie",
      subtitle: "AI-Powered Recommendation Engine",
      category: "Artificial Intelligence",
      description: "A machine-learning recommendation model that maps user browsing semantics and historically liked matrices to render clean personal watch queues.",
      images: "/Pictures/unsplash-wMkaMXTJjlQ.jpg",
      github: "https://github.com/Jayant6755/MovieRecommendation",
      sourcelink: "https://movie-recommendation-navy-sigma.vercel.app/",
    }
  ];

  const autoplay = React.useRef(Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    
  }));

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="work" className="py-32 relative bg-black text-white overflow-hidden select-none">
      
      {/* Golden Ambient Depth Light behind the slider deck */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[hsl(40_80%_55%)]/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <p className="text-[hsl(40_80%_55%)] font-sans text-xs tracking-[0.2.5em] uppercase mb-4 font-semibold">
            Selected Work
          </p>
          <h2 className="font-serif text-white text-5xl md:text-7xl font-light leading-tight tracking-tight">
            Featured <br />
            <span className="text-[hsl(40_80%_55%)] font-serif">Projects</span>
          </h2>
        </div>

        {/* Carousel Slider Interface Container */}
        <div className="w-full relative px-4 md:px-20">
          <Carousel
            setApi={setApi}
            plugins={[autoplay.current]}
            opts={{
              align: "center", 
              loop: true, 
              duration: 80,
            }}
            className="w-full overflow-visible"
          >
            <CarouselContent className="-ml-6 md:-ml-12 items-center py-12 ">
              {projects.map((project, index) => {
                const isActive = index === current;

                return (
                  <CarouselItem 
                    key={index} 
                    className="pl-6 md:pl-12 basis-full md:basis-[70%] lg:basis-[55%] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                   
                  >
                    
                    <div 
                      className={`relative rounded-3xl border-2 hover:border-[hsl(40_50%_55%)] bg-[hsl(20_14%_9%)] border lg:shadow-[10px_25px_60px_25px_rgba(212,175,85,0.2)]  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden
                        ${isActive 
                          ? "scale-105 md:scale-110 border-neutral-800 z-20 shadow-[0_25px_60px_-15px_rgba(212,175,55,0.08)] opacity-100" 
                          : "scale-90 border-transparent z-10 opacity-30 blur-[2px] pointer-events-none"
                        }`}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12">
                        
                        {/* Media Display Block (Left/Top) */}
                        <div className="lg:col-span-6 aspect-[16/11] lg:aspect-auto relative overflow-hidden bg-neutral-950">
                          <img 
                            src={project.images}
                            alt={project.title} 
                            className={`object-cover w-full h-full transition-all duration-1000 ease-out
                              ${isActive ? "grayscale-0 scale-100 contrast-105" : "grayscale"}`}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Text and Actions Meta Section (Right/Bottom) */}
                        <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-900 bg-gradient-to-br from-neutral-950/40 to-transparent">
                          <div>
                            <span className="text-[hsl(40_80%_55%)] font-sans text-[10px] tracking-widest uppercase font-semibold block mb-2">
                              {project.category}
                            </span>
                            <h3 className="text-2xl font-sans font-medium text-white tracking-tight mb-1">
                              {project.title}
                            </h3>
                            <p className="text-gray-500 font-sans text-xs font-medium mb-4">
                              {project.subtitle}
                            </p>
                            <p className="text-gray-400 text-sm font-sans font-light leading-relaxed mb-6">
                              {project.description}
                            </p>
                          </div>

                          {/* Split CTA Actions UI */}
                          <div className="flex flex-row gap-3 font-sans text-xs font-semibold"> 
                            <a href={project.github} target="_blank" rel="noreferrer" className="w-full">
                              <button className="w-full flex items-center justify-center gap-2 border border-neutral-800 bg-neutral-950 hover:bg-white hover:text-black rounded-xl text-gray-300 transition-all duration-300 py-3 cursor-pointer">
                                <Github className="w-3.5 h-3.5"/> Code
                              </button>
                            </a>
                            <a href={project.sourcelink} target="_blank" rel="noreferrer" className="w-full">
                              <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-[hsl(40_80%_55%)] text-black hover:bg-white transition-all duration-300 py-3 cursor-pointer">
                                <ExternalLink className="w-3.5 h-3.5"/> Live Demo
                              </button>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Custom Circular Arrows Styled Specifically for Dark Minimal Backgrounds */}
            <CarouselPrevious className="hidden md:flex border-neutral-800 bg-neutral-950 text-white hover:bg-white hover:text-black w-12 h-12 -left-16" />
            <CarouselNext className="hidden md:flex border-neutral-800 bg-neutral-950 text-white hover:bg-white hover:text-black w-12 h-12 -right-16" />
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default Projects;