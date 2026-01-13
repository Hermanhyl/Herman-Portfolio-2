export const animations = [
  {
    id: "animation-angela-walk-run",
    title: "Angela - Walk & Run Cycle",
    teaser: "A character animation showcasing walk and run cycles, created in After Effects using DUIK rigging on an Illustrator-prepared vector illustration.",
    description: "This animation demonstrates walk and run cycle fundamentals using DUIK rigging in Adobe After Effects. The focus is on showcasing the rigging and animation workflow rather than the illustration itself, which was adapted from a free-licensed source.",
    video: "/Animasjoner/Angela_walk_run.mp4",
    gallery: [
      "/Animasjoner/images/Walking/Skjermbilde 2026-01-10 125427.png",
      "/Animasjoner/images/Walking/Skjermbilde 2026-01-10 121907.png",
      "/Animasjoner/images/Walking/Skjermbilde 2026-01-10 155608.png",
    ],
    software: ["After Effects", "DUIK", "Adobe Illustrator"],
    duration: "Loop",
    year: "2024",
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
    year: "2024",
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
    year: "2024",
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
];
