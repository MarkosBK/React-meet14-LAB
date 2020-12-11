import React from 'react';

export default function UserFormRefs(){
    let nameRef = React.createRef();
    const handleSubmit = function(e){
        e.preventDefault();
        alert(`Name: ${nameRef.current.value}`);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" placeholder="Enter name" ref={nameRef}></input>
            <input type="submit"></input>
        </form>
    )
}