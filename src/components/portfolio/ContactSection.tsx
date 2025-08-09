import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <section
      className="h-screen snap-start bg-black text-white py-8 px-8 relative"
      style={{
        // backgroundImage: "url('/texhs.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      id="contact"
    >
      <div className="w-full flex flex-col justify-between h-full">
        <div className="">
          <p className="lg:text-8xl text-4xl lg:text-right text-center font-mono">Get in Touch</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:noman.tech777@gmail.com"
            className="block p-4 border border-white rounded-xl hover:bg-white hover:text-black transition:ease-in-out duration-300"
          >
            <Mail size={48} />
          </a>
          <a
            href="https://pk.linkedin.com/in/bwithnomi"
            target="_blank"
            className="block p-4 border border-white rounded-xl hover:bg-white hover:text-black transition:ease-in-out duration-300"
          >
            <Linkedin size={48} />
          </a>
          <a
            href="https://github.com/bwithnomi"
            target="_blank"
            className="block p-4 border border-white rounded-xl hover:bg-white hover:text-black transition:ease-in-out duration-300"
          >
            <Github size={48} />
          </a>
          <a
            href="tel:+923325671932"
            className="block p-4 border border-white rounded-xl hover:bg-white hover:text-black transition:ease-in-out duration-300"
          >
            <Phone size={48} />
          </a>
        </div>
        <div className="flex justify-center">
          <Image src="/server.svg" width={300} height={300} alt="server" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
