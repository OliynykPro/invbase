import axios from 'axios';
import { tokenConfig } from './auth';

import { GET_INVESTORS, GET_INVESTOR_ID, GET_INTERACTION_STATUSES, GET_INVESTOR_TYPES, ADD_INVESTOR } from './types';

//GET INVESTORS
export const getInvestors = () => (dispatch, getState) => {
    axios.get('/api/investors/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_INVESTORS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

//GET CURRENT INVESTOR
export const getCurrentInvestor = (id) => (dispatch, getState) => {
    axios.get(`/api/investors/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_INVESTOR_ID,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

//GET INTERACTION STATUSES
export const getInteractionStatuses = () => dispatch => {
    axios.get('/api/interactionstatus/')
        .then(res => {
            dispatch({
                type: GET_INTERACTION_STATUSES,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

//GET TYPES OF INVESTOR
export const getTypesOfInvestor = () => dispatch => {
    axios.get('/api/typeofinvestor/')
        .then(res => {
            dispatch({
                type: GET_INVESTOR_TYPES,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

//ADD INVESTOR
export const addInvestor = (investor, history) => (dispatch, getState) => {
    axios.post('/api/investors/', investor, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_INVESTOR,
                payload: res.data
            });
            history.push(`/investors/${res.data.id}`);
        })
        // .finally(() => {
        //     console.log('history', history);
        // })
        .catch(err => console.log(err));
}