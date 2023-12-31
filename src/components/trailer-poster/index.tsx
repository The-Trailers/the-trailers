import { SectionTrailerDto } from "@/dtos/app.dto";
import classNames from "classnames"
import TrailerPosterSourceTag from "./trailer-poster-source-tag.component";
import Link from "next/link";
import Image from "next/image";

export default function TrailerPoster({ trailer, className }: { trailer: SectionTrailerDto, className?: string }) {
    const trailerDate = new Date(trailer.releaseDatetime).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });

    return (
        <Link href={`/details/${trailer._id}`}>
            <div className={classNames(
                `select-none w-[180px] lg:w-[260px]`,
                className
            )} >

                <div className="rounded-xl bg-gray-300 overflow-hidden mb-3 h-[267px] lg:h-[386px]">
                    <Image src={trailer.posterURL} className="object-cover w-full h-full" width={180} height={267} alt={trailer.title} />
                </div>

                <div className="line-clamp-1 mb-2" title={trailer.title}>{trailer.title}</div>

                <div className="flex gap-5 text-sm items-center">
                    <div>{trailerDate}</div>

                    <TrailerPosterSourceTag sourceCode={trailer.movieSource.source._id} sourceName={trailer.movieSource.source.name} />
                </div>
            </div>
        </Link>
    );
}

export function TrailerPosterSkeleton({ className }: { className?: string }) {
    return (
        <div className={classNames(
            `select-none w-[180px] lg:w-[260px]`,
            className
        )} >

            <div className="rounded-xl bg-white/20 overflow-hidden mb-3 h-[267px] lg:h-[386px]">
            </div>

            <div className="flex gap-5 text-sm items-center">
                <div className="h-[25px] w-[100px]"></div>

                <div className="h-[40px w-[65px]"></div>
            </div>
        </div>
    );
}