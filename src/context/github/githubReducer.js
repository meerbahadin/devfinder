import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    EMPTY_USERS
} from '../Types';

export default (state , action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
            ...state , users:action.payload,
            loading:false,
            empty : false
        }
        case GET_USER:
            return {
                ...state,
                user:action.payload,
                loading:false
                }
        case GET_REPOS:
            return {
                ...state ,
                repos : action.payload,
                loading:false
            }
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case CLEAR_USERS:
            return {
                ...state ,
                users:[]
            }
        case EMPTY_USERS : 
            return {
                ...state ,
                users : [],
                loading:false,
                empty : true,
            }
        default:
           return state;
    }
}