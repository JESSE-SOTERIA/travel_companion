import React from 'react'

export default function LoginPage(){
    
    return(
        <section class = "">
            <form action="flex flex-column">
                <label htmlFor="">name</label>
                <input type="text" />
                <label htmlFor="">email</label>
                <input type="text" />
                <p>Not a member?</p>
                <button>Sign up</button>
            </form>
        </section>
    )
}