// ============================================================
//  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// ============================================================

export const profile = {
  name: 'Muhammad Hasyiem',
  shortName: 'Hasyiem',
  role: 'Aspiring Software Engineer',
  tagline: 'Recent Computer Science graduate (First Class Honours, Sheffield Hallam University, 2026) with hands-on experience in full-stack web and mobile development. Passionate about building user-focused digital solutions with a keen interest in cybersecurity and secure software development.',
  location: 'Selangor, Malaysia',
  status: 'Graduate · Open to opportunities',
  phone: '+44 7775 485796',
  github: 'https://github.com/HsymRosdi',
  linkedin: 'https://www.linkedin.com/in/hasyiem-rosdi/',
  email: 'hasyiem2003@gmail.com',
};

export const education = [
  {
  school: 'Sheffield Hallam University',
  location: 'Sheffield, United Kingdom',
  degree: 'BSc (Hons) Computer Science',
  period: 'September 2024 – June 2026',
  notes: 'Graduated with First Class Honours.',
  highlight: 'Final Year Project: Full-stack Perfume Shop with React, Firebase & personality-based recommendation engine.',
},
  {
    school: 'University Poly-Tech Malaysia',
    location: 'Kuala Lumpur, Malaysia',
    degree: 'Diploma in Computer Science',
    period: 'November 2021 – April 2024',
    notes: 'Graduated with CGPA 3.72',
    highlight: "Dean's Award — 2021 to 2024 (all 6 semesters, GPA above 3.50)",
  },
];

export const experience = [
  {
    company: 'Appvolusi Sdn Bhd',
    location: 'Selangor, Malaysia',
    role: 'Intern Software Engineer',
    period: 'January 2024 – May 2024',
    points: [
      'Developed and enhanced features for RESITKU, a web application, improving functionality and user experience.',
      'Designed and implemented a new user interface for HRKu, improving usability and visual consistency.',
      'Maintained and optimised application components by improving performance.',
      'Collaborated with team members to support development, testing and feature improvements.',
    ],
  },
];

export const skills = [
  { category: 'Languages',         items: ['JavaScript', 'HTML & CSS', 'PHP', 'Java', 'C++', 'C#', 'Dart'] },
  { category: 'Frameworks',        items: ['React', 'Node.js', 'Flutter', 'Laravel'] },
  { category: 'Databases',         items: ['MySQL', 'Firebase Firestore'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'XAMPP', 'Laragon', 'SourceTree'] },
];

export const Cert =[

  {
    id: 'cert-1',
    name: 'Certificate Name Here',
    issuer: 'Issuer Name Here',
    year: '2024',
    image: '/hackerrank SE.png',
    credentialUrl: null,
  },

  {
    id: 'cert-2',
    name: 'React (basic)',
    issuer: 'HackerRank',
    year: '2026',
    image: 'hackerrank React(basic).png',
    credentialUrl: null,
  },
];

