import React from "react";
import { Link } from "react-router-dom";
import {useLoginAuth} from "../../hooks/useLoginAuth";
import {sendPasswordReset} from "../../services/authentications";

const Reset = () => {
    const { email, setEmail} = useLoginAuth()

    return (
        <div className="reset">
            <div className="reset__container">
                <input
                    type="text"
                    className="reset__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <button
                    onClick={() => sendPasswordReset(email)}
                >
                    Send password reset email
                </button>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Reset;