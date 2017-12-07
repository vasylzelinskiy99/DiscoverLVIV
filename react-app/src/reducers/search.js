import {RECEIVE_SEARCH_WORD} from '../actions/search'

const defaultState = {
  searchWord: ''
}
export default function search(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_WORD:
      return{
        ...state,
        searchWord: action.payload.searchWord
      }
    default:
    return state
  }
}
