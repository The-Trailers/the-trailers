"use client"

import { createContext, useEffect, useRef, useState } from "react";
import FeaturedTrailerSection from "../featured-trailers-section.component";
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

export default function FeaturedTrailer({ className, trailerData, children }
    : { className?: string, trailerData: FeaturedTrailerDto[], children: React.JSX.Element }) {
    const [videoURL, setVideoURL] = useState("");
    const [currentTrailerIdx, setCurrentTrailerIdx] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [videoProgress, setVideoProgress] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    if (!trailerData) {
        return <></>
    }

    const currentTrailer = trailerData[currentTrailerIdx];

    useEffect(() => {
        setVideoURL(currentTrailer.trailerURL);
    }, []);

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

            <div className="container absolute bottom-0 -translate-x-1/2 left-1/2">
                <FeaturedTrailerContext.Provider value={{
                    currentTrailer,
                    currentTrailerIdx,
                    isVideoPlaying,
                    videoProgress,
                    onPlay
                }}>
                    <TrailerTitle className="mb-5" title={currentTrailer.title} authors={currentTrailer.authors} />

                    <div className="flex gap-5 mb-5">
                        <WatchNowButton href={currentTrailer.movieSource.sourceURL} />
                        <MoreInfoButton trailerId={currentTrailer._id} />
                    </div>

                    <FeaturedTrailerSection trailerData={trailerData} />
                </FeaturedTrailerContext.Provider>
            </div>
        </div>
    );
}