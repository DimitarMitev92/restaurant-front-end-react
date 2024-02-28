import React from "react";
import styled from "styled-components";

const WrapperAboutUs = styled.div`
  margin: 1em auto 5em;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

const TitleAboutUs = styled.h1`
  color: var(--color-green);
  font-size: 2em;
  margin-bottom: 20px;
`;

const ContentAboutUs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
`;

const WrapperContent = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const ParagraphAboutUs = styled.p`
  color: #555;
  font-size: 1.1em;
  line-height: 1.4;
  margin-bottom: 15px;
  text-align: center;
`;

const SubTitleAboutUs = styled.h2`
  color: var(--color-green);
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const LandingAboutUs = () => {
  return (
    <WrapperAboutUs>
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
