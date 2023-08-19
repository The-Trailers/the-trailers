import classNames from "classnames";
import PlayButton from "./play-btn.component";
import InfoContainer from "./info-container.component";
import { TrailerDetailsDto } from "@/dtos/app.dto";
import TrailerTitle from "../../../../../../components/trailer-title.component";
import WatchNowButton from "@/components/watch-now-button.component";

export default function TrailerInfo({ trailerDetails, className, onPlay, isPlaying }
    : { trailerDetails: TrailerDetailsDto, className?: string, onPlay: () => void, isPlaying: boolean }) {
    const releaseDatetime = new Date(trailerDetails.releaseDatetime).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    const budget = Math.round(trailerDetails.budget / 1000000);
    const genres = trailerDetails.genres.map((genre) => genre.name);

    return (
        <div className={classNames(
            "container px-2",
            className
        )}>
            <div className="flex lg:block gap-3 items-center">
                <TrailerTitle className="mb-5" title={trailerDetails.title} authors={trailerDetails.authors} genres={genres} isHidden={isPlaying} />

                <div className="mb-5">
                    <WatchNowButton href={trailerDetails.movieSource.sourceURL} />
                </div>
            </div>

            <div className="flex gap-3 lg:gap-10 w-full justify-center">
                <PlayButton className="grow" onPlay={onPlay} isPlaying={isPlaying} />

                <InfoContainer className="grow" label="PG Rating">
                    {trailerDetails.pgRating}
                </InfoContainer>

                <InfoContainer className="hidden lg:flex grow" label="Release">
                    {releaseDatetime}
                </InfoContainer>

                <InfoContainer className="hidden lg:flex grow" label="Budget">
                    {trailerDetails.budget > 0 ? `$${budget}M` : "-"}
                </InfoContainer>

                <InfoContainer className="grow" label="Length">
                    {`${trailerDetails.duration} min`}
                </InfoContainer>
            </ div>
        </div>
    );
}

export function TrailerInfoSkeleton({ className }: { className?: string, }) {
    return (
        <div className={classNames(
            "container px-2",
            className
        )}>
            <div className="flex gap-3 lg:gap-10 w-full justify-center">
                <PlayButton className="grow" />

                <InfoContainer className="grow" />

                <InfoContainer className="hidden lg:flex grow" />

                <InfoContainer className="hidden lg:flex grow" />

                <InfoContainer className="grow" />
            </ div>
        </div>
    );
}