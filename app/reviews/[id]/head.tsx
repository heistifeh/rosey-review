import { SeoTags } from "@/components/seo/seo-tags";
import { getReviewBySlug } from "@/lib/sanity/reviews";

type HeadProps = {
  params: { id: string } | Promise<{ id: string }>;
};

export default async function Head({ params }: HeadProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  if (!id) {
    return (
      <SeoTags
        title="Review not found – Rosey Reviews"
        description="The review you are looking for may have been removed."
        path="/reviews"
      />
    );
  }

  const review = await getReviewBySlug(id);
  if (!review) {
    return (
      <SeoTags
        title="Review not found – Rosey Reviews"
        description="The review you are looking for may have been removed."
        path={`/reviews/${id}`}
      />
    );
  }

  return (
    <SeoTags
      title={`${review.title} – Rosey review`}
      description={`${review.name}${review.meta ? ` (${review.meta})` : ""} rated Rosey ${review.rating}/5. Read their full review.`}
      path={`/reviews/${review.slug}`}
    />
  );
}
