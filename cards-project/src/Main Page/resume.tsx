const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      skills: ["React", "TypeScript", "Next.js", "Node.js", "REST APIs", "Express", "MongoDB"],
    },
    {
      title: "Design",
      skills: ["Figma", "UI/UX Design", "Prototyping", "Branding"],
    },
    {
      title: "Tools & Methods",
      skills: ["Git/GitHub", "VS Code", "Blender","Power BI", "Performance Optimization"],
    },
  ];

  return (
    <section id="skills" className="py-32 relative bg-[hsl(20_14%_12%)] ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-sans text-lg text-[hsl(40_60%_55%)] tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2 className="font-serif md:lg:text-6xl text-5xl font-medium text-white">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl font-serif mx-auto text-[hsl(40_60%_55%)] ">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300"
            >
              <h3 className="font-display text-xl font-medium mb-6 text-accent">
                {category.title}
              </h3>
              <ul className="space-y-3 font-sans">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 text-[hsl(40_10%_55%)] "
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
