import FeaturedTrailer from "./_components/featured-trailer";
import FeaturedTrailerSection from "./_components/featured-trailers-section.component";
import TrailerSectionsList from "./_components/trailer-sections-list.component";
import * as appService from "@/services/app.service";

export default async function Home() {
  const featuredSection = await appService.getFeaturedSection();
  const sections = await appService.getSections(0, 3);

  return (
    <>
      <FeaturedTrailer className="mb-14 md:mb-24" trailerData={featuredSection.trailers}>
        <FeaturedTrailerSection trailerData={featuredSection.trailers} />
      </FeaturedTrailer>

      <TrailerSectionsList initialSections={sections.results} initialTotal={sections.total} />
    </>
  )
}
