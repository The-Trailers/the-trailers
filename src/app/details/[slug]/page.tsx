import { Inter } from "next/font/google";
import TrailerVideo from "./_components/trailer-video";
import * as appService from "@/services/app.service";
import classNames from "classnames";
import Cast from "./_components/cast.component";
import Hype from "./_components/hype.component";
import Carousel from "@/components/carousel.component";
import TrailerPoster from "@/components/trailer-poster";

const inter = Inter({ subsets: ['latin'] })

export default async function Details({ params }
    : { params: { slug: string } }) {
    const otherUpcomingTrailers = await appService.getOtherUpcomingTrailers(10);

    const trailerDetails = await appService.getTrailerDetails(params.slug);
    const hypes = trailerDetails.hypes.sort((a, b) => a.hype._id > b.hype._id ? 1 : -1)

    return (
        <div className="flex flex-col gap-20 pb-24">
            <TrailerVideo trailerDetails={trailerDetails} />

            <div className="container px-2 flex flex-col gap-16">
                <div className="flex lg:flex-row flex-col gap-10">
                    <section className="grow">
                        <div className="uppercase text-white/30 mb-3">
                            Description
                        </div>

                        <div className={classNames(inter.className)}>
                            {trailerDetails.description}
                        </div>
                    </section>

                    {
                        hypes.length &&
                        <section>
                            <div className="uppercase text-white/30 mb-3">
                                Hype
                            </div>

                            <div className="flex">
                                {hypes.map((hype, idx) =>
                                    <Hype className={classNames(
                                        { "mr-14": idx < hypes.length - 1 }
                                    )}
                                        hype={hype} />
                                )}
                            </div>
                        </section>
                    }
                </div>

                <section>
                    <div className="uppercase text-white/30 mb-3">
                        Notable Casts
                    </div>

                    <div className={classNames(
                        "flex gap-5",
                        inter.className
                    )}>
                        {trailerDetails.casts.map((cast) =>
                            <Cast cast={cast} />
                        )}
                    </div>
                </section>

                <section>
                    <div className="uppercase text-white/30 mb-3">
                        Other Upcoming Films
                    </div>

                    <Carousel dragFree={true}>
                        {
                            otherUpcomingTrailers.map((trailer, idx) => <TrailerPoster key={idx} trailer={trailer} />)
                        }
                    </Carousel>
                </section>
            </div>
        </div>
    )
}