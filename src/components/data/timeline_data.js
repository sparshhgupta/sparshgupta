// const timelineData = [
//   {
//     point: 1,
//     icon: "school",
//     year: "2014-2018",
//     type: "Education",
//     title: "Bachelor of Science in Computer Science",
//     subtitle: "Stanford University",
//     role: "Undergraduate Student",
//     description:
//       "Graduated summa cum laude with a focus on artificial intelligence and machine learning. Completed an honors thesis on neural network optimization and served as a teaching assistant for advanced algorithms courses.",
//     tags: [
//       "Data Structures",
//       "Algorithms",
//       "Machine Learning",
//       "Software Engineering",
//       "Research",
//       "Teaching",
//     ],
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png",
//   },
//   {
//     point: 2,
//     icon: "work",
//     year: "2018-2020",
//     type: "Work Experience",
//     title: "Junior Software Engineer",
//     subtitle: "Google",
//     role: "Software Engineer Intern → Full-time",
//     description:
//       "Developed and optimized search algorithms that improved query response time by 15%. Collaborated with cross-functional teams to enhance user experience and worked on large-scale distributed systems serving billions of requests daily.",
//     tags: [
//       "Java",
//       "Python",
//       "Distributed Systems",
//       "Search Algorithms",
//       "Performance Optimization",
//       "Teamwork",
//     ],
//     skills: [
//       "Java",
//       "Python",
//       "Distributed Systems",
//       "Search Algorithms",
//       "Performance Optimization",
//       "Teamwork",
//     ],
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
//   },
//   {
//     point: 3,
//     icon: "school",
//     year: "2020-2021",
//     type: "Education",
//     title: "Master of Science in Artificial Intelligence",
//     subtitle: "MIT",
//     role: "Graduate Student",
//     description:
//       "Specialized in deep learning architectures and natural language processing. Published research on transformer model efficiency and completed a capstone project on multilingual sentiment analysis that achieved state-of-the-art results.",
//     tags: [
//       "Deep Learning",
//       "NLP",
//       "Computer Vision",
//       "Neural Networks",
//       "Research Publications",
//       "Innovation",
//     ],
//     skills: [
//       "Deep Learning",
//       "NLP",
//       "Computer Vision",
//       "Neural Networks",
//       "Research Publications",
//       "Innovation",
//     ],
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png",
//   },
//   {
//     point: 4,
//     icon: "work",
//     year: "2021-2022",
//     type: "Work Experience",
//     title: "Machine Learning Engineer",
//     subtitle: "OpenAI",
//     role: "ML Engineer",
//     description:
//       "Key contributor to language model development and fine-tuning processes. Implemented novel training techniques that reduced computational costs by 20% while maintaining model performance. Mentored junior engineers and led technical design reviews.",
//     tags: [
//       "PyTorch",
//       "TensorFlow",
//       "Transformer Models",
//       "NLP",
//       "Model Optimization",
//       "Mentoring",
//     ],
//     skills: [
//       "PyTorch",
//       "TensorFlow",
//       "Transformer Models",
//       "NLP",
//       "Model Optimization",
//       "Mentoring",
//     ],
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1200px-OpenAI_Logo.svg.png",
//   },
//   {
//     point: 5,
//     icon: "work",
//     year: "2022-Present",
//     type: "Work Experience",
//     title: "Lead AI Researcher",
//     subtitle: "DeepMind",
//     role: "Senior Researcher & Team Lead",
//     description:
//       "Leading a multidisciplinary team of 12 researchers working on next-generation reinforcement learning and generative AI systems. Driving strategic research initiatives and fostering collaboration with academic institutions worldwide.",
//     tags: [
//       "Reinforcement Learning",
//       "Generative AI",
//       "Research Leadership",
//       "Team Management",
//       "Strategy",
//       "Collaboration",
//     ],
//     skills: [
//       "Reinforcement Learning",
//       "Generative AI",
//       "Research Leadership",
//       "Team Management",
//       "Strategy",
//       "Collaboration",
//     ],
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/DeepMind_logo.png/1200px-DeepMind_logo.png",
//   },
// ];
import dps_logo from "../public/images/dps_logo.jpg";
import bits_logo from "../public/images/bits_logo.png";
import jio_logo from "../public/images/jio_logo.png";
import oracle_logo from "../public/images/oracle_logo.png";

const timelineData = [
  {
    point: 1,
    icon: "school",
    year: "2007-2021",
    type: "Education",
    title: "Schooling",
    subtitle: "Delhi Public School, Ranipur",
    role: "Student",
    description:
      "Completed primary and secondary education at DPS Ranipur with a strong foundation in science and mathematics.",
    tags: [],
    skills: [],
    logo: dps_logo, // placeholder
  },
  {
    point: 2,
    icon: "school",
    year: "2022-2026",
    type: "Education",
    title: "B.E. Computer Science",
    subtitle: "BITS Pilani, Hyderabad Campus",
    role: "Undergraduate Student",
    description:
      "Pursuing a Bachelor of Engineering in Computer Science. Coursework includes fundamental and advanced topics in computer science.",
    tags: ["OOPs", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
    skills: ["OOPs", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
    logo: bits_logo,
  },
  {
    point: 3,
    icon: "school",
    year: "2024-2026",
    type: "Education",
    title: "Minor in Data Science",
    subtitle: "BITS Pilani, Hyderabad Campus",
    role: "Undergraduate Student (Minor)",
    description:
      "Pursuing a minor in Data Science alongside core Computer Science degree, with a focus on applied machine learning and statistics.",
    tags: ["Machine Learning", "Data Mining", "Generative AI", "Statistics"],
    skills: ["Machine Learning", "Data Mining", "Generative AI", "Statistics"],
    logo: bits_logo,
  },
  {
    point: 4,
    icon: "work",
    year: "May 2024 - July 2024",
    type: "Work Experience",
    title: "Summer Intern",
    subtitle: "Jio Platforms, Hyderabad",
    role: "Engineering Intern (AI/Computer Vision)",
    description:
      "Contributed to enhancing the JIO AI Matrix by improving object detection for underperforming classes, leading to more accurate and reliable AI solutions. Utilized Roboflow and Ultralytics YOLOv8 to fine-tune detection models, boosting mAP scores from <50% to >80% for most classes, with several surpassing 90%.",
    tags: ["Computer Vision", "YOLOv8", "Roboflow", "Object Detection", "Model Fine-Tuning"],
    skills: ["Computer Vision", "YOLOv8", "Roboflow", "Object Detection", "Model Fine-Tuning"],
    logo: jio_logo,
  },
  {
    point: 5,
    icon: "work",
    year: "May 2025 - July 2025",
    type: "Work Experience",
    title: "Summer Intern",
    subtitle: "Oracle, Bengaluru",
    role: "Engineering Intern (Cloud & Backend Systems)",
    description:
      "Engineered a telemetry and backend tracking system for Oracle Cloud subscription termination workflows, improving system observability, error traceability, and transparency. Designed modular backend logic for extensibility, integrated Prometheus and Grafana for monitoring, and configured OCI DevOps alerts for automated incident management via Jira.",
    tags: ["Cloud Computing", "Oracle Cloud", "Prometheus", "Grafana", "Backend Development", "System Monitoring"],
    skills: ["Cloud Computing", "Oracle Cloud", "Prometheus", "Grafana", "Backend Development", "System Monitoring"],
    // logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    logo: oracle_logo,
  },
];


// Derived version where all icons are "school"
const experienceData = timelineData.map((item) => ({
  ...item,
  icon: "work",
}));

export { timelineData, experienceData };
export default timelineData;

