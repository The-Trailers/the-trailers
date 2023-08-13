import classNames from "classnames";
import TrailerPoster from "./trailer-poster.component";
import { SectionDto } from "@/dtos/app.dto";

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

            <div className="flex justify-between">
                {
                    section.trailers.map(((trailer, idx) => <TrailerPoster key={idx} trailer={trailer} />))
                }    
            </div>
        </section>
    );
}