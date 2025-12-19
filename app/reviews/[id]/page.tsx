import { notFound } from "next/navigation";

import { ReviewDetailClient } from "@/components/pages/reviews/review-detail-client";
import { absoluteUrl } from "@/lib/seo";
import {
  getRelatedReviews,
  getReviewBySlug,
  getReviewSlugs,
} from "@/lib/sanity/reviews";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getReviewSlugs();
  return slugs.map((slug) => ({ id: slug }));
}

type ReviewDetailPageProps = {
  params: { id: string } | Promise<{ id: string }>;
};

export default async function ReviewDetailPage({ params }: ReviewDetailPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  if (!id) {
    notFound();
  }

  const review = await getReviewBySlug(id);
  if (!review) {
    notFound();
  }

  const related = await getRelatedReviews(id);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: review.title,
    reviewBody: review.body,
    author: {
      "@type": "Person",
      name: review.name,
    },
    itemReviewed: {
      "@type": "Organization",
      name: "Rosey.link",
      url: "https://rosey.link",
    },
    datePublished: review.createdAt,
    url: absoluteUrl(`/reviews/${review.slug}`),
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <ReviewDetailClient
      review={review}
      related={related}
      structuredData={JSON.stringify(structuredData)}
    />
  );
}
