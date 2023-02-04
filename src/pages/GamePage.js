import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import GameGiveawayCard, { GiveawayCardSkeleton } from "../components/game/GameGiveawayCard";
import { v4 as uuidv4 } from "uuid";

const GamePage = () => {
    const [giveaway, setGiveaway] = useState(null);
    useEffect(() => {
        document.title = "Giveaways Page";
    }, []);
    useEffect(() => {
        const getAPIGiveaway = async () => {
            const options = {
                method: "GET",
                url: "https://gamerpower.p.rapidapi.com/api/giveaways",
                headers: {
                    "X-RapidAPI-Key": "870d27a050msh9e090e6d10b5bdfp167cd3jsnca5058a4b875",
                    "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
                },
            };
            try {
                const response = await axios.request(options);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        };
        getAPIGiveaway().then((gameGiveaway) => {
            setGiveaway(gameGiveaway);
        });
    }, []);
    // console.log("giveaways", giveaway);
    return (
        <Fragment>
            <section className="app flex flex-col gap-4 px-2 lg:px-5 overflow-x-hidden">
                <h2 className="capitalize text-white mb-5 text-2xl font-bold">Giveaways List</h2>
                {!giveaway && (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                        {new Array(8).fill(0).map(() => (
                            <GiveawayCardSkeleton key={uuidv4()}></GiveawayCardSkeleton>
                        ))}
                    </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {giveaway?.length > 0 &&
                        giveaway.map((item) => (
                            <GameGiveawayCard item={item} key={item.id}></GameGiveawayCard>
                        ))}
                </div>
            </section>
        </Fragment>
    );
};

export default GamePage;
