import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const login = (event)=> {

    }
    return (
        <div>
            <input type='text' placeholder='email' />
            <input type='password' placeholder='password ...' />
            <button onClick={login} ></button>
        </div>
    );
};

export default Login;