import classNames from "classnames";

export default function TrailerTitle({ className, title, authors, genres, isHidden }
    : { className?: string, title: string, authors: string[], genres?: string[], isHidden?:boolean }) {
    return (
        <div className={classNames(
            "flex flex-col gap-5 transition-opacity",
            className,
            {
                "lg:opacity-0": isHidden
            }
        )}>
            <div className="hidden lg:flex gap-5">
                {authors.map((author, idx) => <span key={idx}>{author}</span>)}
            </div>

            <div className="text-2xl lg:text-6xl font-bold uppercase">{title}</div>

            {genres?.length &&
                <div className="hidden lg:flex gap-5">
                    {genres.map((genre, idx) =>
                        <span key={idx} className="rounded-md border py-1 px-2 border-white bg-white/20 backdrop-blur">
                            {genre}
                        </span>
                    )}
                </div>
            }
        </div>
    );
}