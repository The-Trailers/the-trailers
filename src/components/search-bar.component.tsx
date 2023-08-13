"use client"

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Inter } from "next/font/google";
import { useState } from "react";
import * as homeService from "@/app/_services/home.service";
import { usePathname, useRouter } from "next/navigation";

const inter = Inter({ subsets: ['latin'] })

export default function SearchBar({ className }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathName = usePathname();

    const onInput = async (query: string) => {     
        if(!query.length && pathName == "/search") {
            router.back();
            return;
        }

        const url = `/search?query=${query}`;

        if (pathName != "/search") {
            router.push(url);
        } else {
            router.replace(url);
        }
    }

    return (
        <div className={classNames(
            inter.className,
            "relative h-min",
            className)}>
            <input className={classNames(
                "lg:opacity-100 lg:w-[250px] absolute top-1/2 -translate-y-1/2 right-0 bg-black/50 px-4 py-2 rounded-2xl transition-all",
                {
                    "opacity-0 w-0": !isOpen,
                    "opacity-100 w-[250px]": isOpen
                }
            )}
                onInput={(event) => onInput(event.currentTarget.value)}
                type="text"
                placeholder="Search for a movie" />

            <FontAwesomeIcon
                icon={faSearch}
                className="absolute top-1/2 -translate-y-1/2 right-4"
                fontSize={18}
                onClick={() => setIsOpen(!isOpen)} />
        </div>
    );
}