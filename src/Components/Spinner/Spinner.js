import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="circle">
                <label>Loading...</label>
                <div className="circle-child" />
            </div>
        </div>
    );
};

export default Spinner;