export function getAllVacanci() {
  return function (dispatch) {
   return fetch('http://localhost:3001/vacantes')
   
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: GET_ALL_PRODUCT,
          payload: json,
        })
        
      });
  };
}