import classNames from "classnames";
import FeaturedTrailerThumbnail from "./featured-trailer-thumbnail.component";
import { FeaturedTrailerDto } from "@/app/dtos/app.dto";

export default function FeaturedTrailerSection({ className, trailerData }: {
    className?: string, trailerData: FeaturedTrailerDto[]
}) {
    return (
        <section className={classNames("w-full flex justify-between", className)}>
            {trailerData.map((data, idx) => (
                <FeaturedTrailerThumbnail key={idx} thumbnailURL={data.thumbnailURL} title={data.title} index={idx} />
            ))}
        </section>
    );
}