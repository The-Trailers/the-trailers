import classNames from "classnames";
import { SectionDto } from "@/dtos/app.dto";
import TrailerPoster from "@/components/trailer-poster";
import TrailerPosterCarousel from "@/components/trailer-poster-carousel.component";

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
                    <img className="mr-3 object-contain" src={section.iconURL} width={30} />
                }
                <span className="text-2xl font-bold uppercase">
                    {section.title}
                </span>
            </div>

           <TrailerPosterCarousel trailers={section.trailers} />
        </section>
    );
}