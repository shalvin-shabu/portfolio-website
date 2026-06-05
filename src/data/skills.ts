export const skillCategories = [
  {
    title: "Programming",
    icon: "code",
    skills: ["Python", "C", "R"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    title: "Artificial Intelligence",
    icon: "brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Data Analytics",
      "Computer Vision",
    ],
    gradient: "from-purple-500/20 to-blue-500/20",
    border: "border-purple-500/30",
  },
  {
    title: "Development",
    icon: "terminal",
    skills: ["HTML", "CSS", "Git", "GitHub"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
  },
  {
    title: "Emerging Technologies",
    icon: "chip",
    skills: ["IoT", "ESP32", "Dialogflow"],
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
] as const;
