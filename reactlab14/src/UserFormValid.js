import React from 'react';

export default class UserFormValid extends React.Component{
    state={name: "", age:0};
    render(){
        const handleSubmit = function(e){
            e.preventDefault();
            alert(`Name: ${this.state.name}, ${this.state.age} years old`)
        }
        const handleNameChanged = function(e){
            let name = e.target.value;
            if(name.toLowerCase()==='admin'){
                alert("Мы не уживеся")
                this.setState("loh")
            }
            else
            this.setState({name:name});
        }
        const handleAgeChanged = function(e){
            let newAge = e.target.value;
            if (newAge<0){
                alert("Ты еще молодой")
                this.setState({age:0})
            }
            else this.setState({age:newAge})
        }
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter name" value={this.state.name} onChange={handleNameChanged}></input>
                    <input type="number" placeholder="Enter age" value={this.state.age} onChange={handleAgeChanged}></input>
                </div>
                <input type="submit" value="submit"></input>
            </form>
        )
    }
}