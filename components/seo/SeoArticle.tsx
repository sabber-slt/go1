import React from "react";
import Head from "next/head";
interface SeoProps {
  title: string;
  description: string;
  image: string; // URL of the image for Twitter card
  url: string;
  $createdAt: string;
}
const SeoArticle: React.FC<SeoProps> = ({
  title,
  description,
  image,
  url,
  $createdAt,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Sabber" />

      <meta property="article:published_time" content={$createdAt} />
      <meta property="article:modified_time" content={$createdAt} />
      <link rel="canonical" href={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@sabber_dev" />
    </Head>
  );
};

export default SeoArticle;
