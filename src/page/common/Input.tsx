import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
const Input: FC<InputProps> = ({ label, onChange, value, placeholder }) => (
    <div className="flex flex-col  w-full">
        <label className="capitalize font-semibold font-serif ">{label}</label>
        <input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border-2 border-gray-600 rounded-md px-2 py-2"
        />
    </div>
);

export default Input;
