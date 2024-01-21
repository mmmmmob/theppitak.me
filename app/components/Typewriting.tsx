import React, { useEffect, useRef, useState } from "react";
import useTypewriter from "react-typewriter-hook";
import "./typewriting.css";

const textToShow = [
  "Web Development.",
  "Project Management.",
  "Creative Writing.",
  "Campaign Execution.",
];

let index = 0;

const Typewriting = () => {
  const [typeText, setTypeText] = useState(textToShow[0]);
  const intervalId = useRef({});
  const text = useTypewriter(typeText);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    intervalId = setInterval(() => {
      index = index > 2 ? 0 : ++index;
      setTypeText(textToShow[index]);
    }, 7000);
    return function clear() {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [typeText]);

  return (
    <div>
      <p className="cursor text-6xl font-bold text-red dark:text-blue">
        {text}
      </p>
    </div>
  );
};

export default Typewriting;
