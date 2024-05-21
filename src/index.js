import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/* Challenge Number 1  */ 
/* const nums = [1, 2 , 3, 4, 5]

const arr = nums.map((number)=> (
   number*number ))

   console.log(arr)
   console.log(nums) */


   /* Challenge Number 2  */ 
/* const names = ["alice", "bob", "charlie", "danielle"]

console.log(names.map((item)=> { return item[0].toUpperCase() + item.slice(1) } ))
 */

/* Challenge Number 3  */ 

/* const pokemon =["Bulbasaur" , "Charmender", "Squirtle" ]

console.log(pokemon.map((item)=>{
   return `<p>${item}</p>`
})) */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

