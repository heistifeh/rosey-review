export const siteConfig = {
  name: "Rosey Reviews",
  url: "https://rosey.review",
  description: "Calm, trustworthy reviews sourced directly from Rosey.link visitors.",
  twitter: "@roseyreviews",
};

export function absoluteUrl(path = "/") {
  if (!path.startsWith("http")) {
    return new URL(path, siteConfig.url).toString();
  }
  return path;
}
