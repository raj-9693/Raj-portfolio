import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Play, ChevronDown, ChevronUp, Layers } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  technologies?: string[];
  githubUrl?: string;
  videoUrl?: string;
  keyFeatures?: string[];
  chatGPTLink?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A detailed description of the project showcasing its features and functionality.",
  imageUrl = "https://i.postimg.cc/65vjRBnP/Picsart-25-08-10-11-39-49-697.png",
  technologies = ["Kotlin", "MVVM", "Firebase"],
  githubUrl = "https://github.com",
  videoUrl = "https://www.linkedin.com/posts/raj-kumar-nishad_androiddevelopment-roomdatabase-kotlin-activity-7341817769476132864-70ju",
  keyFeatures = ["Feature 1", "Feature 2", "Feature 3"],
  chatGPTLink = "https://chatgpt.com",
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="relative w-full h-full flex flex-col bg-slate-900/80 backdrop-blur-md border-slate-800 rounded-2xl shadow-md hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group overflow-hidden">
        
        {/* Image Section - Reduced height */}
        <div className="p-4 pb-0">
          <div className="relative overflow-hidden h-44 rounded-xl shadow-sm">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>

        <CardHeader className="px-5 pt-5 pb-2">
          <CardTitle className="text-xl font-bold text-white leading-tight">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow px-5 pb-24">
          <CardDescription className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3">
            {description}
          </CardDescription>

          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="rounded-full bg-slate-800 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 hover:-translate-y-0.5 transition-all duration-300 px-2.5 py-0.5 text-xs border border-slate-700/50 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        {/* Overlay Panel - Expands inside card */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 z-10 bg-slate-900/95 backdrop-blur-xl px-5 pt-6 pb-24 overflow-y-auto"
            >
               <div className="flex flex-col gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-200">Description</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="h-px bg-slate-700/50 w-full my-1" />

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-400" /> Key Features
                    </h4>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                      {keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                      {chatGPTLink && (
                        <a
                          href={chatGPTLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline ml-5 mt-1 inline-block"
                        >
                          Visit Link
                        </a>
                      )}
                    </ul>
                  </div>

               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer - Fixed at bottom */}
        <CardFooter className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-4 flex flex-col gap-3 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent z-20">
          <div className="flex gap-3 w-full">
            <Button
              variant="outline"
              className="flex-1 bg-slate-800 text-blue-400 hover:bg-slate-700 hover:text-blue-300 border-slate-700 shadow-sm group/btn h-9 text-xs"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              <Github className="mr-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              GitHub
            </Button>
            {videoUrl && (
              <Button
                variant="outline"
                className="flex-1 bg-green-600 text-white hover:bg-green-700 hover:text-white border-green-600 hover:border-green-700 shadow-sm group/btn h-9 text-xs"
                onClick={() => window.open(videoUrl, "_blank")}
              >
                <Play className="mr-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                Demo
              </Button>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="w-full text-slate-500 hover:text-slate-300 hover:bg-white/5 h-8 text-xs"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "More Details"}
            <ChevronUp className={`ml-1 h-3 w-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
