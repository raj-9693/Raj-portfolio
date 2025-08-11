import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CircleCheck,
  Code,
  Database,
  FileCode,
  Github,
  Layers,
  Smartphone,
  Zap,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

const AboutSection = () => {
  const skills: SkillItem[] = [
    { name: "Kotlin", icon: <Code className="h-6 w-6" /> },
    { name: "Android Studio", icon: <Smartphone className="h-6 w-6" /> },
    { name: "Firebase", icon: <Zap className="h-6 w-6" /> },
    { name: "MVVM Architecture", icon: <Layers className="h-6 w-6" /> },
    { name: "Retrofit & REST API", icon: <FileCode className="h-6 w-6" /> },
    { name: "Room Database", icon: <Database className="h-6 w-6" /> },
    { name: "Git & GitHub", icon: <Github className="h-6 w-6" /> },
    { name: "XML Layout", icon: <Code className="h-6 w-6" /> },
  ];

  return (
    <section id="about" className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
              alt="About Raj Kumar"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="h-1 w-20 bg-blue-500 mb-6"></div>

            <p className="text-gray-300 mb-6">
              I'm a passionate Android Developer with hands-on experience in
              building real-world apps using Kotlin, MVVM, Firebase
              Authentication, REST APIs, and Room Database. I believe in clean,
              readable code and continuous learning. I'm currently pursuing my
              BCA and actively looking for an internship or entry-level
              opportunity to work in a collaborative development team.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">280+</div>
                <div className="text-sm text-gray-400">Github Repos</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">49+</div>
                <div className="text-sm text-gray-400">Android Projects</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all"
                >
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <div className="text-blue-500 mb-2">{skill.icon}</div>
                    <span className="text-sm">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
