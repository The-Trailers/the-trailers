import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import ThumbnailInfoView from "./thumbnail-info-view.component";

export default function PlayButton({ className, onPlay, isPlaying }
    : { className?: string, onPlay?: () => void, isPlaying?: boolean }) {
    return (
        <ThumbnailInfoView className={classNames(
            "bg-lime-500",
            className
        )}>
            <button className="w-full h-full flex justify-center items-center"
                onClick={() => onPlay && onPlay()}>
                <span className="w-[20px] lg:w-[50px]">
                    {
                        isPlaying ?
                            <FontAwesomeIcon icon={faPause} className="text-[20px] lg:text-[50px]" />
                            : <FontAwesomeIcon icon={faPlay} className="text-[20px] lg:text-[50px]" />
                    }
                </span>
            </button>
        </ThumbnailInfoView>
    )
}