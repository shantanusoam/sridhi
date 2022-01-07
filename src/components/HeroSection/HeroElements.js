import Styled from "styled-components";
import bgimage from "../../images/bg.png";
export const HeroContainer = Styled.div`
background: 
background: transparent;
display: flex;
justify-content: center;
align-items: center;
padding: 0px 30px;
height: 100vh;
position: relative;
z-index: 1;
`;
export const HeroBg = Styled.div`
background: transparent url(${bgimage}) no-repeat center center;
position: absolute;
z-index: 2;
top: 0;
left: 0;
bottom: 0;
right: 0;
width: 100%;
height: 100%;

overflow: hidden;

`;
// export const BgImage = Styled.div`
// width: 100%;
// height: 100%;
// background-image: url(../../images/Bg.png);
// -o-object-fit: cover;
// object-fit: cover;
// // background: #232a34;

// `
export const VideoBg = Styled.video`

width: 100%;

height: 100%;

-o-object-fit: cover;

object-fit: cover;

background: #232a34;
`;
export const HeroContent = Styled.div`


z-index: 2;
max-width: 1200px;
position: absolute;

padding: 8px 24px;

display: flex;

flex-direction: column;

align-items: center;
margin-top: -200px;



`;
export const HeroH1 = Styled.h1`

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
text-align: center;
z-index: 2;
color: #ED1C24;

@media screen and (max-width: 768px) {
    font-size: 40px;
}
@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;
export const HeroP = Styled.p`
margin-top: 24px;
font-family: monospace;
font-style: normal;
font-weight: bold;
font-size: 65px;
line-height: 76px;
text-align: center;
z-index: 2;
color: #FFFFFF;
max-width: 50rem;
@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 22px;
}
`;
export const HeroBtnWrapper = Styled.div`
margin-top: 32px;
display: flex;
z-index: 2;
flex-direction: column;
align-items: center;
`;
export const HeroPromoContainer = Styled.div`
z-index: 10;
display: flex;

margin-top: 750px;
position: relative;
z-index: 2;
flex-direction: row;
align-items: center;
@media screen and (max-width: 768px) {
    display: none;
}
`;
export const HeroPromo = Styled.div`
padding: 80px;
z-index: 2;
display:block;
`;
