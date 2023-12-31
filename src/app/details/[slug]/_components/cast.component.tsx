import { CastDto } from "@/dtos/app.dto";
import classNames from "classnames";
import Image from "next/image";

export default function Cast({ className, cast }
    : { className?: string, cast: CastDto }) {

    const size = 65;

    return (
        <div className="flex flex-col items-center">
            <Image className="rounded-full object-cover object-top mb-2"
                style={{ width: `${size}px`, height: `${size}px` }}
                src={cast.avatarURL} width={size} height={size} alt={cast.name} />

            <div>
                {cast.name}
            </div>
        </div>
    );
}

export function CastSkeleton({ className }: { className?: string }) {

    const size = 65;

    return (
        <div className="flex flex-col items-center">
            <div className="rounded-full bg-white/20 mb-2"
                style={{ width: `${size}px`, height: `${size}px` }}>
            </div>

            <div className="bg-white/20 w-[100px] h-[25px]">
            </div>
        </div>
    );
}