export const projects = [
  {
    id: 'perfume-shop',
    number: '01',
    title: 'Perfume Shop E-commerce',
    shortDesc: 'A full-stack perfume e-commerce platform with a personality-based MBTI recommendation engine and weighted scoring algorithm.',
    fullDesc: `Designed and developed a full-stack perfume e-commerce web application as my Final Year Project at Sheffield Hallam University.

Users can browse and explore a catalogue of perfumes, create an account, take a personality-based MBTI quiz and use the mood finder to receive personalised perfume recommendations.

Key features:
- Built a full-stack perfume e-commerce platform using React (Vite), Firebase Authentication, and Cloud Firestore, featuring browsing, filtering, cart, and order management
- Developed a personality-based recommendation engine combining MBTI quiz results and mood inputs, using a weighted scoring algorithm (100-point system across 5 factors) to deliver explainable, personalised perfume suggestions
- Implemented multiple similarity and ranking algorithms with O(1) HashMap lookups for real-time perfume matching based on shared notes, scent family, price proximity, and occasion
- Designed a full user experience including star ratings synced to Firestore, a profile page with MBTI dimension visualisation, order history, and a separate admin dashboard for managing users, orders, and inventory`,
    tags: ['React', 'Node.js', 'Firebase', 'Firestore', 'React Router'],
    github: 'https://github.com/HsymRosdi',
    demo: null,
    year: '2025',
    status: 'Final Year Project',
  },
  {
    id: 'sleep-kids-app',
    number: '02',
    title: 'Sleep Kids App',
    shortDesc: 'A healthcare-focused mobile app built with Flutter and Firebase, helping parents monitor and manage children\'s sleep routines.',
    fullDesc: `Collaborated in a group project with Elaros to develop a healthcare-focused mobile application using Flutter, Dart and Firebase Firestore on Android Studio, helping parents monitor and manage their children's sleep routines.

The app provides a practical, everyday tool for parents to track sleep patterns and build healthier routines for their children.

Key features:
- Collaborated in a group project with Elaros to develop a healthcare-focused mobile application using Flutter, Dart and Firebase Firestore on Android Studio
- Implemented core features including bedtime scheduling, sleep tracking, goal setting and sleep analytics, delivering a complete end-to-end user experience
- Followed Agile methodology throughout the project, working as a team with structured sprints, task delegation and iterative delivery to meet client expectations
- Conducted functional and unit testing, and facilitated real-user testing with parents to gather feedback, validate usability and resolve issues before final delivery`,
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Android Studio'],
    github: 'https://github.com/HsymRosdi',
    demo: null,
    year: '2025',
    status: 'Academic Project',
  },
  {
    id: 'attendance-system',
    number: '03',
    title: 'Attendance System',
    shortDesc: 'A role-based web attendance management system for teachers and administrators, built with PHP and MySQL.',
    fullDesc: `Developed a role-based web attendance management system designed for use in educational settings, supporting separate access levels for teachers and administrators.

The system ensures secure and appropriate access to data while providing efficient tools for managing attendance records and student information.

Key features:
- Developed a role-based web attendance management system using PHP, HTML/CSS and MySQL, supporting separate access levels for teachers and administrators
- Implemented session-based authentication with secure login and role separation to control user access and protect sensitive student data
- Built full CRUD functionality for managing student records, class schedules and attendance logs, backed by a structured relational MySQL database
- Followed Agile methodology with iterative development cycles, delivering features incrementally from authentication through to admin dashboard and reporting`,
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/HsymRosdi',
    demo: null,
    year: '2023',
    status: 'Academic Project',
  },

  {
    id: 'weather-app',
    number: '04',
    title: 'Weather App',
    shortDesc: 'A real-time weather application built with React and Vite, featuring dynamic theme backgrounds, glassmorphism UI and live atmospheric data from OpenWeatherMap.',
    fullDesc: `Designed and developed a premium real-time weather web application using React (Vite) and the OpenWeatherMap API, with a focus on polished UI and smooth user experience.

The app allows users to search any city worldwide and instantly view current weather conditions with a fully dynamic interface that adapts to the weather.

Key features:
- Built a real-time weather app using React (Vite) and OpenWeatherMap REST API, displaying live temperature, humidity, wind speed, visibility and pressure data
- Implemented dynamic theme system with 10 distinct background conditions (sunny, rainy, thunderstorm, snowy, foggy, night and more) that transition smoothly based on live weather data
- Designed a premium dark luxury UI with animated aurora orbs, glassmorphism cards, cinematic typography and staggered entrance animations using pure CSS
- Integrated day/night detection using sunrise/sunset Unix timestamps and timezone offsets from the API response for accurate local time display
- Structured the codebase using professional Git branching workflow (feat/, fix/, chore/) with environment variable protection for API key security
- Deployed with mobile-first responsive design supporting viewports from 360px to desktop`,
    tags: ['React', 'Vite', 'OpenWeatherMap API', 'CSS', 'Git'],
    github: 'https://github.com/HsymRosdi/WeatherApp',
    demo: null,
    year: '2026',
    status: 'Personal Project',
  },
];
