import React, { Component } from 'react';
import Todo from './Todo';
class Todolist extends Component{
    constructor(props) {
        super(props);
        this.state = {value: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    };
    handleSubmit(event) {
        this.props.add(this.state.value);
        this.state.value = "";
        event.preventDefault();
    };
    render(){
        return(
            <div className='board'>
                <div className='todo'>
                    <h1>todo</h1>
                    <Todo 
                        value = {this.props.value}
                        area = {1}
                    />
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />  
                        <button> add </button>
                    </form>
                </div>
                <div className='in-progress'>
                    <h1>in-progress</h1>
                    <Todo 
                        value = {this.props.value}
                        area = {2}
                    />
                </div>
                <div className='done'>
                    <h1>done</h1>
                    <Todo 
                        value = {this.props.value}
                        area = {3}
                    />
                </div>
            </div>
            
        ); 
    }
}


export default Todolist;