import classNames from "classnames";
import ThumbnailInfoView from "./thumbnail-info-view.component";

export default function InfoContainer({ className, label, children }
    : { className?: string, label:string, children: string }) {
    return (
        <ThumbnailInfoView className={classNames(
            "bg-white/20 backdrop-blur-sm relative",
            className
        )}>
            <>
                <div className="hidden lg:block grow">
                    <div className="-rotate-90 text-xs xl:text-lg text-white/50 w-min whitespace-nowrap uppercase">
                        {label}
                    </div>
                </div>

                <div className="absolute text-2xl xl:text-3xl text-center">
                    {children}
                </div>
            </>
        </ThumbnailInfoView>
    );
}