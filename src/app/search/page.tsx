"use client"

import { SectionTrailerDto } from "@/dtos/app.dto";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as homeService from "../_services/home.service";
import TrailerPoster from "@/components/trailer-poster";
import { ClipLoader } from "react-spinners";

export default function Search() {
    const [searchResults, setSearchResults] = useState<SectionTrailerDto[]>();
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();

    const query = searchParams.get("query") as string;

    useEffect(() => {
        const search = async () => {
            setIsLoading(true);
            const results = await homeService.searchTrailers(query);
            setIsLoading(false);

            setSearchResults(results);
        }

        search();
    }, [query]);

    return (
        <div className="container px-2 mt-32">
            <div className="lg:text-2xl mb-10">
                Search results for "{query}"
            </div>


            <div className="flex gap-x-2 gap-y-10 md:gap-10 flex-wrap justify-center sm:justify-start">
                {
                    searchResults?.length ?
                        searchResults.map((result, idx) =>
                            <TrailerPoster key={idx} trailer={result} />)
                        :
                        !isLoading && <div>No results found.</div>
                }
            </div>
        </div>
    );
}