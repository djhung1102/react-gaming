import React from "react";

const GameGiveawayCard = ({ item }) => {
    const {id, image, worth, users, title, platforms, description, gamerpower_url} = item;
    return (
        <div
            className="give-card rounded-lg p-3 bg-slate-800 text-white transition-all"
            key={id}
        >
            <img
                src={`${image}`}
                alt=""
                className="w-full h-[180px] object-fill rounded-lg"
            />
            <div className="flex flex-col flex-1">
                <h3 className="short-text-title text-lg font-bold mb-2 mt-2">
                    {title}
                </h3>
                <div className="flex items-center justify-between text-base text-opacity-50 mb-1">
                    <span>{worth}</span>
                    <span>{users}+</span>
                </div>
                <h3 className="font-bold mb-2 text-sm text-opacity-50">
                    {platforms}
                </h3>
                <h4 className="short-text text-sm mb-3">{description}</h4>
                <a
                    href={`${gamerpower_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="py-2 px-4 rounded-lg capitalize w-full bg-transparent border border-yellow-600 text-yellow-600 font-bold mt-auto transition-all hover:text-white hover:bg-yellow-600">
                        View giveaways
                    </button>
                </a>
            </div>
        </div>
    );
};

export default GameGiveawayCard;
