import Image from "next/image";
import React from "react";
import { AdCardProps, PlayerCardProps } from "../libs/definitions";

export default function AdCard({ adTitle, adDesc, adImage }: AdCardProps) {
    return (
        <div className="bg-white shadow-[0px_8px_16px_0px_#0000000D] max-h-[511px] w-[238px] p-3 font-secondary  text-black dark:bg-[#3B3E47]">
            <div className="h-full flex flex-col gap-3 border-[0.2px] border-[#006555]">
                {/* Images */}
                <div className="relative h-[218px] w-full overflow-hidden">
                    <div className="absolute bg-black text-white top-0 right-0 z-[999] font-bold text-xs px-[15px] py-[3px]">
                        Ad
                    </div>
                    <Image
                        fill
                        src={adImage}
                        alt="star"
                        className="w-full object-cover"
                    />
                </div>
                {/* Details */}
                <div className="flex flex-col gap-3 p-3 flex-1">
                    {/* Player Name */}
                    <h2 className="font-semibold text-xl dark:text-white">
                        {adTitle}
                    </h2>
                    <p className="text-[#525965] text-xs dark:text-[#DFDFDF]">
                        {adDesc}
                    </p>
                </div>
            </div>
        </div>
    );
}
