import React from "react";
import { SticNav, NavLink, Bars, NavMenu } from "./StickbarElements";

const Stickbar = () => {
  return (
    <>
      <SticNav>
        <NavMenu>
          <NavLink to="/" activeStyle></NavLink>

          <NavLink to="/" activeStyle>
            Uttarpardesh
          </NavLink>
          <NavLink to="/" activeStyle>
            Haryana
          </NavLink>
          <NavLink to="/" activeStyle>
            Delhi
          </NavLink>
          <NavLink to="/" activeStyle>
            Uttrakhand
          </NavLink>
          {/* <NavLink to='/' activeStyle>
          Georgia
          </NavLink>
          <NavLink to='/' activeStyle>
          New Jersey
          </NavLink>
          <NavLink to='/' activeStyle>
          Canada
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </SticNav>
    </>
  );
};

export default Stickbar;
