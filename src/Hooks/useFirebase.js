import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const googleSignIn = () => {
        const auth = getAuth();
        return signInWithPopup(auth, provider)
    };

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
            setError(error.message)
        });
    };
    useEffect(() => {
        const auth = getAuth();
        const unsubsCribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return unsubsCribed;
    }, [])

    return {
        googleSignIn, user, error, logOut, setUser, setError
    }

};

export default useFirebase;