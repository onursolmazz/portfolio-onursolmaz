import { Helmet } from "react-helmet-async";
import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_LOCALE,
} from "../utils/seo";

function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = SITE_URL,
  locale = DEFAULT_LOCALE,
}) {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <html lang={locale} />

      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEO;