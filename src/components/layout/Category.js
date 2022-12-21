import React from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
    return (
        <div className="bg-slate-700 text-white z-[100] select-none flex flex-col gap-5 border rounded-lg border-none h-screen p-5 w-[200px]">
            <NavLink
                to="/pc"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
                PC
            </NavLink>
            <NavLink
                to="/browser"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
                Web browser
            </NavLink>
        </div>
    );
};

export default Category;
