import classNames from "classnames";

export default function ThumbnailInfoView({ children, className }
    : { children: React.JSX.Element, className?: string }) {
    return (
        <div className={classNames(
            "rounded-3xl min-w-[180px] max-w-[330px] h-[180px] flex gap-5 justify-center items-center",
            className
        )}>
            {children}
        </div>
    );
}