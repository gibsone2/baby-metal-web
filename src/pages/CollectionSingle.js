import {
  Loading,
  Error,
  ItemImages,
  Condition,
  Difficulty
} from '../components'

import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useItemsContext } from '../contexts/collection_context';
const url = "https://baby-metal-api.netlify.app/api/single-product?id=";


const CollectionSingle = () => {
  const {id} = useParams()

  const {
    single_item_loading: loading,
    single_item_error: error,
    single_item: item,
    fetchSingleItem
  } = useItemsContext()

 

  useEffect(() => {
    fetchSingleItem(`${url}${id}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if(loading){
    return (
      <div className="section section-center">
        <Loading />
      </div>
    ) 
  }
  if(error){

    return  ( 
      <div className="section section-center">
        <Error /> 
      </div>
    )
  }

  const {hard_to_find: find, description, images, condition, tour, name} = item

  return (
    <Wrapper>
      <div className='section section-center'>
        <Link to='/collection' className='btn'>back to the metal</Link>
        <div className="product-center">
          <ItemImages images={images}/>
          <section className="content">
            <h2>{name}</h2>
            <p className='desc'>{description}</p>
            <p>Tour: {tour}</p>
            <Condition condition={condition} />
            <Difficulty find={find} />
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`

.condition {
  display: inline-block;
}
.product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`
export default CollectionSingle