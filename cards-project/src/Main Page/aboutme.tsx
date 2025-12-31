import {memo} from "react";
const About = memo(() => {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative border-2 border-white/80 rounded-2xl p-4 lg:p-6 xl:p-8 max-w-md mx-auto lg:mx-0 mb-12 lg:mb-0">
            <img 
            src="\public\Pictures\064b9b5b-a18f-4c85-90f8-1b96361f4fdc.jpeg" 
            alt="My Image"
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
            />
            
            
          </div>

          {/* Content side */}
          <div>
            <p className="text-accent text-[hsl(40_10%_55%)] font-sans text-lg tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-7xl font-medium mb-8 leading-tight text-white">
              Turning Ideas Into
              <br />
              <span className="text-[hsl(40_10%_55%)]">Elegant Solutions</span>
            </h2>

            <div className="space-y-6 text-[hsl(40_10%_55%)] leading-relaxed md:text-xl font-sans mb-12 ">
              <p>
                I'm a creative developer with a passion for building beautiful, 
                functional websites and applications. With a background in both 
                design and development, I bring a unique perspective to every project.
              </p>
              <p>
                My approach combines clean code with thoughtful design, 
                ensuring that every project not only looks great but also 
                performs exceptionally. I believe in creating experiences 
                that are intuitive, accessible, and memorable.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 font-serif">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-yellow-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-lg text-[hsl(40_10%_55%)] font-sans">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
