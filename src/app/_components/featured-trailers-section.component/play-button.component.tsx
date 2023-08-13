import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export default function PlayButton({ className, isPlaying }: { className?: string, isPlaying: boolean }) {
    return (
        <button className={classNames(
            "rounded-md w-[40px] h-[25px] lg:w-[70px] lg:h-[45px] bg-lime-500",
            "flex justify-center items-center",
            className
        )}>
            {!isPlaying ?
                <FontAwesomeIcon icon={faPlay} className="text-[10px] lg:text-[25px]" />
                : <FontAwesomeIcon icon={faPause} className="text-[10px] lg:text-[25px]" />}
        </button>
    );
}