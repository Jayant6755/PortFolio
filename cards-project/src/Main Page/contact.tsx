import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jayantnegi28@gmail.com",
      href: "mailto:jayantnegi28@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Haldwani, Uttarakhand",
      href: "#",
    },
  ];

  const socials = [
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Dribbble", href: "#" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-sans text-sm tracking-widest uppercase mb-4 text-[hsl(40_80%_55%)]" >
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-6 text-white">
              Let's Create Something
              <br />
              <span className="text-[hsl(40_80%_50%)]">Amazing Together</span>
            </h2>
            <p className="text-[hsl(40_10%_55%)] md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Have a project in mind or just want to chat? I'd love to hear from you.
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 font-serif">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center bg-[hsl(20_14%_12%)] gap-4 px-6 py-4 bg-card border border-border rounded-full hover:border-accent/30 transition-colors group"
              >
                <item.icon className="w-5 h-5 text-accent text-[hsl(40_80%_50%)]" />
                <div className="text-left">
                  <p className="text-sm text-[hsl(40_10%_55%)] ">{item.label}</p>
                  <p className="font-medium group-hover:text-accent text-white transition-colors font-sans">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mb-20" >
            <a
              href="mailto:jayantnegi28@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[hsl(40_80%_60%)] font-medium rounded-full hover:scale-105 transition-transform duration-300 text-lg"
            >
              Start a Conversation
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 pt-10 border-t border-border">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
