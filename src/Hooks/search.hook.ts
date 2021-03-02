import {searchFriends} from "../services";
import {useReducer } from 'react';
import {FetchInterface} from '../Context/states/fetch'

const initialState:FetchInterface = {
    data:[],
    isLoading: false,
    error: false,
};

function photosReducer(state:FetchInterface = initialState, action:any) {
    switch (action.type) {
        case 'success':
            return {...state, data: action.data}
        case 'loadingComplete':
            return {...state, isLoading:false}
        case 'loadingStart':
            return {...state, isLoading:true}
        case 'error':
            return {...state, error:true}
        default:
            return state
    }
} 

export const useSearch = () => {
    const [s, setState] = useReducer(photosReducer, initialState);

    const searchDataAsync = async (search:string) => {
        setState({type: 'loadingStart'}) 
        try {
            const data = await searchFriends(search);
            setState({type: 'success', data})
            setState({type: 'loadingComplete'})
        } catch (error) {
            setState({type: 'error'})
            setState({type: 'loadingComplete'})
        }
    }

    return {
        ...s,
        searchDataAsync
    };
};