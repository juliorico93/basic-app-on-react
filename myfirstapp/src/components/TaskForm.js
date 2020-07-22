import React, { Component } from 'react';

export default class TaskForm extends Component {

state = {
    title: '',
    description: '',
    ID:''
}

onSubmit = e => {
    this.props.addTask(this.state.title, this.state.description, this.state.symptoms)
    e.preventDefault();
}

onChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState ({
        [e.target.name] : e.target.value
    })
}

render() {
    return(
        <form onSubmit={this.onSubmit}>
            <input 
            type="text" 
            name="title"
            placeholder="write a task" 
            onChange={this.onChange} 
            value={this.state.title}/>
            <br />
            <br />
            <br />
            <input 
            type="text" 
            name="symptoms"
            placeholder="symptoms" 
            onChange={this.onChange} 
            value={this.state.symptoms}/>
            <br />
            <br />
            <br />
            <textarea
            name="description"
             placeholder="write a description" 
            onChange={this.onChange} 
            value={this.state.description}></textarea>
            <input type="submit" />
        </form>
    )
}

}