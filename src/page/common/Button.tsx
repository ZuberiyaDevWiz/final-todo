import type { ButtonHTMLAttributes, FC } from "react";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: FC<props> = ({ text, onClick }) => (
  <div>
    <button
      className="bg-black text-white px-4 py-2 rounded-md"
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  </div>
);

export default Button;
