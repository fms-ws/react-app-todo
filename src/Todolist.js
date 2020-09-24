import React, { Component } from 'react';
import Todo from './Todo';
class Todolist extends React.Component{
    render(){
        return(
            <div className='board'>
                <div className='todo'>
                    <h1>todo</h1>
                    <Todo 
                        value = {this.props.value}
                        area = {1}
                    />
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