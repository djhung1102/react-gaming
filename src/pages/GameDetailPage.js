import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import ShowMoreText from "react-show-more-text";

const GameDetailPage = () => {
    const [activeThumbs, setActiveThumbs] = useState(null);
    const { gameId } = useParams();
    const [detailGame, setDetailGame] = useState([]);

    useEffect(() => {
        const getAPIGames = async () => {
            const options = {
                method: "GET",
                url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
                params: { id: `${gameId}` },
                headers: {
                    "X-RapidAPI-Key":
                        "870d27a050msh9e090e6d10b5bdfp167cd3jsnca5058a4b875",
                    "X-RapidAPI-Host":
                        "free-to-play-games-database.p.rapidapi.com",
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
        getAPIGames().then((games) => {
            setDetailGame(games);
        });
    }, [gameId]);
    // console.log(detailGame);
    useEffect(() => {
        document.title = "Detail Game Page";
    }, []);

    return (
        <Fragment>
            <div className="grid grid-flow-row items-center justify-center">
                <div className="mb-5">
                    <span className="text-white text-2xl font-bold">
                        {detailGame.title}
                    </span>
                </div>
                <div className="mb-10 flex">
                    <div className="image-layout w-[600px] h-full bg-transparent">
                        <Swiper
                            loop={false}
                            spaceBetween={5}
                            navigation={true}
                            modules={[Navigation, Thumbs]}
                            grabCursor={true}
                            slidesPerView={1}
                            thumbs={{
                                swiper:
                                    activeThumbs && !activeThumbs.destroyed
                                        ? activeThumbs
                                        : null,
                            }}
                            className="product-image-slider mb-1"
                        >
                            {detailGame?.screenshots?.length > 0 &&
                                detailGame.screenshots.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <img src={`${item.image}`} alt="" />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                        <Swiper
                            onSwiper={setActiveThumbs}
                            spaceBetween={10}
                            slidesPerView={4}
                            modules={[Navigation, Thumbs]}
                            className="product-image-slider-thumbs"
                        >
                            {detailGame?.screenshots?.length > 0 &&
                                detailGame.screenshots.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="product-image-slider-thumbs-wrapper">
                                            <img src={`${item.image}`} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                    <div className="ml-4 w-[320px]">
                        <img
                            src={`${detailGame.thumbnail}`}
                            alt=""
                            className="w-full h-[150px] object-cover mb-2"
                        />
                        <span className="text-white text-sm">
                            {detailGame.short_description}
                        </span>
                        <div className="mt-3 flex text-white text-sm">
                            <span className="text-slate-400 uppercase w-[130px]">
                                Release date:
                            </span>
                            <span className="">{detailGame.release_date}</span>
                        </div>
                        <div className="mt-3 flex text-white text-sm">
                            <span className="text-slate-400 uppercase w-[130px]">
                                Publisher:
                            </span>
                            <span className="">{detailGame.publisher}</span>
                        </div>
                        <div className="mt-3 flex text-white text-sm">
                            <span className="text-slate-400 uppercase w-[130px]">
                                Developer:
                            </span>
                            <span className="">{detailGame.developer}</span>
                        </div>
                        <div className="mt-3">
                            <span className="text-white text-xs p-1 border-none rounded-md bg-slate-500">
                                {detailGame.genre}
                            </span>
                        </div>
                        <div className="mt-3">
                            <a
                                href={`${detailGame.game_url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-3 py-2 text-white text-lg bg-slate-900 rounded-xl font-medium">
                                    View to game
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-[600px]">
                        <h2 className="text-white text-lg uppercase font-medium">
                            About the game
                        </h2>
                        <div className="line"></div>
                        <span className="text-[#acb2b8] text-base">
                            <ShowMoreText
                                lines={5}
                                more="Show more"
                                less="Show less"
                                className="content-css"
                                anchorClass="show-more-less-clickable"
                                expanded={false}
                                width={600}
                                truncatedEndingComponent={"... "}
                            >
                                {detailGame.description}
                            </ShowMoreText>
                        </span>
                    </div>
                    <div className="flex-1 bg-slate-700 rounded-lg p-5 w-[320px] h-fit">
                        <h2 className="text-white text-base uppercase font-medium text-center mb-4">
                            System requirements
                        </h2>
                        {!detailGame.minimum_system_requirements ? (
                            <span className="text-[#acb2b8] uppercase">
                                The game can be played on any device
                                configuration
                            </span>
                        ) : (
                            <div className="requirement w-full">
                                <div className="text-[#acb2b8] mb-2">
                                    OS:{" "}
                                    <span className="text-white">
                                        {
                                            detailGame
                                                ?.minimum_system_requirements
                                                ?.os
                                        }
                                    </span>
                                </div>
                                <div className="text-[#acb2b8] mb-2">
                                    Processor:{" "}
                                    <span className="text-white">
                                        {
                                            detailGame
                                                ?.minimum_system_requirements
                                                ?.processor
                                        }
                                    </span>
                                </div>
                                <div className="text-[#acb2b8] mb-2">
                                    Memory:{" "}
                                    <span className="text-white">
                                        {
                                            detailGame
                                                ?.minimum_system_requirements
                                                ?.memory
                                        }
                                    </span>
                                </div>
                                <div className="text-[#acb2b8] mb-2">
                                    Graphics:{" "}
                                    <span className="text-white">
                                        {
                                            detailGame
                                                ?.minimum_system_requirements
                                                ?.graphics
                                        }
                                    </span>
                                </div>
                                <div className="text-[#acb2b8] mb-2">
                                    Storage:{" "}
                                    <span className="text-white">
                                        {
                                            detailGame
                                                ?.minimum_system_requirements
                                                ?.storage
                                        }
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default GameDetailPage;
