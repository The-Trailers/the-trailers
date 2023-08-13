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
                <div className="grow">
                    <div className="-rotate-90 text-white/50 w-min whitespace-nowrap uppercase">
                        {label}
                    </div>
                </div>

                <div className="absolute text-4xl text-center">
                    {children}
                </div>
            </>
        </ThumbnailInfoView>
    );
}