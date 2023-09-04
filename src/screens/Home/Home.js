import React, { useEffect, useRef, useState } from "react";
import { Controller, Scene } from "scrollmagic";
import CyberpunkBanner from "../../components/CyberpunkBanner";
import { gsap } from "gsap";
import { titleDescription } from "./constants";
import Section from "../../components/Section";

const Home = () => {
  const controller = useRef(null);

  useEffect(() => {
    // Initialize ScrollMagic controller
    controller.current = new Controller();

    // Add the ScrollMagic library initialization code
    const scrollMagicController = controller.current;
    const scrollMagicElements = document.querySelectorAll(".animate-on-scroll");

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
          gsap.to(element, { opacity: 1, y: 0, x: 0, duration: 0.2 });
        })
        .on("leave", () => {
          gsap.to(element, { opacity: 0, y: 100, x: -100, duration: 0.2 });
        })
        .addTo(scrollMagicController);
    });

    scrollMagicElements.forEach((element) => {
      new Scene({
        triggerElement: element,
        triggerHook: 0.8,
        reverse: true,
      })
        .on("enter", () => {
          gsap.to(element, { opacity: 1, y: 0, x: 0, duration: 1 });
        })
        .on("leave", () => {
          gsap.to(element, { opacity: 0, y: 100, x: -100, duration: 1 });
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

      {titleDescription.map((item, index) => {
        return (
          <Section
            key={index}
            {...item}
          />
        );
      })}
    </>
  );
};

export default Home;
