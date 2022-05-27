import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ReactComponent as Babymetal} from '../assets/babymetal-01.svg'

const Item = ({id, url, name}) => {
  return (
    <Wrapper>
        <div className="container">
        <img src={url} alt={name} />
        <Link to={`/collection/${id}`} className="link">
            <Babymetal className='icon'/>
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.container {
    position: relative;
  }

  .icon {
    display: none;
  }

  img {
    /* height: 175px; */
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 0.25em;
    overflow: hidden;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(89,89,89,0.7);

    border-radius: 0.25em;
    height: 100%;
    width: 100%;
    overflow: hidden;
    opacity: 0;
  }

  .container:hover img {
    transition: all .3s ease-in-out;
    opacity: 0.5;
  }
  .container:hover .link {
    transition: all .3s ease-in-out;
    opacity: 1;
  }

  @media (min-width: 1113px){
    .icons {
      display: block;
    }
    .link {
      background: transparent;
    }
  }


`
export default Item