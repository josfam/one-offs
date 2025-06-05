import { useState } from "react";

const Footer = () => {
  const [currentEmoji, setCurrentEmoji] = useState<string>("🩵");
  const pickEmoji = (currentEmoji: string) => {
    const options = ["🩷", "💖", "🎬", "😊", "💪", "💓", "😁", "🩵"];
    let nextEmoji;
    do {
      const randomIndex = Math.floor(Math.random() * options.length);
      nextEmoji = options[randomIndex];
    } while (nextEmoji === currentEmoji);
    setCurrentEmoji(nextEmoji);
  };

  return (
    <div className="flex h-fit w-full items-center justify-center bg-sky-900 py-12 text-xl text-slate-400">
      <a
        href="https://github.com/josfam/films-for-you"
        className="text-sky-300 hover:text-sky-100 hover:underline"
      >
        Made with
      </a>
      <span
        className={`ml-2 text-2xl text-sky-900 transition-all duration-150 hover:text-3xl active:text-4xl`}
        onClick={() => pickEmoji(currentEmoji)}
      >
        {currentEmoji}
      </span>
    </div>
  );
};

export default Footer;
