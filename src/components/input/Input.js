import React from "react";
import { useController } from "react-hook-form";

const Input = ({ name = "", type = "text", children, control, ...props }) => {
    const { field } = useController({
        name,
        control,
        defaultValue: "",
    });
    return (
        <div className="relative w-full">
            <input
                type={type}
                id={name}
                {...field}
                {...props}
                hasicon={children ? "true" : "false"}
                className={`p-4 w-full text-white text-base border border-gray-100 rounded-lg bg-slate-900 outline-none transition-all focus:border-slate-800 ${
                    children ? "pr-12" : ""
                }`}
            />
            {children}
        </div>
    );
};

export default Input;
