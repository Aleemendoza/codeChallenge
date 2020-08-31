function loginUsuario (usuario) {

       return function(dispatch) {
         return   fetch('http://localhost:3001/login', {
           method: 'post',
           headers: {
         'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        })
        .then(response => response.json())
        .then(user => {
           dispatch({
             type: 'string',
             payload: user
           });
             return user;
           });


         };
       }

module.exports = loginUsuario;