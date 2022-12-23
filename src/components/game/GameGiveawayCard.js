import React from "react";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const GameGiveawayCard = ({ item }) => {
    const {
        image,
        worth,
        users,
        title,
        platforms,
        description,
        gamerpower_url,
    } = item;
    return (
        <div className="give-card rounded-lg p-3 bg-slate-800 text-white transition-all">
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

export const GiveawayCardSkeleton = () => {
    return (
        <div className="rounded-lg p-3 bg-slate-800 text-white">
            <LoadingSkeleton
                width="100%"
                height="180px"
                radius="6px"
                className="object-fill mb-1"
            ></LoadingSkeleton>
            <div className="flex flex-col flex-1">
                <h3 className="short-text-title text-lg font-bold mb-2 mt-2">
                    <LoadingSkeleton
                        width="100%"
                        height="24px"
                        radius="6px"
                    ></LoadingSkeleton>
                </h3>
                <div className="flex items-center justify-between text-base text-opacity-50 mb-1">
                    <span>
                        <LoadingSkeleton
                            width="30px"
                            height="14px"
                            radius="6px"
                        ></LoadingSkeleton>
                    </span>
                    <span>
                        <LoadingSkeleton
                            width="30px"
                            height="14px"
                            radius="6px"
                        ></LoadingSkeleton>
                    </span>
                </div>
                <h3 className="font-bold mb-2 mt-1 text-sm text-opacity-50">
                    <LoadingSkeleton
                        width="50px"
                        height="10px"
                        radius="6px"
                    ></LoadingSkeleton>
                </h3>
                <h4 className="short-text text-sm mb-3">
                    <LoadingSkeleton
                        width="100%"
                        height="14px"
                        radius="6px"
                    ></LoadingSkeleton>
                </h4>
                <LoadingSkeleton
                    width="100%"
                    height="40px"
                    radius="6px"
                ></LoadingSkeleton>
            </div>
        </div>
    );
};

export default GameGiveawayCard;
