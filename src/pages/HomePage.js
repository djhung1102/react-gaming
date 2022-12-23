import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import GameCard from "../components/game/GameCard";
import Category from "../components/layout/Category";
import axios from "axios";

const HomePage = () => {
    const [gameList, setGameList] = useState(null);
    const [filter, setFilter] = useState("");
    useEffect(() => {
        const getAPIGames = async () => {
            const options = {
                method: "GET",
                url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
                params: { "sort-by": `${filter}` },
                headers: {
                    "X-RapidAPI-Key":
                        "870d27a050msh9e090e6d10b5bdfp167cd3jsnca5058a4b875",
                    "X-RapidAPI-Host":
                        "free-to-play-games-database.p.rapidapi.com",
                },
            };
            try {
                const response = await axios.request(options);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        };
        getAPIGames().then((games) => {
            setGameList(games);
        });
    }, [filter]);
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };
    useEffect(() => {
        document.title = "HomePage";
    }, []);
    return (
        <Fragment>
            <section className="app flex flex-row gap-5 px-5">
                <Category></Category>
                <div className="game-layout flex-1">
                    <h2 className="capitalize text-white mb-5 text-2xl font-bold">
                        Live games list
                    </h2>
                    <div className="mb-5">
                        <select
                            className="max-w-[400px] px-2 py-1 rounded-lg"
                            onChange={handleFilterChange}
                        >
                            <option>--Sort By--</option>
                            <option value="release-date">Release date</option>
                            <option value="popularity">Popular</option>
                            <option value="alphabetical">Alphabet</option>
                        </select>
                    </div>
                    {!gameList && (
                        <div className="circle-loading2 mt-14">
                            <div></div>
                            <div></div>
                        </div>
                    )}
                    {gameList &&
                        gameList.length > 0 &&
                        gameList.slice(0, 100).map((item) => (
                            <div
                                className="game-cart select-none"
                                key={item.id}
                            >
                                <GameCard item={item}></GameCard>
                            </div>
                        ))}
                </div>
            </section>
        </Fragment>
    );
};

export default HomePage;
