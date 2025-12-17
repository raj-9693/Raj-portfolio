import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  videoUrl: string;
  keyFeatures: string[];
  chatGPTLink: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = [
    {
      id: "1",
      title: "InstaNews App",
      description:
        "A real-time news app using Retrofit and RecyclerView with search functionality.",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      technologies: ["Kotlin", "MVVM", "API"],
      githubUrl: "https://github.com/raj-9693/InstaNews-App",
      videoUrl:
        "https://www.linkedin.com/posts/raj-kumar-nishad_androiddevelopment-kotlin-newsapp-activity-7361731470563983363-WQdK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFZWYCoB4RdaVIur1x-qAMB6bPOjXgZTn7s",
      keyFeatures: [
        "🔍 Search News",
        "🌐 Live News API Integration",
        "📃 RecyclerView Listing",
        "💾 Save News (Bookmark Feature)",
      ],
      chatGPTLink: "https://drive.google.com/file/d/1MQIWFVCy6-VOiRKyjmbi6hgHEHUc7SFX/view",
    },
    {
      id: "2",
      title: "Student Info App",
      description:
        "A Room Database app for storing and managing student records with BottomSheet UI.",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
      technologies: ["Room", "Kotlin", "LiveData"],
      githubUrl: "https://github.com/raj-9693/Student_info",
      videoUrl:
        "https://www.linkedin.com/posts/raj-kumar-nishad_androiddevelopment-roomdatabase-kotlin-activity-7341817769476132864-70ju?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFZWYCoB4RdaVIur1x-qAMB6bPOjXgZTn7s",
      keyFeatures: [
        "🗄️ Room Database Integration",
        "✏️ Add & Edit Student via BottomSheet",
        "📱 BottomSheet UI",
        "🗑️ CRUD Operations",
      ],
      chatGPTLink: "https://github.com/raj-9693/Student_info",
    },
    {
      id: "3",
      title: "Firebase Login System",
      description:
        "An authentication app using Firebase Auth for sign-up/login with user redirection.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      technologies: ["Firebase", "Kotlin", "XML"],
      githubUrl: "https://github.com/raj-9693/EasyLoginApp",
      videoUrl:
        "https://www.linkedin.com/posts/raj-kumar-nishad_androiddevelopment-firebaseauthentication-activity-7337803834808750082-hlkc?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAFZWYCoB4RdaVIur1x-qAMB6bPOjXgZTn7s&utm_campaign=copy_link",
      keyFeatures: [
        "🔐 Firebase Authentication",
        "📧 Email/Password Login",
        "📱 User-Friendly UI",
        "🧩 ViewBinding",
      ],
      chatGPTLink: "https://github.com/raj-9693/EasyLoginApp",
    },
  ],
}) => {
  return (
    <section id="projects" className="py-20 text-white bg-card-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-start">
            <span className="text-blue-500 font-medium mb-2">MY WORK</span>
            <h2 className="text-4xl font-bold mb-6">RECENT PROJECTS</h2>
            <p className="text-gray-400 max-w-2xl">
              Here are some of the Android apps I’ve built recently. Each
              project reflects my learning journey and showcases different
              technologies, tools, and real-world use-cases in Android
              development. From working with APIs to local databases, I’ve tried
              to explore and apply various core components of the Android
              ecosystem.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-[373px] h-[389px]">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                videoUrl={project.videoUrl}
                keyFeatures={project.keyFeatures}
                chatGPTLink={project.chatGPTLink}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center">
          <a
            href="https://github.com/raj-9693"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors">
            <span>View more projects on GitHub</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
