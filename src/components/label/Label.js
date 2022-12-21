import React from "react";

const Label = ({ htmlFor = "", children, ...props }) => {
    return (
        <label htmlFor={htmlFor} {...props} className="cursor-pointer text-white">
            {children}
        </label>
    );
};

export default Label;
