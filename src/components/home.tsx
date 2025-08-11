import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import emailjs from "@emailjs/browser";
import ProjectsSection from "./ProjectsSection";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Typewriter animation state
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const phrases = ["ANDROID DEVELOPER", "NATIVE ANDROID DEVELOPER"];

  // Skills data with percentages
  const skills = [
    { name: "Kotlin", percentage: 85 },
    { name: "MVVM", percentage: 70 },
    { name: "Room DB", percentage: 75 },
    { name: "Retrofit", percentage: 80 },
    { name: "Firebase", percentage: 70 },
    { name: "REST API", percentage: 85 },
    { name: "Android Studio", percentage: 90 },
    { name: "UI/UX", percentage: 70 },
    { name: "XML", percentage: 85 },
    { name: "Android SDK", percentage: 70 },
    { name: "GitHub", percentage: 65 },
  ];

  // Remove scroll-based animation state
  const skillsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(true); // Always true to show progress bars

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < currentPhrase.length) {
        setCurrentText(currentPhrase.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setCurrentText(currentPhrase.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, phraseIndex, phrases]);

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

  // Horizontal Skill Bar Component
  const HorizontalSkillBar = ({
    skill,
    index,
  }: {
    skill: { name: string; percentage: number };
    index: number;
  }) => {
    // Get original technology logos/icons
    const getSkillIcon = (skillName: string) => {
      const iconSize = 24;
      const iconClass = "mb-3 drop-shadow-lg";

      switch (skillName.toLowerCase()) {
        case "kotlin":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="kotlinGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#E44857" />
                    <stop offset="25%" stopColor="#C711E1" />
                    <stop offset="50%" stopColor="#7F52FF" />
                    <stop offset="75%" stopColor="#0B7EFF" />
                    <stop offset="100%" stopColor="#009639" />
                  </linearGradient>
                </defs>
                <path d="M24 24H12L24 12V24Z" fill="url(#kotlinGradient)" />
                <path d="M12 0H0V12L12 0Z" fill="url(#kotlinGradient)" />
                <path d="M0 24H12L0 12V24Z" fill="url(#kotlinGradient)" />
                <path d="M24 0H12L24 12V0Z" fill="url(#kotlinGradient)" />
              </svg>
            </div>
          );
        case "firebase":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.803 21.803l2.616-16.234L12 1l3.581 4.569 2.616 16.234L12 23l-6.197-1.197z"
                  fill="#FFA000"
                />
                <path
                  d="M16.5 6.036l-4.5-1.5L8.5 9.036l4 14.464 8-4.5-4-13z"
                  fill="#F57C00"
                />
                <path
                  d="M12 1L8.5 9.036l3.5 14.464L16.5 6.036 12 1z"
                  fill="#FFCA28"
                />
              </svg>
            </div>
          );
        case "github":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="#ffffff"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
          );
        case "android studio":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="androidGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4285F4" />
                    <stop offset="25%" stopColor="#34A853" />
                    <stop offset="50%" stopColor="#FBBC04" />
                    <stop offset="75%" stopColor="#EA4335" />
                    <stop offset="100%" stopColor="#4285F4" />
                  </linearGradient>
                </defs>
                <path
                  d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.637.637 0 0 0-.83-.22c-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
                  fill="url(#androidGradient)"
                />
              </svg>
            </div>
          );
        case "room db":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" fill="#4CAF50" />
                <path
                  d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="12" cy="12" r="2" fill="#81C784" />
              </svg>
            </div>
          );
        case "retrofit":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                  stroke="#FF6B35"
                  strokeWidth="2"
                  fill="#FF8A65"
                />
                <polyline
                  points="7.5 4.21 12 6.81 16.5 4.21"
                  stroke="#FF6B35"
                  strokeWidth="2"
                />
                <polyline
                  points="7.5 19.79 7.5 14.6 3 12"
                  stroke="#FF6B35"
                  strokeWidth="2"
                />
                <polyline
                  points="21 12 16.5 14.6 16.5 19.79"
                  stroke="#FF6B35"
                  strokeWidth="2"
                />
                <polyline
                  points="3.27 6.96 12 12.01 20.73 6.96"
                  stroke="#FF6B35"
                  strokeWidth="2"
                />
                <line
                  x1="12"
                  y1="22.08"
                  x2="12"
                  y2="12"
                  stroke="#FF6B35"
                  strokeWidth="2"
                />
              </svg>
            </div>
          );
        case "rest api":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  fill="#2196F3"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          );
        case "mvvm":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  ry="2"
                  fill="#9C27B0"
                  stroke="#E1BEE7"
                  strokeWidth="2"
                />
                <path d="M9 9h6v6H9z" fill="#CE93D8" />
                <circle cx="12" cy="12" r="2" fill="#AB47BC" />
              </svg>
            </div>
          );
        case "ui/ux":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="uiuxGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="50%" stopColor="#4ECDC4" />
                    <stop offset="100%" stopColor="#45B7D1" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="url(#uiuxGradient)"
                />
              </svg>
            </div>
          );
        case "xml":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="2"
                  fill="#FF9800"
                />
                <polyline
                  points="16 18 22 12 16 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-4, 0)"
                />
                <polyline
                  points="8 6 2 12 8 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(4, 0)"
                />
              </svg>
            </div>
          );
        case "android sdk":
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.637.637 0 0 0-.83-.22c-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
                  fill="#3DDC84"
                />
              </svg>
            </div>
          );
        default:
          return (
            <div className={iconClass}>
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="2"
                  fill="#6366F1"
                />
                <polyline
                  points="16 18 22 12 16 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-4, 0)"
                />
                <polyline
                  points="8 6 2 12 8 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(4, 0)"
                />
              </svg>
            </div>
          );
      }
    };

    return (
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 cursor-pointer group border border-slate-700 hover:border-blue-500/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm relative overflow-hidden transition-all duration-300">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

        <div className="relative z-10">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            {getSkillIcon(skill.name)}
          </div>

          {/* Skill Name with white text */}
          <h4 className="text-sm font-semibold text-center mb-4 text-white">
            {skill.name}
          </h4>

          {/* Enhanced Progress Bar Container */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 bg-slate-700/50 rounded-full overflow-hidden relative backdrop-blur-sm">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full" />

              {/* Progress bar */}
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 rounded-full relative overflow-hidden"
                style={{
                  width: `${skill.percentage}%`,
                }}
              >
                {/* Subtle shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </div>

            {/* Percentage display */}
            <span className="text-sm font-bold min-w-[40px] text-right bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
              {skill.percentage}%
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1 rounded">
            <span className="font-bold text-xl">RKN</span>
          </div>
          <span className="font-bold text-xl">RAJ KUMAR NISHAD</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a
            href="#home"
            className="hover:text-blue-400 hover:font-bold transition-all duration-300"
          >
            HOME
          </a>
          <a
            href="#about"
            className="hover:text-blue-400 hover:font-bold transition-all duration-300"
          >
            ABOUT ME
          </a>
          <a
            href="#projects"
            className="hover:text-blue-400 hover:font-bold transition-all duration-300"
          >
            PROJECTS
          </a>
          <a
            href="#resume"
            className="hover:text-blue-400 hover:font-bold transition-all duration-300"
          >
            RESUME
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 hover:font-bold transition-all duration-300"
          >
            CONTACT
          </a>
        </div>
        <Button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-full px-8 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out font-semibold"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          LET'S TALK
        </Button>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto py-20 flex flex-col md:flex-row items-center gap-10"
      >
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2">RAJ KUMAR NISHAD</h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            HAY! I'M RAJ KUMAR
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            <span className="text-white">I'M AN </span>
            <span
              className={`inline-block ${
                phraseIndex === 0
                  ? "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse"
                  : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              }`}
              style={{
                backgroundSize: phraseIndex === 1 ? "200% 200%" : "100% 100%",
                animation:
                  phraseIndex === 1
                    ? "gradient-shift 3s ease-in-out infinite"
                    : undefined,
              }}
            >
              {currentText}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </motion.h2>
          <style>{`
            @keyframes gradient-shift {
              0%,
              100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }
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
            "I am a passionate Android developer beginner, learning and building
            modern mobile apps using Android Studio, REST APIs, Retrofit, Room,
            and Firebase. I follow clean code principles and continuously
            improve my skills through real projects."
          </p>
          <div className="flex gap-4 mb-8">
            <Button
              className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 flex items-center gap-2"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              GET IN TOUCH <span className="ml-1">→</span>
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ease-out"
                asChild
              >
                <a
                  href="https://github.com/raj-9693"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ease-out"
                asChild
              >
                <a
                  href="http://www.linkedin.com/in/raj-kumar-nishad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ease-out"
                asChild
              >
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
             src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Raj Kumar Nishad"
              className="rounded-full max-w-md mx-auto shadow-2xl shadow-blue-500/20 animate-bounce"
              style={{
                animation: "float 3s ease-in-out infinite",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-blue-500/10 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          <div className="absolute top-0 right-0 w-full h-full">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 h-px bg-gray-700"
                style={{
                  width: "100%",
                  top: `${(i + 1) * 30}px`,
                  opacity: 0.5 - i * 0.05,
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto py-20 flex flex-col md:flex-row items-center gap-16"
      >
        <div className="flex-1 relative">
          <div className="relative z-10">
            <img
              src="/profile.png"
              alt="Raj Kumar Nishad"
              className="rounded-full max-w-md mx-auto shadow-2xl shadow-blue-500/20"
              style={{
                animation: "float 3s ease-in-out infinite",
              }}
            />
          </div>
          <div className="absolute inset-0 bg-blue-500/10 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-blue-500/20"
            >
              <path
                fill="currentColor"
                d="M45.3,-51.2C56.9,-42.9,63.3,-26.9,65.3,-10.8C67.2,5.3,64.7,21.5,56.4,34.1C48.1,46.7,34,55.8,18.4,61.5C2.9,67.2,-14.1,69.5,-28.2,63.9C-42.3,58.3,-53.5,44.7,-59.9,29.7C-66.3,14.6,-67.9,-1.9,-62.3,-15.6C-56.7,-29.3,-43.9,-40.2,-30.5,-48C-17.1,-55.8,-3,-60.5,10.5,-60.8C24,-61.1,33.7,-59.5,45.3,-51.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-blue-500 font-medium mb-2">ABOUT US</h3>
          <h2 className="text-3xl font-bold mb-6">
            Available for Kotlin-Based Android App Development
          </h2>
          <p className="text-gray-400 mb-8">
            I AM AVAILABLE FOR ANDROID DEVELOPMENT PROJECTS I'm a passionate
            Android Developer with hands-on experience in building real-world
            apps using Kotlin, MVVM architecture, Firebase Authentication, REST
            APIs, and Room Database. I follow clean code practices and focus on
            building responsive, user-friendly mobile applications. Currently,
            <br />
            <br />
            I'm pursuing my BCA and actively seeking internship or entry-level
            opportunities to grow as a developer in a collaborative team
            environment. I continuously sharpen my skills through personal
            projects and believe in learning by doing.
          </p>

          <Button
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 flex items-center gap-2"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
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
              asChild
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1gKmdz9PybpUBrhmGFp-dAt8qJt9UWiPh"
                download="Raj_Kumar_Nishad_Resume.pdf"
              >
                <Download size={18} />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full px-6"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1gKmdz9PybpUBrhmGFp-dAt8qJt9UWiPh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer h-48">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
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
                        className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                      Education
                    </h3>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div>
                      <h4 className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        Bachelor of Computer Applications (BCA)
                      </h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Currently Pursuing
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Experience */}
            <div className="group">
              <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
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
                        className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                      >
                        <rect
                          width="20"
                          height="14"
                          x="2"
                          y="7"
                          rx="2"
                          ry="2"
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                      Experience
                    </h3>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div>
                      <h4 className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        Android Developer (Fresher)
                      </h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        Actively seeking Internship or Entry-level Opportunity
                      </p>
                      <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors duration-300">
                        Enthusiastic about developing real-world Android apps
                        using modern tools like Kotlin, Firebase, and MVVM.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technical Skills */}
          <div ref={skillsRef} className="mt-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-blue-500/20 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
                    Technical Skills
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <HorizontalSkillBar
                      key={skill.name}
                      skill={skill}
                      index={index}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 py-20">
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
                className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-slate-800/50 p-3 rounded-lg"
              >
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <Mail
                    className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                    size={20}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Email
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 group-hover:underline">
                    rajnishad96930@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://github.com/raj-9693"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-slate-800/50 p-3 rounded-lg"
              >
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <Github
                    className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                    size={20}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    GitHub
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 group-hover:underline">
                    github.com/raj-9693
                  </p>
                </div>
              </a>
              <a
                href="http://www.linkedin.com/in/raj-kumar-nishad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-slate-800/50 p-3 rounded-lg"
              >
                <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <Linkedin
                    className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                    size={20}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    LinkedIn
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 group-hover:underline">
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
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-3 font-semibold transition-colors"
              >
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
