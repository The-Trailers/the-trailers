"use client"

import { useContext } from "react";
import PlayButton from "./play-button.component";
import { FeaturedTrailerContext } from "../featured-trailer";
import classNames from "classnames";
import Image from "next/image";

export default function Thumbnail({ thumbnailURL, title, index }
    : { thumbnailURL: string, title: string, index: number }) {
    let {
        currentTrailerIdx,
        videoProgress,
        isVideoPlaying,
        onPlay
    } = useContext(FeaturedTrailerContext);

    const isPlaying = (currentTrailerIdx == index && isVideoPlaying) ?? false;
    videoProgress = videoProgress ?? 0;

    return (
        <div className="relative flex flex-col items-center gap-2">
            <div onClick={() => { if (onPlay) onPlay(index) }}
                className={classNames(
                    "rounded-3xl bg-gray-400 overflow-hidden relative cursor-pointer group bg-clip-padding border-4 border-transparent hover:border-white",
                    {
                        "border-white": currentTrailerIdx == index
                    }
                )}>

                <PlayButton className={classNames(
                    "opacity-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:opacity-100 transition-all",
                    {
                        "opacity-100": currentTrailerIdx == index
                    }
                )}
                    isPlaying={isPlaying} />

                {
                    currentTrailerIdx == index && (videoProgress) > 0 &&
                    <span className="absolute left-0 bottom-0 bg-gray-500 w-full h-[8px]">
                        <span className="absolute left-0 bottom-0 bg-lime-500 h-full" style={{ width: `${videoProgress * 100}%` }}></span>
                    </span>
                }

                <Image className="min-w-[200px] h-[110px] md:min-w-[250px] md:h-[135px] lg:min-w-[330px] lg:h-[180px] object-cover"
                    src={thumbnailURL} alt={title} width={200} height={110} />
            </div>

            <div className="lg:absolute left-3 bottom-5 shadow-xl opacity-70 line-clamp-2 px-1">
                {title}
            </div>
        </div>
    );
}

export function ThumbnailSkeleton() {
    return (
        <div className="rounded-3xl bg-white/20 cursor-pointer border-4 border-transparent hover:border-white min-w-[200px] h-[110px] md:w-[250px] md:h-[135px] lg:w-[330px] lg:h-[180px]">            
        </div>
    );
}