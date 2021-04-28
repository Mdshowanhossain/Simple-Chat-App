import React, { useState } from 'react';
import LogOut from '../LogOut/LogOut';
import cross from '../../image/cross.png';
import menuBar from '../../image/menuBar.png';
import Room from '../Rooms/Rooms';

const Navbar = ({ user, currentRoom, setCurrentRoom }) => {
    const [showListMenu, setShowListMenu] = useState(false);

    return (
        <nav>
            <h1>
                {user ? (
                    <>
                        Current Room: <strong>{currentRoom}</strong>
                    </>
                    ) : (
                    <strong>Chat App</strong>
                        
                    )}
                         
                </h1>
                        {user ? (
                            <>
                                <button
                                    className="menu"
                                    onClick={() => {
                                        setShowListMenu(!showListMenu);
                                    }}
                                >
                                    <img
                                        src={cross}
                                        alt="menu-cross"
                                        style={{ opacity: showListMenu ? 1 : 0 }}
                                    />

                                    <img
                                        src={menuBar}
                                        alt="menu-sidebar"
                                        style={{ opacity: showListMenu ? 1 : 0 }}
                                    />
                                </button>

                                <ul
                                    className="list-menu"
                                    style={{ top: showListMenu && user ? "10vh" : "-100vh" }}
                                >
                                    <li>
                                        <LogOut setShowListMenu={setShowListMenu} />
                                    </li>
                                    <li>
                                        <Room

                                            currentRoom={currentRoom}
                                            setCurrentRoom={setCurrentRoom}
                                            setShowListMenu={setShowListMenu}
                                        />
                                    </li>
                                </ul>
                            </>

                        ) : null}
        </nav >

                );
};

export default Navbar;