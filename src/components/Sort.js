import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../contexts/filter_context';


const Sort = () => {

  const {
    sort,
    updateSort
  } = useFilterContext()


  return (
     <Wrapper>
      <div>
        <h5>Babymetal Collection</h5>
      </div>
        <span></span>
      <hr />
      <form>
        <label htmlFor="sort">Sort</label>
          <select name="sort" id="sort" value={sort} className="sort-input" onChange={updateSort}>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  @media (max-width: 576px){
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
  }
  
  @media (min-width: 768px){
    column-gap: 2rem;
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }

  label {
      display: inline-block;
      margin-right: .5rem;
    }
`
export default Sort