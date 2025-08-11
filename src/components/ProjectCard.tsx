import React from "react";
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
import { Github, Play } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  technologies?: string[];
  githubUrl?: string;
  videoUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A detailed description of the project showcasing its features and functionality.",
  imageUrl = "https://i.postimg.cc/65vjRBnP/Picsart-25-08-10-11-39-49-697.png",
  technologies = ["Kotlin", "MVVM", "Firebase"],
  githubUrl = "https://github.com",
  videoUrl = "https://www.linkedin.com/posts/raj-kumar-nishad_androiddevelopment-roomdatabase-kotlin-activity-7341817769476132864-70ju",
}: ProjectCardProps) => {
  return (
    <Card className="w-full h-full overflow-hidden flex flex-col bg-slate-900 border-slate-800 hover:border-blue-600 transition-all duration-300 shadow-lg">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <CardDescription className="text-slate-300 mb-4">
          {description}
        </CardDescription>

        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-slate-800 text-blue-400 hover:bg-slate-700"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-2 border-t border-slate-800 flex flex-col gap-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-slate-800 text-blue-400 hover:bg-slate-700 hover:text-blue-300 border-slate-700"
          onClick={() => window.open(githubUrl, "_blank")}
        >
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
        </Button>
        {videoUrl && (
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-green-600 text-white hover:bg-green-700 hover:text-white border-green-600 hover:border-green-700"
            onClick={() => window.open(videoUrl, "_blank")}
          >
            <Play className="mr-2 h-4 w-4" />
            Play Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
