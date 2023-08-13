import { Fjalla_One } from "next/font/google";
import classNames from "classnames"

const fjalla = Fjalla_One({ subsets: ["latin"], weight: "400" })

export default function Logo({ className }: { className?: string }) {
    return (
        <div className={classNames(fjalla.className, className)}>
            <div className="text-lg">The</div>
            <div className="text-4xl">TRAILERS</div>
        </div>
    );
}