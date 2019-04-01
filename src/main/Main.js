import React from 'react';
import pic1 from '../../assets/images/pic1.png';
import throwback1 from '../../assets/images/throwback1.png';
import throwback2 from '../../assets/images/throwback2.png';
import throwback3 from '../../assets/images/throwback3.png';
import new1 from '../../assets/images/new1.png';
import new2 from '../../assets/images/new2.png';
import new3 from '../../assets/images/new3.png';
import styles from 'styled-components';

const MainSection = styles.main`
  margin: 0 4em;
`;
const MainPicContainer = styles.section`
  margin-top: 8em;
  height: 80vh;
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

export default function Main() {
  return (
    <MainSection>
    <MainPicContainer/>
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
    </MainSection>
  );
}