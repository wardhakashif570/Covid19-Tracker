import React,{  useEffect,useState} from 'react';
import GlobalStats from './GlobalStats.js';
import AllCountries from './AllCountries';



export default function InfoPanel({currentScreen}) {
  if(currentScreen === 0)
    return <GlobalStats/>

  else if(currentScreen === 1)
    return <AllCountries/>

    // else if(currentScreen === 2)
    // return <Graph/>
 else return <GlobalStats/>
  
}