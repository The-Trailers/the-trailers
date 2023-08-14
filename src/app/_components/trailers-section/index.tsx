import classNames from "classnames";
import { SectionDto } from "@/dtos/app.dto";
import TrailerPoster from "@/components/trailer-poster";
import Carousel from "@/components/carousel.component";
import Image from "next/image";

export default function TrailersSection(
    { section, className }:
        { section: SectionDto, className?: string }
) {
    return (
        <section className={classNames(
            className
        )}>
            <div className="flex mb-8">
                {
                    section.iconURL &&
                    <Image className="mr-3 object-contain" src={section.iconURL} width={30} height={30} alt={section.iconURL} />
                }
                <span className="text-lg lg:text-2xl font-bold uppercase">
                    {section.title}
                </span>
            </div>

            <Carousel dragFree={true}>
                {
                    section.trailers.map((trailer, idx) => <TrailerPoster key={idx} trailer={trailer} />)
                }
            </Carousel>
        </section>
    );
}