import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { getReviews } from "@/lib/sanity/reviews";

const STATIC_ROUTES = ["/", "/reviews", "/contact", "/about", "/review-policy", "/terms"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
  }));

  const reviews = await getReviews();
  const reviewEntries = reviews.map((review) => ({
    url: absoluteUrl(`/reviews/${review.slug}`),
    lastModified: new Date(review.createdAt),
  }));

  return [...staticEntries, ...reviewEntries];
}
