import React, { useEffect, useRef } from "react";
import "./DreamCss.css";

const DreamAnimation: React.FC = () => {
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const underlineRef = useRef<HTMLDivElement | null>(null);
  const animationContainerRef = useRef<HTMLDivElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const words = wordRefs.current;
    const underline = underlineRef.current;
    const animationContainer = animationContainerRef.current;
    const textContainer = textContainerRef.current;

    if (underline && animationContainer && textContainer) {
      const startAnimation = () => {
        // Set the width of the underline to match the width of the text container
        underline.style.width = `${textContainer.offsetWidth}px`;

        console.log(underline.style.width);

        // Reveal words with a small delay based on their position
        words.forEach((word, index) => {
          word.style.transitionDelay = `${index * 0.05}s, ${index * 0.05}s`;
          word.style.opacity = "1";
          word.style.transform = "translateY(0)";
        });

        // Hide words and underline
        setTimeout(() => {
          words.forEach((word) => {
            word.style.transitionDelay = `0s, 0s`;
            word.style.opacity = "0";
            word.style.transform = "translateY(-100%)";
          });
          underline.style.opacity = "0";
        }, words.length * 100 + 2000);

        // Transition to actual site
        setTimeout(() => {
          animationContainer.style.opacity = "0";
          setTimeout(() => {
            animationContainer.style.display = "none";
          }, 500);
        }, words.length * 100 + 2500);
      };

      startAnimation();
    }
  }, []);

  return (
    <div className="animation-container" ref={animationContainerRef}>
      <p className="text-container" ref={textContainerRef}>
        <span className="word" ref={(el) => el && wordRefs.current.push(el)}>
          Build
        </span>
        <span className="word" ref={(el) => el && wordRefs.current.push(el)}>
          your
        </span>
        <span className="word" ref={(el) => el && wordRefs.current.push(el)}>
          Dream
        </span>
        <span className="word" ref={(el) => el && wordRefs.current.push(el)}>
          Team!
        </span>
        <div className="underline" ref={underlineRef}></div>
      </p>
      <div style={{ paddingBottom: "7rem" }}> </div>
    </div>
  );
};

export default DreamAnimation;
