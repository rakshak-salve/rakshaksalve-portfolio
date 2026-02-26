import { useState, useEffect } from 'react';

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-=";

export const useDecodeText = (text, speed = 30) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
};