import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../contexts/filter_context';
import {getUniqueValues} from '../utils/helpers'
import sideBanner from '../assets/bm-sidebanner.png'

const Filters = () => {

  const {
    filters: {
      group,
      tour,
    },
    updateFilters,
    all_items
  } = useFilterContext()

  const groups = getUniqueValues(all_items, 'group');
  const tours = getUniqueValues(all_items, 'tour')

  // sorts tours by year
  let preSort = tours.sort((a,b) => a - b)

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* collection groupings */}
          <div className="form-control">
          <h5>Collection Groups</h5>
          <div>
            {groups.map((item, index) => {
              return <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="group"
                  className={`${group === item ? 'active' : null}`}>
                {item}
              </button>
            })}
          </div>
        </div>

          {/* Tours */}
          <div className="form-control">
            <h5>Tours</h5>
            <select 
                  name="tour" 
                  value={tour}
                  onChange={updateFilters}
                  className="">
              {preSort.map((item, index) => {
                return <option key={index}>{item}</option>
              })}
            </select>
          </div>
        </form>
        <div className='banner'>
          <img src={sideBanner} alt="baby metal side banner" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.banner {
  display: none;
}
.form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: black;
    cursor: pointer;
  }

  .active {
    color: orangered;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
    .banner {
      display: block;
    }
  }
`
export default Filters