import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function SearchBar({ className }: { className?: string }) {
    return (
        <div className={classNames(
            inter.className,
            "relative h-min",
            className)}>
            <input className="bg-black/50 px-4 py-2 rounded-2xl"
                type="text"
                placeholder="Search for a movie" />

            <FontAwesomeIcon
                icon={faSearch}
                className="absolute top-1/2 -translate-y-1/2 right-4"
                fontSize={18}/>
        </div>
    );
}