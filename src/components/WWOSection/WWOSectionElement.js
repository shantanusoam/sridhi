import { FaBars } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import WWO1 from "../../images/WWO1.png";
import WWO2 from "../../images/WWO2.png";
import WWO3 from "../../images/WWO2.png";
export const WWOContainer = styled.div`
  background: #c1c1c1;

  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: auto;
  &:active {
  }
`;
export const WWOHeding = styled.h1`
  z-index: 0;
  font-family: monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  text-align: center;

  color: #ed1c24;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const WWOSubHeding = styled.p`
  font-family: monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;

  text-align: center;
  margin-bottom: 50px;
  color: #010101;
  max-width: 20rem;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const WWOContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const WWOCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 90px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const WWOCArd = styled.div`
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.01);
  z-index: 5;
  background-color: #ffffff;

  flex-direction: column;
  align-items: center;
  transition: 0.3s all ease;
  &:hover {
    box-shadow: 2px 5px 6px 0px rgba(0, 0, 6, 0.2);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const WWOCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;
export const WWOCardimage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  img {
    height: 450px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const WWOCCHeading = styled.h2`
  z-index: 10;
  font-family: monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;

  color: #3d3d3d;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const WWOCCParagraph = styled.p`
  margin-top: 4px;
  font-family: monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  padding: 22px;
  text-align: justify;

  color: #727272;

  max-width: 60rem;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding: 1px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const WWOCCButton = styled(LinkR)`
  border-radius: 50px;
  background: #0074c9;
  padding: 10px 22px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: none;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
