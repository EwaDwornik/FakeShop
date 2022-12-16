import {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../services/firebase/firebase.config";
import {useNavigate} from "react-router-dom";

export const useLoginAuth = () => {
    const [email, setEmail] = useState("");
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);

    return {email, setEmail};
}