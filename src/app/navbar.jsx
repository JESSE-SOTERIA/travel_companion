import React from 'react'
import Searchbar from './search'

export default function NavBar(){
     return(
        <>
            <nav class ="flex">
                <img src="#" alt="logo"  class = "flex-none w-20 h-10 px-3 my-4 mx-4"/>
                <Searchbar></Searchbar>
                <button class = "flex-none w-20 h-10 px-3 my-4  mx-4 rounded-full bg-sky-100">login</button>
                <button class = "flex-none w-20 h-10 bg-blue-500 rounded-full text-white px-3  my-4 mx-4 ">sign up</button>
            </nav>
        </>
        
    ) 

}