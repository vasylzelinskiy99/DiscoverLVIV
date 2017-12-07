export  const RECEIVE_SEARCH_WORD = 'RECEIVE_SEARCH_WORD'

export function search(searchQuery) {
  return function (dispatch) {
    return dispatch(searchHandler(searchQuery))
  }
}

function searchHandler(searchQuery) {
  return{type:RECEIVE_SEARCH_WORD, payload:{searchWord:searchQuery}}
}
