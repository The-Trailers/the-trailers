"use client"

import { TrailerDetailsDto } from "@/dtos/app.dto";
import classNames from "classnames";
import BannerView from "@/components/banner-view.component";
import TrailerInfo, { TrailerInfoSkeleton } from "./trailer-info";
import { useRef, useState } from "react";

export default function TrailerVideo({ className, trailerDetails }
    : { className?: string, trailerDetails: TrailerDetailsDto }) {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    const onPlay = () => {
        if (videoRef.current?.paused || videoRef.current?.ended) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    }

    return (
        <div className={classNames(
            "relative",
            className
        )}>
            <BannerView>
                <div className="w-full bg-gray-500 max-h-[816px] overflow-hidden">
                    <video
                        ref={videoRef}
                        className="w-full"
                        src={trailerDetails.trailerURL}
                        poster={trailerDetails.thumbnailURL}
                        onPlay={() => {
                            setIsVideoPlaying(true);
                        }}
                        onPause={() => {
                            setIsVideoPlaying(false);
                        }}
                        onEnded={() => {
                            setIsVideoPlaying(false);
                            videoRef.current?.load();
                        }}
                    >
                    </video>
                </div>
            </BannerView>

            <TrailerInfo className="relative lg:absolute bottom-0 lg:left-1/2 lg:-translate-x-1/2"
                trailerDetails={trailerDetails}
                isPlaying={isVideoPlaying}
                onPlay={onPlay} />
        </div>
    );
}

export function TrailerVideoSkeleton({ className }: { className?: string }) {
    return (
        <div className={classNames(
            "relative",
            className
        )}>
            <BannerView>
                <div className="w-full bg-gray-500 max-h-[816px] overflow-hidden">
                    <video className="w-full"></video>
                </div>
            </BannerView>

            <TrailerInfoSkeleton className="relative lg:absolute bottom-0 lg:left-1/2 lg:-translate-x-1/2" />
        </div>
    );
}