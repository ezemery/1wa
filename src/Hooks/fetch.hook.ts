import {useReducer, ReducerAction} from 'react';
import {getFriends} from "../services";
import {FetchState, Data} from '../Context/states/fetch'

interface actionInterface {
    data?:Data[],
    type:string
}


const initialState:FetchState = {
    data: [],
    isLoading: false,
    error: false,
};


function fetchReducer(state:FetchState = initialState, action:any) {
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

export const useFetch = () => {
    const [s, setState] = useReducer(fetchReducer, initialState);

    const fetchDataAsync = async () => {
        setState({type: 'loadingStart'})
        try {
            const data = await getFriends();
            setState({type: 'success', data})
            setState({type: 'loadingComplete'})
        } catch (error) {
            setState({type: 'error'})
            setState({type: 'loadingComplete'})
        }
    };


    return {
        ...s,
        fetchDataAsync
    };
}