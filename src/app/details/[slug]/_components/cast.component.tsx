import { CastDto } from "@/dtos/app.dto";
import classNames from "classnames";

export default function Cast({ className, cast }
    : { className?: string, cast: CastDto }) {

    const size = 65;

    return (
        <div className="flex flex-col items-center">
            <img className="rounded-full object-cover object-top mb-2"
                style={{ width: `${size}px`, height: `${size}px` }}
                src={cast.avatarURL} />

            <div>
                {cast.name}
            </div>
        </div>
    );
}