import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export default function PlayButton({ className, isPlaying }: { className?: string, isPlaying: boolean }) {
    return (
        <button className={classNames(
            "rounded-md w-[70px] h-[45px] bg-lime-500",
            "flex justify-center items-center",
            className
        )}>
            {!isPlaying ?
                <FontAwesomeIcon icon={faPlay} fontSize={25} />
                : <FontAwesomeIcon icon={faPause} fontSize={25} />}
        </button>
    );
}