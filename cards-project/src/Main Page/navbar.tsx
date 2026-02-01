import { useState, useEffect } from "react";
import {motion} from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? " backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-xl font-semibold tracking-tight hover:text-accent text-white md:text-xl transition-colors"
        >
          Portfolio
        </a>

        <ul className="hidden md:flex items-center gap-8 font-sans">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg font-body text-[hsl(40_10%_55%)] hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-lg font-medium bg-[hsl(40_80%_60%)] text-accent-foreground rounded-full hover:opacity-90 transition-opacity"
        >
          Let's Talk
        </a>
      </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
