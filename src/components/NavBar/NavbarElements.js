import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  background: rgba(150, 150, 150, 0.3);
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
 
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;

export const ImageLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
  cursor: pointer;

  img {
    height: 100%; /* Adjust the height as needed */
  }

  &.active {
    /* Add styles for the active link if necessary */
  }
`;
 
export const Bars = styled(FaBars)`
  display: none;
  color: #000000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;