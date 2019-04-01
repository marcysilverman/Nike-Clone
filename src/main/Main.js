import React from 'react';
import pic1 from '../../assets/images/pic1.png';
import throwback1 from '../../assets/images/throwback1.png';
import throwback2 from '../../assets/images/throwback2.png';
import throwback3 from '../../assets/images/throwback3.png';
import new1 from '../../assets/images/new1.png';
import new2 from '../../assets/images/new2.png';
import new3 from '../../assets/images/new3.png';
import trending1 from '../../assets/images/trending1.png';
import trending2 from '../../assets/images/trending2.png';
import best1 from '../../assets/images/best1.png';
import best2 from '../../assets/images/best2.png';
import best3 from '../../assets/images/best3.png';
import styles from 'styled-components';

const Disclaimer = styles.h3`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  margin-top: 2em;
  letter-spacing: .05em;
  color: #8D8D8D;
  text-align: center;
`;

const MainSection = styles.main`
  margin: 0 4em;
`;
const MainPicContainer = styles.section`
  margin-top: 8em;
  height: 110vh;
  background-size: cover;
  background-image: url(${pic1});
`;

const ThrowbackSection = styles.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  list-style: none;
  padding: 0;
  grid-row-gap: 50px;
  img {
    width: 472px;
    height: 600px; 
  }
`;

const ThrowbackContainer = styles.section`
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  h1 {
    margin-top: 10rem;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 500
  }

`;

const NewContainer = styles.section`
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  h2 {
    margin-top: 10rem;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 500
  }
  ul {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 50% 50%;
  }
  li {
    .right--image {
    width: 95%;
    height: 100%;
    left: 0;
    }
    .left--top--image {
      width: 100%;
      margin-bottom: 2em;
    }
    .left--bottom-image {
      width: 100%;
    }
  }
`;
const TrendingContainer = styles.section`
    h2 {
      font-weight: 500;
    }
  margin-top: 9em;
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  ul {
    display: grid;
    grid-template-columns: 50% 50%;
    list-style: none;
    padding: 0;
    grid-row-gap: 3em;
    li {
      img {
        width: 95%;
        height: 850px;  
      }
      .trending--right {
        width: 100%;
        height: 850px;
      }
    }
  }
`;

const BestSection = styles.section`
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  h2 {
    margin-top: 10rem;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 500
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    list-style: none;
    padding: 0;
    grid-row-gap: 50px;
    }
    img {
      width: 97%;
    }
`;

const ShoppingSection = styles.section`
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    div {
      margin-top: 7em;
    }
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 0 14em;
    grid-row-gap: 3em;
    h1 {
      text-align: left;
      letter-spacing: .05em;
      font-size: 1em;
      color: black;
    }
    ul {
      padding: 0;
    }
    li {
      line-height: 3;
      list-style: none;
      letter-spacing: .05em;
      color: #8D8D8D;
    }
`;

export default function Main() {
  return (
    <>
    <MainSection>
    <MainPicContainer/>
    <Disclaimer>FOR DEMONSTRATION PURPOSES ONLY. NO COPYRIGHT INTENDED</Disclaimer>
    <ThrowbackContainer>
    <h1>Throwback Future Pack</h1>
      <ThrowbackSection>
        <li><img src={throwback1} /></li>
        <li><img src={throwback2} /></li>
        <li><img src={throwback3} /></li>
      </ThrowbackSection>
    </ThrowbackContainer>
    <NewContainer>
    <h2>New from Nike Running</h2>
    <ul>
      <li><img className="right--image" src={new1} /></li>
      <div>
      <li><img className="left--top--image" src={new2} /></li>
      <li><img className="left--bottom-image" src={new3} /></li>
      </div>
    </ul>
    </NewContainer>
    <TrendingContainer>
      <h2>Trending</h2>
      <ul>
        <li><img src={trending1} /></li>
        <li><img className="trending--right" src={trending2} /></li>
      </ul>
    </TrendingContainer>
    <BestSection>
      <h2>Shop Best Sellers</h2>
      <ul>
        <li><img src={best1} /></li>
        <li><img src={best2} /></li>
        <li><img src={best3} /></li>
      </ul>
    </BestSection>
    <ShoppingSection>
      <div>
        <h1>Icons</h1>
        <ul>
          <li>Air Force 1</li>
          <li>Air Max 97</li>
          <li>Huarache</li>
          <li>VaporMax</li>
        </ul>
      </div>
      <div>
        <h1>Shoes</h1>
        <ul>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
          <li>Sneaker</li>
          <li>Soccer Cleats</li>
        </ul>
      </div>
      <div>
        <h1>Kids'</h1>
        <ul>
          <li>Kids' Shoes</li>
          <li>Kids' Shoes</li>
          <li>Kids' Backpack</li>
          <li>Kids' Socks</li>
        </ul>
      </div>
      <div>
        <h1>Featured</h1>
        <ul>
          <li>Leggings</li>
          <li>Jordan Retro</li>
          <li>Windbreaker</li>
          <li>Tracksuits</li>
        </ul>
      </div>
    </ShoppingSection>
    </MainSection>
    </>
  );
}