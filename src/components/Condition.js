import React from 'react'
import styled from 'styled-components'
import {BsPentagonFill, BsPentagonHalf, BsPentagon} from 'react-icons/bs'


const Condition = ({condition}) => {

  const tempCondition = Array.from({length: 5}, (_, index) => {
    // gives us 0.5, 1.5, 2.5, etc..
    const number = index + 0.5
    return (
      <span key={index}>
          {condition >= index + 1 ? <BsPentagonFill /> : condition >= number ? <BsPentagonHalf/> : <BsPentagon />}
      </span>
    )
  })


  return (
    <Wrapper>
    <div>
       <span style={{color: 'black'}}>Condition rating:</span> {tempCondition}
    </div>
  </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: orange;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
  
`

export default Condition