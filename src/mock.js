// Mock data for Mohit Rana's portfolio
// All data below is rendered from this file (frontend-only mocks).

export const profile = {
  name: "Mohit Rana",
  shortName: "Mohit",
  role: "Software Developer",
  specialties: ["AI / ML Engineering", "Computer Vision", "Frontend Development"],
  location: "New Delhi, India",
  email: "mohitrana.asr@gmail.com",
  phone: "+91 98212 68037",
  availability: "Open to internships & full-time roles",
  tagline:
    "I build fast, reliable systems — from real-time edge AI on Raspberry Pi to polished, production-grade web interfaces.",
  bio: [
    "I'm a final-year Electronics & Communication Engineering student at Bhagwan Parshuram Institute of Technology, focused on the intersection of machine learning, computer vision and interface design.",
    "Most recently I architected a product catalog platform at JNS Systech that serves 500+ entries with a 30% faster load time, and engineered a real-time YOLOv8 detection pipeline running at 20 FPS on a Raspberry Pi 4.",
    "I care about the small details — the 40ms frame you shaved off, the 22% more minutes users stay, the tiny interaction that makes software feel alive.",
  ],
  stats: [
    { label: "Years coding", value: "4+" },
    { label: "Projects shipped", value: "12" },
    { label: "CGPA", value: "7.6" },
    { label: "FPS on Pi 4", value: "20" },
  ],
};

export const navLinks = [
  { id: "about", label: "About", index: "01" },
  { id: "skills", label: "Skills", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "projects", label: "Projects", index: "04" },
  { id: "education", label: "Education", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "C++", "JavaScript", "SQL / PostgreSQL", "HTML", "CSS"],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      "React",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "OpenCV",
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      "Git",
      "Linux (Ubuntu)",
      "AWS",
      "VS Code",
      "Jupyter",
      "MATLAB",
      "SciLab",
      "MS Excel",
    ],
  },
  {
    group: "Hardware & Embedded",
    items: ["Arduino", "Raspberry Pi", "VL53L1X LiDAR", "YOLOv8 on edge"],
  },
];

export const experience = [
  {
    company: "JNS Systech Pvt Ltd",
    role: "Frontend Developer Intern",
    period: "Jun 2024 — Aug 2024",
    location: "Okhla, New Delhi",
    summary:
      "Owned the product listing experience end-to-end — from architecture to micro-interactions — for an internal catalog platform.",
    highlights: [
      "Architected a product listing platform from scratch in vanilla JavaScript, HTML5 and CSS supporting 500+ entries.",
      "Implemented dynamic product rendering and optimized DOM manipulation, reducing page load time by 30%.",
      "Designed high-fidelity animations and interactive transitions, increasing average session duration by 22%.",
      "Built fully responsive UI components, improving cross-device compatibility and reducing layout bugs by 40%.",
    ],
    stack: ["JavaScript", "HTML5", "CSS", "DOM APIs"],
  },
];

export const projects = [
  {
    id: "p1",
    title: "Real-Time Edge Object Detection",
    subtitle: "YOLOv8 + LiDAR on Raspberry Pi 4",
    year: "2025",
    description:
      "An edge-AI pipeline that detects objects at 20 FPS on a Raspberry Pi 4 and fuses ToF LiDAR distance for precise depth-aware localization — all on 8GB of RAM.",
    metrics: [
      { label: "Frame rate", value: "20 FPS @ 480×320" },
      { label: "Detection accuracy", value: "80 – 92%" },
      { label: "Inference speedup", value: "+35%" },
      { label: "Distance error", value: "< 1%" },
    ],
    bullets: [
      "Engineered a real-time edge AI detection loop using YOLOv8 + OpenCV, tuned for ARM.",
      "Improved inference speed 35% via frame skipping, model quantization and a modular capture pipeline.",
      "Integrated VL53L1X ToF LiDAR for depth-aware localization with sub-1% distance error.",
    ],
    stack: ["Python", "YOLOv8", "OpenCV", "Raspberry Pi 4", "VL53L1X"],
    accent: "Edge AI",
  },
  {
    id: "p2",
    title: "Movie Recommendation Engine",
    subtitle: "Content-based vs. Collaborative filtering",
    year: "2024",
    description:
      "A recommendation system benchmarked across two paradigms over 5,000+ movies, with TF-IDF and Count Vectorization feature pipelines and cosine-similarity indexing.",
    metrics: [
      { label: "Dataset size", value: "5,000+ titles" },
      { label: "Precision lift", value: "+18%" },
      { label: "Cold-start latency", value: "−30%" },
    ],
    bullets: [
      "Built TF-IDF and Count Vectorization feature extractors for title, genre and cast metadata.",
      "Benchmarked Content-Based vs. Collaborative Filtering, improving relevance by 18% (Precision@k).",
      "Optimized similarity computation using cached cosine matrices, cutting cold-start latency 30%.",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    accent: "Recsys",
  },
  {
    id: "p3",
    title: "Book Recommender",
    subtitle: "K-Means clustering over 8K books",
    year: "2024",
    description:
      "A clustering-based recommender over 8,000+ books that generates highly similar suggestions per query with 85% genre alignment.",
    metrics: [
      { label: "Books indexed", value: "8,000+" },
      { label: "Genre alignment", value: "85%" },
      { label: "Similar books / query", value: "610" },
      { label: "Search time", value: "−40%" },
    ],
    bullets: [
      "Built a K-Means clustering recommender achieving 85% genre alignment across 8,000+ books.",
      "Engineered feature pipelines over author, genre and metadata vectors.",
      "Reduced average user search time by 40% via optimized clustering and similarity indexing.",
    ],
    stack: ["Python", "Scikit-learn", "K-Means", "Pandas", "NumPy"],
    accent: "Clustering",
  },
];

export const education = [
  {
    school: "Bhagwan Parshuram Institute of Technology",
    degree: "B.Tech, Electronics & Communication Engineering",
    period: "2022 — 2026",
    score: "CGPA 7.6 / 10",
    location: "New Delhi",
  },
  {
    school: "Vidya Bharati School",
    degree: "Class XII — CBSE",
    period: "2020 — 2021",
    score: "82%",
    location: "New Delhi",
  },
  {
    school: "Vidya Bharati School",
    degree: "Class X — CBSE",
    period: "2018 — 2019",
    score: "92%",
    location: "New Delhi",
  },
];

export const certifications = [
  { name: "Linux Certification", issuer: "Spoken Tutorial, IIT Bombay", year: "2024" },
  { name: "Python Programming", issuer: "TechStack Academy", year: "2024" },
  { name: "RDBMS (PostgreSQL)", issuer: "Spoken Tutorial, IIT Bombay", year: "2025" },
  { name: "Arduino", issuer: "Spoken Tutorial, IIT Bombay", year: "2025" },
];

export const socialLinks = [
  { label: "Email", href: "mailto:mohitrana.asr@gmail.com", handle: "mohitrana.asr@gmail.com" },
  { label: "Phone", href: "tel:+919821268037", handle: "+91 98212 68037" },
  { label: "Location", href: "#", handle: "New Delhi, IN" },
];
