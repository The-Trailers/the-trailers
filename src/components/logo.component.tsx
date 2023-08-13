import { Fjalla_One } from "next/font/google";
import classNames from "classnames"
import Link from "next/link";

const fjalla = Fjalla_One({ subsets: ["latin"], weight: "400" })

export default function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={classNames(
            "select-none",
            fjalla.className,
            className
        )}>
            <div className="text-xs lg:text-lg">The</div>
            <div className="text-xl lg:text-4xl">TRAILERS</div>
        </Link>
    );
}