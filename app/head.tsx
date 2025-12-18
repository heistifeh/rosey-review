import { SeoTags } from "@/components/seo/seo-tags";
import { siteConfig } from "@/lib/seo";

export default function Head() {
  return (
    <SeoTags
      title={`${siteConfig.name} – Trusted reviews for Rosey.link`}
      description={siteConfig.description}
      path="/"
    />
  );
}
