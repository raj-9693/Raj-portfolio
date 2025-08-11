import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

const HeroSection = ({
  name = "RAJ KUMAR",
  title = "HAY! I'M RAJ",
  subtitle = "I'M AN ANDROID DEVELOPER",
  description = "Yet best any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.",
  
}: HeroSectionProps) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = subtitle;
  

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="bg-[#031525] min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-blue-500/10 blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>

      {/* Horizontal lines */}
      <div className="absolute right-0 top-1/3 w-1/3 h-px bg-gray-700"></div>
      <div className="absolute right-0 top-1/3 mt-4 w-1/3 h-px bg-gray-700"></div>
      <div className="absolute right-0 top-1/3 mt-8 w-1/3 h-px bg-gray-700"></div>
      <div className="absolute right-0 top-1/3 mt-12 w-1/3 h-px bg-gray-700"></div>
      <div className="absolute right-0 top-1/3 mt-16 w-1/3 h-px bg-gray-700"></div>
      <div className="absolute right-0 top-1/3 mt-20 w-1/3 h-px bg-gray-700"></div>

      {/* Left content */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 z-10">
        <p className="text-sm font-medium text-gray-400 mb-2">{name}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0d6efd] mb-6">
          {typedText}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg">{description}</p>

        <div className="flex flex-wrap gap-4">
          <Button className="bg-[#0d6efd] hover:bg-blue-600 text-white rounded-full px-6 flex items-center gap-2">
            GET IN TOUCH <ArrowRight size={16} />
          </Button>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 bg-transparent hover:bg-blue-900/20"
            >
              <Facebook size={18} className="text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 bg-transparent hover:bg-blue-900/20"
            >
              <Instagram size={18} className="text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 bg-transparent hover:bg-blue-900/20"
            >
              <Linkedin size={18} className="text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right content - Profile image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/30"></div>
        </div>
      </div>

      {/* Partner logos */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 overflow-hidden">
        <div className="flex items-center gap-8 opacity-50">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="text-gray-500 flex items-center">
              <span className="font-bold">logo</span>
              <span className="text-xs">ipsum</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
