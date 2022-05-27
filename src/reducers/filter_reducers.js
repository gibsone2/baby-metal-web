import {
    LOAD_ITEMS,
    UPDATE_SORT,
    SORT_ITEMS,
    UPDATE_FILTERS,
    FILTER_ITEMS
} from '../actions'

const filter_reducer = (state, action) => {

    if(action.type === LOAD_ITEMS){
        return {
            ...state,
            all_items: [...action.payload],
            filtered_items: [...action.payload],
            filters: {...state.filters}
        }
    }

    // SORT - step 1
    if(action.type === UPDATE_SORT){
        return {...state, sort: action.payload}
    }

    // SORT - step 2
    if(action.type === SORT_ITEMS){
        const {sort, filtered_items} = state
        let tempItems = [...filtered_items]

        if(sort === 'ascending'){
            tempItems = tempItems.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
        }

        if(sort === 'descending'){
            tempItems = tempItems.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })
        }

        return {
            ...state, filtered_items: tempItems
        }
    }

    // FILTERS - UPDATE
    if(action.type === UPDATE_FILTERS){
        const {name, value} = action.payload
        return {
            ...state,
            filters: {...state.filters, [name]: value}
        }
    }

    // FILTERS - ITEMS
    if(action.type === FILTER_ITEMS){
        const {all_items} = state
        const {tour, group} = state.filters 
        let tempItems = [...all_items]

        if(group !== 'all'){
            tempItems = tempItems.filter(item => item.group === group)
        }
        if(tour !== 'all'){
            tempItems = tempItems.filter(item => item.tour === tour)
        }

        return {...state, filtered_items: tempItems}
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer