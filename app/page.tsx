"use client";

import {
    ChevronLeftIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon,
} from "@heroicons/react/16/solid";
import AdCard from "./components/AdCard";
import PlayerCard from "./components/PlayerCard";
import SpotlightCard from "./components/SpotlightCard";
import { useTheme } from "next-themes";

export default function Home() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    console.log(theme);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-10 p-10 text-black max-sm:p-4">
            <section className="flex flex-col max-w-[90vw] w-full">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="font-primary text-2xl font-bold underline underline-offset-[10px] decoration-[#738FFF] dark:text-white">
                        Sports
                    </h2>
                    <button
                        className="flex items-center gap-3 cursor-pointer bg-white rounded-xl p-2 dark:text-white dark:bg-[#3B3E47]"
                        onClick={() =>
                            theme === "dark"
                                ? setTheme("light")
                                : setTheme("dark")
                        }
                    >
                        {theme === "light" ? (
                            <>
                                <MoonIcon className="h-7 w-7" />
                            </>
                        ) : (
                            <>
                                <SunIcon className=" h-7 w-7" />
                            </>
                        )}
                    </button>
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                    <PlayerCard
                        playerName="Sacramento River Cats"
                        playerImage="/images/star-2.jpg"
                        totalEvents={48}
                        sports="Baseball"
                    />
                    <PlayerCard
                        playerName="Las Vegas Aviators"
                        playerImage="/images/star-1.jpg"
                        totalEvents={28}
                        sports="Baseball"
                    />
                    <PlayerCard
                        playerName="New Jersey Devils"
                        playerImage="/images/star-3.jpg"
                        totalEvents={15}
                        sports="Ice Hockey"
                    />
                    <PlayerCard
                        playerName="Las Vegas Aviators"
                        playerImage="/images/star-1.jpg"
                        totalEvents={28}
                        sports="Baseball"
                    />
                    <AdCard
                        adTitle="Advertisement title"
                        adImage="/images/ad.jpg"
                        adDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <button className="self-center bg-[#2C9CF0] py-[10px] px-[30px] w-fit rounded-[3px] text-white mt-12">
                    See More
                </button>
            </section>
            <section className="max-w-[90vw] w-full flex flex-col p-6 gap-16 bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] max-sm:px-0">
                <div>
                    <h1 className="text-[50px] max-sm:text-[40px] font-bold font-secondary text-center mb-4 dark:text-white">
                        Collection Spotlight
                    </h1>
                    <p className="font-secondary text-sm text-center dark:text-white max-sm:p-2">
                        Discover extraordinary moments with our Spotlight
                        Collection metatickets—exclusive access to premium
                        events for an unforgettable experience. Grab yours
                        today!
                    </p>
                </div>
                <div className="flex items-center w-full justify-between gap-2">
                    <button className="flex h-[50px] border-[1px] border-[#2C9CF0] items-center justify-center">
                        <ChevronLeftIcon className="w-10 h-10 text-[#2C9CF0]" />
                    </button>
                    <div className="flex gap-10 flex-wrap justify-center">
                        <SpotlightCard
                            image="/images/spotlight-1.jpg"
                            title="Las Vegas Aviators"
                            date="OCT 15"
                            day="SUN"
                            time="4:30 PM"
                            address="Las Vegas Ballpark, Las Vegas, Nevada"
                            collection="Take Flight Collection"
                        />
                        <SpotlightCard
                            image="/images/spotlight-2.jpg"
                            title="Sacramento River Cats"
                            date="OCT 15"
                            day="SUN"
                            time="4:30 PM"
                            address="Sutter Health Park, Sacramento, California"
                            collection="Orange Collection"
                        />
                        <SpotlightCard
                            image="/images/spotlight-1.jpg"
                            title="Las Vegas Aviators"
                            date="OCT 15"
                            day="SUN"
                            time="4:30 PM"
                            address="Las Vegas Ballpark, Las Vegas, Nevada"
                            collection="Take Flight Collection"
                        />
                    </div>
                    <button className="flex h-[50px] border-[1px] border-[#2C9CF0] items-center justify-center">
                        <ChevronRightIcon className="w-10 h-10 text-[#2C9CF0]" />
                    </button>
                </div>
            </section>
        </div>
    );
}
