import { Mail, Linkedin, Github, MapPin } from "lucide-react";

// Contact card component
const ContactCard = ({
  icon,
  title,
  value,
  href,
  bgClass,
}: {
  icon: JSX.Element;
  title: string;
  value: string;
  href: string;
  bgClass: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors px-6 py-4 rounded-xl shadow-md w-full h-20"
    >
      <div className={`p-2 rounded-lg ${bgClass} text-white flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex flex-col items-start">
        <p className="text-white font-semibold text-sm">{title}</p>
        <p className="text-gray-300 text-base">{value}</p>
      </div>
    </a>
  );
};

// Contact section
export default function Contact() {
  return (
    <section id="contact" className="py-12 text-center">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        Get In Touch
      </h2>
      <p className="text-gray-400 mt-2">
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="flex flex-col gap-6 max-w-lg mx-auto mt-10 px-4">
        <ContactCard
          icon={<Mail size={24} />}
          title="Email"
          value="abhimanu9616@gmail.com"
          href="mailto:abhimanu9616@gmail.com"
          bgClass="bg-cyan-800"
        />
        <ContactCard
          icon={<Linkedin size={24} />}
          title="LinkedIn"
          value="linkedin.com/in/prakhar-singhal-638007356"
          href="https://www.linkedin.com/in/prakhar-singhal-638007356"
          bgClass="bg-purple-800"
        />
        <ContactCard
          icon={<Github size={24} />}
          title="GitHub"
          value="github.com/prakharsinghal"
          href="https://github.com/prakharsinghal"
          bgClass="bg-teal-800"
        />
        <ContactCard
          icon={<MapPin size={24} />}
          title="Location"
          value="Noida, India"
          href="#"
          bgClass="bg-gray-700"
        />
      </div>
    </section>
  );
}
