import React, { ReactNode } from "react";
interface ButtonProps {
  text: string;
  icon: ReactNode;
}

const Button = ({ text, icon }: ButtonProps) => {
  return (
    <div>
      <button className="bg-primary flex items-center gap-[10px] text-white font-semibold py-3 px-7 hover:cursor-pointer full hover:bg-primary-hover rounded-full transition duration-300">
        <h1>{text}</h1>
        <h2>{icon}</h2>
      </button>
    </div>
  );
};

export default Button;
