import styled from "styled-components";

export const HeroWrapper = styled.div`
  background-color: var(--color-yellow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 6rem;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
`;

export const WrapperInfo = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    order: 2;
  }
`;

export const HeroTitle = styled.h1`
  color: var(--color-green);
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  line-height: 117px;
  font-size: 90px;

  @media (max-width: 768px) {
    font-size: 60px;
    line-height: normal;
  }
`;

export const Description = styled.p`
  margin: 2rem 0;
  color: var(--color-white);
`;

export const WrapperImg = styled.div`
  flex: 1;
  text-align: right;
  padding-top: 80px;
  border-radius: 30px;
  img {
    width: 30vw;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  @media (max-width: 768px) {
    text-align: center;
    img {
      width: 80%;
      margin-bottom: 50px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;
