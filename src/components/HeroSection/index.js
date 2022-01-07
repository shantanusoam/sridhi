import React, { useState } from "react";
import {
  HeroContainer,
  HeroH1,
  HeroP,
  HeroContent,
  HeroBg,
  HeroPromoContainer,
  HeroPromo,
} from "./HeroElements";
import Coopetire from "../../images/PNB.png";
import Michelin from "../../images/gem.png";
import GoodYear from "../../images/bikanerlogo.png";
import GKTYre from "../../images/Aboutpara1.png";
// import BKTGrowingTogether from "../../images/Promo5.png";
// import HanKook from "../../images/Promo6.png";
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="Home">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>SRIDHI</HeroH1>
        <HeroP>Because You Deserve The Best Out There</HeroP>
      </HeroContent>
      <HeroPromoContainer>
        <HeroPromo>
          <img src={Coopetire} alt="Partner Company" width={"135px"} />
        </HeroPromo>
        <HeroPromo>
          <img src={Michelin} alt="Partner Company" width={"195px"} />
        </HeroPromo>
        <HeroPromo>
          <img src={GoodYear} alt="Partner Company" width={"175px"} />
        </HeroPromo>
        <HeroPromo>
          <img src={GKTYre} alt="Partner Company" width={"105px"} />
        </HeroPromo>
        {/* <HeroPromo>
          <img src={BKTGrowingTogether} alt="Partner Company" />
        </HeroPromo>
        <HeroPromo>
          <img src={HanKook} alt="Partner Company" />
        </HeroPromo> */}
      </HeroPromoContainer>
    </HeroContainer>
  );
};

export default HeroSection;
