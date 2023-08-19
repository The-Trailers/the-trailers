import "react-loading-skeleton/dist/skeleton.css"
import { FeaturedTrailerSkeleton } from "./_components/featured-trailer";
import { TrailerSectionsListSkeleton } from "./_components/trailer-sections-list.component";

export default function Loading() {
    return (
        <>
            <FeaturedTrailerSkeleton className="mb-14 md:mb-24"/>

            <TrailerSectionsListSkeleton />
        </>
    );
}