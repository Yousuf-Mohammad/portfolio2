// Clean, human-readable labels for tech-stack logo filenames.
export const TECH_LABELS = {
  html: "HTML", css: "CSS", Scss: "SCSS", Bootstrap: "Bootstrap",
  Tailwind: "Tailwind", GSAP: "GSAP", frameMotion: "Framer Motion",
  "shadcn-ui-seeklogo": "shadcn/ui", JS: "JavaScript", react: "React",
  next: "Next.js", Redux: "Redux", nodeJS: "Node.js", Express: "Express",
  Mongo: "MongoDB", MYSQL: "MySQL", firebase: "Firebase", PHP: "PHP",
  Laravel: "Laravel", git: "Git", github: "GitHub", jwt: "JWT",
  convex: "Convex", "three-js-seeklogo": "Three.js",
  Clerk_idOESnvCPd_0: "Clerk", Langchain: "LangChain", langgraph: "LangGraph",
};

// Turn a logo path (e.g. "/techStack/next.png") into a readable label.
export const prettyTech = (path) => {
  const key = path.split("/").pop().replace(/\.[a-z0-9]+$/i, "");
  if (TECH_LABELS[key]) return TECH_LABELS[key];
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\bseeklogo\b/gi, "")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
};
