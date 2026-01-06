export const projects = [
  {
    id: "project1",
    title: "BrannVRn - VR Fire Safety Simulator (A)",
    teaser: "A VR fire safety training simulator built for Sykehuspartner's Drammen office, featuring realistic emergency scenarios and interactive safety training.",
    description:
      "BrannVRn is a Virtual Reality fire safety training simulator developed as a bachelor's degree project in collaboration with Sykehuspartner. The project recreates Sykehuspartner's Drammen office in a 1:1 scale, providing immersive fire safety training experiences.\n\nAs the concept artist and UI/UX designer, I was responsible for creating the visual identity, infographics, UI elements, 3D modeling, texturing, and developing informational content about fire hazards and emergency procedures.",
    images: ["/BrannVRn.jpg"],
    github: "",
    live: "",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:6937386481468510208/",
    figma: "",
    technologies: ["Unreal Engine", "VR Development", "3D Modeling", "UI/UX Design", "Concept Art"],
    authers: "Herman Hylland, Axel Gardarsson, Deniz Javeid",
    article: [
      {
        heading: "Project Overview",
        content: "BrannVRn was developed as our bachelor's degree final project, earning an A grade. Working with Sykehuspartner, we created a comprehensive VR fire safety training simulator. The client requested a 1:1 scale replica of their Drammen office, transformed into an interactive training environment where users can learn essential fire safety skills in a realistic but safe virtual setting.",
      },
      {
        heading: "Team & Responsibilities",
        content: "Our team consisted of three members with distinct roles: I served as the concept artist and UI/UX designer, responsible for developing the visual concept and art direction, designing all user interface elements and infographics, creating informational displays about fire hazards and safety procedures, and applying textures and skins to assets. Axel Gardarsson handled all 3D modeling, building the detailed environment and objects. Deniz Javeid was our programmer, implementing all the VR interactions and functionality in Unreal Engine.",
      },
      {
        heading: "Key Features",
        content: "The simulator includes several interactive training modules: fire extinguisher operation and proper usage techniques, fire hose handling procedures, identification of fire hazard objects in an office environment, emergency evacuation procedures when fire alarms activate, and guided escape routes from the office to the designated fire assembly point. We utilized 360-degree camera technology to capture real-world reference imagery of the actual escape routes from the office to the meeting point.",
      },
      {
        heading: "Pedagogical Design",
        content: "As an educational tool, the simulator needed to be more than just visually accurate—it had to effectively teach users about fire safety equipment and emergency procedures. A core focus of my work was designing clear, intuitive visuals and UI components that would help users absorb information naturally while immersed in the virtual environment.\n\nI created informational graphics and text displays explaining how different fire safety equipment works, including fire extinguishers, fire hoses, and alarm systems. These educational elements were carefully integrated into the environment so users could learn at their own pace, reading about equipment functionality before practicing hands-on. The pedagogical approach ensured that users not only experienced emergency scenarios but truly understood the reasoning behind proper safety procedures.",
      },
      {
        heading: "Fire Station Consultation",
        content: "To ensure our simulator was both accurate and effective, we had the opportunity to visit the local fire station and spend a day with the firefighters. The station staff and leaders generously shared their expertise, demonstrating how different equipment is used in various emergency scenarios and explaining the science behind fire behavior.\n\nTheir insights were invaluable—they provided detailed feedback on which parts of a fire are most dangerous, how smoke and heat spread through buildings, and the critical decision-making processes during emergencies. This real-world knowledge directly informed our design choices, helping us create training scenarios that reflected actual firefighting protocols and safety priorities. The collaboration ensured our simulator would prepare users for genuine emergency situations.",
      },
      {
        heading: "Technical Implementation",
        content: "Built in Unreal Engine for VR platforms, the project required careful attention to scale accuracy and realistic interaction design. The 1:1 recreation of the Sykehuspartner office demanded precise measurements and detailed modeling to ensure users would experience familiar surroundings. We incorporated 3D photography techniques to capture the real environment and integrated this with our virtual recreations for a seamless training experience.",
      },
      {
        heading: "Learning Outcomes",
        content: "This project was an incredibly rewarding experience that went far beyond traditional software development. We gained hands-on knowledge in VR development, collaborative teamwork, and professional client communication with Sykehuspartner. The fire station visit gave us real-world insights into emergency response that shaped our entire approach to the project.\n\nWorking on an educational tool taught us the importance of balancing technical accuracy with pedagogical effectiveness—creating something that not only looks and feels realistic but genuinely teaches users valuable safety skills. The collaboration between our team, the client, and the firefighters demonstrated how multidisciplinary input leads to a stronger final product. The A grade reflects both the technical quality and the meaningful educational impact of our work.\n\nWant to see the project in action? Click the 'Watch Trailer' button at the top of this page to view a video demonstration on LinkedIn.",
      },
    ],
  },

  {
    id: "project-gonefishing",
    title: "GoneFishing - Fishing Tracker App",
    teaser: "GoneFishing is a modern fishing tracker app built with Next.js that helps anglers log catches, manage details, and track their fishing adventures.",
    description:
      "GoneFishing is a comprehensive fishing tracking application designed to help anglers document and manage their fishing activities with ease. \n\nBuilt with Next.js and featuring a clean, responsive interface, the app allows users to record detailed information about their catches including location, species, size, and conditions. With support for both light and dark themes, authentication, and customizable unit systems (metric/imperial), GoneFishing provides a seamless experience for fishing enthusiasts who want to maintain organized records of their adventures.",
    images: ["/gonefishing.png"],
    github: "https://github.com/Hermanhyl/gonefishing",
    live: "https://gonefishing-2.netlify.app/",
    figma: "",
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    authers: "Herman Hylland",
    article: [
      {
        heading: "Project Overview",
        content: "GoneFishing was created to solve a common problem among fishing enthusiasts: keeping track of catches in a simple, organized way. Instead of relying on handwritten notes or memory, anglers can now log every detail of their fishing trips digitally. The app provides an intuitive interface for recording fish species, size, weight, location, weather conditions, and personal notes about each catch.",
      },
      {
        heading: "Key Features",
        content: "The application includes several standout features that enhance the user experience. Theme management allows users to switch between light and dark modes, with preferences saved for consistency across sessions. The authentication system, powered by Supabase, ensures that each user's data remains private and secure while providing a seamless login experience. Additionally, the unit system provider enables users to choose between metric and imperial measurements, making the app accessible to anglers worldwide regardless of their preferred measurement system.",
      },
      {
        heading: "Technical Implementation",
        content: "Built with Next.js, the application leverages React's component-based architecture for maintainable and scalable code. Supabase serves as the backend, handling authentication and data storage with real-time capabilities. Tailwind CSS provides a modern, responsive design that works seamlessly across devices from mobile phones to desktop computers. The app uses Next.js's built-in routing for smooth navigation, and special attention was paid to preventing visual 'flashes' during page loads by applying theme settings immediately.",
      },
      {
        heading: "Development Process",
        content: "The development focused on creating an intuitive user experience while maintaining clean, efficient code. Responsive design was a priority from the start, ensuring the app works well whether users are logging catches from their phones by the water or reviewing their history on a larger screen at home. The dark mode implementation was carefully designed with a slate blue background that's easy on the eyes during early morning or late evening fishing sessions.",
      },
      {
        heading: "Future Enhancements",
        content: "While the current version provides solid functionality for tracking catches, there are several planned improvements. Future updates may include data visualization to show catch trends over time, social features to share catches with friends, integration with weather APIs for automatic condition logging, and photo uploads to document catches visually. The goal is to continue evolving GoneFishing into the most comprehensive fishing tracking solution available.",
      },
    ],
  },

  {
    id: "project2",
    title: "Hobbyist - Social Activity Platform",
    teaser: "Hobbyist is a social platform that connects people through shared hobbies and activities, helping users find genuine friendships and activity partners.",
    description:
      "Hobbyist is a social platform designed to help people make real connections through shared interests and activities. Unlike dating apps, Hobbyist focuses on building genuine friendships and finding activity partners. \n\nWhether you're looking for a hiking buddy, board game partner, or cooking class companion, Hobbyist connects you with locals who share your passions. The platform features a warm, inviting design with an intuitive interface that makes discovering and joining activities effortless.",
    images: ["/hobbyist.jpg"],
    github: "https://github.com/Hermanhyl/Hobbyist",
    live: "https://hobbyist.netlify.app/",
    figma: "",
    technologies: ["React", "Vite", "Tailwind CSS", "Supabase"],
    authers: "Herman Hylland",
    article: [
      {
        heading: "Project Overview",
        content: "Hobbyist was born from the idea that meaningful connections come from shared experiences. In a world where digital interactions often feel shallow, this platform brings people together through activities they genuinely enjoy. The app makes it easy to browse local activities, connect with like-minded individuals, and build real friendships around common interests.",
      },
      {
        heading: "Key Features",
        content: "The platform includes comprehensive activity browsing and filtering, user profiles showcasing interests and preferred activities, and a clean dashboard for managing connections and upcoming events. Users can explore a wide range of hobby categories from outdoor adventures like hiking and cycling to creative pursuits like photography and cooking classes. The warm coral and orange color scheme creates an inviting, friendly atmosphere that reflects the platform's community-focused mission.",
      },
      {
        heading: "Technical Implementation",
        content: "Built with React and Vite for optimal performance, Hobbyist leverages Supabase for authentication and real-time database functionality. Tailwind CSS powers the responsive design, ensuring a seamless experience across all devices. The architecture prioritizes scalability and maintainability, with clean component separation and efficient state management.",
      },
      {
        heading: "Design Philosophy",
        content: "The design intentionally moves away from the typical dating app aesthetic. The warm gradient backgrounds, friendly typography, and inclusive imagery emphasize community and genuine connection. Every design decision reinforces the core message: this is a space for making real friends through shared activities, not romantic matchmaking.",
      },
      {
        heading: "Future Development",
        content: "Planned features include activity scheduling and RSVP functionality, group chat capabilities for activity participants, integration with calendar apps, location-based activity recommendations, and a rating system for activities and organizers. The goal is to create a comprehensive platform that makes finding and participating in hobby groups as easy as possible.",
      },
    ],
  },

  {
    id: "project3",
    title: "Holidaze - Project Exam (A)",
    teaser: "Holidaze is a cozy booking app for slow-living getaways browse, book, and unwind in handpicked cabins and retreats.",
    description: "Holidaze is a collaborative frontend project built on the Noroff API, developed by Veronika Aas, Herman Hylland, and Madelen Sletteberg. \n\nIt offers a cozy, responsive booking experience for handpicked getaways focused on slow living from forest cabins to mountain retreats. Users can browse, book, and manage venues with ease through a warm, user-friendly interface.",
    images: ["/holidaze.png"],
    github: "https://github.com/maddipaddi/Fireside-Holidaze",
    live: "https://fireside-holidaze.netlify.app/",
    figma: "https://www.figma.com/design/thqoG8jMTmJWJ0xvjoWJFX/PE2-Fireside-Holidaze?node-id=97-2&p=f&t=WNVw9oV9YS4fXdlk-0",
    technologies: ["React", "Vite", "Prettier", "Tailwind CSS", "HTML"],
    authers:"Madelen Sletteberg, Herman Hylland, Veronika Aas",
    article: [
      {
        heading: "Exam feedback",
        content: "We have finaly gotten the result back of our final exam! We are so happy with how it turned out. We got an A on the project, and we are so proud of the work we put into it. We learned so much during this project, and we are excited to continue our journey in web development.",
      },
      {
        heading: "Project Overview",
        content: "Holidaze is a collaborative project that showcases our ability to work together as a team. We divided the tasks based on our strengths and interests, and we communicated effectively throughout the project. We used GitHub for version control, and we made sure to document our code and write clear commit messages. This helped us keep track of our progress and collaborate efficiently. \n\nThe project is built using React, Vite, Prettier, Tailwind CSS, and HTML. We also made sure to follow best practices for code quality and maintainability.File structure is organized, with components, styles, and assets separated for clarity. We used Tailwind CSS for styling, which allowed us to create a responsive and visually appealing design without writing custom CSS.",
      },
      {
        heading: "Points of Improvement",
        content: "While we are proud of the final product, we also recognize areas for improvement. One key aspect is the need for more comprehensive error handling. In the current version, some API calls do not have proper error handling, which could lead to a poor user experience if something goes wrong. We plan to implement try/catch blocks and display user-friendly error messages in future updates.\n\nAdditionally, we want to improve the accessibility of the application. While we have made some efforts to ensure that the app is usable by people with disabilities, there are still areas where we can enhance keyboard navigation and screen reader support.",
      },
      {
        heading: "Responsibilities",
        content: "We all participated in all the aspects of the project. We all took part in planing, creating the design, and implementing the functionality. We also made sure to communicate effectively throughout the project, and we used GitHub for version control. This helped us keep track of our progress and collaborate efficiently. \n\nWe also made sure to document our code and write clear commit messages. This helped us keep track of our progress and collaborate efficiently. We also made sure to follow best practices for code quality and maintainability.",
      },
      {
        heading: "GitHub Repository",
        content: "Please check out our GitHub repository for the project. Here you can find the source code, documentation, and instructions on how to run the project locally. We welcome any feedback or contributions from the community. You can access the repository using the 'View Code' button at the top of the page. Instructions on how to create an account and use the application can be found in the README file. Feel free to explore the code, and if you have any questions or suggestions, don't hesitate to reach out! Thank you for your interest in our project!",
      },
      {
        heading: "Figma",
        content: "We have also created a Figma design for the project, which you can view by clicking the 'Figma Design' button at the top of the page. The design showcases the user interface and user experience we aimed to achieve with Holidaze. It includes all the screens we implemented in the final product. We hope this gives you a better understanding of our design process and the thought that went into creating a cohesive and user-friendly application. \n\nIt is not prototyped, but it is a good representation of the final product. Reason for this is that we wanted to focus on the functionality of the application. The focus was on the frontend development in this project, and we wanted to make sure that the design was implemented correctly. We are happy with the final result, and we hope you are too!",
      },
    ],
  },

  {
    id: "project4",
    title: "Auction - Semester Project 2 (A)",
    teaser: "Own The Bid is a fast-paced auction app where users can list, bid, and browse items with ease, no account needed to explore.",
    description: "Own The Bid is a web-based auction platform where users can register with a valid stud.noroff.no email to buy and sell items through timed listings. \n\n Registered users can create listings with images, descriptions, and deadlines, place bids on others' items, manage their avatar, and view their available credits. The platform also allows unregistered users to browse and search for listings.",
    images: ["/Action-semester-project.png"],
    github: "https://github.com/Hermanhyl/Semester-Project-2-Auction",
    live: "https://own-the-bid-main.netlify.app/",
    figma: "https://www.figma.com/design/8AhvLrYMu6VoQhHefNQpUz/Semester-Project-2-auction?t=RmAPyAmZq0TLngla-0",
    technologies: ["Vanilla JavaScript", "Tailwind CSS", "HTML"],
    authers:"Herman Hylland",
    article: [
      {
        heading: "Improvements",
        content: "Since completing the initial version of my auction website, I have taken time to revisit and improve the project based on both feedback from my instructor and my own growing understanding of web development best practices. These improvements reflect my continued learning and commitment to writing clean, maintainable, and professional code.",
      },
      {
        heading: " Proper Error Handling",
        content: "An update was the implementation of robust error handling throughout the application. Previously, the app lacked consistent responses to API failures or user-side issues. I have now added clear try/catch blocks, meaningful error messages for users, and console logging where appropriate. This ensures a more reliable and user-friendly experience while also making development and testing more efficient.",
      },
      {
        heading: "Sticky Footer Fix",
        content: "In the original version, the footer would sometimes appear awkwardly in the middle of the screen or too far above the bottom, depending on the content height. To fix this, I adjusted the layout, so the footer now reliably stays at the bottom of the viewport, even on pages with little content. This small but important change improves the visual consistency and professionalism of the site.",
      },
      {
        heading: "Input Validation",
        content: "Another important improvement was the addition of input validation across user forms, such as registration, login, and listing creation. In the initial version, user input wasn't thoroughly checked, which could lead to incomplete or invalid data being submitted. I've now implemented proper validation logic to ensure required fields are filled out correctly and that input formats are appropriate. This not only improves data integrity but also helps guide the user experience in a clearer and more user-friendly way.",
      },
    ],
  },

  {
    id: "project5",
    title: "CliketyCart - project assignment",
    teaser: "ClicketyCart is a retro-style eCom store with fast checkout, instant delivery, and smooth shopping powered by the Noroff API.",
    description:
      "ClicketyCart makes shopping fast, fun, and effortless. With a turbo-charged checkout and lightning-fast delivery, you get what you need—instantly. Whether you're browsing or buying on the go, we're quicker than you can say add to cart. 🛒💨 \n\nThis is the frontend for a fictional e-commerce store powered by the Noroff API, featuring a retro-inspired design and built with modern React functionality.",
    images: ["/ClicketyCart.png"],
    github: "https://github.com/Hermanhyl/Semester-Project-2-Auction",
    live: "https://clicketycart.netlify.app/",
    figma: "https://www.figma.com/design/R8wGWrRexwOTDaQnpFKNmn/Ecom-store?node-id=0-1&p=f&t=UlgGs9y5P55UgOu2-0",
    technologies: ["React", "Tailwind CSS", "HTML"],
    authers:"Madelen Sletteberg, Herman Hylland",
    article: [
      {
        heading: "Improvements",
        content: "After completing and submitting the ClicketyCart shopping website, I revisited the project to make a few meaningful improvements based on best practices and portfolio readiness. Although we did not receive extensive direct feedback from our instructor for this specific project, me and Madelen Sletteberg identified areas where the codebase, user experience, and project presentation could be strengthened.",
      },
      {
        heading: "Added JSDoc Documentation",
        content: "In the original version of the project, none of the functions were documented. To improve clarity and maintainability, I added JSDoc comments across all core JavaScript functions. JSDoc helps define the purpose, expected parameters, and return values of each function, making it easier for others (and my future self) to understand the logic behind the code. This is especially valuable when collaborating or revisiting the code after some time, and it's a standard practice in professional development environments.",
      },
      {
        heading: "Clickable Logo Redirect",
        content: "I updated the header logo so that it now functions as a link back to the homepage. While this is a common user experience expectation, it was missing from the original version. By making the logo clickable, users can now easily return to the starting point of the application without needing to use the browser's back button or look for a separate navigation link. It's a small change that improves usability and aligns the interface with familiar web navigation patterns.",
      },
      {
        heading: "README Image Preview",
        content: "To better present the project on GitHub and make it more portfolio-friendly, I added a screenshot of the application to the README.md file. This gives visitors a quick visual overview of the project before even cloning or running it. It also responds directly to a suggestion made by our teacher for the portfolio assignment: to enhance each displayed project with a preview image that communicates the look and feel of the work at a glance.",
      },
      {
        heading: "Improved Form Accessibility",
        content: "One of the accessibility issues I discovered in the original version was that some interactive elements — particularly form inputs — were not properly wrapped in <form> elements. This could lead to inconsistent behaviour and decreased accessibility, especially for users relying on screen readers or keyboard navigation. We corrected this by ensuring all input fields are properly structured within semantic form tags, improving both functionality and compliance with accessibility standards.",
      },
    ],
  },
];