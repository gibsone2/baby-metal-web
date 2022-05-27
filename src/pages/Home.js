import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import logo from '../assets/kisspng-min.png';
import banner from '../assets/banner.jpg'

const Home = () => {
  return (
    <Wrapper>
       <div className="background-container" style={{backgroundImage: `url(${banner})`}}>
            <div className='enter-site'>
              <img className='enter-img'  src={logo} alt="baby metal logo" />
              <Link className='enter-link' to="/collection"> Enter</Link>
            </div>
        </div>  
    </Wrapper>
  )
}

const Wrapper = styled.div`
      position: relative;
  .background-container {
      background-image: url('../assets/banner.jpg');
      height: 100vh;
      width: 100%;
      background-position: center;
      background-size: cover;
  }

  .enter-site {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .enter-img {
    width: 200px;
  }
  .enter-link {
    font-size: 2rem;
    color: #ccc;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: -1em;
  }

  @media (min-width: 1000px){
    .enter-img {
      width: 300px;
    }
  }
`
export default Home