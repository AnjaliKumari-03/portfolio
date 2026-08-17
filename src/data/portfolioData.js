export const profile = {
  name: "Anjali Kumari",
  role: "Full-Stack MERN Developer",
  phone: "+91 8340178769",
  email: "anjalikumari17.main@gmail.com",
  linkedin: "https://www.linkedin.com/in/anjalikumari003/",
  github: "https://github.com/AnjaliKumari-03",
  resumeUrl: "/resume.pdf",
  tagline:
    "I build responsive, scalable, high-performance web applications — from database schema to pixel-perfect UI.",
  bio: `Full-stack MERN developer with hands-on experience building responsive, scalable, and high-performance web applications using React.js. Transitioned into software development from a mechanical engineering background, drawn by the same systematic problem-solving — just applied to code instead of machines. Skilled in developing reusable UI components, integrating RESTful APIs, implementing secure authentication, and optimizing application performance. Strong foundation in Data Structures, Algorithms, and Software Development Lifecycle, with a track record of delivering and deploying full-stack production applications end-to-end.`,
  interests: [
    "Painting & Sketching",
    "Baking & Dessert Styling",
    "Home Decor & Aesthetic Setup",
  ],
};

export const skillGroups = [
  {
    group: "Languages",
    items: ["Java", "JavaScript (ES6+)", "TypeScript (basic)", "C++"],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Context API",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Redux",
      "Responsive Web Design",
      "Mobile-First Design",
      "Reusable UI Components",
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "RESTful API Development",
      "API Integration",
      "Async/Await",
      "JWT Authentication",
      "Passport.js",
    ],
  },
  {
    group: "Databases",
    items: ["MongoDB", "Mongoose", "SQL"],
  },
  {
    group: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Render",
      "MongoDB Atlas",
      "Cloudinary",
      "Razorpay",
    ],
  },
  {
    group: "Core Competencies",
    items: [
      "OOP",
      "Data Structures & Algorithms",
      "DBMS",
      "SDLC",
      "Web Performance Optimization",
      "SEO-Friendly Markup",
      "Cross-Browser Compatibility",
    ],
  },
];

