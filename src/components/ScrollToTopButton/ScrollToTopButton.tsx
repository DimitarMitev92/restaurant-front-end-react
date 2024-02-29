import { Link, animateScroll as scroll } from "react-scroll";
import { ScrollButton } from "./ScrollToTopButton.style";

export const ScrollToTopButton = ({ target, text }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Link
      activeClass="active"
      to={target}
      spy={true}
      smooth={true}
      offset={-300}
      duration={500}
      delay={0}
    >
      <ScrollButton onClick={scrollToTop}>{text}</ScrollButton>
    </Link>
  );
};
