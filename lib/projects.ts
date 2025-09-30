export interface ProjectGalleryImage {
  url: string
  caption?: string
}

// export interface RelatedProject {
//   slug: string
//   title: string
//   category: string
//   image: string
// }

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  // relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "Ay-bank-app",
    title: "Ay Virtual Bank",
    category: "Web Application",
    shortDescription: "A virtual banking platform built to provide users with secure, fast, and convenient digital banking services.",
    description: [
      "Ay Virtual Bank is a full-featured online banking application that enables users to manage their finances from anywhere. The platform offers account management, fund transfers, bill payments, and transaction history, all within a user-friendly interface.",
      "Users can open accounts, view balances, and perform transactions in real-time. The app includes robust security features such as two-factor authentication and encrypted data storage to ensure user safety.",
      "Additional features include budgeting tools, spending analytics, and instant notifications for all account activities. The platform is designed for scalability and reliability, supporting thousands of concurrent users.",
    ],
    features: [
      "Open and manage multiple bank accounts digitally",
      "Instant fund transfers and bill payments",
      "Real-time transaction notifications",
      "Advanced security with two-factor authentication",
      "Budgeting and expense tracking tools",
      "Detailed analytics for financial insights",
    ],
    technologies: ["React Native", "Typescript", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
    coverImage: "/bank.png",
    thumbnailImage: "/bank.png",
    gallery: [
      { url: "/bank.png", caption: "Dashboard Overview" },
      { url: "/bank-me.png", caption: "Account Management" },
      { url: "/bank-transfer.png", caption: "Fund Transfer" },
      { url: "/bank-history.png", caption: "Spending Analytics" },
    ],
    timeline: "2 months (Q2 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://full-bank-app.vercel.app/",
    githubUrl: "https://github.com/ay0711/full-Bank-app.git",
  },
  {
    id: 2,
    slug: "Todo-application",
    title: "Todo Dashboard",
    category: "Web Application",
    shortDescription:
      "A comprehensive task management dashboard for tracking projects, deadlines, and team collaboration.",
    description: [
      "The Todo Dashboard is a powerful web application designed to help users manage their tasks and projects in one centralized location. It provides real-time insights into task progress, deadlines, and team collaboration.",
      "The dashboard features interactive charts and visualizations that make complex task data easy to understand at a glance. Users can connect multiple accounts, categorize tasks automatically, and receive personalized recommendations to improve their productivity.",
      "The application was designed with a focus on security, using bank-level encryption and authentication protocols to protect sensitive user information.",
    ],
    features: [
      "Account aggregation from multiple task management tools",
      "Automated task categorization and tagging",
      "Project creation and deadline tracking",
      "Team collaboration features with real-time updates",
      "Goal setting with progress tracking",
      "Customizable reports and data exports",
      "Task insights and recommendations",
    ],
    technologies: ["React", "Node.js", "Typescript", "Tailwind CSS", "MongoDB", "API", "Render", "Vercel"],
    coverImage: "/todo.png",
    thumbnailImage: "/todo.png",
    gallery: [
      { url: "/todo.png", caption: "Main Dashboard Overview" },
      { url: "/todo-dashboard.png", caption: "Task Management" },
      { url: "/todo-dash.png", caption: "Task Details" },
      { url: "/todo-sign.png", caption: "Task Sign-In" },
    ],
    timeline: "1 month (Q2 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://full-todo-app-pi.vercel.app/",
    githubUrl: "https://github.com/ay0711/full-Todo-App.git",
  },
  {
    id: 3,
    slug: "Google-keep-clone",
    title: "Google Keep Clone",
    category: "Web Application",
    shortDescription:
      "A note-taking application that allows users to create, edit, and organize their notes.",
    description: [
      "This project involved a comprehensive redesign of an established e-commerce platform that was struggling with user engagement and conversion rates. The goal was to create a more intuitive, visually appealing shopping experience that would drive sales and customer satisfaction.",
      "The redesign process began with extensive user research, including interviews, surveys, and usability testing of the existing platform. This research revealed key pain points in the customer journey, such as a complicated checkout process and difficulty finding products.",
      "Based on these insights, I developed a new information architecture and user flow that simplified navigation and streamlined the purchase process. The visual design was updated with a clean, modern aesthetic that highlighted product imagery and created a consistent brand experience across all touchpoints.",
    ],
    features: [
      "Simplified product navigation and filtering system",
      "Redesigned product detail pages with enhanced imagery and information",
      "Streamlined checkout process reducing steps by 40%",
      "Personalized product recommendations based on browsing history",
      "Mobile-first responsive design",
      "Improved search functionality with predictive suggestions",
      "Enhanced wishlist and saved items functionality",
    ],
    technologies: ["Firebase", "HTML/CSS", "JavaScript", "Google Analytics"],
    coverImage: "/keep.png",
    thumbnailImage: "/keep.png",
    gallery: [
      { url: "/keep.png", caption: "Homepage Design" },
      { url: "/keep-do.png", caption: "Product Category Page" },
      { url: "/keep-sign.png", caption: "Product Detail Page" }
    ],
    client: "Personal Project",
    timeline: "3 weeks (Q2 2025)",
    role: "Frontend Developer",
    liveUrl: "https://google-keep-clone-sand.vercel.app/",
    githubUrl: "https://github.com/ay0711/google-keep-clone.git"
  },
  {
      id: 4,
    slug: "Palindromic-Checker",
    title: "Palindromic Checker",
    category: "Website",
    shortDescription:
      "A Palindromic Checker.",
    description: [
      "The Palindromic Checker is a simple web application that checks whether a given string is a palindrome.",
      "The application features a clean and intuitive interface, allowing users to easily input their text and receive instant feedback.",
      "Built with a focus on performance and usability, the Palindromic Checker is a great tool for anyone looking to explore the concept of palindromes.",
    ],
    features: [
      "User-friendly interface for inputting text",
      "Instant palindrome checking with real-time feedback",
      "Responsive design for use on any device",
      "Clear and concise results display",
      "Lightweight and fast performance",
    ],
    technologies: ["HTML", "Typescript", "Tailwind CSS", "Vercel"],
    coverImage: "/pali.png",
    thumbnailImage: "/pali.png",
    gallery: [
      { url: "/pali.png", caption: "Main Dashboard Overview" },
      { url: "/pali0.png", caption: "Task Management" }
    ],
    timeline: "1 week (Q3 2025)",
    role: "Frontend Developer",
    liveUrl: "https://palindrome-checker-seven-pi.vercel.app/",
    githubUrl: "https://github.com/ay0711/palindrome-checker.git",
  },
  {
      id: 5,
    slug: "Courier-service-",
    title: "Sky-High Courier Service",
    category: "Website",
    shortDescription:
      "A courier service website.",
    description: [
      "The Sky-High Courier Service is a web application designed to help users manage their package deliveries with ease.",
      "The application features a user-friendly interface that allows customers to schedule pickups, track their packages in real-time, and receive notifications about their delivery status.",
      "Built with a focus on reliability and efficiency, the Sky-High Courier Service aims to provide a seamless experience for both customers and delivery personnel.",
    ],
    features: [
      "Easy scheduling of package pickups",
      "Real-time package tracking with GPS integration",
      "Automated notifications for delivery status updates",
      "User account management for tracking order history",
      "Responsive design for use on any device",
      "Secure payment processing for delivery fees",
    ],
    technologies: ["HTML", "Node.js", "Javascript", "Bootstrap CSS", "API", "Render", "Vercel"],
    coverImage: "/sky1.png",
    thumbnailImage: "/sky1.png",
    gallery: [
      { url: "/sky1.png", caption: "Main Dashboard Overview" },
      { url: "/sky2-dashboard.png", caption: "Task Management" },
      { url: "/sky3-dash.png", caption: "Task Details" },
      { url: "/sky4-sign.png", caption: "Task Sign-In" },
    ],
    timeline: "3 weeks (Q2 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://sky-high-chi.vercel.app/",
    githubUrl: "https://github.com/ay0711/Sky-high.git",
  },
  {
      id: 6,
    slug: "Rock-Paper-Scissors-Game",
    title: "Rock-Paper-Scissors Game",
    category: "Website",
    shortDescription:
      "A fun and interactive Rock-Paper-Scissors game.",
    description: [
      "The Rock-Paper-Scissors Game is a simple yet engaging web application that allows users to play the classic game against a computer opponent.",
      "The game features a clean and intuitive interface, making it easy for users of all ages to enjoy.",
      "With real-time feedback and a scoring system, players can track their performance and compete for high scores.",
    ],
    features: [
      "Single-player mode against a computer opponent",
      "Real-time score tracking and feedback",
      "User-friendly interface with engaging visuals",
      "Team collaboration features with real-time updates",
      "Goal setting with progress tracking",
      "Customizable reports and data exports",
      "Task insights and recommendations",
    ],
    technologies: ["HTML", "Javascript", "CSS", "Vercel"],
    coverImage: "/rock1.png",
    thumbnailImage: "/rock1.png",
    gallery: [
      { url: "/rock1.png", caption: "Main Dashboard Overview" },
      { url: "/rock2-dashboard.png", caption: "Task Management" }
    ],
    timeline: "2 weeks (Q3 2025)",
    role: "Full Stack Developer",
    liveUrl: "https://rock-paper-scissors-sigma-tan.vercel.app/",
    githubUrl: "https://github.com/ay0711/Rock-Paper-Scissors.git",
  },
  {
      id: 7,
    slug: "Sudoku-game",
    title: "Sudoku Game",
    category: "Web Application",
    shortDescription:
      "A fun and interactive Sudoku game.",
    description: [
      "The Sudoku Game is a fun and interactive web application that allows users to play the classic puzzle game.",
      "The game features a clean and intuitive interface, making it easy for users of all ages to enjoy.",
      "With real-time feedback and a scoring system, players can track their performance and compete for high scores.",
    ],
    features: [
      "Single-player mode against a computer opponent",
      "Real-time score tracking and feedback",
      "User-friendly interface with engaging visuals",
      "Team collaboration features with real-time updates",
      "Goal setting with progress tracking",
      "Customizable reports and data exports",
      "Task insights and recommendations",
    ],
    technologies: ["HTML", "Javascript", "CSS", "Vercel"],
    coverImage: "/sudo1.png",
    thumbnailImage: "/sudo1.png",
    gallery: [
      { url: "/sudo1.png", caption: "Main Dashboard Overview" },
      { url: "/sudo2.png", caption: "Task Management" }
    ],
    timeline: "3 weeks (Q2 2025)",
    role: "Frontend Developer",
    liveUrl: "https://sudoku-game-eight-lilac.vercel.app/",
    githubUrl: "https://github.com/ay0711/sudoku-game.git",
  },
  {
      id: 8,
    slug: "Tic-Tac-Toe-Game",
    title: "Tic Tac Toe Game",
    category: "Website",
    shortDescription:
      "A fun and interactive Tic Tac Toe game.",
    description: [
      "The Tic Tac Toe Game is a fun and interactive web application that allows users to play the classic game against a computer opponent.",
      "The game features a clean and intuitive interface, making it easy for users of all ages to enjoy.",
      "With real-time feedback and a scoring system, players can track their performance and compete for high scores.",
    ],
    features: [
      "Single-player mode against a computer opponent",
      "Real-time score tracking and feedback",
      "User-friendly interface with engaging visuals",
      "Team collaboration features with real-time updates",
      "Goal setting with progress tracking",
      "Customizable reports and data exports",
      "Task insights and recommendations",
    ],
    technologies: ["HTML", "Javascript", "CSS", "Vercel"],
    coverImage: "/tic3.png",
    thumbnailImage: "/tic3.png",
    gallery: [
      { url: "/tic3.png", caption: "Main Dashboard Overview" },
      { url: "/tic2.png", caption: "Task Management" },
      { url: "/tic1.png", caption: "Task Details" }
    ],
    timeline: "1 week (Q3 2025)",
    role: "Frontend Developer",
    liveUrl: "https://tic-tak-toe-vert.vercel.app/",
    githubUrl: "https://github.com/ay0711/Tic-Tak-Toe.git",
  },
    {
      id: 9,
    slug: "Music-and-weather-app",
    title: "Music and Weather App",
    category: "Website",
    shortDescription:
      "A web application that provides music recommendations and weather updates.",
    description: [
      "The Music and Weather App is a web application that provides users with personalized music recommendations based on their mood and preferences.",
      "In addition to music recommendations, the app also offers real-time weather updates, ensuring users are always informed about the weather conditions in their area.",
      "The app features a sleek and modern design, making it easy for users to navigate and find the information they need.",
    ],
    features: [
      "Personalized music recommendations based on user preferences",
      "Real-time weather updates with detailed forecasts",
      "User-friendly interface with intuitive navigation",
      "Integration with popular music streaming services",
      "Customizable playlists and music discovery features",
      "Responsive design for use on any device",
      "Social sharing options for music and weather updates",
    ],
    technologies: ["HTML", "Javascript", "CSS", "API", "Vercel"],
    coverImage: "/mw1.png",
    thumbnailImage: "/mw1.png",
    gallery: [
      { url: "/mw1.png", caption: "Main Dashboard Overview" },
      { url: "/mw2.png", caption: "Task Management" },
      { url: "/mw3.png", caption: "Task Details" }
    ],
    timeline: "2 weeks (Q2 2025)",
    role: "Frontend Developer",
    liveUrl: "https://music-and-weather-app.vercel.app/",
    githubUrl: "https://github.com/ay0711/music-and-weather-app.git",
  },
    {
      id: 10,
    slug: "football-lineup-generator",
      title: "Football Lineup Generator",
      category: "Website",
      shortDescription:
        "A web application that helps users create and manage football team lineups.",
      description: [
        "The Football Lineup Generator is a web application that allows users to create and manage football team lineups.",
        "Users can easily add, remove, and modify players in their lineup, ensuring they have the best team for each match.",
        "The app features a clean and intuitive interface, making it easy for users to navigate and find the information they need.",
      ],
    features: [
      "Easy-to-use interface for creating and managing football team lineups",
      "Player management features including adding, removing, and modifying players",
      "Real-time updates and notifications for lineup changes",
      "Integration with popular football databases for player statistics",
      "Customizable lineup templates for different formations",
      "Responsive design for use on any device",
      "Social sharing options for team lineups",
    ],
    technologies: ["HTML", "Javascript", "CSS", "Vercel"],
    coverImage: "/foot1.png",
    thumbnailImage: "/foot1.png",
    gallery: [
      { url: "/foot1.png", caption: "Main Dashboard Overview" },
      { url: "/foot2.png", caption: "Task Management" }
    ],
    timeline: "2 weeks (Q2 2025)",
    role: "Frontend Developer",
    liveUrl: "https://football-assignment.vercel.app/",
    githubUrl: "https://github.com/ay0711/football-assignment.git",
  },
      {
      id: 11,
    slug: "AI-integration",
      title: "AI Integration Project",
      category: "Website",
      shortDescription:
        "A web application that integrates AI technologies for enhanced user experiences.",
      description: [
        "The AI Integration Project is a web application that leverages AI technologies to provide personalized user experiences.",
        "The app features AI-driven recommendations, chatbots, and data analysis tools to help users make informed decisions.",
        "With a focus on innovation and user-centric design, the AI Integration Project aims to showcase the potential of AI in modern web applications.",
      ],
    features: [
      "AI-driven recommendations for personalized content",
      "Chatbot integration for real-time user support",
      "Data analysis tools for insights and reporting",
      "User-friendly interface with intuitive navigation",
      "Integration with popular AI platforms and services",
      "Responsive design for use on any device",
      "Secure data handling and privacy features",
    ],
    technologies: ["React", "Javascript", "Tailwind CSS", "Node.js", "Render", "API",  "Vercel"],
    coverImage: "/ai1.png",
    thumbnailImage: "/ai1.png",
    gallery: [
      { url: "/ai1.png", caption: "Main Dashboard Overview" },
      { url: "/ai2.png", caption: "Task Management" },
      { url: "/ai3.png", caption: "Task Details" },
      { url: "/ai4.png", caption: "Task Sign-In" },
    ],
    timeline: "2 weeks (Q2 2025)",
    role: "Frontend Developer",
    liveUrl: "https://ai-ten-alpha-19.vercel.appp/",
    githubUrl: "https://github.com/ay0711/AI.git",
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

// export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
//   const currentProject = getProjectBySlug(currentSlug)
//   if (!currentProject || !currentProject.relatedProjects) {
//     // If no related projects defined, return random projects
//     return projects
//       .filter((project) => project.slug !== currentSlug)
//       .slice(0, limit)
//       .map((project) => ({
//         slug: project.slug,
//         title: project.title,
//         category: project.category,
//         image: project.thumbnailImage,
//       }))
//   }

//   return currentProject.relatedProjects.slice(0, limit)
// }
