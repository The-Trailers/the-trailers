import { FeaturedSectionDto, SectionDto } from "../dtos/app.dto";
import { axiosInstance } from "./axios";

export const getFeaturedSection = async () => {
    try {
        const results = await axiosInstance.get("featured-section");

        return results.data as FeaturedSectionDto;
    } catch (error) {
        throw error;
    }
}

export const getSections = async () => {
    try {
        const results = await axiosInstance.get("sections");

        return results.data as SectionDto[];
    } catch (error) {
        throw error;
    }
}

export const getTrailerDetails = async (trailerId: String) => {
    try {
        const result = await axiosInstance.get(`trailer/${trailerId}`);

        return result.data;
    } catch (error) {
        throw error;
    }
}

export const getOtherUpcomingTrailers = async (count: number) => {
    try {
        const results = await axiosInstance.get("other-upcoming-trailers");

        return results.data;
    } catch (error) {
        throw error;
    }
}