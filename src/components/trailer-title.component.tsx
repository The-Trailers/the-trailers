import classNames from "classnames";

export default function TrailerTitle({ className, title, authors, genres }
    : { className?: string, title: string, authors: string[], genres?: string[] }) {
    return (
        <div className={classNames(
            "flex flex-col gap-5",
            className
        )}>
            <div className="flex gap-5">
                {authors.map((author) => <span>{author}</span>)}
            </div>

            <div className="text-6xl font-bold uppercase">{title}</div>

            {genres?.length &&
                <div className="flex gap-5">
                    {genres.map((genre) =>
                        <span className="rounded-md border py-1 px-2 border-white bg-white/20 backdrop-blur">
                            {genre}
                        </span>
                    )}
                </div>
            }
        </div>
    );
}