import React from 'react'
interface ButtonProps {
  text: string;
}

const Button = ({text}:ButtonProps) => {
  return (
    <div>
        <button className="bg-primary text-white font-semibold py-3 px-7 hover:cursor-pointer full hover:bg-primary-hover rounded-full transition duration-300">
            {text}
        </button>
    </div>
  )
}

export default Button
