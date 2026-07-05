import {memo, useEffect, useState, useRef} from "react";

const AnimatedCounter = ({ value, duration = 1500 }: { value: string; duration?: number }) =>{
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/\d/g, '');
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((entry) => entry.isIntersecting);

        if (entry && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: any = null;

          const animate = (timestamp: number) => {
            if(!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressRatio = Math.min(progress / duration, 1);

            const easeOutCubic = 1 - Math.pow(1 - progressRatio, 3);

            setCount(Math.floor(easeOutCubic * numericValue));

            if(progress < duration){
              window.requestAnimationFrame(animate);
            }
          };

          window.requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if(elementRef.current){
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "5+", label: "Projects Completed" },
    
  ];

const About = memo(() => {
  
  

  return (
    <section id="about" className="py-32 relative">
      
      <div className="container mx-auto px-6">
        <div className="grid  lg:grid-cols-2 gap-16 items-center">
          
          {/* Image side */}
          <div className="relative rounded-2xl p-4 lg:p-6 xl:p-8 lg:mx-0 lg:mb-0">
            <img 
            src="\Pictures\ChatGPT Image Jul 2, 2026, 05_38_42 PM.png" 
            alt="My Image"
            className="w-full lg:h-150 object-cover rounded-xl"
            loading="lazy"
            />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 pointer-events-none" />
            
            
          </div>

          {/* Content side */}
          <div>
            <p className="text-accent text-[hsl(40_10%_55%)] font-sans text-lg tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-7xl font-medium mb-8 leading-tight text-white">
              Turning Ideas Into
              <br />
              <span className="text-[hsl(40_80%_55%)]">Elegant Solutions</span>
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
            <div className="grid grid-cols-2 gap-8 font-serif">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-yellow-600 mb-1">
                    <AnimatedCounter value={stat.number} duration={1500} />
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
