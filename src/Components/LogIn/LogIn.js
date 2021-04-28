// import React from 'react';

import { auth, firebaseRef } from "../../firebase.config";
const LogIn = () => {
    return (
        <div className="login">
            <button onClick={() => {
                auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider());
            }}
            >
                LogIn With Google
            </button>

        </div>
    );
};

export default LogIn;