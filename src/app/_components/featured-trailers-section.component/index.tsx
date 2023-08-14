import Thumbnail from "./thumbnail.component";
import { FeaturedTrailerDto } from "@/dtos/app.dto";
import Carousel from "@/components/carousel.component";

export default function FeaturedTrailerSection({ className, trailerData }: {
    className?: string, trailerData: FeaturedTrailerDto[]
}) {
    return (
        <Carousel dragFree={true}>
            {
                trailerData.map((data, idx) => (
                    <Thumbnail key={idx} thumbnailURL={data.thumbnailURL} title={data.title} index={idx} />
                ))
            }
        </Carousel>
    );
}