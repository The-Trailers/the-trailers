import { SectionTrailerDto } from "@/dtos/app.dto";
import classNames from "classnames"
import TrailerPosterSourceTag from "./trailer-poster-source-tag.component";
import Link from "next/link";

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
                    <img src={trailer.posterURL} className="object-cover w-full h-full" />
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