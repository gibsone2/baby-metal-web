import {
    GET_ITEMS_BEGIN,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_ERROR,
    GET_SINGLE_ITEM_BEGIN,
    GET_SINGLE_ITEM_SUCCESS,
    GET_SINGLE_ITEM_ERROR
} from '../actions'

const items_reducer = (state, action) => {
    
    // GET ITEMS
    if(action.type === GET_ITEMS_BEGIN){
        return {
            ...state,
            items_loading: true
        }
    }
    if(action.type === GET_ITEMS_SUCCESS){
        return {
            ...state, 
            items_loading: false,
            items: action.payload
        }
    }
    if(action.type === GET_ITEMS_ERROR){
        return {
            ...state,
            items_error: true,
            items_loading: false
        }
    }

    // GET SINGLE ITEM
    if(action.type === GET_SINGLE_ITEM_BEGIN){
        return {
            ...state,
            single_item_loading: true,
            single_item_error: false
        }
    }
    if(action.type === GET_SINGLE_ITEM_SUCCESS){
        return {
            ...state,
            single_item_loading: false,
            single_item: action.payload
        }
    }
    if(action.type === GET_SINGLE_ITEM_ERROR){
        return {
            ...state,
            single_item_loading: false,
            single_item_error: true
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default items_reducer