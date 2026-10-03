

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
  keyFeaturesUrl?: string;
  demoLabel?: string;
  platform?: string;
  status?: string;
  urlName?:string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = [

    {
      id: "1",
      title: "AuthNotes",
      description:
        "A notes and todo management app where users can sign up, log in, and create, edit, and delete their own notes and tasks. Built with a full CRUD workflow and authentication .",
      image:
        "https://cdn.phototourl.com/member/2026-10-01-632be4a8-a850-4cd1-bd5c-91c506972780.png",
      technologies: ["React Native", "javaScript", "CRUD" ,"REST-API"],
      githubUrl: "https://github.com/raj-9693/Registrations_CLI",
      videoUrl:
        "https://projects-nots.vercel.app/",
      keyFeatures: [
    "🔐 Signup/Login with Hashed Passwords & JWT",
    "📧 Forgot Password via 6-digit Email OTP",
    "📝 Full CRUD for Notes",
    "✅ Checklist Todos Inside Notes",
    "🗂️ Category-based Organization",
    "💾 Persistent Login & Protected Routes",
      ],
       platform: "Android/ios",
       status: "In Progress",
       demoLabel:"Project Overview"
    },
     {
      id: "2",
      title: "NotepadX",
      description:
        "NotepadX is a rich notes, drawing, and task management app built using React, TypeScript, and AI-assisted development (GitHub Copilot). It combines text formatting, freehand drawing with customizable tools, and a daily task tracker  .",
      image:
        "https://cdn.phototourl.com/member/2026-10-01-e263e11c-4c99-46e8-906f-f676629d8e14.png",
      technologies: ["React", "TypeScript", "Fram Motion" ,"Tailwind CSS"],
      githubUrl: "https://github.com/raj-9693/Ai-Assisted-NotepadX-website",
      videoUrl:
        "https://ai-assisted-website.vercel.app/",
      keyFeatures: [
        "📝 Rich Notes - Bold, italic, highlights, headings, lists, images",
        "🎨 Drawing Tool - Pencil, eraser, shapes, undo/redo, multiple colors & stroke sizes",
        "🖼️ Custom Backgrounds - Colors, grids, gradients for both notes and drawings",
        "📊 Analytics - Weekly/monthly insights and task history",
      ],
       platform: "Website",
       status: "Completed",
    },

     {
      id: "3",
      title: "Competitions App ",
        keyFeaturesUrl:'https://expo.dev/accounts/raj-nishad/projects/competition-details/builds/a8acb444-c40c-4209-a413-a2ffd954a1de',
      urlName:'Android App (APK)',
      description:
      "Competition Details is a full-stack React Native mobile app for discovering and registering for online competitions, built with Expo, Node.js/Express, and MongoDB.",
      image:
       "https://cdn.phototourl.com/member/2026-10-01-edf3fdfa-7234-4812-bf70-f2f4f0b450d7.png",
      technologies: ["React Native (Expo)", "Axios", "Node.js + Express.js"],
      githubUrl: "https://github.com/raj-9693/My-assignment-app",
      videoUrl:
        "https://my-assignment-app-frontend.vercel.app/",
      keyFeatures: [
       "📱 Cross-platform App - Built with React Native (Expo) and React Navigation",
       "🔴 Live Countdown Timer - Real-time registration deadline tracking",
       "🎯 Spot Tracking - Shows remaining competition slots in real-time",
       "🔗 Referral System - Shareable referral links with earning info",
       "⚙️ Full-Stack Backend - Node.js, Express.js, MongoDB Atlas with RESTful APIs"
      ],
      platform: "Android/ios",
      status: "Completed",
    },
     {
      id: "4",
      title: "Task Management UI",
      
      description:
        "Converted a Figma UI design for a Task Management app into React Native code. This is a UI-only implementation, focused on layout, styling, and responsiveness — no backend logic or functionality included.",
      image:
        "https://cdn.phototourl.com/member/2026-10-01-81236f2d-5bac-42db-99c4-ea75c3db3266.png",
      technologies: ["React Native(CLI)", "Figma", "API"],
      githubUrl: "https://github.com/raj-9693/DASHBOARD_UI",
      videoUrl:
        "https://drive.google.com/file/d/1BPN8C_MVIJnen51w2vKtmQ9OhkPBIL3F/view?usp=sharing",
      keyFeatures: [
       "🎨 Figma to Code Conversion",
       "📱 Task List & Status UI",
       "🗂️ Priority & Category Design",
       "🧩 Reusable Components",
      ],
      demoLabel:"Watch Demo",
      platform: "Android/ios",
      status: "Completed",
    },
    {
      id: "5",
      title: "InstaNews App",
      description:
        "A real-time news app using Retrofit and RecyclerView with search functionality.",
      image:
        "https://cdn.phototourl.com/member/2026-10-01-8b1aa14e-db39-4d19-8fbc-f5355f55b819.png",
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
      demoLabel:"Watch Demo",
      platform: "Android",
      status: "Completed",
    },
    {
      id: "6",
      title: "Student Info App",
      description:
        "A Room Database app for storing and managing student records with BottomSheet UI.",
      image:
        "https://cdn.phototourl.com/member/2026-10-01-0e20b4b7-92a4-4b23-bb82-90971faa12ce.png",
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
      demoLabel:"Watch Demo",
      platform: "Android",
      status: "Completed",
    },
    {
      id: "7",
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
       demoLabel:"Watch Demo",
       platform: "Android",
       status: "Completed",
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

        <div className="project-grid w-full min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full min-w-0 self-start">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                videoUrl={project.videoUrl}
                keyFeatures={project.keyFeatures}
                keyFeaturesUrl={project.keyFeaturesUrl}
                demoLabel={project.demoLabel}
                platform={project.platform}
                status={project.status}
                urlName={project.urlName}
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
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
            <span className="font-bold text-[18px]">
              View more projects on GitHub
            </span>
            <ArrowRight size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;