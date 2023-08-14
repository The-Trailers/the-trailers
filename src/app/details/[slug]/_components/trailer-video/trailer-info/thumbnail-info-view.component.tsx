import classNames from "classnames";

export default function ThumbnailInfoView({ children, className }
    : { children: React.JSX.Element, className?: string }) {
    return (
        <div className={classNames(
            "rounded-xl lg:rounded-3xl lg:min-w-[180px] max-w-[330px] h-[100px] lg:h-[180px] flex gap-5 justify-center items-center lg:p-0 p-3",
            className
        )}>
            {children}
        </div>
    );
}