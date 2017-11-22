import React, {PropTypes} from 'react';
import axios from 'axios'
import _ from 'lodash'
import uniq from 'lodash'

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const FETCH_EVENTS_ERROR = "FETCH_EVENTS_ERROR"
var apiData = window.localStorage.getItem("apiData")


export function fetchEvents(filter) {
   return function (dispatch) {
    dispatch({type: FETCH_EVENTS})
    if (apiData != null) {
      axios.get('http://localhost:3001/events?lat=49.839683&lng=24.029717&distance=5000&sort=time&'+filter+'accessToken=194370554467183|qb0BhT3-pFuCRHDxDRbebnbGlpY')
        .then((response) => {
          window.localStorage.removeItem('apiData')
          window.localStorage.setItem('apiData',JSON.stringify(response))
          return dispatch(receiveEvents(response))
        })
      return dispatch(receiveEvents(JSON.parse(apiData)))
    }
    else{
    return axios.get('http://localhost:3001/events?lat=49.839683&lng=24.029717&distance=5000&sort=time&'+filter+'accessToken=194370554467183|qb0BhT3-pFuCRHDxDRbebnbGlpY')
      .then((response) => {
        dispatch(receiveEvents(response))
        window.localStorage.setItem('apiData',JSON.stringify(response))
      })
      .catch((err) => {
      dispatch({type: FETCH_EVENTS_ERROR, payload: err})
      })
    }
   }
}


export function receiveEvents(response) {
  var events = response.data.events
    return {
        type: RECEIVE_EVENTS,
        payload: {
            events: _.uniq(events).slice(1,10)
        }
    };
}
