/*
const element =  document.createElement('h1')
const contenedor = document.getElementById('root')
element.innerText = 'Hola mundo'
contenedor.appendChild(element)
*/
import React from 'react'
import ReactDOM from 'react-dom'

/*AREA DE VARIABLES*/

const nombre = 'diego';
const user = {
  firstname: 'juan',
  lastname: 'perez',
  avatar: 'https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'
}
const element = <h1>hola mundo con react soy {getNmae(user)} </h1>
const element2 = <div> {userValidate(user)} </div> 
const element3 = <img src={user.avatar} />
const prueba = (
  <div>
    <div> {userValidate(user)} </div> 
    <img src={user.avatar} />
  </div>
)
const container = document.getElementById('root')

/*FIN DE AREA DE VARIABLES*/

/*AREA DE FUNCIONES*/
function getNmae (user){
  return user.firstname + " " + user.lastname
}
function userValidate (user){
  if(user){
    return <h1> bienvenido {getNmae(user)}</h1>
  }
    return <h1> Bienvenido desconocido</h1> 
}
/*FIN DE AREA DE FUNCIONES*/
//ReactDOM.render(__QUE__,__DONDE__ )
ReactDOM.render(prueba, container)

