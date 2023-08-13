import { SectionResultsDto, SectionTrailerDto } from "@/dtos/app.dto";
import axios from "axios";

export const getSections = async (index: number, count: number) => {
    try {
        const results = await axios.get("/api/sections", { params: { index, count } });

        return results.data as SectionResultsDto;
    } catch (error) {
        throw error;
    }
}

export const searchTrailers = async (query: string) => {
    try {
        const results = await axios.get("/api/trailer/search", { params: { query } });

        return results.data as SectionTrailerDto[];
    } catch (error) {
        throw error;
    }
}