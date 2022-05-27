import React, {useEffect, useReducer, useContext, createContext} from 'react';
import axios from 'axios';
import reducer from '../reducers/collection_reducers'

import {
    GET_ITEMS_BEGIN,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_ERROR,
    GET_SINGLE_ITEM_BEGIN,
    GET_SINGLE_ITEM_SUCCESS,
    GET_SINGLE_ITEM_ERROR
} from '../actions';


const initialState = {
    items_loading: false,
    items_error: false,
    items: [],
    single_item_loading: false,
    single_item_error: false,
    single_item: {}
}

const ItemsContext = createContext();
const url = 'https://baby-metal-api.netlify.app/api/products';

export const ItemsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // GET ALL ITEMS
    const fetchItems = async() => {
        dispatch({type: GET_ITEMS_BEGIN})
        try {
            const response = await axios.get(url)
            const items = response.data 
            dispatch({ type: GET_ITEMS_SUCCESS, payload: items})
        } catch (error) {
            dispatch({type: GET_ITEMS_ERROR})
        }
    }

    // GET SINGLE ITEM
    const fetchSingleItem = async(url) => {
        dispatch({type: GET_SINGLE_ITEM_BEGIN})
        try {
            const response = await axios.get(url)
            const singleItem = response.data 
            dispatch({type: GET_SINGLE_ITEM_SUCCESS, payload: singleItem})
        } catch (error) {
            dispatch({type: GET_SINGLE_ITEM_ERROR})
        }
    }

    useEffect(() => {
        fetchItems(url)
    },[])

    return (
        <ItemsContext.Provider value={{
            ...state,
            fetchSingleItem
        }}>
            {children}
        </ItemsContext.Provider>
    )
}

export const useItemsContext = () => {
    return useContext(ItemsContext)
}