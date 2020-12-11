import React from 'react';

export default function UserForm(){
    const handleSubmit = function(event){
        event.preventDefault();
        let name = document.getElementById("userName");
        alert(name.value);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" placeholder="Enter name" id="userName"></input>
            <input type="submit"></input>
        </form>
    )
}