import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Metatags = (props: {
  quote?: string;
  title?: string;
  image?: string;
  description?: string;
  hashtag?: string;
}) => {
  const location = useLocation();

  const currentUrl = "https://www.elevens.ai" + location.pathname;

  const quote =
    props.quote !== "" || props.quote !== undefined
      ? props.quote
      : "Faster liquidity for Health AI ventures";

  const title = props.image !== "" || props.image !== undefined ? props.title : "Elevens.ai";

  const image =
    props.image !== "" || props.image !== undefined
      ? props.image
      : "/images/social/default.webp";

  const description =
    props.description !== "" || props.description !== undefined
      ? props.description
      : "Reduce your timeline and slash dilution, risk and time to liquidity.  We cut your timeline to liquidity with world class technical and business experts.  Reducing risk, dilution and time, getting you to the goal line for a fraction of the cost.";

  const hashtag =
    props.hashtag !== "" || props.hashtag !== undefined
      ? props.hashtag
      : "#elevensai";

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="csrf_token" content="" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="_token" content="" />
      <meta name="robots" content="noodp" />

      <meta property="description" content={description} />
      <meta property="image" content={image} />
      <meta property="quote" content={quote} />
      <meta property="title" content={title} />
      <meta property="type" content="website" />
      <meta property="url" content={currentUrl} />

      <meta property="og:description" content={description} />
      <meta property="og:hashtag" content={hashtag} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:image:type" content="image/*"  />
      <meta property="og:locale" content="en_US" />
      <meta property="og:quote" content={quote} />
      <meta property="og:site_name" content="Elevens.ai" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={currentUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Elevens.ai"  />
      <meta name="twitter:title" content={title}  />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@elevens_ai" />

      <link rel="manifest" href="/icons/site.webmanifest" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico" />


    </Helmet>
  );
};

export default Metatags;
