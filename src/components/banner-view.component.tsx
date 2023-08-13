import classNames from "classnames";
import React from "react";

export default function BannerView({className, children}:{className?:string, children:React.JSX.Element}) {
    return (
        <div className={classNames(
            "relative",
            className
        )}>
            {children}

            {/* bottom fade */}
            <div className="w-full h-[50px] lg:h-[150px] bg-gradient-to-t from-surface from-10% to-transparent absolute bottom-0"></div>
        </div>
    );
}