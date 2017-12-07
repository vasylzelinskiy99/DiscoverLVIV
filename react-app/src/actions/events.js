import React, {PropTypes} from 'react';
import axios from 'axios'

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const FETCH_EVENTS_ERROR = "FETCH_EVENTS_ERROR"
var apiData = window.localStorage.getItem("apiData")

var uniq = new Set(JSON.parse(apiData).data.events.map(e => JSON.stringify(e)));

var events = Array.from(uniq).map(e => JSON.parse(e));

export function fetchEvents() {
   return function (dispatch) {
    dispatch({type: FETCH_EVENTS})
    if (apiData != null) {
      axios.get('http://localhost:3001/events?lat=49.839683&lng=24.029717&distance=5000&sort=time&accessToken=194370554467183|qb0BhT3-pFuCRHDxDRbebnbGlpY')
        .then((response) => {
          const uniq = new Set(response.data.events.map(e => JSON.stringify(e)));
          const uniq_response = Array.from(uniq).map(e => JSON.parse(e));
          window.localStorage.removeItem('apiData')
          window.localStorage.setItem('apiData',JSON.stringify(uniq_response))
          return dispatch(receiveEvents(uniq_response))
        })
      return dispatch(receiveEvents(events))
    }
    else{
    return axios.get('http://localhost:3001/events?lat=49.839683&lng=24.029717&distance=5000&sort=time&accessToken=194370554467183|qb0BhT3-pFuCRHDxDRbebnbGlpY')
      .then((response) => {
        dispatch(receiveEvents(response))
        const uniq = new Set(response.data.events.map(e => JSON.stringify(e)));
        const uniq_response = Array.from(uniq).map(e => JSON.parse(e));
        window.localStorage.setItem('apiData',JSON.stringify(uniq_response))
      })
      .catch((err) => {
      dispatch({type: FETCH_EVENTS_ERROR, payload: err})
      })
    }
   }
}


export function receiveEvents(response) {
    return {
        type: RECEIVE_EVENTS,
        payload: {
            events: response.slice(1,50)
        }
    };
}
