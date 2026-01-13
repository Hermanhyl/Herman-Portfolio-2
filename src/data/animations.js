export const animations = [
  {
    id: "animation-angela-walk-run",
    title: "Angela - Walk & Run Cycle",
    teaser: "A character animation showcasing walk and run cycles, created in After Effects using DUIK rigging on an Illustrator-prepared vector illustration.",
    description: "This animation demonstrates walk and run cycle fundamentals using DUIK rigging in Adobe After Effects. The focus is on showcasing the rigging and animation workflow rather than the illustration itself, which was adapted from a free-licensed source.",
    video: "/Animasjoner/Angela_walk_run.mp4",
    gallery: [
      "/Animasjoner/images/Walking/Angela_Illustrator.png",
      "/Animasjoner/images/Walking/Angela_RIG.png",
      "/Animasjoner/images/Walking/Angela_After_Effects.png",
    ],
    software: ["After Effects", "DUIK", "Adobe Illustrator"],
    duration: "Loop",
    year: "2026",
    article: [
      {
        heading: "Project Overview",
        content: "This animation focuses on demonstrating rigging and animation skills rather than illustration. The goal was to showcase the technical workflow of preparing artwork for animation and bringing a character to life through walk and run cycles using industry-standard tools.",
      },
      {
        heading: "Illustration Source & Preparation",
        content: "The base illustration was sourced from Freepik under a free license. While not my original artwork, modifications were required to make it animation-ready.\n\nKey preparation steps in Adobe Illustrator:\n\n• Separating the illustration into individual layers for each body part\n• Ensuring all layers are properly sequenced for the animation hierarchy\n• Rounding joint areas (knees, elbows, shoulders) to create overlapping shapes\n\nIn an ideal animation workflow, you would strive for perfectly circular joint overlaps to prevent visual artifacts during rotation—this ensures smooth bending without gaps or unwanted intersections when limbs move.\n\nHowever, this was not fully achieved in this animation. Since the primary focus was on the rigging process and animation workflow rather than creating a polished character, the illustration preparation was done more quickly. The joints aren't perfectly rounded, and you may notice some minor imperfections. This was a deliberate trade-off—the goal was to demonstrate the complete pipeline from illustration prep to rigging to final animation, not to create a flawless piece of artwork.",
      },
      {
        heading: "Rigging with DUIK",
        content: "DUIK is a powerful rigging plugin for After Effects that enables bone-based character animation. After importing the prepared Illustrator file, I used DUIK to:\n\n• Create a bone structure for the character's limbs\n• Set up inverse kinematics (IK) for natural leg and arm movement\n• Establish proper parent-child relationships between body parts\n• Configure controllers for efficient animation workflow\n\nThe rigging process transforms a static illustration into a puppetable character that can be posed and animated frame by frame.",
      },
      {
        heading: "Project Organization & Base State",
        content: "A key part of my workflow is maintaining a clean project structure in After Effects. I organized the artwork into separate folders:\n\n• Original artwork - the imported Illustrator file, untouched\n• Rig composition - a duplicate where all the rigging was applied\n• Animation compositions - separate comps for each animation\n\nCrucially, in the rig composition, I made sure all bones, positions, and rotations are zeroed out to match exactly how the illustration was originally imported. This creates a 'base state' or neutral pose that I can always return to.\n\nThis organization serves two purposes: reusability and safety. Having a base state makes it much easier when animating—you can always reset to the natural position if something goes wrong or if you want to start a new animation from scratch. It's a best practice that saves time and prevents frustration during the animation process.",
      },
      {
        heading: "Animation Process",
        content: "With the rig in place, I animated the walk and run cycles by keyframing the character's movement. Walk and run cycles are foundational animation exercises that demonstrate timing, weight, and momentum.\n\nNote: This illustration and rig are intentionally not perfect—the purpose is to demonstrate the animation and rigging workflow rather than create a polished final piece. The focus is on showing competency with the tools and techniques used in character animation.",
      },
    ],
  },
  {
    id: "animation-angela-waving",
    title: "Angela - Waving",
    teaser: "A character animation exploring arm movement and gesture, created using the same DUIK rig to demonstrate varied animation on a single character setup.",
    description: "Building on the same rigged character, this animation focuses specifically on upper body movement and expressive gesture. It demonstrates how a single rig can produce diverse animations through different keyframe approaches.",
    video: "/Animasjoner/Angela_waving.mp4",
    gallery: [],
    software: ["After Effects", "DUIK", "Adobe Illustrator"],
    duration: "Loop",
    year: "2026",
    article: [
      {
        heading: "Project Overview",
        content: "This animation uses the same Angela character rig from the Walk & Run Cycle project. The goal here was to explore a different type of movement—a simple waving gesture—to demonstrate the versatility of a well-constructed rig and to practice animating upper body and arm movements specifically.",
      },
      {
        heading: "Same Rig, Different Movement",
        content: "One of the advantages of character rigging is reusability. Rather than creating a new character from scratch, this animation reuses the existing DUIK rig built in After Effects.\n\nThe base illustration was the same free-licensed asset from Freepik, prepared in Adobe Illustrator with separated layers and rounded joints. While the preparation wasn't perfect (as noted in the Walk & Run project), the rig still allows for a range of different animations.\n\nThis is where the project organization from the Walk & Run project pays off. Because I kept the original artwork separate, maintained a rig composition with all bones zeroed out to the base state, and created separate compositions for each animation—I could simply duplicate the rig comp and start animating this new movement without affecting the other animations. The zeroed-out base state meant I had a clean starting point for this completely different gesture.",
      },
      {
        heading: "Animating the Wave",
        content: "A waving gesture may seem simple, but it involves several animation considerations:\n\n• Arm rotation from the shoulder joint\n• Secondary motion in the hand and fingers\n• Subtle body movement to support the gesture\n• Timing that feels natural and friendly\n\nThis animation focuses on the upper body, keeping the legs relatively static while the arm performs the waving motion. It's a good exercise in isolating movement to specific body parts while maintaining overall character balance.",
      },
      {
        heading: "Learning Outcome",
        content: "This piece demonstrates that once you have a functioning rig, you can produce multiple animations relatively quickly. The time investment in rigging pays off when creating a series of animations for the same character—whether for a game, explainer video, or portfolio piece like this one.",
      },
    ],
  },
  {
    id: "animation-angela-scratching",
    title: "Angela - Scratching Head",
    teaser: "A character acting animation demonstrating the variety of movements possible with a well-prepared DUIK rig in After Effects.",
    description: "This animation showcases a thinking gesture—scratching the head—using the same rigged character. It demonstrates how investing time in proper rigging preparation enables quick creation of varied animations.",
    video: "/Animasjoner/Angela_scratching_head.mp4",
    gallery: [],
    software: ["After Effects", "DUIK", "Adobe Illustrator"],
    duration: "Loop",
    year: "2026",
    article: [
      {
        heading: "Project Overview",
        content: "This is the third animation created using the Angela character rig, demonstrating a contemplative scratching head gesture. Like the Walk & Run Cycle and Waving animations, this piece uses the same DUIK rig in After Effects, further showcasing the variety of movements that become possible once you've invested in proper rigging preparation.",
      },
      {
        heading: "The Value of Rig Preparation",
        content: "All three Angela animations share the same foundation: a character illustration from Freepik, prepared in Adobe Illustrator with separated layers, and rigged in After Effects using DUIK with a zeroed-out base state.\n\nThis upfront investment in preparation and organization pays off significantly. Once the rig is built and properly structured—with the original artwork preserved, bones zeroed out, and separate compositions for each animation—creating new movements becomes much faster and more efficient. The scratching head animation could be started immediately from the neutral base pose without any additional setup work.",
      },
      {
        heading: "Character Acting",
        content: "This animation focuses on character acting—bringing personality to life through movement. A scratching head gesture conveys thought, confusion, or contemplation. It's a relatable human action that helps viewers connect with the character.\n\nKey elements in this animation:\n\n• Arm movement arc reaching up to the head\n• Hand interaction with the head/hair\n• Subtle body shift to support the gesture\n• Timing that suggests a thoughtful mood",
      },
      {
        heading: "Room for Improvement",
        content: "As with the other animations in this series, this piece is not fully polished. The focus was on demonstrating the rigging workflow and showing the variety of animations possible with a single rig, rather than creating a production-ready piece.\n\nThere's room to improve by applying more of the 12 principles of animation—such as adding more secondary motion, refining the easing, or incorporating anticipation and follow-through more deliberately. I'm aware of these principles and how they could enhance the animation, but for this portfolio demonstration, the priority was showcasing the technical workflow and rig versatility.",
      },
    ],
  },
  {
    id: "animation-lake-scene",
    title: "Lake Scene - Day to Night",
    teaser: "A scenic animation showcasing environment animation techniques using the Puppet Pin tool and layer compositing in After Effects.",
    description: "This animation demonstrates a different approach to After Effects animation—instead of character rigging with DUIK, this piece uses the Puppet Pin tool and layer compositing to bring a lake scene illustration to life with a day-to-night transition.",
    video: "/Animasjoner/Illustrator_lake.mp4",
    gallery: [],
    software: ["After Effects", "Puppet Pin Tool", "Adobe Illustrator"],
    duration: "Loop",
    year: "2026",
    article: [
      {
        heading: "Project Overview",
        content: "This animation takes a different approach from the Angela character animations. Rather than using DUIK rigging for character movement, this piece focuses on environment animation—bringing a scenic lake illustration to life using the Puppet Pin tool, layer compositing, and lighting adjustments to simulate a day-to-night transition.",
      },
      {
        heading: "Illustration Preparation",
        content: "As with the character animations, the workflow began in Adobe Illustrator. The illustration was separated into individual layers—each element that needed to move or be composited separately got its own layer.\n\nThis included separating:\n\n• Background sky and distant elements\n• Clouds (multiple layers for depth)\n• Water/lake surface\n• Foreground elements\n• Any objects that needed animation\n\nProper layer separation in Illustrator is essential for After Effects animation, whether you're rigging a character or animating a scene.",
      },
      {
        heading: "Animation Techniques",
        content: "Instead of bone-based rigging, this animation uses several different techniques:\n\n• Puppet Pin Tool - Used to create organic, flowing movements on elements without needing a full rig. The pins act as control points that can be keyframed to deform and animate the artwork.\n\n• Layer Compositing - Background elements like clouds were composited and animated in loops, creating a sense of movement and atmosphere in the scene.\n\n• Brightness/Contrast Adjustments - An adjustment layer was added to gradually shift the lighting, simulating the transition from day to night. This creates a dynamic, evolving mood throughout the animation.",
      },
      {
        heading: "Day to Night Transition",
        content: "The standout feature of this animation is the lighting transition. By animating brightness and contrast values over time, the scene gradually darkens to simulate nighttime approaching. This technique demonstrates how After Effects can be used not just for movement, but for creating atmosphere and mood changes within a single composition.\n\nThis kind of environmental storytelling through lighting is commonly used in motion graphics, explainer videos, and animated backgrounds for games or apps.",
      },
    ],
  },
  {
    id: "animation-3d-fire-scene",
    title: "3D Fire Scene",
    teaser: "A 3D rendered scene showcasing VFX flames, textures on 3D objects, and dynamic lighting effects created in Unreal Engine.",
    description: "This 3D scene demonstrates VFX fire effects, texture application on 3D objects, and lighting techniques in Unreal Engine. The focus is on exploring how these elements work together to create visual impact.",
    video: "/Animasjoner/3D scenes/comp4_fire_(2).mp4",
    gallery: [],
    software: ["Unreal Engine", "VFX", "Material Editor"],
    duration: "Loop",
    year: "2021",
    article: [
      {
        heading: "Project Overview",
        content: "This 3D scene was created as a showcase of what can be done with Unreal Engine. The focus was on exploring VFX flames, applying textures to 3D objects, and understanding how lighting and movement work together to create visual impact in a real-time environment.",
      },
      {
        heading: "VFX & Textures",
        content: "The centerpiece of this scene is the VFX flame effect, demonstrating particle-based fire in Unreal Engine. Beyond the flames, the scene also explores texture application on 3D objects—understanding how materials and textures interact with lighting is fundamental to creating convincing 3D environments.\n\nKey elements include:\n\n• VFX flame particles with dynamic movement\n• Textures applied to scene objects\n• Material properties that respond to the fire's light",
      },
      {
        heading: "Lighting & Movement",
        content: "The fire serves as the primary light source, creating dynamic illumination across the scene. Playing with light effects and movement was a key part of this exploration—understanding how flickering light interacts with textured surfaces and how movement adds life to a static environment.\n\nThis demonstrates how lighting can define the entire mood of a scene and how VFX elements contribute to the overall atmosphere.",
      },
      {
        heading: "Learning Outcomes",
        content: "This project was part of my journey learning Unreal Engine and real-time 3D graphics. While I primarily focus on 2D illustration and front-end development, understanding 3D tools provides valuable perspective on visual design, lighting principles, and the technical aspects of modern game engines.\n\nThe skills learned here—composition, lighting, particle effects—translate across different mediums and inform my approach to visual design in all my work.",
      },
    ],
  },
  {
    id: "animation-3d-cinematic-scene",
    title: "3D Cinematic Scene",
    teaser: "A school project showcasing camera movements, lighting effects, and sound design in Unreal Engine.",
    description: "This cinematic scene was created as a school project at Høgskolen i Innlandet (game school). The assignment was to showcase a specific item through a cinematic presentation, demonstrating camera movements, lighting, and sound in Unreal Engine.",
    video: "https://youtu.be/x-7Xy671wp8",
    gallery: [],
    software: ["Unreal Engine", "Sequencer"],
    duration: "Cinematic",
    year: "2021",
    article: [
      {
        heading: "Project Overview",
        content: "This cinematic scene was created as a school project during my time at Høgskolen i Innlandet (game school). The assignment was to showcase one specific item through a cinematic presentation in Unreal Engine. The scene demonstrates camera movements, lighting effects, and sound design working together to highlight the featured item.",
      },
      {
        heading: "Camera Movements",
        content: "A key focus of this project was exploring camera work inside Unreal Engine. Using the Sequencer, I created camera movements that guide the viewer's attention toward the showcased item. Understanding how to move a camera effectively is essential for creating engaging cinematics in games and other visual media.",
      },
      {
        heading: "Lighting & Sound",
        content: "Beyond camera work, the scene also incorporates lighting effects and sound design. The lighting helps establish mood and draws focus to the item being showcased, while sound adds another layer to the presentation.\n\nThis project served as an introduction to combining these elements—camera, light, and sound—into a cohesive cinematic experience within a game engine environment.",
      },
    ],
  },
  {
    id: "animation-3d-gallery-scene",
    title: "3D Gallery Environment",
    teaser: "An interactive gallery experience in Unreal Engine highlighting ocean plastic pollution and efforts toward a cleaner future.",
    description: "This 3D gallery environment was created in Unreal Engine to raise awareness about plastic pollution in the oceans. Set on an island surrounded by ocean, visitors enter a gallery showcasing both the problem and the hopeful efforts to address it.",
    video: "https://youtu.be/BRM_sBgA31o",
    gallery: [],
    software: ["Unreal Engine", "Material Editor"],
    duration: "Walkthrough",
    year: "2021",
    article: [
      {
        heading: "Project Overview",
        content: "This project is a gallery experience built in Unreal Engine, focusing on the issue of plastic pollution in our oceans. The gallery presents both sides of the story—highlighting how trash has become a major problem in marine environments, while also showcasing a brighter future where we are actively working to collect and reduce this pollution.\n\nThe experience is set on an island surrounded by ocean, and visitors can enter the gallery to explore the theme through various visual elements.",
      },
      {
        heading: "The Gallery Experience",
        content: "Inside the gallery, visitors encounter a mix of different elements:\n\n• Illustrations displayed in various forms throughout the space\n• 3D objects related to the ocean pollution theme\n• Textured surfaces simulating water and other environmental elements\n\nThe goal was to create an immersive experience where the player can explore and reflect on the impact of plastic pollution, while also seeing the positive steps being taken to address the problem.",
      },
      {
        heading: "Combining 3D Elements",
        content: "This project involved bringing together multiple elements within Unreal Engine—3D objects, illustrations, and textured materials all working together to tell the story. The water textures, environmental props, and gallery displays were assembled to create a cohesive space that supports the narrative.\n\nIt was an exercise in scene composition, material application, and using a game engine environment to communicate a meaningful message.",
      },
    ],
  },
];
