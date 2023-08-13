import classNames from "classnames"
import { useContext } from "react";
import { FeatureTrailerContext } from "./featured-trailer.component";

export default function FeaturedTrailerTitle({ className }: { className?: string }) {
    const {currentTrailer} = useContext(FeatureTrailerContext);

    if(!currentTrailer) {
        return <></>
    }

    return (
        <div className={classNames(
            "drop-shadow-lg",
            className
        )}>
            <div className="flex gap-5">
                {
                    currentTrailer.authors.map((author, idx) =>
                        <span key={idx} className={classNames({
                            'mb-2': idx < currentTrailer.authors.length - 1
                        })}>
                            {author}
                        </span>)
                }
            </div>
            <div className="text-6xl font-bold uppercase">{currentTrailer.title}</div>
        </div>
    );
}