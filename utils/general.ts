export function getOGTags(data: {
  site_url: string;

  title: string;
  description: string;

  width: string;
  height: string;
  image_type: string;
  image_url: string;
}) {
  const alt = "og header";

  return {
    // Open Graph
    "og:type": "website",
    "og:url": data.site_url,

    "og:title": data.title,
    "og:description": data.description,

    "og:image:width": data.width,
    "og:image:height": data.height,
    "og:image:type": data.image_type,
    "og:image:alt": alt,

    "og:image": data.image_url,
    "og:image:secure_url": data.image_url,

    // Twitter
    "twitter:card": "summary_large_image",

    "twitter:image:alt": alt,

    "twitter:image": data.image_url,
  };
}
