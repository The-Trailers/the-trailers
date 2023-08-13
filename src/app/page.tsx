import FeaturedTrailer from "./_components/featured-trailer";
import FeaturedTrailerSection from "./_components/featured-trailers-section.component";
import TrailersSection from "./_components/trailers-section";
import * as appService from "@/services/app.service";

export default async function Home() {
  const featuredSection = await appService.getFeaturedSection();
  const sections = await appService.getSections();

  return (
    <>
      <FeaturedTrailer className="mb-24" trailerData={featuredSection.trailers}>
        <FeaturedTrailerSection trailerData={featuredSection.trailers} />
      </FeaturedTrailer>

      <div className="container pb-24 flex flex-col gap-24">
        {
          sections.map((section, idx) => <TrailersSection key={idx} className="mb-20" section={section} />)
        }
      </div>
    </>
  )
}
