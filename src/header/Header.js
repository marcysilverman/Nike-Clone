import React from 'react';
import jordan from '../../assets/images/jordan.png';
import hurley from '../../assets/images/hurley.png';
import converse from '../../assets/images/converse.png';
import styles from 'styled-components';
import {FaShoppingCart} from 'react-icons/fa';
import 'normalize.css';

const TopMenu = styles.div`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  position: relative;
  top: 0;
  z-index: 999;
  height: 39px;
  line-height: 39px;
  border-bottom: 1px solid #E5E5E5;
  background: white;
  color: #8D8D8D;
`;

const NavMenuLeft = styles.ul`
  padding-left: 0;
  margin-top: 0
  left: 0
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  li {
    border-right: 1px solid #E5E5E5;
  }
  span {
    display: inline-block;
    padding: 0 32px;
    font-size: 12px;
  }
`;

const NavMenuRightLi = styles.li`
  padding: 0 11px;
  border-bottom: 2px solid transparent;
  font-size: 12px;
`;
const NavMenuRight = styles.ul`
  margin-top -3.5em;
  display: table
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  li {
    border-right: 1px solid #E5E5E5;
  }
  span {
    display: inline-block;
    padding: 0 32px;
    font-size: 12px;
  }
`;
const Logos = styles.img`
  width: 1rem;
  height: 1rem;
`;

const SpecialLogos = styles.img`  
  width: 3rem;
  height: 1rem;
`;


export default function Header() {
  return (
    <header>
    <TopMenu>
    <NavMenuLeft>
        <li><span>NikePlus</span></li>
        <li><span><Logos src={jordan} /></span></li>
        <li><span><SpecialLogos src={hurley}/></span></li>
        <li><span><SpecialLogos src={converse}/></span></li>
    </NavMenuLeft>
    <NavMenuRight>
      <NavMenuRightLi>Join/Log In To NikePlus Account</NavMenuRightLi>
      <NavMenuRightLi>help</NavMenuRightLi>
      <NavMenuRightLi><FaShoppingCart/></NavMenuRightLi>
      <NavMenuRightLi>🇺🇸</NavMenuRightLi>
    </NavMenuRight>
    </TopMenu>
   </header>
  );
}