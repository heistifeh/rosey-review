import { ReviewsClient } from "@/components/pages/reviews/reviews-client";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import { getReviews } from "@/lib/sanity/reviews";

export const revalidate = 60;

export default async function ReviewsPage() {
  const reviews = await getReviews();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} reviews`,
    itemListElement: reviews.map((review, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/reviews/${review.slug}`),
      name: review.title,
      item: {
        "@type": "Review",
        datePublished: review.createdAt,
        reviewBody: review.body,
        author: {
          "@type": "Person",
          name: review.name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1,
        },
      },
    })),
  };

  return <ReviewsClient initialReviews={reviews} structuredData={JSON.stringify(structuredData)} />;
}
