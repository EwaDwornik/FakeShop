import React, { useState} from "react";
import { Link } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {signInWithGoogle} from "../../services/authentications";
import {auth} from "../../services/firebase/firebase.config";
import {useLoginAuth} from "../../hooks/useLoginAuth";

const Login = () => {
    const {email, setEmail} = useLoginAuth()

    const [password, setPassword] = useState("");

    return (
        <div className="login">
            <div className="login__container">
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => signInWithEmailAndPassword(auth, email, password)}
                >
                    Login
                </button>
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Login;