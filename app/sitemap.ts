import type { MetadataRoute } from "next";

import { REVIEWS } from "@/lib/data/reviews";
import { absoluteUrl } from "@/lib/seo";

const STATIC_ROUTES = ["/", "/reviews", "/contact", "/about", "/review-policy", "/terms"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
  }));

  const reviewEntries = REVIEWS.map((review) => ({
    url: absoluteUrl(`/reviews/${review.id}`),
    lastModified: new Date(review.createdAt),
  }));

  return [...staticEntries, ...reviewEntries];
}
