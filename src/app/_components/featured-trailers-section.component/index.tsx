import classNames from "classnames";
import Thumbnail from "./thumbnail.component";
import { FeaturedTrailerDto } from "@/dtos/app.dto";

export default function FeaturedTrailerSection({ className, trailerData }: {
    className?: string, trailerData: FeaturedTrailerDto[]
}) {
    return (
        <section className={classNames("w-full flex justify-between", className)}>
            {trailerData.map((data, idx) => (
                <Thumbnail key={idx} thumbnailURL={data.thumbnailURL} title={data.title} index={idx} />
            ))}
        </section>
    );
}