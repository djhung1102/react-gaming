import React from "react";
import { useNavigate } from "react-router-dom";

const GameCard = ({ item }) => {
    const { id, title, genre, release_date, developer, platform } = item;
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/game/${id}`)}
            className="flex w-full gap-2 lg:gap-4 rounded-lg p-1 lg:p-3 bg-slate-700 cursor-pointer hover:bg-slate-800 mb-5"
        >
            <img
                src={`https://www.freetogame.com/g/${id}/thumbnail.jpg`}
                alt=""
                className="w-[250px] h-[80px] lg:h-auto object-cover rounded-lg"
            />
            <div className="text-white w-full m-auto">
                <h3 className="text-base short-text-title lg:text-xl font-bold mb-0 lg:mb-2">
                    {title}
                </h3>
                <div className="flex gap-3 mb-0 lg:mb-2">
                    <span className="text-white text-xs p-0 lg:p-1 border-none rounded-md lg:bg-slate-500">
                        {genre}
                    </span>
                </div>
                <div className="hidden lg:block text-sm mb-0 lg:mb-2">{release_date}</div>
                <div className="text-base flex justify-between">
                    <span className="text-sm short-text-title lg:text-base">{developer}</span>
                    <span className="hidden lg:block">{platform}</span>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
