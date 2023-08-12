import { MovieSourceCode } from "@/app/enums/app.enum";
import classNames from "classnames";

export default function TrailerPosterSourceTag({ sourceName, sourceCode }
    : { sourceName: string, sourceCode: string }) {

    return (
        <div className={classNames(
            "rounded border py-1 px-2",
            {
                "border-yellow-400": sourceCode == MovieSourceCode[MovieSourceCode.AMAZON],
                "border-sky-400": sourceCode == MovieSourceCode[MovieSourceCode.AMAZONPRIME],
                "border-white": sourceCode == MovieSourceCode[MovieSourceCode.APPLETV],
                "border-blue-600": sourceCode == MovieSourceCode[MovieSourceCode.DISNEYPLUS],
                "border-red-400": sourceCode == MovieSourceCode[MovieSourceCode.NETFLIX],
                "border-violet-400": sourceCode == MovieSourceCode[MovieSourceCode.THEATRE]
            }
        )}>
            {sourceName}
        </div>
    );
}