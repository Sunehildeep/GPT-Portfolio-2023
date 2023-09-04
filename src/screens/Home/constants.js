import Project from "../../components/Project";

const AboutMeDescription = () => (
  <div className="about-content">
    <img
      id="userpic"
      src="images/me.jpg"
      alt="Profile Image"
      className="profile-image animate-on-scroll"
    />
    <p className="about-text">
      I am Sunehildeep Singh, a 2nd year Artificial Intelligence undergraduate
      student at Centennial College, currently working as a Full-Stack
      developer. I am passionate about Machine Learning and Data Science, and I
      am always looking for opportunities to learn and grow. I am eager to apply
      my knowledge and skills to real-world problems and gain experience in the
      field. I started coding back in 2016 when I was 16 years old and have
      gained experience in several languages since then.
    </p>
  </div>
);

const MyGoalDescription = () => (
  <>
    My coding journey began when I set out to create a gaming multiplayer
    server, which required scripting in a language called Pawn. It was through
    this experience that I discovered my passion for coding. I am entirely
    self-taught in the six languages I know, having never taken any formal
    lessons. I also worked as a freelancer for a while when I was 17.
    <br />
    <br />
    My primary area of interest lies in Artificial Intelligence. Inspired by
    Ironman's personal assistant, Jarvis, I embarked on a quest to develop
    something similar. This ignited a burning desire within me to learn and
    create something truly impactful. I delved deep into coding, conducting
    experiments, and even exploring house automation systems using Raspberry Pi.
    <br />
    <br />
    Currently, I am pursuing my studies in Artificial Intelligence at Centennial
    College. My goal is to expand my knowledge in this field, delve into the
    intricacies of AI, conduct research, and ultimately build something
    revolutionary. I strive to make a meaningful contribution to the world
    through my AI endeavors.
    <br />
    <br />I am always open to new opportunities.{" "}
    <div class="resume-button">
      <br />
      <br />
      Want to learn more about me? <br />
      <a
        class="glitch-button"
        href="images/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to view my resume
      </a>
    </div>
  </>
);

const MySkillsDescription = () => (
  <>
    <ul class="skills-list">
      <li>
        <i class="fab fa-csharp"></i> C#
      </li>
      <li>
        <i class="fab fa-php"></i> PHP
      </li>
      <li>
        <i class="fab fa-python"></i> Python
      </li>
      <li>
        <i class="fab fa-js"></i> JavaScript (React, Angular)
      </li>
      <li>
        <i class="fab fa-java"></i> Java
      </li>
      <li>
        <i class="fas fa-code"></i> Pawn
      </li>
    </ul>
    <br />
    <p class="skills-text">
      Apart from that, I am also:
      <ul class="skills-list">
        <li>
          Experienced with Oracle SQL Developer, MySQL, PLSQL, and NoSQL
          databases.
        </li>
        <li>Proficient in supervised learning techniques and algorithms.</li>
        <li>
          Skilled in algorithms, AI ethics, natural language processing, and ML
          concepts.
        </li>
      </ul>
    </p>
  </>
);

const MyProjectsDescription = () => (
  <p className="cyberpunk-text">
    Here are some of my projects that I have worked on. Click on them to view
    the source code.
    <br />
    <br />
    {projects.map((project) => (
        <Project {...project} />
    ))}
  </p>
);

const ContactMeDescription = () => (
  <>
    <p className="cyberpunk-text">Email: nsunehil@gmail.com</p>
    <p className="cyberpunk-text">
      LinkedIn:{" "}
      <a href="https://www.linkedin.com/in/sunehildeep-singh-676177226">
        Sunehildeep Singh
      </a>
    </p>
    <p className="cyberpunk-text">
      GitHub: <a href="https://github.com/Sunehildeep">Sunehildeep</a>
    </p>
    <p className="cyberpunk-text">
      Instagram:{" "}
      <a href="https://www.instagram.com/sunehildeep/">Sunehildeep</a>
    </p>
  </>
);

export const titleDescription = [
  {
    id: "about",
    title: "About Me",
    description: <AboutMeDescription />,
  },
  {
    id: "goal",
    title: "My Goal",
    description: <MyGoalDescription />,
  },
  {
    id: "skills",
    title: "My Skills",
    description: <MySkillsDescription />,
  },
  {
    id: "projects",
    title: "My Projects",
    description: <MyProjectsDescription />,
  },
  {
    id: "contact",
    title: "Contact Me",
    description: <ContactMeDescription />,
  },
];
export const projects = [
  {
    title: "Text Generation Model",
    description:
      "A fully scratch decoder-only text generative model that is capable of generating text based on what it is trained upon. For my project, I used song lyrics.",
    image: "images/proj1.png",
    link: "https://github.com/Sunehildeep/Text-Generator-AI-Model",
  },
  {
    title: "Graph Prediction Model",
    description:
      "This model predicts the future graph of user engagement time from google analytics.",
    image: "images/proj2.png",
    link: "https://github.com/Sunehildeep/AutoRegressiveModel",
  },
  {
    title: "Chat-React",
    description:
      "Chat-React is a real-time messaging application built with React, MySQL, and Socket.io. It allows users to send private messages to each other, search for users, and initiate conversations. The application provides a seamless messaging experience with real-time updates, message status indicators, and delivery timestamps.",
    image: "images/proj5.png",
    link: "https://github.com/Sunehildeep/Chat-React",
  },
  {
    title: "Custom Fans For Acer Helios",
    description:
      "This program allows you to make a custom fan curve for helios. Works for both CPU and GPU fan independently. Being used currently by unofficial Acer community on Discord.",
    image: "images/proj3.png",
    link: "https://github.com/Sunehildeep/Custom-Fans-Helios",
  },
  {
    title: "Auto Max Fans For Acer Helios",
    description:
      "This little program allows you to customize fan temperature threshold automatically so that when the laptop overheats, it goes to max fans and back to auto when it cools down. Being used currently by unofficial Acer community on Discord.",
    image: "images/proj4.png",
    link: "https://github.com/Sunehildeep/Auto-Max-Fans-Helios",
  },
  {
    title: "Eye Tracker",
    description:
      "A simple eye-tracker script made in python. It tracks the eyes and draws a rectangle around them in every frame of your camera.",
    link: "https://github.com/Sunehildeep/Eye-Tracker",
  },
  {
    title: "Spam Detector Model",
    description:
      "A model that detects spam messages using Natural Language Processing.",
    link: "https://github.com/Sunehildeep/Spam-Detector",
  },
  {
    title: "Event System For SA:MP",
    description: "This is an event system that works for SA:MP servers.",
    link: "https://github.com/Sunehildeep/EventSystem",
  },
  {
    title: "Weapons Hack Detector For SA:MP",
    description:
      "As the name suggests, this is a weapons hack detector for SA:MP servers. One of my first projects.",
    link: "https://github.com/Sunehildeep/OnPlayerWeaponsHack",
  },
  {
    title: "Quick Turn Hack Detector For SA:MP",
    description:
      "As the name suggests, this is a quick turn hack detector for SA:MP servers. One of my first projects.",
    link: "https://github.com/Sunehildeep/OnPlayerQuickTurn",
  },
];
