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
        heading: "Under Review",
        content: "Note: This project is currently under review by our instructor. Once we receive feedback, we will update this section with any suggested improvements and reflect on how we’ve applied them to enhance the project further.",
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
];