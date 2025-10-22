export const projects = [
    {
    id: "project1",
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
        content: "Please check out our GitHub repository for the project. Here you can find the source code, documentation, and instructions on how to run the project locally. We welcome any feedback or contributions from the community. You can find the button directing you to the repository at the bottom of this article. And instructions on how to create acount and use the application can be found in the README file. Feel free to explore the code, and if you have any questions or suggestions, don't hesitate to reach out! Thank you for your interest in our project!",
      },
      {
        heading: "Figma",
        content: "We have also created a Figma design for the project, which you can view by clicking the button below. The design showcases the user interface and user experience we aimed to achieve with Holidaze. It includes all the screens we implemented in the final product. We hope this gives you a better understanding of our design process and the thought that went into creating a cohesive and user-friendly application. \n\nIt is not prototyped, but it is a good representation of the final product. Reason for this is that we wanted to focus on the functionality of the application. The focuse was on the frontend development in this project, and we wanted to make sure that the design was implemented correctly. We are happy with the final result, and we hope you are too!",
      },
    ],
  },
  
  {
    id: "project2",
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
        content: "Another important improvement was the addition of input validation across user forms, such as registration, login, and listing creation. In the initial version, user input wasn’t thoroughly checked, which could lead to incomplete or invalid data being submitted. I’ve now implemented proper validation logic to ensure required fields are filled out correctly and that input formats are appropriate. This not only improves data integrity but also helps guide the user experience in a clearer and more user-friendly way.",
      },
    ],
  },

  {
    id: "project3",
    title: "CliketyCart - project assignment",
    teaser: "ClicketyCart is a retro-style eCom store with fast checkout, instant delivery, and smooth shopping powered by the Noroff API.",
    description:
      "ClicketyCart makes shopping fast, fun, and effortless. With a turbo-charged checkout and lightning-fast delivery, you get what you need—instantly. Whether you're browsing or buying on the go, we're quicker than you can say add to cart. 🛒💨 \n\nThis is the frontend for a fictional e-commerce store powered by the Noroff API, featuring a retro-inspired design and built with modern React functionality.",
    images: ["/ClicketyCart.png"],
    github: "https://github.com/Hermanhyl/Semester-Project-2-Auction",
    live: "https://own-the-bid-main.netlify.app/",
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
        content: "I updated the header logo so that it now functions as a link back to the homepage. While this is a common user experience expectation, it was missing from the original version. By making the logo clickable, users can now easily return to the starting point of the application without needing to use the browser’s back button or look for a separate navigation link. It’s a small change that improves usability and aligns the interface with familiar web navigation patterns.",
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

  {
    id: "project4",
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
];