import setBodyColor from "../utils/setBodyColor";
import Callout from "../components/Callout/callOut";
import BannerVideo from "../components/BannerVideo/bannerVideo";
import { COLOR_BASE, COLOR_BASE_1, COLOR_BASE_2 } from "../styles/Constants";

const pageVideo = 766731362;

const WhatWeDoPage = () => {
  setBodyColor({ color: COLOR_BASE });
  return (
    <>
      <BannerVideo
        pageTitle="What we do for you"
        pageDescription="Eleven leverages a large multi-disciplinary advisory of industry-leading specialists to deliver across your healthcare AI needs"
        pageVideo={pageVideo}
        overlayOpacity={0.3}
        overlayColor={COLOR_BASE}
        typing={true}
      />
      <Callout
        calloutTitle="Product/Market fit"
        calloutText="Eleven understands your healthcare customer - from payers to providers to insurers, from academia to clinical practice, across bio to med to health to pharma. We'll enable you with:
        <ul>
        <li>Segment landscape, needs, and priorities to drive adoptio.</li>
        <li> Go-to-market, product positioning, price point for clinical machine learning and digital health solutions. </li>
        <li>Support for early adoption academic initiatives and activities including grants, publications, and collaborations.</li>
        </li>
        <li>Deep technical and clinical support for broader consumer health sector landscape (e.g., patient engagement, wearables, digital health and wellness).</li></ul>"
        backgroundColor={COLOR_BASE_1}
        buttonText=""
        buttonTo=""
      />
      <Callout
        calloutTitle="Growth and Acquisitions"
        calloutText="
        From Seed to IPO Eleven shepherds your <b>portfolio companies</b> through the challenging health vertical.  
        <ul>
        <li>Strategic investments and structuring corporate vehicles (e.g., corporate venture capital, or CVC).</li>
        <li>Growth guidance including market segment, therapeutic area or disease category from competitive, partnering or investment perspectives.</li>  <li>Multidisciplinary fundraising, positioning vision, strategy and business model for digital health and digital medicine.</li>
        <li>M &amp; A commercial due diligence including market assessment, evaluation of the competitive landscape, and analysis of the target's value proposition and post-acquisition growth strategy.</li>
        </ul>
        "
        backgroundColor={COLOR_BASE_2}
        buttonText="Markets"
        buttonTo="/markets"
      />
    </>
  );
};

export default WhatWeDoPage;
