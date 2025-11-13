// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import tableauLogo from './assets/tech_logo/Tableau_Logo.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import powerBILogo from './assets/tech_logo/PowerBi_Logo.png';
import excelLogo from './assets/tech_logo/Excel_Logo.png';

// Experience Section Logo's
import OasisLogo from './assets/company_logo/OasisInfo_Logo.png';
import InternPeLogo from './assets/company_logo/InternPeLogo.png';

// Education Section Logo's
import satiLogo from './assets/education_logo/SATI_Logo.png';
import mpboardLogo from './assets/education_logo/MPBoard_Logo.png';
import ssvmLogo from './assets/education_logo/SSVM_Logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/ForeverLogo.png';
import GeminiLogo from './assets/work_logo/GeminiLogo.png';
import EdusityLogo from './assets/work_logo/EdusityLogo.png';
import WanderLustLogo from './assets/work_logo/WanderLustLogo.png';
import FoodDeliveryLogo from './assets/work_logo/FoodDeliveryLogo.png';
import ChessGemeLogo from './assets/work_logo/ChessGameLogo.png';
import Virat_Logo from './assets/work_logo/ViratKohliDashboard.png';
import Hospital_Logo from './assets/work_logo/Hospital_Emergency_Room_Dashboard.png';
import Sales_Logo from './assets/work_logo/Sales_Dashborad.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Excel', logo: excelLogo },
      { name: 'PowerBI', logo: powerBILogo },
      { name: 'Tableau', logo: tableauLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: OasisLogo,
      role: "Web Developer",
      company: "OasisInfoByte",
      date: "Sep 2024 - Oct 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
      ],
    },
    {
      id: 1,
      img: InternPeLogo,
      role: "Java Programing",
      company: "InternPe",
      date: "May 2023 - Jun 2023",
      desc: "Contributed to innovative projects as a Java Programmer, leading coding part using technologies such as HTML, CSS, SQL, Java Worked closely with the team to deliver high-performance code ",
      skills: [
        "Java",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: satiLogo,
      school: "Samrat Ashok Technological Institute, Vidisha Madhya Pradesh",
      date: "Oct 2021 - Jun 2025",
      grade: "7.12 CGPA",
      desc: "I have completed my bachlors in Computer Science from Sati, Vidisha. During my time at sati, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Sati has been instrumental in shaping my technical abilities and professional growth.",
      degree: "B-Tech in Computer Science and Engineering",
    },
    {
      id: 1,
      img: mpboardLogo,
      school: "Govt. Boy's Higher Secondary School Sarni",
      date: "Jun 2019 - May 2021",
      grade: "90.2%",
      desc: "I completed my class 12 education from Govt Boy's Higher Secondary School Sarni, under the MP Board, where I studied Physics, Chemistry, and Mathematics (PCM) with BIO.",
      degree: "12th - PCM with BIO",
    },
    {
      id: 2,
      img: ssvmLogo,
      school: "Sarashwati Vidhya Mandir Sarni",
      date: "Jun 2017 - May 2019",
      grade: "87.2%",
      desc: "I completed my class 10th education from Sarashwati Vidhya Mandir Sarni, under the MP board, where I studied English, Science, and Mathematics (PCM) with Computer.",
      degree: "10th",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Forever",
      description:"I have developed a MERN stack-based clothing website where users can browse and order clothes by category (Men, Women, Kids). It includes a separate admin panel to add products, update order status, and manage orders. The project highlights my skills in React, Node.js, Express, and MongoDB for building a complete e-commerce platform.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","NodeJS","ExpressJS","MongoDB"],
      github: "https://github.com/ChetanVerma12/Ecommerce-Website",
      webapp: "https://forever-frontend-zeta-jet.vercel.app/",
    },
    {
      id: 1,
      title: "Food-Delivery-APP",
      image:FoodDeliveryLogo,
      description:"I have developed a MERN stack-based food ordering website where users can view available food items and place orders easily. It includes a separate admin panel to add new items, update order status, and manage orders. This project highlights my skills in React, Node.js, Express, and MongoDB for creating a complete food ordering system.",
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","NodeJS","ExpressJS","MongoDB"],
      github: "https://github.com/ChetanVerma12/Food-Delivery-App",
      webapp: "https://food-delivery-app-frontend-0ei8.onrender.com",
    },
    {
      id: 2,
      title: "Chess Game",
      description:"I have developed a chess game using the MERN stack and WebSocket, where two players can play together from different devices or PCs. The game uses chess.js to handle the game logic and validate moves. This project demonstrates my skills in React, Node.js, Express, MongoDB, and WebSocket for creating an interactive multiplayer chess platform.",
      image: ChessGemeLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript","NodeJS","ExpressJS","Websocket","ChessJS"],
      github: "https://github.com/ChetanVerma12/ChessGame",
      webapp: "https://chessgame-mrt5.onrender.com",
    },
    {
      id: 3,
      title: "WanderLust",
      description:"I have developed a hotel booking website using the EJS template engine with Node.js, Express, and MongoDB. Users can browse hotels, book rooms, give ratings, and post comments. The project demonstrates my skills in server-side rendering, database management, and dynamic web development using the MVC architecture.",
      image: WanderLustLogo,
      tags: ["EJS", "Node.js","ExpressJS","MongoDB","HTML","CSS","JavaScript", "NPM", "Validation"],
      github: "https://github.com/ChetanVerma12/WanderLust_Project",
      webapp: "https://wanderlust-project-hmrr.onrender.com",
    },
    {
      id: 4,
      title: "Gemini Clone",
      description:"I have developed a Gemini clone using frontend technologies and the Google API. It allows users to interact with an AI chatbot that generates intelligent responses in real time. The project highlights my skills in HTML, CSS, JavaScript, and API integration for creating a responsive and interactive AI-based web application."
      ,image: GeminiLogo,
      tags: ["JavaScript", "HTML", "CSS","GoogleAPI","ReactJS"],
      github: "https://github.com/ChetanVerma12/GeminiClone",
      webapp: "https://gemini-clone-tawny-two.vercel.app/",
    },
    {
      id: 5,
      title: "Edusity",
      description:"I have developed Edusity, a college website frontend that showcases courses, faculty, and campus details with a modern and responsive design. The project demonstrates my skills in HTML, CSS, JavaScript, and React for building a clean, user-friendly educational website interface",
      image: EdusityLogo,
      tags: ["HTML", "CSS", "JavaScript", "ReactJS"],
      github: "https://github.com/ChetanVerma12/Edusity",
      webapp: "https://edusity-xi-seven.vercel.app",
    },
     {
      id: 6,
      title: "Virat Kohli IPL Performace DashBoard",
      description:"I have developed a Virat Kohli IPL Performance Dashboard using Power BI, which displays his season-wise runs, strike rate, average, and other key statistics through interactive charts and visuals. This project demonstrates my skills in data analysis, visualization, and report building using Power BI.",
      image: Virat_Logo,
      tags: ["PowerBI", "DAX","Data Modeling", "Power Query"],
      github: "https://github.com/ChetanVerma12",
      webapp: "https://drive.google.com/file/d/1ZoFyB_eca9T768SjeE7SLO9r0RHGKqWN/view?usp=drivesdk",
    },
     {
      id: 7,
      title: "Hospital Emergency Room Dashboard",
      description:"I have developed a Hospital Emergency Room Dashboard using Microsoft Excel, which tracks patient admissions, waiting times, bed occupancy, and doctor availability. The dashboard provides a clear overview of emergency room performance and resource management. This project highlights my skills in data analysis, visualization, and dashboard creation using Excel.",
      image: Hospital_Logo,
      tags: ["Excel","Data Modeling", "Power Query"],
      github: "https://github.com/ChetanVerma12",
      webapp: "https://docs.google.com/presentation/d/1eARaHgiCYkc3S1IPzrWELJhB8SOaeG_a/edit?usp=drivesdk&ouid=116116992763937382737&rtpof=true&sd=true",
    },
    {
      id: 8,
      title: "Sales Dashboard",
      description:"I have developed a Sales Dashboard using Power BI, which visualizes sales performance, revenue trends, top-selling products, and regional insights through interactive charts and reports. This project demonstrates my skills in data analysis, visualization, and business intelligence using Power BI.",
      image: Sales_Logo,
      tags: ["PowerBI", "DAX","Data Modeling", "Power Query"],
      github: "https://github.com/ChetanVerma12",
      webapp: "https://drive.google.com/file/d/1eR2Q1auA1RiD_7YUb2h93-7-MgIYglrC/view?usp=drivesdk",
    },
  ];  