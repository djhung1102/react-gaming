import React, { useState } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../assets/MenuIcon";
import XMarkIcon from "../../assets/XMarkIcon";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <Fragment>
            <header className="header flex items-center justify-between text-white py-6 px-5">
                <div className="flex gap-x-5 text-center">
                    <NavLink to="/">
                        <img src="/logo1.png" alt="" className="" />
                    </NavLink>
                    <div className="hidden lg:flex lg:gap-x-5">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "flex items-center text-primary" : "flex items-center"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/pc"
                            className={({ isActive }) =>
                                isActive ? "flex items-center text-primary" : "flex items-center"
                            }
                        >
                            PC Games
                        </NavLink>
                        <NavLink
                            to="/browser"
                            className={({ isActive }) =>
                                isActive ? "flex items-center text-primary" : "flex items-center"
                            }
                        >
                            Web Games
                        </NavLink>
                        <NavLink
                            to="/games"
                            className={({ isActive }) =>
                                isActive ? "flex items-center text-primary" : "flex items-center"
                            }
                        >
                            Giveaways
                        </NavLink>
                    </div>
                </div>

                <div>
                    {openMenu ? (
                        <span onClick={handleMenu} className="lg:hidden">
                            <XMarkIcon></XMarkIcon>
                        </span>
                    ) : (
                        <span onClick={handleMenu} className="lg:hidden">
                            <MenuIcon></MenuIcon>
                        </span>
                    )}
                    {openMenu && (
                        <div className="absolute right-8 py-4 px-8 bg-white text-center text-black text-base flex flex-col gap-3 select-none font-medium rounded-lg z-50">
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
                            <NavLink
                                to="/pc"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center text-primary"
                                        : "flex items-center"
                                }
                            >
                                PC Games
                            </NavLink>
                            <NavLink
                                to="/browser"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center text-primary"
                                        : "flex items-center"
                                }
                            >
                                Web Games
                            </NavLink>
                            <NavLink to="/sign-in" className="flex items-center">
                                Sign In
                            </NavLink>
                            <NavLink to="/sign-up" className="flex items-center">
                                Sign Up
                            </NavLink>
                        </div>
                    )}

                    <div className="hidden lg:block">
                        <NavLink to="/sign-in">
                            <button className="px-6 py-3 rounded-lg text-lg">Sign In</button>
                        </NavLink>
                        <NavLink to="/sign-up">
                            <button className="px-6 py-3 bg-slate-900 rounded-lg">Sign Up</button>
                        </NavLink>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;

/* <div className="flex gap-x-5 text-center">
                    <img src="/logo1.png" alt="" />
                    {!isMobile ? (
                        <>
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
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="">
                    {openMenu && isMobile ? (
                        <div onClick={handleMenu}>
                            <XMarkIcon></XMarkIcon>
                        </div>
                    ) : !openMenu && isMobile ? (
                        <div onClick={handleMenu}>
                            <MenuIcon></MenuIcon>
                        </div>
                    ) : (
                        <>
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
                        </>
                    )}
                    {openMenu && (
                        <div className="absolute right-8 py-4 px-8 bg-white text-center text-black text-base flex flex-col gap-3 select-none font-medium">
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
                            <NavLink to="/sign-in" className="flex items-center">
                                Sign In
                            </NavLink>
                            <NavLink to="/sign-up" className="flex items-center">
                                Sign Up
                            </NavLink>
                        </div>
                    )}
                </div> */
