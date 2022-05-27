import React from 'react';
import styled from 'styled-components';
import {Sort, ItemsList, Filters} from '../components';


const Collection = () => {
  return (
    <main >
    <Wrapper className='page'>
        <div className='section-center items'>
          <Filters />
          <div >
            <Sort />
            <ItemsList />
          </div>
        </div>
    </Wrapper>
   </main> 
  )
}

const Wrapper = styled.div`
  background: #f2f2f2;
  .page {
     min-height: 100vh;
   }
   .section-center {
     width: 90vw;
     margin: 0 auto;
     max-width: 1170px;
   }
   .items {
     display: grid;
     gap: 3rem 1.5rem;
     margin: 0 auto;
     padding-top: 100px;
   }
   
   @media (min-width: 768px){
     .items {
       grid-template-columns: 200px 1fr;
     }
   }
`

export default Collection