import React, { useEffect } from "react";
import { Fragment } from "react";

const GamePage = () => {
    useEffect(() => {
        document.title = "GamePage";
    }, []);
    return (
        <Fragment>
            <div></div>
        </Fragment>
    );
};

export default GamePage;
