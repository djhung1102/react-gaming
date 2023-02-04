import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
    // const [windowSize, setWindowSize] = useState({
    //     width: "",
    //     height: "",
    // });
    // const [isMobile, setIsMobile] = useState(false);
    // useEffect(() => {
    //     const handleSize = () => {
    //         setWindowSize({
    //             width: window.innerWidth,
    //             height: window.innerHeight,
    //         });
    //     };
    //     window.addEventListener("resize", handleSize);
    //     handleSize();
    //     return () => {
    //         window.removeEventListener("resize", handleSize);
    //     };
    // }, []);
    // useEffect(() => {
    //     if (windowSize.width < 500) {
    //         setIsMobile(true);
    //     } else {
    //         setIsMobile(false);
    //     }
    // }, [windowSize]);
    return (
        <Fragment>
            <Header></Header>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Main;
