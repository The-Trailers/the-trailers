import classNames from "classnames";
import { HypeSkeleton } from "./_components/hype.component";
import { TrailerVideoSkeleton } from "./_components/trailer-video";
import { CastSkeleton } from "./_components/cast.component";
import Carousel from "@/components/carousel.component";
import { TrailerPosterSkeleton } from "@/components/trailer-poster";

export default function Loading() {
    return (
        <div className="flex flex-col gap-20 pb-24">
            <TrailerVideoSkeleton />

            <div className="container px-2 flex flex-col gap-16">
                <div className="flex lg:flex-row flex-col gap-10">
                    <section className="grow">
                        <div className="uppercase text-white/30 mb-3">
                            Description
                        </div>

                        {
                            [...Array(2)].map((item, idx) =>
                                <div key={idx} className="w-full h-[25px] bg-white/20 mb-2">
                                </div>
                            )
                        }
                    </section>

                    <section>
                        <div className="uppercase text-white/30 mb-3">
                            Hype
                        </div>

                        <div className="flex">
                            {[...Array(2)].map((hype, idx) =>
                                <HypeSkeleton key={idx} className={classNames(
                                    { "mr-14": idx < 1 }
                                )} />
                            )}
                        </div>
                    </section>
                </div>

                <section>
                    <div className="uppercase text-white/30 mb-3">
                        Notable Casts
                    </div>

                    <div className={classNames(
                        "flex gap-5",
                    )}>
                        {[...Array(3)].map((cast, idx) =>
                            <CastSkeleton key={idx} />
                        )}
                    </div>
                </section>

                <section>
                    <div className="uppercase text-white/30 mb-3">
                        Other Upcoming Films
                    </div>

                    <Carousel dragFree={true}>
                        {
                            [...Array(5)].map((trailer, idx) => <TrailerPosterSkeleton key={idx} />)
                        }
                    </Carousel>
                </section>
            </div>
        </div>
    )
}