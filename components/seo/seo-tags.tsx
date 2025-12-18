import { absoluteUrl, siteConfig } from "@/lib/seo";

type SeoTagsProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function SeoTags({ title, description, path = "/", image = "/favicon.ico" }: SeoTagsProps) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={siteConfig.twitter} />
    </>
  );
}
