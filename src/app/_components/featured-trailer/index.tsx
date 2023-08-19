"use client"

import { createContext, useEffect, useRef, useState } from "react";
import FeaturedTrailerSection, { FeaturedTrailerSectionSkeleton } from "../featured-trailers-section.component";
import { FeaturedTrailerDto } from "@/dtos/app.dto";
import classNames from "classnames";
import BannerView from "@/components/banner-view.component";
import TrailerTitle from "@/components/trailer-title.component";
import WatchNowButton from "@/components/watch-now-button.component";
import MoreInfoButton from "@/components/more-info-button.component";

export const FeaturedTrailerContext = createContext<{
    currentTrailer?: FeaturedTrailerDto,
    currentTrailerIdx?: number,
    isVideoPlaying?: boolean,
    videoProgress?: number,
    onPlay?: (index: number) => void
}>({});

export default function FeaturedTrailer({ className, trailerData }
    : { className?: string, trailerData: FeaturedTrailerDto[] }) {
    const [videoURL, setVideoURL] = useState("");
    const [currentTrailerIdx, setCurrentTrailerIdx] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [videoProgress, setVideoProgress] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const currentTrailer = trailerData[currentTrailerIdx];

    useEffect(() => {
        setVideoURL(currentTrailer.trailerURL);
    }, [currentTrailer.trailerURL]);

    const onPlay = (trailerIdx: number) => {
        if (trailerIdx != currentTrailerIdx) {
            setCurrentTrailerIdx(trailerIdx);
            setVideoURL(trailerData[trailerIdx].trailerURL);

            setTimeout(() => videoRef.current?.play(), 1000);
        } else {
            if (!isVideoPlaying) {
                videoRef.current?.play();
            } else {
                videoRef.current?.pause();
            }
        }
    }

    useEffect(() => {
        videoRef.current?.load();
    }, [currentTrailerIdx])

    return (
        <div className={classNames(
            "relative",
            className
        )}>
            <BannerView>
                <div className="bg-gray-500 max-h-[816px] overflow-hidden">
                    <video
                        ref={videoRef}
                        className={`w-full`}
                        src={videoURL}
                        poster={currentTrailer.thumbnailURL}
                        onTimeUpdate={() => {
                            const videoProgress = (videoRef.current?.currentTime ?? 0) / (videoRef.current?.duration ?? 0);

                            setVideoProgress(videoProgress);
                        }}
                        onPlay={() => {
                            setIsVideoPlaying(true);
                        }}
                        onPause={() => {
                            setIsVideoPlaying(false);
                        }}
                        onEnded={() => {
                            setIsVideoPlaying(false);
                            videoRef.current?.load();
                        }}>
                    </video>
                </div>
            </BannerView>

            <div className="container px-2 relative lg:absolute bottom-0 lg:-translate-x-1/2 lg:left-1/2">
                <FeaturedTrailerContext.Provider value={{
                    currentTrailer,
                    currentTrailerIdx,
                    isVideoPlaying,
                    videoProgress,
                    onPlay
                }}>
                    <div className="flex lg:flex-col flex-row gap-5 lg:items-start items-center mb-5 lg:mb-0">
                        <TrailerTitle title={currentTrailer.title} authors={currentTrailer.authors} isHidden={isVideoPlaying} />

                        <div className="flex gap-2 lg:gap-5 mb-5">
                            <WatchNowButton href={currentTrailer.movieSource.sourceURL} />
                            <MoreInfoButton trailerId={currentTrailer._id} />
                        </div>
                    </div>

                    <FeaturedTrailerSection trailerData={trailerData} />
                </FeaturedTrailerContext.Provider>
            </div>
        </div>
    );
}

export function FeaturedTrailerSkeleton({ className }: { className?: string }) {    
    return (
        <div className={classNames(
            "relative",
            className
        )}>
            <BannerView>
                <div className="bg-gray-500 max-h-[816px] overflow-hidden">
                    <video className={`w-full`}>
                    </video>
                </div>
            </BannerView>

            <div className="container px-2 relative lg:absolute bottom-0 lg:-translate-x-1/2 lg:left-1/2">
                <FeaturedTrailerSectionSkeleton />
            </div>
        </div>
    );
}