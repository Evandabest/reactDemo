
import React from 'react';
import { useEffect, useState } from 'react';
import Pokemon from './components/pokemon';


function App() {
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null); 

  const getPokemon = async (pokemonName) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    const data = await pokemon.json()
    setPicture(data.sprites.front_default)
    setName(data.name)
  }
  useEffect(() => {
    getPokemon("pikachu")
  }, [])

  const search = (e) => {
    getPokemon(e.target.previousElementSibling.value)
  }

  return (
    <>
      <Pokemon name = {name} picture = {picture} ></Pokemon>
      <input type='text' required placeholder='Enter Pokemon Name'></input>
      <button onClick = {search}>Search</button>
    </>
  );
}

export default App; 
















//import Counter from './assets/components/counter';

//Usestate example
//import { useState } from "react"
//
//function App() {
//  
//  const [count, setCount] = useState(0)
//
//  return (
//    <>
//    <div className="flex flex-col items-center w-full h-full">
//      <p className="mb-10 font-bold ">Count: {count}</p>
//      <div className="flex flex-row gap-5">
//      <button onClick={() => {setCount(count+1)}}>Increment</button>
//      <button onClick={() => {setCount(count-1)}}>Decrement</button>
//      </div>
//    </div>
//      
//    </>
//  )
//}
//
//export default App



//https://pokeapi.co/api/v2/pokemon
//import { useState, useEffect } from 'react';
//
//function App() {
//  const [name, setName] = useState(null);
//  const [picture, setPicture] = useState(null);
//
//  useEffect(() => {
//    const getPokemon = async () => {
//      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
//      const data = await response.json()
//      console.log(data)
//      console.log(data.sprites.front_default)
//      setName(data.name)
//      setPicture(data.sprites.front_default)
//    }
//    getPokemon()
//  }, []); 
//
//  return (
//    <div className='flex flex-col items-center'>
//    <p>{name}</p>
//    <img src={picture} alt="pikachu" />
//    </div>
//  )
//}
//
//export default App;