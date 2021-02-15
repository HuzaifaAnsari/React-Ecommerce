import React, {useState} from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "../firebase";

function Login() {
    const history = useHistory(); 
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        // firebase login!!!
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error => alert (error.massage))
    }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                // it successfully created a new user with email and password
                if (auth){
                    history.push('/')
                }
            })
            .catch(error  => alert (error.message))
        // firebase Register!!!
    }
    return (
        <div className="login">
        <Link to="/">
            <img 
                className="login__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" 
            />
        </Link>   
        <div className="login__container">
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <button type="submit" onClick={signIn} 
            className="login__signinbutton">Sign-in</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button type="submit" onClick={register} 
        className="login__registerbutton">Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login
