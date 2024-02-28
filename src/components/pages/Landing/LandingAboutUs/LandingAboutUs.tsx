import {
  ContentAboutUs,
  ParagraphAboutUs,
  SubTitleAboutUs,
  TitleAboutUs,
  WrapperAboutUs,
  WrapperContent,
} from "./LandingAboutUs.style";

export const LandingAboutUs = () => {
  return (
    <WrapperAboutUs id="about-us">
      <TitleAboutUs>Welcome to foodFly</TitleAboutUs>
      <ContentAboutUs>
        <WrapperContent>
          <SubTitleAboutUs>Our Mission</SubTitleAboutUs>
          <ParagraphAboutUs>
            Our mission is to provide you with the best of culinary experiences,
            no matter where you are. We want to make your dining experience
            convenient, enjoyable, and hassle-free.
          </ParagraphAboutUs>
        </WrapperContent>

        <WrapperContent>
          <SubTitleAboutUs>How It Works</SubTitleAboutUs>
          <ParagraphAboutUs>
            FoodFly utilizes innovative technologies to determine your location
            and provide you with a list of nearby restaurants. Then simply add
            your desired items to the cart and complete the order.
          </ParagraphAboutUs>
        </WrapperContent>
      </ContentAboutUs>

      <ParagraphAboutUs>
        Thank you for choosing FoodFly for your culinary delight!
      </ParagraphAboutUs>
    </WrapperAboutUs>
  );
};
