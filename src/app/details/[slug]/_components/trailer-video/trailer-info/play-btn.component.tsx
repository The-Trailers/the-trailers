import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import ThumbnailInfoView from "./thumbnail-info-view.component";

export default function PlayButton({ className, onPlay, isPlaying }
    : { className?: string, onPlay: () => void, isPlaying: boolean }) {
    return (
        <ThumbnailInfoView className={classNames(
            "bg-lime-500",
            className
        )}>
            <button className="w-full h-full flex justify-center items-center" onClick={() => onPlay()}>
                <span className="w-[50px]">
                    {
                        isPlaying ?
                            <FontAwesomeIcon icon={faPause} fontSize={50} />
                            : <FontAwesomeIcon icon={faPlay} fontSize={50} />
                    }
                </span>
            </button>
        </ThumbnailInfoView>
    )
}