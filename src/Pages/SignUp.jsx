import { randomFillSync } from 'crypto';
import React from 'react'

const SignUp = ()=>{
    return(
        <div className='container'>
        <div className='wrapper'> 
        <h1>Lemma Chat</h1>
        <p>Sign up</p>
        <form>
            <input>User Name</input>
            <input>email</input>
            <input>Password</input>
            <input>Avatar</input>
            <button>Sign Up</button>
            <p>If you have an account, Sign in</p>
        </form>
        </div>
        </div>
    )
}

export default SignUp;

