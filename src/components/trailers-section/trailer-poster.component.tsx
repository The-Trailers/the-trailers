import { SectionTrailerDto } from "@/dtos/app.dto";
import classNames from "classnames"
import TrailerPosterSourceTag from "./trailer-poster-source-tag.component";

export default function TrailerPoster({ trailer, className }: { trailer: SectionTrailerDto, className?: string }) {
    const trailerDate = new Date(trailer.releaseDatetime).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });

    const width = 260;
    const height = 386;

    return (
        <div className={classNames(
            "cursor-pointer",
            className
        )} style={{ width: `${width}px`, height: `${height}px` }}>
            <div className="rounded-xl bg-gray-300 overflow-hidden mb-3">
                <img src={trailer.posterURL} width={width} height={height} />
            </div>

            <div className="line-clamp-1 mb-2" title={trailer.title}>{trailer.title}</div>

            <div className="flex gap-5 text-sm items-center">
                <div>{trailerDate}</div>

                <TrailerPosterSourceTag sourceCode={trailer.movieSource.source._id} sourceName={trailer.movieSource.source.name} />
            </div>
        </div>
    );
}