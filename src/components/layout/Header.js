import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header flex items-center justify-between text-white py-6 px-5">
                <div className="flex gap-x-5 text-center">
                    <img src="/logo1.png" alt="" />
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "flex items-center text-primary"
                                : "flex items-center"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/games"
                        className={({ isActive }) =>
                            isActive
                                ? "flex items-center text-primary"
                                : "flex items-center"
                        }
                    >
                        Giveaways
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/sign-in">
                        <button className="px-6 py-3 rounded-lg text-lg">
                            Sign In
                        </button>
                    </NavLink>
                    <NavLink to="/sign-up">
                        <button className="px-6 py-3 bg-slate-900 rounded-lg">
                            Sign Up
                        </button>
                    </NavLink>
                </div>
            </header>
        </>
    );
};

export default Header;
