export function loginUsuario (usuario) {

       return function(dispatch) {
         return   fetch('http://localhost:3001/login', {
           method: 'post',
           //credentials: 'include',
           headers: {
         'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        })
        .then(response => response.json())
        .then(user => {
           dispatch({
             type: LOGIN_USUARIO,
             payload: user
           });
             return user;
           });

         };
       }