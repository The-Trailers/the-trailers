"use client"

import { useEffect, useRef, useState } from "react";
import TrailersSection from "./trailers-section";
import * as homeService from "@/app/_services/home.service";
import { SectionDto, SectionResultsDto } from "@/dtos/app.dto";
import { ClipLoader } from "react-spinners";

export default function TrailerSectionsList({initialSections, initialTotal}:{initialSections:SectionDto[], initialTotal:number}) {
    const [sections, setSections] = useState<SectionDto[]>(initialSections);
    const [index, setIndex] = useState(0);
    const [total, setTotal] = useState(initialTotal);
    const [isLoading, setIsLoading] = useState(false);

    const count = 3;

    const getSections = async (index: number) => {
        setIsLoading(true);

        const sectionResults = await homeService.getSections(index, count);

        setIsLoading(false);

        setSections(sections.concat(sectionResults.results));
        setIndex(sectionResults.index);
        setTotal(sectionResults.total);
    }

    useEffect(() => {
        const scrollHandler = () => {
            if (!isLoading && window.scrollY + 100 >= document.body.scrollHeight - window.innerHeight) {
                if ((index + 1) * count < total) {
                    getSections(index + 1);
                }
            }
        }

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [index, total, isLoading]);

    return (
        <div className="container px-2 pb-24 flex flex-col gap-6 lg:gap-24">
            {
                sections?.map((section, idx) => <TrailersSection key={idx} className="mb-20" section={section} />)
            }

            {
                isLoading &&
                <div className="flex justify-center">
                    <ClipLoader color="white" />
                </div>
            }
        </div>
    );
}