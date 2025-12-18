import { SeoTags } from "@/components/seo/seo-tags";
import { getReviewById } from "@/lib/data/reviews";

type HeadProps = {
  params: { id: string };
};

export default function Head({ params }: HeadProps) {
  const review = getReviewById(params.id);
  if (!review) {
    return (
      <SeoTags
        title="Review not found – Rosey Reviews"
        description="The review you are looking for may have been removed."
        path={`/reviews/${params.id}`}
      />
    );
  }

  return (
    <SeoTags
      title={`${review.title} – Rosey review`}
      description={`${review.name} (${review.meta}) rated Rosey ${review.rating}/5. Read their full review.`}
      path={`/reviews/${review.id}`}
    />
  );
}
