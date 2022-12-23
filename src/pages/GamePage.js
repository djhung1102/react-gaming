import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import GameGiveawayCard from "../components/game/GameGiveawayCard";

const GamePage = () => {
    const [giveaway, setGiveaway] = useState([]);
    useEffect(() => {
        document.title = "Giveaways Page";
    }, []);
    useEffect(() => {
        const getAPIGiveaway = async () => {
            const options = {
                method: "GET",
                url: "https://gamerpower.p.rapidapi.com/api/giveaways",
                headers: {
                    "X-RapidAPI-Key":
                        "870d27a050msh9e090e6d10b5bdfp167cd3jsnca5058a4b875",
                    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
                },
            };
            try {
                const response = await axios.request(options);
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        };
        getAPIGiveaway().then((gameGiveaway) => {
            setGiveaway(gameGiveaway);
        });
    }, []);
    console.log(giveaway);
    return (
        <Fragment>
            <section className="giveaway-layout max-w-7xl mr-auto ml-auto">
                <h2 className="capitalize text-white mb-5 text-2xl font-bold">
                    Giveaways List
                </h2>
                <div className="grid grid-cols-4 gap-10">
                    {giveaway.length > 0 &&
                        giveaway
                            .slice(0, 20)
                            .map((item) => (
                                <GameGiveawayCard
                                    item={item}
                                ></GameGiveawayCard>
                            ))}
                </div>
            </section>
        </Fragment>
    );
};

export default GamePage;
