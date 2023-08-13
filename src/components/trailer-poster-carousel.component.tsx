'use client'

import { SectionTrailerDto } from "@/dtos/app.dto";
import TrailerPoster from "./trailer-poster";
import useEmblaCarousel, { EmblaOptionsType, } from "embla-carousel-react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function TrailerPosterCarousel({ className, trailers, ...options }: {
    className?: string, trailers: SectionTrailerDto[]
} & EmblaOptionsType) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [canScrollPrev, setCanScrollPrev] = useState(false);

    useEffect(() => {
        const selectHandler = () => {
            const index = emblaApi?.selectedScrollSnap();
            setSelectedIndex(index ?? 0);
        }

        const scrollControlsHandler = () => {
            setCanScrollPrev(emblaApi?.canScrollPrev() || false);
            setCanScrollNext(emblaApi?.canScrollNext() || false);
        }
        
        scrollControlsHandler();

        emblaApi?.on("resize", scrollControlsHandler);

        emblaApi?.on("select", () => {
            selectHandler();
            scrollControlsHandler();
        });

        return () => {
            emblaApi?.off("select", selectHandler);
            emblaApi?.off("resize", scrollControlsHandler);
        }
    }, [emblaApi]);

    return (
        <div className={classNames(
            "overflow-hidden relative",
            className
        )} ref={emblaRef}>
            <div className="flex justify-between gap-10">
                {
                    trailers.map(((trailer, idx) => <TrailerPoster key={idx} trailer={trailer} />))
                }
            </div>

            <button className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-black/50"
                onClick={() => emblaApi!.scrollPrev()} hidden={!canScrollPrev}>
                <FontAwesomeIcon icon={faChevronLeft} fontSize={30} />
            </button>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-black/50"
                onClick={() => emblaApi!.scrollNext()} hidden={!canScrollNext}>
                <FontAwesomeIcon icon={faChevronRight} fontSize={30} />
            </button>
        </div>
    );
}