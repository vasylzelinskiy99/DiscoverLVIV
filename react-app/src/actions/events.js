import React, {PropTypes} from 'react';
import axios from 'axios'

export const FETCH_EVENTS = 'FETCH_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const FETCH_EVENTS_ERROR = "FETCH_EVENTS_ERROR"

var apiData = window.localStorage.getItem("apiData")

export function fetchEvents(file) {
   return function (dispatch) {
    dispatch({type: FETCH_EVENTS})
    if (apiData != null) {
          window.localStorage.removeItem('apiData')
          window.localStorage.setItem('apiData',JSON.stringify(file.data.events))
          return dispatch(receiveEvents(file.data.events))
    }
    else{
      if (file != null) {
        window.localStorage.setItem('apiData',JSON.stringify(file.data.events))
        return dispatch(receiveEvents(file.data.events))
      }
      else{
        dispatch({type: FETCH_EVENTS_ERROR})
      }
    }
   }
}


export function receiveEvents(response) {
    return {
        type: RECEIVE_EVENTS,
        payload: {
            events: response.slice(0,20)
        }
    };
}