export const projects = [
  {
    slug: "quickcare-connect",
    name: "QuickCare Connect",
    subtitle: "Full-Stack MERN Healthcare Application",
    date: "Feb 2026 – Mar 2026",
    cover: "/projects/quickcare-connect/home.png",
    gallery: [
      "/projects/quickcare-connect/doctors-list.png",
      "/projects/quickcare-connect/admin-dashboard.png",
    ],
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Razorpay",
    ],
    stats: [
      { value: "3", label: "user roles" },
      { value: "16", label: "page views" },
      { value: "10", label: "reusable components" },
      { value: "24", label: "API endpoints" },
    ],
    points: [
      "Built a responsive healthcare platform serving patients, doctors, and admins, architecting 10 reusable React.js components for a consistent experience across every workflow.",
      "Designed and secured 24 RESTful API endpoints across three role-based route groups with JWT authentication and async/await data handling.",
      "Integrated the Razorpay payment gateway end-to-end — order creation, checkout, and signature verification — for secure consultation payments.",
      "Applied route-based code-splitting with React.lazy and Suspense to reduce the initial bundle size, and tested across Chrome, Firefox, and Safari for consistent rendering.",
      "Deployed the full stack independently on Render with production-grade environment variable and CORS configuration.",
    ],
    links: [
      {
        label: "User App",
        href: "https://quickcare-connect-frontend.onrender.com",
      },
      {
        label: "Admin Dashboard",
        href: "https://quickcare-connect-admin.onrender.com",
      },
      {
        label: "Backend API",
        href: "https://quickcare-connect-backend.onrender.com",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/AnjaliKumari-03/QuickCare-Connect",
      },
    ],
  },
  {
    slug: "wanderlust",
    name: "WanderLust",
    subtitle: "Full-Stack Marketplace Application",
    date: "Oct 2025 – Jan 2026",
    cover: "/projects/wanderlust/home.png",
    gallery: [
      "/projects/wanderlust/room-detail.png",
      "/projects/wanderlust/location-map.png",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "Passport.js",
      "Cloudinary",
      "Mapbox",
    ],
    stats: [
      { value: "15", label: "API endpoints" },
      { value: "7", label: "core page views" },
      { value: "4", label: "EJS partials" },
    ],
    points: [
      "Architected a full-stack marketplace using the MVC pattern across listings, reviews, and authentication.",
      "Implemented nested resource routing (reviews scoped to listings via mergeParams) and a real-time search-suggestions endpoint.",
      "Designed SEO-friendly, accessible pages with HTML5, CSS3, and Bootstrap, improving discoverability.",
      "Modeled scalable MongoDB schemas with GeoJSON to power Mapbox location search and map rendering.",
      "Implemented Passport.js authentication and session management, with Cloudinary image uploads.",
      "Deployed on Render with MongoDB Atlas, configuring production-ready environment variables.",
    ],
    links: [
      {
        label: "Live App",
        href: "https://wanderlust-zgda.onrender.com/listings",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/AnjaliKumari-03/Wanderlust",
      },
    ],
  },
  {
    slug: "recipe-website",
    name: "Recipe Website",
    subtitle: "Indian & Western Recipes — React (Vite)",
    date: "Jul 2025",
    cover: "/projects/recipe-website/home.png",
    gallery: [
      "/projects/recipe-website/indian-breakfast.png",
      "/projects/recipe-website/western-lunch.png",
    ],
    stack: ["React.js", "Vite", "HTML5", "CSS3"],
    stats: [
      { value: "24", label: "recipes" },
      { value: "2", label: "cuisines" },
    ],
    points: [
      "Built a responsive recipe website featuring 24 detailed recipes across Indian and Western cuisines, organized by Breakfast, Lunch, and Dinner.",
      "Implemented dedicated route pages per category plus recipe detail and favorites pages using React Router.",
      "Structured reusable components (Navbar, SearchBar, RecipeCard) with component-level styling for a clean, maintainable codebase.",
    ],
    links: [
      {
        label: "Live App",
        href: "https://recipes-website-sigma.vercel.app/",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/AnjaliKumari-03/recipes-website",
      },
    ],
  },
  {
    slug: "edusity",
    name: "Edusity",
    subtitle: "University/College Website — React + Vite",
    date: "Jul 2025",
    cover: "/projects/edusity/home.png",
    gallery: [],
    stack: ["React.js", "Vite", "CSS3"],
    stats: [{ value: "100%", label: "responsive" }],
    points: [
      "Built a modern, responsive university/college website showcasing programs, campus life, and testimonials.",
      "Structured the app into self-contained, reusable sections (Hero, Navbar, Programs, Campus, Contact, Footer) with component-scoped CSS.",
      "Built fully responsive across desktop, tablet, and mobile, and structured to be extended into a dynamic, routed site.",
    ],
    links: [
      {
        label: "Live App",
        href: "https://edusity-two-lime.vercel.app/",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/AnjaliKumari-03/edusity",
      },
    ],
  },
];

// Smaller builds — shown as a compact list rather than full feature cards,
// so the featured projects above get the attention.
export const otherProjects = [
  {
    name: "YouTube Clone",
    subtitle: "React/Redux app integrating the YouTube Data API",
    href: "https://github.com/AnjaliKumari-03/youtube_clone",
  },
  {
    name: "Finance Files",
    subtitle:
      "Client-side personal finance dashboard with Context API + Chart.js",
    href: "https://github.com/AnjaliKumari-03/Finance-Files",
  },
];

export const education = [
  {
    school: "NIT Andhra Pradesh",
    degree: "B.Tech in Mechanical Engineering",
    date: "2021 – 2025",
  },
  {
    school: "Vivekananda Vidya Mandir",
    degree: "XII (CBSE)",
    date: "2020",
  },
];

export const certifications = [
  "MERN Stack Developer Certification — Apna College",
  "Java Certification — Apna College",
];
