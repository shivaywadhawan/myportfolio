export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work Experience", link: "#experience" },
  { name: "Resume", link: "#resume" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning TensorFlow",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Reach out to me via Email",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "VillageLink",
    des: "A web application that makes it simpler and easier to make new friends on campus, with the help of pins that help you find out where and when people are hanging out, in real time. Using the application to meet new people will grow your village, consisting of a collection of the people you have met up with along the way.",
    img: "/villageLink.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/pouchdb.svg",
      "/postman.svg",
    ],
    link: "https://villagelink.fly.dev/#login",
  },
  {
    id: 2,
    title: "Horizon",
    des: "A modern banking platform for everyone with Plaid integration.",
    img: "/horizon.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/appwritelogo.svg",
      "/dwolla.svg",
      "/plaid.jpeg",
    ],
    link: "https://banking-vertex.vercel.app/",
  },
  {
    id: 3,
    title: "Fall-Detection",
    des: "Detecting sudden fall using an ESP32-S3 microcontroller that reads from an MPU6050 IMU",
    img: "/falldetection.png",
    iconLists: ["c+.svg", "/circuitpy.svg", "/supabase.svg", "/arduino.svg"],
    link: "https://github.com/shivaywadhawan/Fall-Detection",
  },
  {
    id: 4,
    title: "Natural Language Processing",
    des: "Search engine evaluation and algorithms like page ranking, query indexing, clustering performed using python",
    img: "/nlp.png",
    iconLists: ["/python.svg"],
    link: "https://github.com/shivaywadhawan/Search-Engines",
  },
];

export const description = [
  {
    quote: `• Collaborated with the software development team on projects, tasked with translating UI designs provided in Figma into functional web interfaces using React and Material UI. 
    \n• Conducted full lifecycle development, including programming, testing, packaging, deploying, and maintaining service and infrastructure components.
    `,
    name: "Freecharge",
    title: "Software Developer Intern",
    src: "/freecharge.png",
  },
  {
    quote: `• Created mock-up & wireframe designs to target assigned tasks before starting to write code for the development phase using Figma.
    \n• Managed version control systems using Git, regularly committing, and pushing code updates to the main repository as the website progressed from initial stages to completion.`,
    name: "Fabhotels",
    title: "Front-End Developer Intern",
    src: "/fabhotels.png",
  },
  {
    quote: `• Designed and developed automated Unit Tests, Component Tests, and Scenario Tests to ensure the quality, functionality, and alignment with design specifications during the developmental phases.
    \n• Managed version control systems using Bitbucket, regularly committing and pushing code updates to the main repository as the website progressed from initial stages to completion.
   `,
    name: "Freecharge",
    title: "Software Developer Intern",
    src: "/freecharge.png",
  },
  {
    quote: `• Created accessible web front-end user interface for new or existing databases with a combination of HTML, SQL, JavaScript (React.js), and CSS(Bootstrap).
    \n• Implemented CRUD operations using Web API and tested API calls using Postman
     \n• Implemented various screens for the front-end using ReactJS and used various predefined components from Node Package Manager and Redux library
    `,
    name: "Snapstore.com",
    title: "Front-End Developer Intern",
    src: "/snapstore.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern",
    desc: "Axis Bank Pvt Ltd - Freecharge | June - Aug 2023",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Front-End Developer",
    desc: "Fabhotels | July - August 2023",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Front-End Developer Intern",
    desc: "Snapstore.com | June - Aug 2020",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },

  {
    id: 4,
    title: "Bachelor of Science(B.S) - Computer Science",
    desc: "University of Massachusetts, Amherst | May 2024",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/shivaywadhawan",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/shivay-wadhawan/",
  },
];
