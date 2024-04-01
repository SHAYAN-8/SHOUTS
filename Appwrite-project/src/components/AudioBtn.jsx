import React, { useRef } from "react";
import { RiVoiceprintFill } from "react-icons/ri";

const AudioBtn = ({ text }) => {
  const buttonRef = useRef(null);

  const speakText = (text) => {
    const btn = buttonRef.current;
    btn.disabled = true;
    btn.style.backgroundColor = "black";
    btn.style.color = "rgb(103 232 249)";
    btn.firstChild.classList.add("animate-pulse");

    if ("speechSynthesis" in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.2;
      synthesis.speak(utterance);

      utterance.onend = () => {
        btn.disabled = false;
        btn.style.backgroundColor = "rgb(103 232 249)";
        btn.style.color = "black";
        btn.firstChild.classList.remove("animate-pulse");
      };
    } else {
      alert("Sorry, your browser doesn't support the Speech Synthesis API.");
    }
  };
  return (
    <button
      ref={buttonRef}
      title="Play Voice"
      onClick={() => speakText(text.replace(/<[^>]*>|&nbsp;|<br\s*\/?>/g, ""))}
      className="bg-cyan-300 opacity-0 sm:opacity-100 text-3xl font-semibold py-1 px-2 rounded-md sticky top-2 left-full m-2"
    >
      <RiVoiceprintFill />
    </button>
  );
};

export default AudioBtn;
