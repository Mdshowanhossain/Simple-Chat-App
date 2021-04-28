// import React from 'react';

const Room = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
    const handleRoomChange = (room) => {
        setCurrentRoom(room);
        setShowListMenu(false);
    };
    return (
        <div className="rooms">
            <h2>Select Room</h2>
            <ul>
                <li
                    onClick={() => {

                        handleRoomChange = ("HTML");
                    }}
                    className={currentRoom === "HTML" ? "active" : ""}
                >
                    HTML
                </li>
                <li
                    onClick={() => {

                        handleRoomChange = ("General");
                    }}
                    className={currentRoom === "General" ? "active" : ""}
                >
                    General
                </li>
                <li
                    onClick={() => {

                        handleRoomChange = ("Reactjs");
                    }}
                    className={currentRoom === "Reactjs" ? "active" : ""}
                >
                    Reactjs
                </li>
            </ul>

        </div>
    );
};

export default Room;