import {memo} from "react";
import { ArrowDown } from "lucide-react";
import {motion} from "framer-motion";


const Hero = memo(() => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative  ">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 ">
        <div className="max-w-4xl ">
          <p className=" font-sans text-sm md:text-lg tracking-widest uppercase mb-6 text-[hsl(40_80%_55%)] ">
            Creative Developer & Designer
          </p>
          

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-8 text-white">
            Crafting Digital
            <br />
            <span className="text-[hsl(40_80%_55%)] ">Experiences</span>
            <br />
            That Matter
          </h1>

          <p className="text-lg md:text-xl text-[hsl(40_10%_55%)] max-w-xl font-sans leading-relaxed mb-12 ">
            I'm a passionate developer focused on creating beautiful, 
            functional, and user-centered digital experiences.
          </p>

          <div className="flex flex-wrap  gap-4 text-white md:text-lg">
            <a
              href="#work"
              aria-label="View my projects"
              className="inline-flex  items-center gap-2 px-8 py-4 bg-gray-500 text-background font-medium rounded-full hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>
            <a
              href="#about"
              aria-label="Learn more about me"
              className="inline-flex items-center gap-2 px-8 py-4 border border-1 text-foreground font-medium rounded-full hover:bg-secondary transition-colors duration-300"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white hidden md:flex flex-col items-center gap-2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 motion-safe:animate-bounce" />
        </a>
      </div>
    </section>
  );
});

export default Hero;
