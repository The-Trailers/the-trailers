import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link";

export default function WatchNowButton({ href }: { href?: string }) {
    return (
        <Link className="rounded-lg flex gap-5 w-min bg-white justify-center items-center py-3 px-6"
            href={href ?? ""} target="_blank">
            <FontAwesomeIcon className="text-gray-800" icon={faPlay} fontSize={25} />
            <span className="hidden lg:block text-gray-800 whitespace-nowrap">Watch Now</span>
        </Link>
    );
}