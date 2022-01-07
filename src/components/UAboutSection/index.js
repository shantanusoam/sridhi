import React from "react";
import {
  AboutContainer,
  SpaceForTire,
  AboutTireHolder,
  ImageTire,
  ATHSectionInfo,
  SIHeading,
  SIPara,
  SIButton,
  ATHSectionInfo2,
} from "./UAboutSectionElement";
import ReactSwipe from "react-swipe";
import AboutTire1 from "../../images/Aboutpara1.png";
import AboutTire2 from "../../images/Aboutpara1.png";
const UAboutSection = ({ isOpen, toggle }) => {
  return (
    <AboutContainer id="About">
      <AboutTireHolder>
        <img src={AboutTire1} alt="" width={"235px"} />
        <ATHSectionInfo>
          <SIHeading>Paramilitery</SIHeading>
          <SIPara>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </SIPara>
          <SIButton>See More</SIButton>
        </ATHSectionInfo>
      </AboutTireHolder>
      <AboutTireHolder>
        <img src={AboutTire2} alt="" width={"235px"} />

        <ATHSectionInfo>
          <SIHeading>Paramilitery</SIHeading>
          <SIPara>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </SIPara>
          <SIButton>See More</SIButton>
        </ATHSectionInfo>
      </AboutTireHolder>
    </AboutContainer>
  );
};
// "https://www.figma.com/file/eDRoHE8tIwtHrTyNCnL5F0/KAL-TIRES",

export default UAboutSection;
