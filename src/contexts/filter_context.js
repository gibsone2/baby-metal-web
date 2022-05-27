import React, {useEffect, useReducer, useContext, createContext} from 'react'
import reducer from '../reducers/filter_reducers';
import { useItemsContext } from './collection_context';


import {
    LOAD_ITEMS,
    UPDATE_SORT,
    SORT_ITEMS,
    UPDATE_FILTERS,
    FILTER_ITEMS
} from '../actions'


const initialState = {
    filtered_items: [],
    all_items: [],
    sort: 'ascending',
    filters: {
        group: 'all',
        tour: 'all'
    }
}

const FilterContext = createContext()

export const FilterProvider = ({children}) => {

    const {items} = useItemsContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({type: LOAD_ITEMS, payload: items})
    }, [items])

    // 2nd step to sorting
    useEffect(() => {
        dispatch({type: FILTER_ITEMS})
        dispatch({type: SORT_ITEMS})
    }, [items, state.sort, state.filters])

    // 1st step to sorting
    const updateSort = (e) => {
        const value = e.target.value 
        dispatch({type: UPDATE_SORT, payload: value})
    }

    // 1st step in filters
    const updateFilters = (e) => {
        let name = e.target.name 
        let value = e.target.value 
        
        if(name === 'group'){
            value = e.target.textContent
        }
        if(name === 'tour'){
            value = e.target.value
        }
        dispatch({type: UPDATE_FILTERS, payload: {name, value}})
    }


    return (
        <FilterContext.Provider value={{
            ...state,
            updateSort,
            updateFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}