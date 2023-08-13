export type FeaturedTrailerDto = {
    _id: string;
    title: string;
    authors: string[];
    trailerURL: string;
    thumbnailURL: string;
    movieSource: MovieSourceDto
}

export type FeaturedSectionDto = {
    _id: string;
    title: string;
    trailers: FeaturedTrailerDto[],
    isFeatured: boolean,
    createdAt: Date,
    updatedAt: Date
}

export type MovieSourceDto = {
    source: {
        _id: string;
        name: string;
    };
    sourceURL: string;
}

export type SectionTrailerDto = {
    movieSource: MovieSourceDto;
    _id: string;
    title: string;
    posterURL: string;
    releaseDatetime: string;
}

export type SectionDto = {
    _id: string;
    title: string;
    iconURL?:string;
    trailers: SectionTrailerDto[],
    createdAt: string;
    updatedAt: string;
}

export type HypeDto = {
    hype: {
        _id: string;
        name?: string,
        iconURL: string;
        scoreType: string;
    };
    score: number;
    _id: string;
}

export type GenreDto = {
    _id: string;
    name: string;
}

export type CastDto = {
    _id: string;
    name: string;
    avatarURL: string;
}

export type TrailerDetailsDto = {
    movieSource: MovieSourceDto;
    _id: string;
    title: string;
    authors: string[];
    description: string;
    casts: CastDto[];
    genres: GenreDto[];
    trailerURL: string;
    thumbnailURL: string;
    posterURL: string;
    releaseDatetime: string;
    budget: number;
    duration: number;
    pgRating: string;
    hypes: HypeDto[];
    createdAt: string;
    updatedAt: string;
}