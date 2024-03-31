import Image from "next/image";
import React from "react";
import { PlayerCardProps } from "../libs/definitions";

export default function PlayerCard({
    playerName,
    playerImage,
    totalEvents,
    sports,
}: PlayerCardProps) {
    return (
        <div className="bg-white shadow-[0_4px_8px_0_#0000000D] max-h-[511px] w-[238px] p-3 font-secondary flex flex-col gap-3 text-black dark:bg-[#3B3E47]">
            {/* Images */}
            <div className="b relative h-[385px] w-full overflow-hidden">
                <Image
                    fill
                    src={playerImage}
                    alt="star"
                    className="w-full object-cover"
                />
            </div>
            {/* Details */}
            <div className="flex flex-col gap-3">
                {/* Player Name */}
                <h2 className="font-medium dark:text-white">{playerName}</h2>
                <div className="bg-[#F7F7F8] flex p-2 gap-8 dark:bg-[#292B32]">
                    <div className="flex flex-col justify-between">
                        <p className="text-xs text-[#525965] dark:text-[#DFDFDF]">Total Events</p>
                        <span className="font-medium text-sm dark:text-white">
                            {totalEvents} Events
                        </span>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-xs text-[#525965] dark:text-[#DFDFDF]">Sports</p>
                        <span className="font-medium text-sm dark:text-white">{sports}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
