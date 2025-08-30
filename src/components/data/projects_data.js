//   const projects = [
//     {
//       id: 1,
//       title: 'Scalable API Service',
//       description: 'A high-performance RESTful API with PostgreSQL database integration for handling millions of requests.',
//       categories: ['backend', 'databases'],
//       gradient: 'from-blue-500 to-indigo-600',
//       icon: '🗄️',
//       tags: ['Backend', 'Databases'],
//       skills: ['Backend', 'Databases'],
//       fullDescription: 'This project implements a convolutional neural network (CNN) for image recognition and classification. Built using TensorFlow and Keras, the model is capable of identifying objects across 1000 different categories with high accuracy.',
//       features: [
//         'Pre-trained on over 1 million images from the ImageNet dataset',
//         'Achieves 92% top-5 accuracy on benchmark tests',
//         'Optimized for both performance and inference speed',
//         'Includes data augmentation techniques to improve generalization',
//         'Implements transfer learning capabilities for custom datasets'
//       ],
//       useCases: [
//         { title: 'Content Moderation', description: 'Used by social media platforms to automatically detect and filter inappropriate images.' },
//         { title: 'Medical Diagnostics', description: 'Assists radiologists in identifying potential abnormalities in X-rays and MRI scans.' },
//         { title: 'Retail Analytics', description: 'Tracks product placement and customer engagement in physical stores.' },
//         { title: 'Agricultural Monitoring', description: 'Identifies crop diseases and monitors plant health from drone imagery.' }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Image Recognition Model',
//       description: 'A convolutional neural network trained to identify objects in images with high accuracy.',
//       categories: ['machine_learning', 'deep_learning'],
//       gradient: 'from-green-500 to-teal-500',
//       icon: '🖼️',
//       tags: ['Machine Learning', 'Deep Learning'],
//       skills: ['Machine Learning', 'Deep Learning'],
//       fullDescription: 'Advanced machine learning model for computer vision tasks.',
//       features: ['High accuracy object detection', 'Real-time processing', 'Multiple format support'],
//       useCases: [
//         { title: 'Object Detection', description: 'Identifies and classifies objects in real-time video streams.' },
//         { title: 'Quality Control', description: 'Automated inspection systems for manufacturing processes.' }
//       ]
//     },
//     {
//       id: 3,
//       title: 'Compiler Implementation',
//       description: 'A simple programming language compiler built from scratch with lexical analysis and code generation.',
//       categories: ['core_concepts', 'backend'],
//       gradient: 'from-yellow-500 to-orange-500',
//       icon: '🔧',
//       tags: ['Core Concepts', 'Backend'],
//       skills: ['Core Concepts', 'Backend'],
//       fullDescription: 'Custom compiler built from scratch implementing full compilation pipeline.',
//       features: ['Lexical analysis', 'Syntax parsing', 'Code optimization', 'Target code generation'],
//       useCases: [
//         { title: 'Educational Tool', description: 'Used in computer science courses to teach compilation concepts.' },
//         { title: 'DSL Development', description: 'Foundation for domain-specific language creation.' }
//       ]
//     },
//     {
//       id: 4,
//       title: 'Text-to-Image Generator',
//       description: 'A diffusion model that creates unique images from textual descriptions with impressive results.',
//       categories: ['generative_ai', 'deep_learning'],
//       gradient: 'from-purple-500 to-pink-500',
//       icon: '✨',
//       tags: ['Generative AI', 'Deep Learning'],
//       skills: ['Generative AI', 'Deep Learning'],
//       fullDescription: 'State-of-the-art text-to-image generation using diffusion models.',
//       features: ['Natural language processing', 'High-quality image synthesis', 'Style transfer capabilities'],
//       useCases: [
//         { title: 'Creative Design', description: 'Assists artists and designers in generating concept art and illustrations.' },
//         { title: 'Marketing Content', description: 'Creates custom visuals for advertising and social media campaigns.' }
//       ]
//     },
//     {
//       id: 5,
//       title: 'Serverless Application',
//       description: 'A cloud-native app built with AWS Lambda functions and API Gateway for cost-effective scaling.',
//       categories: ['cloud_computing', 'backend'],
//       gradient: 'from-blue-400 to-cyan-500',
//       icon: '☁️',
//       tags: ['Cloud Computing', 'Backend'],
//       skills: ['Cloud Computing', 'Backend'],
//       fullDescription: 'Fully serverless application architecture for maximum scalability.',
//       features: ['Auto-scaling', 'Pay-per-use pricing', 'Global distribution', 'High availability'],
//       useCases: [
//         { title: 'Event Processing', description: 'Handles large volumes of events with automatic scaling.' },
//         { title: 'API Services', description: 'Provides REST APIs with minimal operational overhead.' }
//       ]
//     },
//     {
//       id: 6,
//       title: 'Distributed Database System',
//       description: 'A cloud-based database solution with sharding and replication for high availability and performance.',
//       categories: ['databases', 'cloud_computing'],
//       gradient: 'from-emerald-500 to-green-600',
//       icon: '💾',
//       tags: ['Databases', 'Cloud Computing'],
//       skills: ['AWS','Databases', 'Cloud Computing'],
//       fullDescription: 'Enterprise-grade distributed database with advanced replication.',
//       features: ['Horizontal sharding', 'Multi-region replication', 'ACID compliance', 'Auto-failover'],
//       useCases: [
//         { title: 'E-commerce', description: 'Handles high-traffic online store transactions and inventory.' },
//         { title: 'Analytics', description: 'Processes large datasets for business intelligence applications.' }
//       ]
//     }
//   ];
const projects = [
  {
    id: 1,
    title: "Resource-Efficient English-Hindi Neural Machine Translation",
    description: "An English-to-Hindi translation model fine-tuned on MarianMT with optimized preprocessing and training pipelines.",
    categories: ["deep_learning", "nlp"],
    gradient: "from-pink-500 to-purple-600",
    icon: "🌐",
    link: "https://colab.research.google.com/drive/1ua3EG3IjwJakdWT9vgtPn3BIK5fhBU0X#scrollTo=bc31b6f9",
    demolink: "https://espressoshot-e2h-translator.hf.space/",
    doclink: "https://drive.google.com/file/d/15cXWdwy2T5wi91bR4qjNuQeUXzbEDBEl/view?usp=drive_link",
    tags: ["Deep Learning", "NLP"],
    skills: ["Generative AI","Deep Learning", "NLP", "PyTorch"],
    fullDescription: "Built an English-to-Hindi translation model by fine-tuning the MarianMT architecture with custom preprocessing and training pipelines. Focused on efficiency under hardware constraints.",
    features: [
      "Normalization, tokenization, and data filtering for clean inputs",
      "Selective layer freezing and gradient accumulation for efficient training",
      "Dropout regularization and early stopping to prevent overfitting",
      "BLEU score evaluation for performance benchmarking"
    ],
    useCases: [
      { title: "Education", description: "Supports bilingual learning materials for students." },
      { title: "Government Services", description: "Provides translations for citizen-facing platforms." },
      { title: "Accessibility", description: "Helps bridge language barriers in communication." }
    ]
  },
  {
    id: 2,
    title: "TrackVision: Annotation Correction and ID Switch Mitigation Tool",
    description: "A tool to mitigate ID switching in multi-object tracking and enable efficient annotation correction.",
    link: "https://github.com/sparshhgupta/trackvision",
    demolink: "https://drive.google.com/file/d/1j-HF7OqrGw4AneI7_YIckSGa-32I8LKH/view?usp=drive_link",
    categories: ["backend","computer_vision", "multi_object_tracking"],
    gradient: "from-green-500 to-blue-500",
    icon: "🎥",
    tags: ["Full Stack Development","OpenCV", "Video Processing", "Computer Vision"],
    skills: ["Backend Development","OpenCV","Computer Vision", "Python", "Video Processing"],
    fullDescription: "Developed a tool to address ID switching in multi-object tracking algorithms. Integrated temporal analysis, video processing, and annotation correction for better tracking reliability.",
    features: [
      "Temporal analysis to predict and mitigate ID switches",
      "Interactive features for correcting, merging, and splitting track annotations",
      "Seamless integration with multi-object tracking outputs"
    ],
    useCases: [
      { title: "Surveillance", description: "Ensures reliable multi-object tracking in CCTV footage." },
      { title: "Sports Analytics", description: "Improves tracking of players and ball movement." },
      { title: "Wildlife Tracking", description: "Reduces errors in animal movement tracking." }
    ]
  },
  {
    id: 3,
    title: "Loan Approval Prediction",
    description: "A predictive model to streamline loan approvals using advanced classification techniques.",
    link: "https://github.com/sparshhgupta/loanapproval",
    doclink: "https://drive.google.com/file/d/13RyqoJq1nLcnsdoO1PegrPpty1XXzi3Y/view?usp=drive_link",
    categories: ["machine_learning", "data_mining"],
    gradient: "from-yellow-500 to-orange-600",
    icon: "🏦",
    tags: ["Classification", "Data Mining"],
    skills: ["Data Mining","Machine Learning","Python"],
    fullDescription: "Developed a predictive model for home loan approvals to streamline financial decision-making processes.",
    features: [
      "Extensive data preprocessing and feature engineering",
      "Explored Random Forest, XGBoost, and Decision Trees",
      "Identified key factors influencing loan approvals"
    ],
    useCases: [
      { title: "Banking", description: "Automates loan application assessments." },
      { title: "Fintech", description: "Enhances digital lending platforms with risk scoring." }
    ]
  },
  {
    id: 4,
    title: "Hemosphere: Blood Bank Management",
    description: "A full-stack system for managing blood stocks, donors, and recipients with real-time updates.",
    categories: ["backend","databases", "full_stack"],
    gradient: "from-red-500 to-pink-600",
    icon: "🩸",
    tags: ["Node.js", "PostgreSQL", "Express"],
    skills: ["PL/SQL","Database Management","Node.js", "Express", "PostgreSQL"],
    fullDescription: "Developed a scalable blood bank management system to streamline operations and manage donors, recipients, and stock availability.",
    features: [
      "Backend built with Node.js and Express.js",
      "PostgreSQL triggers for real-time updates",
      "Dynamic equipment status based on budget and priority"
    ],
    useCases: [
      { title: "Hospitals", description: "Optimizes blood stock availability and distribution." },
      { title: "NGOs", description: "Facilitates donor-recipient coordination." }
    ]
  },
  {
    id: 5,
    title: "One Generator GAN for Multi-Attribute Facial Transformation",
    description: "A StarGAN-based model for multi-domain image translation with a single generator.",
    link: "https://drive.google.com/file/d/1ks03ZkIoCPPN14kzbbTs4f3tIQWQ7kCQ/view?usp=sharing",
    demolink: "https://drive.google.com/drive/folders/1s8WlnHgk0kKQyaiegKrvZ6tgaK7pkfS9?usp=drive_link",
    doclink: "https://drive.google.com/file/d/1UtOtwFOuAsNNElGIYf6APtAh7xRs3kfF/view?usp=drive_link",
    categories: ["deep_learning", "generative_ai"],
    gradient: "from-purple-500 to-indigo-600",
    icon: "🤖",
    tags: ["GAN", "Deep Learning", "Generative AI"],
    skills: ["Generative AI","Deep Learning","PyTorch"],
    fullDescription: "Implemented StarGAN for multi-attribute facial transformation, reducing multiple generators into one unified model.",
    features: [
      "Preprocessing and augmentation on CelebA dataset",
      "Multi-task discriminator for diverse domain handling",
      "Adversarial, domain classification, and reconstruction losses"
    ],
    useCases: [
      { title: "Photo Editing", description: "Applies transformations such as age, hairstyle, or expression." },
      { title: "Entertainment", description: "Supports creative image transformations in media." }
    ]
  },
  {
    id: 6,
    title: "RegBuddy: Student Registration Helper",
    description: "An AWS Lex-powered chatbot for course registration with natural language queries.",
    link: "https://github.com/sparshhgupta/course-reg-bot",
    demolink: "http://reg-bot.s3-website-us-east-1.amazonaws.com/",
    doclink: "https://drive.google.com/file/d/1LdxXQdJKhst5bMbIKnqGPvvoC5GwURQV/view?usp=sharing",
    categories: ["backend","cloud_computing", "chatbots"],
    gradient: "from-blue-500 to-teal-500",
    icon: "💬",
    tags: ["AWS Lex", "Lambda", "DynamoDB"],
    skills: ["Cloud Computing","AWS", "Lambda", "S3", "DynamoDB"],
    fullDescription: "Developed a chatbot with AWS Lex to assist students with course registration, professor reviews, and timetable generation.",
    features: [
      "AWS Lambda backend for dynamic intent processing",
      "S3 storage for course schedules and reviews",
      "DynamoDB for session persistence",
      "IAM roles and S3 policies for access control"
    ],
    useCases: [
      { title: "Universities", description: "Simplifies course registration for students." },
      { title: "Advisors", description: "Helps academic staff track student course selections." }
    ]
  },
  {
    id: 7,
    title: "Interpretable Fault-Prone Module Detection",
    description: "A machine learning framework for predicting fault-prone software modules with explainability.",
    link: "https://colab.research.google.com/drive/146zzifkqzxuu0FSMFn1P5s_Ja34MoHoB",
    doclink: "https://drive.google.com/file/d/1D7_GU8-Q_GektEZPcIJXvcFCm5JjyfWS/view?usp=sharing",
    categories: ["machine_learning", "software_engineering"],
    gradient: "from-gray-500 to-blue-600",
    icon: "🛠️",
    tags: ["ML", "Explainable AI"],
    skills: ["Machine Learning", "Explainability", "Software Metrics"],
    fullDescription: "Designed a framework to predict faulty software modules by benchmarking 21 classifiers across 41 datasets, with model explainability for developer confidence.",
    features: [
      "Class imbalance handling and cross-validated tuning",
      "Statistical validation for robustness",
      "Explainability highlighting key influencing metrics"
    ],
    useCases: [
      { title: "Software Maintenance", description: "Identifies risky modules early for proactive fixes." },
      { title: "QA Teams", description: "Improves testing focus on high-risk areas." }
    ]
  },
  {
    id: 8,
    title: "Elevator Scheduling with Inter-Process Communication",
    link: "https://github.com/sparshhgupta/elevator-scheduling-algorithm",
    description: "A POSIX-compliant C project simulating elevator scheduling using shared memory, message queues, and synchronization mechanisms.",
    categories: ["core_concepts","operating_systems", "optimization", "systems_programming"],
    gradient: "from-yellow-500 to-red-600",
    icon: "🏢",
    tags: ["C", "POSIX", "Concurrency"],
    skills: ["C Programming", "POSIX APIs", "Shared Memory", "Message Queues", "Threads", "Mutex"],
    fullDescription: "Developed an elevator scheduling system as part of an operating systems assignment, modeling the NP-hard nature of elevator control.\n\n"
        + "Implemented a simulation where passengers appear on floors requesting rides, and elevators move based on optimized decisions.\n\n"
        + "The system enforces authorization via random strings exchanged with solver processes through message queues.\n\n"
        + "Shared memory segments were used for elevator states and commands, while synchronization was ensured using threads and mutexes.",
    features: [
        "Elevator scheduling modeled as an NP-hard optimization problem",
        "Used POSIX shared memory, message queues, and pipes for inter-process communication",
        "Threaded execution with mutex-based synchronization",
        "Authorization mechanism via random string validation per elevator",
        "Implemented additional function elevatorCountNumberOfPassengersFunction as per constraints"
    ],
    useCases: [
        { title: "Operating Systems Learning", description: "Demonstrates advanced OS concepts including IPC, synchronization, and process communication." },
        { title: "Optimization Research", description: "Highlights the complexity of real-world scheduling problems like elevators." },
        { title: "Systems Programming", description: "Practical experience in writing POSIX-compliant C applications with concurrent processes." }
    ]
    },
    {
        id: 9,
        title: "Efficient Algorithms for Densest Subgraph Discovery",
        link: "https://zoddtheimmortal.github.io/daa-site/",
        description: "Implemented and reproduced research algorithms for solving the Densest Subgraph Discovery (DSD) problem using exact and approximation methods.",
        categories: ["core_concepts","graph_mining", "algorithms", "research"],
        gradient: "from-green-500 to-teal-600",
        icon: "🧮",
        tags: ["Graph Mining", "DSD Problem", "Algorithm Implementation"],
        skills: ["Graph Algorithms", "k-Core Decomposition", "Approximation Algorithms", "Complexity Analysis", "Experimental Evaluation"],
        fullDescription: "The densest subgraph discovery (DSD) problem is a classical graph mining problem that aims to identify a subgraph with maximum density (edge-to-vertex ratio).\n\n"
            + "In this project, I implemented and experimented with algorithms presented in research papers on DSD. The implementation leveraged k-core decomposition and other algorithmic strategies to approximate densest subgraphs with theoretical guarantees.\n\n"
            + "The project included reproducing results across multiple density definitions, including clique-based and pattern-based metrics. Comprehensive experiments on real-world and synthetic datasets confirmed the performance improvements reported in literature.",
        features: [
            "Implemented algorithms from existing DSD research papers",
            "Reproduced experiments for exact and approximation approaches",
            "Applied k-core decomposition for efficient subgraph detection",
            "Supported multiple density metrics for broader applicability",
            "Validated results on both real-world and synthetic graphs"
        ],
        useCases: [
            { title: "Network Science", description: "Reveals densely connected communities in social and communication networks." },
            { title: "Biological Analysis", description: "Identifies functional clusters in protein interaction and gene regulatory networks." },
            { title: "Graph Databases", description: "Assists in indexing and query optimization through dense structure detection." }
        ]
    },
    {
        id: 10,
        title: "Comparative Study of Maximal Clique Finding Algorithms",
        description: "Implemented and compared algorithms from three research papers addressing the NP-complete clique problem in graphs.",
        link: "https://zoddtheimmortal.github.io/daa-site-2/",
        categories: ["core_concepts","graph_mining", "algorithms", "research"],
        gradient: "from-purple-500 to-indigo-600",
        icon: "🔍",
        tags: ["Graph Theory", "Clique Problem", "Algorithm Comparison"],
        skills: ["Graph Algorithms", "Complexity Analysis", "Algorithm Implementation", "Experimental Evaluation"],
        fullDescription: "In graph theory, a clique is a subset of vertices such that every two distinct vertices are adjacent. The maximal clique problem — finding all cliques that cannot be extended further — is a fundamental NP-complete problem with applications in network science, computational biology, and data mining.\n\n"
            + "In this project, I implemented and experimentally compared algorithms from three research papers:\n"
            + "1. *Arboricity and Subgraph Listing Algorithms* (1985)\n"
            + "2. *Computational Techniques for Maximum Clique Problems* (2006)\n"
            + "3. *Listing All Maximal Cliques in Sparse Graphs in Near-optimal Time* (2010)\n\n"
            + "The focus was on reproducing results, evaluating efficiency, and analyzing trade-offs across dense and sparse graph datasets.",
        features: [
            "Implemented three different maximal clique finding algorithms from research literature",
            "Compared time complexity and runtime performance across datasets",
            "Analyzed strengths and weaknesses for sparse vs dense graphs",
            "Benchmarked experimental results against theoretical expectations",
            "Highlighted practical implications for real-world graph mining"
        ],
        useCases: [
            { title: "Social Networks", description: "Detects tightly-knit communities by identifying maximal cliques." },
            { title: "Biological Networks", description: "Finds functional groups in protein-protein interaction networks." },
            { title: "Data Mining", description: "Supports clustering and correlation discovery in large-scale datasets." }
        ]
    }
];

  export default projects;