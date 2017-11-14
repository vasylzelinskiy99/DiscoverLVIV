import {RECEIVE_EVENTS, FETCH_EVENTS, FETCH_EVENTS_ERROR} from '../actions/events'

const defaultState = {
  fetching: false,
  events: []
};

export default function events(state = defaultState, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        fetching: true
      }
    case RECEIVE_EVENTS:
      const {events} = action.payload;
      return {
        ...state,
        events: events,
        fetching: false
      }
    case FETCH_EVENTS_ERROR:
      const {err} = action.payload;
      return {
        ...state,
        err: err,
        fetching: false
      }
    default:
      return state;
  }

}
