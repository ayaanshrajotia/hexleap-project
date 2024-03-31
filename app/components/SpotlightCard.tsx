import Image from "next/image";
import React from "react";
import { SpotlightCardProps } from "../libs/definitions";

export default function SpotlightCard({
    image,
    title,
    address,
    collection,
    date,
    day,
    time,
}: SpotlightCardProps) {
    return (
        <div className="bg-white shadow-[0px_8px_16px_0px_#0000001A] h-[625px] max-w-[257px] p-3 font-secondary flex flex-col justify-between text-black dark:bg-[#3B3E47]">
            {/* Images */}
            <div className="b relative h-[385px] w-full overflow-hidden shadow-[0px_8px_16px_0px_#00000033] max-sm:h-[350px]">
                <Image
                    fill
                    src={image}
                    alt="star"
                    className="w-full object-cover"
                />
            </div>
            <div className="relative flex justify-around px-4 -mt-4">
                <div className="shadow-[inset_7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] absolute translate-x-[12px] -right-[10px] top-[-9px] rounded-full"></div>
                <div className="shadow-[inset_-7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] absolute -translate-x-[12px] -left-[10px] top-[-9px] rounded-full"></div>
                <div className="border-b w-[3px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b  w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b  w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b  w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b w-[8px] border-[#818A97] "></div>
                <div className="border-b  w-[3px] border-[#818A97] "></div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="font-primary text-center font-medium text-[17px] dark:text-white">
                    {title}
                </h2>
                <div className="font-primary flex flex-col items-center gap-2">
                    <div className="flex text-sm items-center gap-2 dark:text-white">
                        <span>{date}</span>
                        <div className="h-[14px] w-[1px] bg-black dark:bg-white"></div>
                        <span>{day}</span>
                        <div className="h-[14px] w-[1px] bg-black dark:bg-white"></div>
                        <span>{time}</span>
                    </div>
                    <p className="font-secondary text-sm text-[#525965] text-center dark:text-[#DFDFDF]">
                        {address}
                    </p>
                </div>
                <button className="bg-[#1D1D1F] text-white text-center w-full text-sm p-3">
                    {collection}
                </button>
            </div>
        </div>
    );
}
