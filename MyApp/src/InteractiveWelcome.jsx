/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Welcome from "./Welcome";

function InteractiveWelcome(){
    const [name, setName] = useState('');

    const handleInputNameChange = (event) => {
        setName(event.target.value);
    };



    return (
        <div>
            <Welcome name={name}/>
            <input value={name} onChange={handleInputNameChange} />
        </div>
    )
}

export default InteractiveWelcome;