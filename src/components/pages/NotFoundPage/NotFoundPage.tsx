import { Container, Heading, StyledLink, Image } from "./NotFoundPage.style";
import imageSrc from "../../../assets/Big_Bite__1_-removebg-preview.png";

const NotFoundPage = () => {
  return (
    <Container>
      <Heading>404: Page Not Found</Heading>
      <Image src={imageSrc} alt="foodfly with text" />
      <div>
        <StyledLink to="/">Go Home</StyledLink>
      </div>
    </Container>
  );
};

export default NotFoundPage;
