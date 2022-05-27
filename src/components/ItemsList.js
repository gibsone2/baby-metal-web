import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../contexts/filter_context'
import Item from './Item'

const ItemsList = () => {
  const {filtered_items: items} = useFilterContext()

  if(!items.length){
    return ( 
        <div style={{ minHeight: '100vh'}}>
          <h5>Oh man!  No Babymetal items in your search.</h5> 
        </div>)
  }
  return (
    <Wrapper>
      <div className="products-container">
        {items.map((item) => {
          return <Item key={item.id} {...item}/>
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    // forbackground image
    min-height: 100vh;

    img {
        height: 175px;
    }
    /* mobile  */
    .products-container {
     display: grid;
     gap: 2rem 1.5rem;
   }

   @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

`
export default ItemsList