import BannerVideo from "components/Banner/bannerVideo";
import ContactList from "components/Contact/contact";
import Heading from "components/Heading/heading";
import Metatags from "components/Helmet/metatags";

const pageData = "/data/contactPage.json";

const ContactPage = () => {
  return (
    <>
      <Metatags jsonFile={pageData} />
      <BannerVideo
        pageVideo={769227014}
        overlayOpacity={0.1}
        overlayColor={1}
      />
      <Heading  jsonFile={pageData}/>
      <ContactList  jsonFile={pageData} />
    </>
  );
};

export default ContactPage;
