import { LuxuryVillaPage } from "@/components/site/luxury-villa-page";
import { villaStructuredData } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(villaStructuredData) }}
      />
      <LuxuryVillaPage />
    </>
  );
}
