import React from 'react';
import jordan from '../../assets/images/jordan.png';
import hurley from '../../assets/images/hurley.png';
import converse from '../../assets/images/converse.png';
import nike from '../../assets/images/nike.png';
import styles from 'styled-components';
import {FaShoppingCart} from 'react-icons/fa';
import 'normalize.css';

const TopMenu = styles.div`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  position: relative;
  top: 0;
  z-index: 999;
  height: 42px;
  line-height: 39px;
  border-bottom: 1px solid #E5E5E5;
  background: white;
  color: #8D8D8D;
`;
const GlobalHeader = styles.header`
  position: fixed;
  width: 100%;
  background: white;
  top: 0;
  height: 120px;
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
    padding: 0 32px;
    font-size: 12px;
  }
`;

const NavMenuRightLi = styles.li`
  padding: 0 1em;
  border-bottom: 2px solid transparent;
  font-size: .8em;
`;
const NavMenuRight = styles.ul`
  margin-top -3.7em;
  display: table
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
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

const HurleyLogo = styles.img` 
  width: 3rem;
  height: 1rem;
`;

const ConverseLogo = styles.img`
  margin-top: .5em;
  width: 3rem;
  height: 1.5rem;
`;


const NikeLogo = styles.img`
  margin-top: .5em;
  width: 4rem;
  height: 1.4rem;
`;

const MainUl = styles.ul`
  list-style: none;
`;

const MainMenuSection = styles.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: -2em 2em;
`;
const MainMenu = styles.li`
  font-size: 16px;
  list-style: none;
  line-height: 1.5;
  span {
    font-weight: bold;
    color: black;
    padding: 0 1.5em;
    :hover {
      padding-bottom: 2em;
      border-bottom: 3pt solid black;
    }
  }
`;

const Search = styles.input`
  float: right;
  margin-right: 3em;
  margin-top: .3em;
  padding: .6em;
`;

export default function Header() {
  return (
    <GlobalHeader>
    <TopMenu>
    <NavMenuLeft>
        <li><span>NikePlus</span></li>
        <li><span><Logos src={jordan} /></span></li>
        <li><span><HurleyLogo src={hurley}/></span></li>
        <li><span><ConverseLogo src={converse}/></span></li>
    </NavMenuLeft>
    <NavMenuRight>
      <NavMenuRightLi>Join/Log In To NikePlus Account</NavMenuRightLi>
      <NavMenuRightLi>Help</NavMenuRightLi>
      <NavMenuRightLi><FaShoppingCart/></NavMenuRightLi>
      <NavMenuRightLi>🇺🇸</NavMenuRightLi>
    </NavMenuRight>
    <section>
      <MainUl>
        <NikeLogo src={nike}/>
      <MainMenuSection>
        <MainMenu><span>MEN</span></MainMenu>
        <MainMenu><span>WOMEN</span></MainMenu>
        <MainMenu><span>KIDS</span></MainMenu>
        <MainMenu><span>CUSTOMIZE</span></MainMenu>
      </MainMenuSection>
      <Search type="text" placeholder="Search"></Search>
      </MainUl>
      <div>
      </div>
    </section>
    </TopMenu>
   </GlobalHeader>
  );
}