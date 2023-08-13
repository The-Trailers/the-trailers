import FeaturedTrailer from "@/components/featured-trailer/featured-trailer.component";
import TrailersSection from "@/components/trailers-section";
import * as appService from "@/services/app.service";

export default async function Home() {
  const featuredSection = await appService.getFeaturedSection();
  const sections = await appService.getSections();

  return (
    <>
      <FeaturedTrailer className="mb-24" trailerData={featuredSection.trailers} />

      <div className="container pb-24 flex flex-col gap-24">
        {
          sections.map((section, idx) => <TrailersSection key={idx} className="mb-20" section={section} />)
        }
      </div>
    </>
  )
}
