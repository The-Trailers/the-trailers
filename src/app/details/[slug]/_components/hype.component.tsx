import { HypeDto } from "@/dtos/app.dto";
import { HypeScoreType } from "@/enums/app.enum";
import classNames from "classnames";

export default function Hype({ className, hype }
    : { className?: string, hype: HypeDto }) {

    const iconSize = 30;
    let score = "";

    switch (hype.hype.scoreType) {
        case HypeScoreType[HypeScoreType.PERCENTAGE]:
            score = `${hype.score}%`
            break;
        case HypeScoreType[HypeScoreType.RATING]:
            score = `${hype.score}/10`
            break;
        case HypeScoreType[HypeScoreType.SCORE]:
            score = hype.score.toString();
            break;
    }

    return (
        <div className={classNames(
            "flex gap-3 items-center",
            className
        )}>
            <img className="rounded-full"
            style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
                src={hype.hype.iconURL} />

            <span>
                {score}
            </span>
        </div>
    );
}