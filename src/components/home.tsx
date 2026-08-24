import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import emailjs from "@emailjs/browser";
import ProjectsSection from "./ProjectsSection";
import SkillsTimeline from "./SkillsTimeline";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");



  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // EmailJS configuration
      const serviceId = "service_kdeoewk";
      const templateId = "template_o1mnovp";
      const publicKey = "-_KN9FWDTeFYenQCF";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "rjkumar969305@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const skillsRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        style={{
          background: "rgba(13, 17, 23, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="w-full max-w-7xl px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1 rounded">
              <span className="font-bold text-xl">RKN</span>
            </div>
            <span className="font-bold text-xl tracking-wide">RAJ KUMAR NISHAD</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-8">
            {[
              { href: "#home", label: "HOME" },
              { href: "#about", label: "ABOUT ME" },
              { href: "#skills", label: "SKILLS" },
              { href: "#projects", label: "PROJECTS" },
              { href: "#resume", label: "RESUME" },
              { href: "#contact", label: "CONTACT" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            className="
              bg-gradient-to-r from-green-400 to-blue-500
              hover:from-green-500 hover:to-blue-600
              rounded-full px-8 py-3 font-semibold
              transition-all duration-300 ease-out
              hover:scale-[1.03]
              hover:shadow-[0_0_20px_4px_rgba(52,211,153,0.45),0_0_40px_8px_rgba(59,130,246,0.25)]
            "
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            LET'S TALK
          </Button>
        </div>
      </nav>

      {/* Spacer so content doesn't hide under fixed nav */}
      <div className="h-[72px]" />
      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto py-10 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex h-3 w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <Badge
              variant="outline"
              className="text-green-400 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-colors px-3 py-1 text-xs tracking-wider font-medium">
              OPEN TO WORK
            </Badge>
          </div>
          <h3 className="text-lg font-medium mb-2">RAJ KUMAR NISHAD</h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4">
            HI! I'M RAJ KUMAR
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold mb-6">
            <span className="text-white">I'M A </span>
            <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default">
              FRESHER MOBILE APPLICATION DEVELOPER"
            </span>
          </motion.h2>
          <style>{`

            @keyframes float {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }
          `}</style>
          <p className="text-gray-400 mb-8 max-w-lg">
            "A passionate Fresher Mobile Developer with strong foundational skills in Native Android (Kotlin) and React Native. I have spent my time building personal applications to understand local storage, APIs, and UI states. Eager to join a professional development team as a junior developer or intern to contribute, learn from experts, and tackle real-world challenges."
          </p>
          <div className="flex gap-4 mb-8">
            <Button
              className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 flex items-center gap-2"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }>
              GET IN TOUCH <span className="ml-1">→</span>
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ease-out"
                asChild>
                <a
                  href="https://github.com/raj-9693"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Github size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ease-out"
                asChild>
                <a
                  href="http://www.linkedin.com/in/raj-kumar-nishad"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ease-out"
                asChild>
                <a href="mailto:rajnishad96930@gmail.com">
                  <Mail size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative z-10">
            <img
              src={new URL('/images/profile.png', import.meta.url).href}
              alt="Raj Kumar Nishad"
              className="rounded-full max-w-sm mx-auto shadow-2xl shadow-blue-500/20 animate-bounce "
              style={{
                animation: "float 3s ease-in-out infinite",
              }} />
          </div>
          <div
            className="absolute inset-0 bg-blue-500/10 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          <div className="absolute top-0 right-0 w-full h-full">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 h-px bg-gray-700"
                style={{
                  width: "100%",
                  top: `${(i + 1) * 30}px`,
                  opacity: 0.5 - i * 0.05,
                }}></div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="container mx-auto py-20 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 relative">
          <div className="relative z-10">
            <img
              src={new URL('/images/profile.png', import.meta.url).href}
              alt="Raj Kumar Nishad"
              className="rounded-full max-w-sm mx-auto shadow-2xl shadow-blue-500/20"
              style={{
                animation: "float 3s ease-in-out infinite",
              }} />
          </div>
          <div
            className="absolute inset-0 bg-blue-500/10 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-blue-500/20">
              <path
                fill="currentColor"
                d="M45.3,-51.2C56.9,-42.9,63.3,-26.9,65.3,-10.8C67.2,5.3,64.7,21.5,56.4,34.1C48.1,46.7,34,55.8,18.4,61.5C2.9,67.2,-14.1,69.5,-28.2,63.9C-42.3,58.3,-53.5,44.7,-59.9,29.7C-66.3,14.6,-67.9,-1.9,-62.3,-15.6C-56.7,-29.3,-43.9,-40.2,-30.5,-48C-17.1,-55.8,-3,-60.5,10.5,-60.8C24,-61.1,33.7,-59.5,45.3,-51.2Z"
                transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-blue-500 font-medium mb-2">"Crafting Smooth Mobile Experiences Across Android & iOS"</h3>
          <h2 className="text-3xl font-bold mb-6">
            "I build modern, functional mobile apps with Kotlin and React Native."
          </h2>
          <p className="text-gray-400 mb-8">
            "I am a passionate Mobile App Developer focused
            on creating intuitive and user-friendly applications.
            With hands-on experience in Native Android (Kotlin,Room DB,XML)
            and React Native, I love building features that
            solve real-world problems—whether it’s managing local
            storage, handling live API data, or building custom interactive UI layers."
            <br />
            <br />
            "Currently, I am pursuing my BCA and actively seeking
            internship or entry-level opportunities to grow as a
            developer in a collaborative team environment. I
            continuously sharpen my skills through practical,
            hands-on personal projects and strongly believe in
            learning by doing."
          </p>

          <Button
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 flex items-center gap-2"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }>
            GET IN TOUCH <span className="ml-1">→</span>
          </Button>
        </div>
      </section>
      {/* Projects Section */}
      <ProjectsSection />
      {/* Resume Section */}
      <section id="resume" className="container mx-auto py-20">
        <div className="text-center mb-12">
          <h3 className="text-blue-500 font-medium mb-2">RESUME</h3>
          <h2 className="text-3xl font-bold mb-4">
            FRESHER ANDROID DEVELOPER - RESUME
          </h2>

          <p className="text-gray-400 mb-8">
            Download my resume to explore my learning journey and projects.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button
              className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 flex items-center gap-2"
              asChild>
              <a
                href="https://drive.google.com/uc?export=download&id=1OAy2cJB8f3xG62NFArt5itEXEOxSVwkt"
                download="Raj-Kumar-Nishad-Resume.pdf">
                <Download size={18} />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full px-6"
              asChild>
              <a
                href="https://drive.google.com/file/d/1OAy2cJB8f3xG62NFArt5itEXEOxSVwkt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer">
                View Online
              </a>
            </Button>
          </div>
        </div>

        {/* Resume Highlights */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="group">
              <Card
                className="bg-slate-800 border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer h-48">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="bg-blue-500/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <h3
                      className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                      Education
                    </h3>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div>
                      <h4
                        className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        Bachelor of Computer Applications (BCA)
                      </h4>
                      <p
                        className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Currently Pursuing
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Experience */}
            <div className="group">
              <Card
                className="bg-slate-800 border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="bg-blue-500/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <h3
                      className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                      Experience
                    </h3>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div>
                      <h4
                        className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        Android Developer (Fresher)
                      </h4>
                      <p
                        className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Actively seeking Internship or Entry-level Opportunity
                      </p>
                      <p
                        className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors duration-300">
                        Mobile developer skilled in native Android Kotlin, and actively building cross-platform
                        apps using React Native and JavaScript from scratch.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills – Roadmap Timeline
          <div id="skills" ref={skillsRef} className="mt-8">
            <SkillsTimeline />
          </div> */}

      {/* Technical Skills – Roadmap Timeline */}
      <div
        id="skills"
        ref={skillsRef}
        className="mt-8 w-screen relative left-1/2 right-1/2 -mx-[50vw] px-4"
      >
        <div className="max-w-6xl mx-auto">
          <SkillsTimeline />
        </div>
      </div>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-blue-500 font-medium mb-2">CONTACT</h3>
            <h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
            <p className="text-gray-400">
              Ready to start your next project? Let's work together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="mailto:rajnishad96930@gmail.com"
                className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-slate-800/50 p-3 rounded-lg">
                <div
                  className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <Mail
                    className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                    size={20} />
                </div>
                <div>
                  <h4
                    className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Email
                  </h4>
                  <p
                    className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 group-hover:underline">
                    rajnishad96930@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://github.com/raj-9693"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-slate-800/50 p-3 rounded-lg">
                <div
                  className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <Github
                    className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                    size={20} />
                </div>
                <div>
                  <h4
                    className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    GitHub
                  </h4>
                  <p
                    className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 group-hover:underline">
                    github.com/raj-9693
                  </p>
                </div>
              </a>
              <a
                href="http://www.linkedin.com/in/raj-kumar-nishad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-slate-800/50 p-3 rounded-lg">
                <div
                  className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <Linkedin
                    className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                    size={20} />
                </div>
                <div>
                  <h4
                    className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    LinkedIn
                  </h4>
                  <p
                    className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 group-hover:underline">
                    linkedin.com/in/raj-kumar-nishad
                  </p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none" />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-3 font-semibold transition-colors">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitStatus === "success" && (
                <p className="text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Raj Kumar Nishad. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
