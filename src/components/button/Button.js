import React from "react";

const Button = ({
    className = "",
    type = "button",
    onClick = () => {},
    children,
    ...props
}) => {
    return (
        <button className={className} type={type} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
