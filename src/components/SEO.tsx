import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
  canonical?: string;
}

export const SEO = ({ title, description, image, type = "website", jsonLd, canonical }: SEOProps) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    <meta property="og:type" content={type} />
    {image && <meta property="og:image" content={image} />}
    {canonical && <link rel="canonical" href={canonical} />}
    {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
  </Helmet>
);
