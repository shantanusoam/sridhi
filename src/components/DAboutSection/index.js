import React from "react";
import {
  AboutContainer,
  AboutContainerImageContent2,
  SpaceTruck,
  AboutContainerContent,
  AboutContainerTextContent,
  AboutContainerHeading,
  AboutContainerSubHeading,
  AboutContainerPara,
  AboutContainerButton,
  AboutContainerImageContent,
  AboutContainerImage,
} from "./DAboutSectionElement";
import TiresWareHouse from "../../images/warehouse.png";
const DAboutSection = ({ isOpen, toggle }) => {
  return (
    <AboutContainer id="About">
      <AboutContainerContent>
        <AboutContainerTextContent>
          <AboutContainerHeading>SRIDHI</AboutContainerHeading>
          <AboutContainerSubHeading>Who we are</AboutContainerSubHeading>
          <AboutContainerPara>
            SRIDHI has 9 distribution centers, 4 service centers and nationwide
            24/7 emergency road service. Exclusive with major tire manufactures
            such as Goodyear, Cooper, BKT, Michelin, Yokohama, Double Coin,
            Pirelli and Hankook. We offer national account billing for Goodyear,
            Cooper, Michelin, Yokohama and Hankook products.
          </AboutContainerPara>
          {/* <AboutContainerButton>See more</AboutContainerButton> */}
        </AboutContainerTextContent>
        <AboutContainerImageContent>
          <img src={TiresWareHouse} alt="" />
        </AboutContainerImageContent>
      </AboutContainerContent>
      {/* <AboutContainerImageContent2>
          <img src={bgimage} alt="" height="460px"/>
            </AboutContainerImageContent2> */}
    </AboutContainer>
  );
};

export default DAboutSection;
