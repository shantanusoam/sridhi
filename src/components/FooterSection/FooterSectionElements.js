import { FaBars } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #ededed6b;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 50vh;
`;
export const footerMobileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;
export const FooterLogo = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const FotterNav = styled.div`
  display: flex;
  padding: 25px;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex: 0 0 100px;
    padding: 0;
    flex-direction: column;
    width: 100%;
  }
`;
export const FotterNavH = styled.div`
  z-index: 2;
  font-family: monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 42px;
  padding: 20px;
  padding-right: 50px;
  padding-left: 50px;
  color: #cb1919;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const FotterContact = styled.div`
  display: flex;
  width: 35rem;
  padding: 0px 70px 0px 70px;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex: 0 0 200px;
    padding: 0;
    margin: 0;
    flex-direction: column;
    width: 100%;
  }
`;
export const FotterContactlist = styled.div`
  padding: 10px;
  padding-right: 80px;
  padding-left: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FotterContactName = styled.div`
  padding: 20px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
  font-family: monospace;
  font-weight: bold;

  font-size: 20px;
  line-height: 42px;

  color: #cb1919;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const FotterContactNo = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  z-index: 10;
  width: 90%;
  font-family: monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  padding: 20px 0px 0px 0px;
  color: #cb1919;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

export const FotterContactN = styled.div`
  z-index: 10;
  font-family: monospace;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 12px;
  padding: 60px 0px 0px 0px;
  color: #cb1919;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
`;
export const FotterSocialMedia = styled.div`
  display: flex;
  padding: 40px;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const SocialMediaActions = styled.div`
  display: flex;

  padding-right: 20px;

  /* padding: 0px 20px 0px 20px; */
  right: 0;
  top: 0;

  font-size: 3rem;
  cursor: pointer;
  color: #010101;
  &.active {
    color: #ed1d25;
  }
  &:hover {
    color: #ed1d25;
  }
`;
