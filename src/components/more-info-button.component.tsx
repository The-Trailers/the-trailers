import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function MoreInfoButton({ trailerId }: { trailerId: string }) {
    return (
        <Link className="rounded-lg flex gap-5 w-min bg-gray-500 justify-center items-center py-3 px-6"
            href={`/details/${trailerId}`}>
            <FontAwesomeIcon icon={faInfoCircle} fontSize={25} />
            <span className="hidden lg:block whitespace-nowrap">More Info</span>
        </Link>
    );
}