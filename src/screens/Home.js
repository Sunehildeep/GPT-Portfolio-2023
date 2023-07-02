import React, { useEffect, useRef, useState } from "react";
import { Controller, Scene } from "scrollmagic";
import "../styles/styles.css";
import CyberpunkBanner from "../components/CyberpunkBanner";
import { gsap } from "gsap";

const Home = () => {
  const controller = useRef(null);

  useEffect(() => {
    // Initialize ScrollMagic controller
    controller.current = new Controller();

    // Add the ScrollMagic library initialization code
    const scrollMagicController = controller.current;
    const scrollMagicElements = document.querySelectorAll(".animate-on-scroll");
    scrollMagicElements.forEach((element) => {
      new Scene({
        triggerElement: element,
        triggerHook: 0.8,
        reverse: true,
      })
        .on("enter", () => {
          gsap.to(element, { opacity: 1, y: 0, x:0, duration: 1 });
        })
        .on("leave", () => {
          gsap.to(element, { opacity: 0, y: 100, x: -100, duration: 1 });
        })
        .addTo(scrollMagicController);
    });

    // Another scene for userpic
    new Scene({
      triggerElement: "#userpic",
      triggerHook: 0.8,
      reverse: true,
    })
      .on("enter", () => {
        gsap.to("#userpic", { opacity: 1, scale: 1.0, duration: 1 });
      })
      .on("leave", () => {
        gsap.to("#userpic", { opacity: 0, scale: 0, duration: 1 });
      })
      .addTo(scrollMagicController);

    // Slow loading for project
    const projectElements = document.querySelectorAll(".project");
    projectElements.forEach((element) => {
      new Scene({
        triggerElement: element,
        triggerHook: 1.0,
        reverse: true,
      })
        .on("enter", () => {
          gsap.to(element, { opacity: 1, y: 0, x:0, duration: 0.2 });
        })
        .on("leave", () => {
          gsap.to(element, { opacity: 0, y: 100, x: -100, duration: 0.2 });
        })
        .addTo(scrollMagicController);
    });

    return () => {
      // Clean up ScrollMagic controller when component unmounts
      controller.current.destroy(true);
    };
  }, []);

  return (
    <>
      <CyberpunkBanner />

      <section id="about" className="section-about animate-on-scroll">
        <div className="container">
          <h2 className="cyberpunk-text">About</h2>
          <div className="about-content">
            <img
              id="userpic"
              src="images/me.jpg"
              alt="Profile Image"
              className="profile-image animate-on-scroll"
            />
            <p className="about-text">
              I am Sunehildeep Singh, a 2nd year Artificial Intelligence
              undergraduate student at Centennial College, currently working as
              a Full-Stack developer. I am passionate about Machine Learning and
              Data Science, and I am always looking for opportunities to learn
              and grow. I am eager to apply my knowledge and skills to
              real-world problems and gain experience in the field. I started
              coding back in 2016 when I was 16 years old and have gained
              experience in several languages since then.
            </p>
          </div>
        </div>
      </section>

      <section id="goal" className="section-goal animate-on-scroll">
        <div className="container">
          <h2 className="cyberpunk-text">My Goal</h2>
          <p className="goal-text">
            My coding journey began when I set out to create a gaming
            multiplayer server, which required scripting in a language called
            Pawn. It was through this experience that I discovered my passion
            for coding. I am entirely self-taught in the six languages I know,
            having never taken any formal lessons. I also worked as a freelancer
            for a while when I was 17.
            <br />
            <br />
            My primary area of interest lies in Artificial Intelligence.
            Inspired by Ironman's personal assistant, Jarvis, I embarked on a
            quest to develop something similar. This ignited a burning desire
            within me to learn and create something truly impactful. I delved
            deep into coding, conducting experiments, and even exploring house
            automation systems using Raspberry Pi.
            <br />
            <br />
            Currently, I am pursuing my studies in Artificial Intelligence at
            Centennial College. My goal is to expand my knowledge in this field,
            delve into the intricacies of AI, conduct research, and ultimately
            build something revolutionary. I strive to make a meaningful
            contribution to the world through my AI endeavors.
            <br />
            <br />I am always open to new opportunities.{" "}
            <div className="resume-button">
              <br />
              <br />
              Want to learn more about me? <br />
              <a
                className="glitch-button"
                href="images/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to view my resume
              </a>
            </div>
          </p>
        </div>
      </section>

      <section id="skills" className="section-skills animate-on-scroll">
        <div className="container">
          <h2 className="cyberpunk-text">Skills</h2>
          <ul className="skills-list">
            <li>
              <i className="fab fa-csharp"></i> C#
            </li>
            <li>
              <i className="fab fa-php"></i> PHP
            </li>
            <li>
              <i className="fab fa-python"></i> Python
            </li>
            <li>
              <i className="fab fa-js"></i> JavaScript (React, Angular)
            </li>
            <li>
              <i className="fab fa-java"></i> Java
            </li>
            <li>
              <i className="fas fa-code"></i> Pawn
            </li>
          </ul>
          <br />

          <p className="skills-text">
            Apart from that, I am also:
            <ul className="skills-list">
              <li>
                Experienced with Oracle SQL Developer, MySQL, PLSQL, and NoSQL
                databases.
              </li>
              <li>
                Proficient in supervised learning techniques and algorithms.
              </li>
              <li>
                Skilled in algorithms, AI ethics, natural language processing,
                and ML concepts.
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section id="projects" className="section-projects animate-on-scroll">
        <div className="container">
          <h2 className="cyberpunk-text">Projects</h2>
          <p className="cyberpunk-text">
            Here are some of my projects that I have worked on. Click on them to
            view the source code.
            <br />
            <br />
          </p>
          <div className="project">
            <a href="https://github.com/Sunehildeep/ChatBot-TransformerAI">
              <h3 className="cyberpunk-text">Chatbot - Transformer AI</h3>
              <p className="cyberpunk-text">
                A fully scratch encoder-decoder transformer model that is built based upon "Attention is all you need" paper. 
                It is capable of generating responses based on what it is trained upon. For my project, I used reddit conversations.
              </p>
              <img
                src="images/proj0.png"
                alt="Project 0"
                className="project-image"
              />
            </a>
          </div>
          <div className="project">
            <a href="https://github.com/Sunehildeep/Text-Generator-AI-Model">
              <h3 className="cyberpunk-text">Text Generation Model</h3>
              <p className="cyberpunk-text">
                A fully scratch decoder-only text generative model that is
                capable of generating text based on what it is trained upon. For
                my project, I used song lyrics.
              </p>
              <img
                src="images/proj1.png"
                alt="Project 1"
                className="project-image"
              />
            </a>
          </div>
          <div className="project">
            <a href="https://github.com/Sunehildeep/AutoRegressiveModel">
              <h3 className="cyberpunk-text">Graph Prediction Model</h3>
              <p className="cyberpunk-text">
                This model predicts the future graph of user engagement time
                from google analytics.
              </p>
              <img
                src="images/proj2.png"
                alt="Project 2"
                className="project-image"
              />
            </a>
          </div>
          <div className="project">
            <a href="https://github.com/Sunehildeep/Custom-Fans-Helios">
              <h3 className="cyberpunk-text">Custom Fans For Acer Helios</h3>
              <p className="cyberpunk-text">
                This program allows you to make a custom fan curve for helios.
                Works for both cpu and gpu fan independently. Being used
                currently by unofficial Acer community on Discord.{" "}
              </p>
              <img
                src="images/proj3.png"
                alt="Project 3"
                className="project-image"
              />
            </a>
          </div>
          <div className="project">
            <a href="https://github.com/Sunehildeep/Auto-Max-Fans-Helios">
              <h3 className="cyberpunk-text">Auto Max Fans For Acer Helios</h3>
              <p className="cyberpunk-text">
                This little program allows you to customize fan temperature
                threshold automatically so that when the laptop overheats, it
                goes to max fans and back to auto when it cools down. Being used
                currently by unofficial Acer community on Discord.{" "}
              </p>
              <img
                src="images/proj4.png"
                alt="Project 4"
                className="project-image"
              />
            </a>
          </div>
          <div className="project">
            <a href="https://github.com/Sunehildeep/Eye-Tracker">
              <h3 className="cyberpunk-text">Eye Tracker</h3>
              <p className="cyberpunk-text">
                A simple eye-tracker script made in python. It tracks the eys
                and draws a rectangle around them in every frame of your camera.
              </p>
            </a>
          </div>
          <div className="project">
            <a href="https://github.com/Sunehildeep/Spam-Detector">
              <h3 className="cyberpunk-text">Spam Detector Model</h3>
              <p className="cyberpunk-text">
                A model that detects spam messages using Natural Language
                Processing.
              </p>
            </a>
          </div>
          <div className="project">
            <a href="https://github.com/Sunehildeep/EventSystem">
              <h3 className="cyberpunk-text">Event System For SA:MP</h3>
              <p className="cyberpunk-text">
                This is an event system that works for SA:MP servers.
              </p>
            </a>
          </div>
          <div className="project">
            <a href="https://github.com/Sunehildeep/OnPlayerWeaponsHack">
              <h3 className="cyberpunk-text">
                Wepaons Hack Detector For SA:MP
              </h3>
              <p className="cyberpunk-text">
                As the name suggests, this is a weapons hack detector for SA:MP
                servers. One of my first projects.
              </p>
            </a>
          </div>
          <div className="project">
            <a href="https://github.com/Sunehildeep/OnPlayerQuickTurn">
              <h3 className="cyberpunk-text">
                Quick Turn Hack Detector For SA:MP
              </h3>
              <p className="cyberpunk-text">
                As the name suggests, this is a quick turn hack detector for
                SA:MP servers. One of my first projects.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section-contact animate-on-scroll">
        <div className="container">
          <h2 className="cyberpunk-text">Contact</h2>
          <p className="cyberpunk-text">Email: nsunehil@gmail.com</p>
          <p className="cyberpunk-text">
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/sunehildeep-singh-676177226">
              Sunehildeep Singh
            </a>
          </p>
          <p className="cyberpunk-text">
            GitHub:{" "}
            <a href="https://github.com/Sunehildeep">Sunehildeep</a>
          </p>
          <p className="cyberpunk-text">
            Instagram:{" "}
            <a href="https://www.instagram.com/sunehildeep/">Sunehildeep</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
