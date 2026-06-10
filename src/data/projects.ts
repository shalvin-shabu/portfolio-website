export const projects = [
  {
    id: "smart-microlab",
    title: "Smart Microlab",
    description:
      "AI-powered healthcare monitoring and diagnostic system integrating ESP32, biosensors, Machine Learning, and IoT.",
    technologies: ["Python", "ESP32", "Machine Learning", "IoT", "TensorFlow"],
    github: "#",
    demo: "#",
    featured: true,
    gradient: "from-blue-600/30 to-purple-600/30",
  },
  {
    id: "prephub",
    title: "PrepHub",
    description:
      "NLP-powered personalized learning assistant for KTU students.",
    technologies: ["Python", "NLP", "FastAPI", "React"],
    github: "#",
    demo: "#",
    featured: true,
    gradient: "from-purple-600/30 to-pink-600/30",
  },
  {
    id: "legal-assistant",
    title: "Legal Assistant",
    description:
      "NLP-based application simplifying legal terminology for the general public.",
    technologies: ["Python", "NLP", "spaCy", "Flask"],
    github: "#",
    demo: "#",
    featured: false,
    gradient: "from-cyan-600/30 to-blue-600/30",
  },
  {
    id: "climate-storyteller",
    title: "Climate Story Teller",
    description: "Interactive climate storytelling platform.",
    technologies: ["Python", "Data Visualization", "JavaScript"],
    github: "#",
    demo: "#",
    featured: false,
    gradient: "from-green-600/30 to-cyan-600/30",
  },
  {
    id: "pollution-analyzer",
    title: "Pollution and Precipitation Analyzer",
    description:
      "Environmental analytics and climate visualization system.",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Analytics"],
    github: "https://github.com/shalvin-shabu/NASA-Space-App-Challenge-2025",
    demo: "#",
    featured: false,
    gradient: "from-orange-600/30 to-red-600/30",
  },
] as const;
