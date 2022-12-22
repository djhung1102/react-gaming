import React from "react";
import { useNavigate } from "react-router-dom";

// https://www.freetogame.com/api/games
const GameCard = ({ item }) => {
    const { id, title, genre, release_date, developer, platform } = item;
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/game/${id}`)}
            className="game-cart flex w-full gap-4 rounded-lg p-3 bg-slate-700 cursor-pointer hover:bg-slate-800 mb-5"
        >
            <img
                src={`https://www.freetogame.com/g/${id}/thumbnail.jpg`}
                alt=""
                className="w-[250px] h-auto object-cover rounded-lg"
            />
            <div className="text-white w-full m-auto">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <div className="flex gap-3 mb-2">
                    <span className="text-white text-xs p-1 border-none rounded-md bg-slate-500">
                        {genre}
                    </span>
                </div>
                <div className="text-sm mb-2">{release_date}</div>
                <div className="text-base flex justify-between">
                    <span>{developer}</span>
                    <span>{platform}</span>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
