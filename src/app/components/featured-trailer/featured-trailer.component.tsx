"use client"

import { createContext, useEffect, useRef, useState } from "react";
import FeaturedTrailerSection from "../featured-trailers-section.component";
import FeaturedTrailerTitle from "./featured-trailer-title.component";
import { FeaturedTrailerDto } from "../../dtos/app.dto";
import classNames from "classnames";

export const FeatureTrailerContext = createContext<{
    currentTrailer?: FeaturedTrailerDto,
    currentTrailerIdx?: number,
    isVideoPlaying?: boolean,
    videoProgress?: number,
    onPlay?: (index: number) => void
}>({});

export default function FeaturedTrailer({ className, trailerData }: { className?: string, trailerData: FeaturedTrailerDto[] }) {
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

            setTimeout(() => setVideoURL(trailerData[trailerIdx].trailerURL), 1000)
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

    useEffect(() => {
        videoRef.current?.play();
    }, [videoURL])

    return (
        <div className={classNames(
            "relative",
            className
        )}>
            <div className="flex justify-center items-center bg-gray-500 max-h-[816px] overflow-hidden">
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
            
            {/* bottom fade */}
            <div className="w-full h-[150px] bg-gradient-to-t from-surface from-10% to-transparent absolute bottom-0"></div>

            <div className="container absolute bottom-0 -translate-x-1/2 left-1/2">
                <FeatureTrailerContext.Provider value={{
                    currentTrailer,
                    currentTrailerIdx,
                    isVideoPlaying,
                    videoProgress,
                    onPlay
                }}>
                    <FeaturedTrailerTitle className="mb-5" />

                    <FeaturedTrailerSection trailerData={trailerData} />
                </FeatureTrailerContext.Provider>
            </div>
        </div>
    );
}