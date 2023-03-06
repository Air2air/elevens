import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
export default function HelmetMetaData(props) {
  const location = useLocation();
  const currentUrl = "https://www.elevens.ai" + location.pathname;
  const quote =
    props.quote !== undefined
      ? props.quote
      : "Faster liquidity for Health AI ventures";
  const title = props.title !== undefined ? props.title : "Elevens.ai";
  const image =
    props.image !== undefined
      ? props.image
      : "https://www.elevens.ai/images/social/social.webp";
  const description =
    props.description !== undefined
      ? props.description
      : "Reduce your timeline and slash dilution, risk and time to liquidity.  We cut your timeline to liquidity with world class technical and business experts.  Reducing risk, dilution and time, getting you to the goal line for a fraction of the cost.";
  const hashtag = props.hashtag !== undefined ? props.hashtag : "#elevensai";
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="csrf_token" content="" />
      <meta property="type" content="website" />
      <meta property="url" content={currentUrl} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
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
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="_token" content="" />
      <meta name="robots" content="noodp" />
      <meta property="title" content={title} />
      <meta property="quote" content={quote} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:quote" content={quote} />
      <meta property="og:hashtag" content={hashtag} />
      <meta property="og:image" content={image} />
      <meta content="image/*" property="og:image:type" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Elevens.ai" />
      <meta property="og:description" content={description} />{" "}
    </Helmet>
  );
}
