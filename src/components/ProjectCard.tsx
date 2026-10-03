import React, { useState } from "react";
import { Play, Layers, ChevronDown, ChevronUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  urlName:string
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  videoUrl: string;
  keyFeatures: string[];
  keyFeaturesUrl?: string;
  demoLabel?: string;
  platform?: string; // e.g. "Android", "Web app"
  status?: string; // e.g. "Shipped"
}

// Inline SVG so we don't depend on lucide's brand icons
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  videoUrl,
  keyFeatures,
  keyFeaturesUrl,
  demoLabel = "Live Demo",
  platform = "Android",
  status = "Shipped",
  urlName="Vite"
}) => {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="flex flex-col h-full w-full rounded-2xl bg-[#0f1420] border border-white/10 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_12px_30px_rgba(37,99,235,0.18)]">
      {/* Thumbnail + platform badge */}
      <div className="relative h-56 w-full overflow-hidden rounded-xl">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        <span className="absolute bottom-2 left-2 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white">
          {platform}
        </span>
      </div>

      {/* Title + status */}
      <div className="mt-4 mb-1.5 flex items-center justify-between gap-2 px-1">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span
          className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${status === "Completed"
            ? "bg-green-500/15 text-green-400"
            : "bg-orange-500/15 text-orange-400"
            }`}
        >
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="mb-3.5 line-clamp-2 px-1 text-sm text-gray-400">
        {description}
      </p>

      {/* Tech pills */}
      <div className="mb-3.5 flex flex-wrap gap-2 px-1">
        {technologies.map((tech, i) => (
          <span
            key={tech}
            className={`rounded-full px-3 py-1 text-xs font-semibold ${i === 0 ? "bg-blue-500 text-white" : "bg-white/10 text-gray-300"
              }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Key features toggle */}
      <div className="mx-1 border-t border-white/10 pt-3">
        <button
          type="button"
          onClick={() => setShowFeatures((prev) => !prev)}
          aria-expanded={showFeatures}
          className="flex w-full items-center justify-between text-sm font-semibold text-white"
        >
          <span className="flex items-center gap-2">
            <Layers size={16} className="text-blue-400" />
            Key features
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-gray-400">
            {showFeatures ? "Show less" : "Show more"}
            {showFeatures ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>
        </button>

        {showFeatures && (
          <ul className="mt-2.5 space-y-1 text-sm text-gray-400">
            {keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        {showFeatures && keyFeaturesUrl && (
          <a
            href={keyFeaturesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
           {urlName} 
          </a>
        )}
      </div>

      {/* Pushes buttons to the bottom so all cards align */}
      <div className="flex-1" />

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-green-500 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
        >
          <Play size={14} />
          {demoLabel}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;