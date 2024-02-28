import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-bottom: 100px;
`;

export const WrapperAboutUs = styled.div`
  margin: 1em auto 5em;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

export const TitleAboutUs = styled.h1`
  color: var(--color-green);
  font-size: 2em;
  margin-bottom: 20px;
`;

export const ContentAboutUs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const WrapperContent = styled.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const ParagraphAboutUs = styled.p`
  color: #555;
  font-size: 1.1em;
  line-height: 1.4;
  margin-bottom: 15px;
  text-align: center;
`;

export const SubTitleAboutUs = styled.h2`
  color: var(--color-green);
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 10px;
`;
