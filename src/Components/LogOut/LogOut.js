// import React from 'react';
import { auth } from '../../firebase.config';

const LogOut = ({ setShowListMenu }) =>
    auth.currentUser && (
        <button
            className="logout"
            onClick={() => {
                auth.signOut();
                setShowListMenu(false)
            }}
        >
            Sign Out
        </button>
    )


export default LogOut;