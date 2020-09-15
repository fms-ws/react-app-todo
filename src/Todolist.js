import React, { Component } from 'react';

class Todolist extends React.Component{
    render(){
        return(
            <div className='board'>
                <div className='todo'>
                    <h1>todo</h1>
                    <Checkarea 
                        value = {this.props.value}
                        area = {1}
                    />
                </div>
                <div className='in-progress'>
                    <h1>in-progress</h1>
                    <Checkarea 
                        value = {this.props.value}
                        area = {2}
                    />
                </div>
                <div className='done'>
                    <h1>done</h1>
                    <Checkarea 
                        value = {this.props.value}
                        area = {3}
                    />
                </div>
            </div>
            
        ); 
    }
}

class Checkarea extends Component{
    render(){
        const tasks=[];
        for(let i = 0; i < this.props.value.todos.length; i++){
            if (this.props.value.todos[i].area === this.props.area){
                tasks.push(this.props.value.todos[i].name);
            }
        }
        return(
        <div className='task'>
            <Task tasks = {tasks} />
        </div>
        );
    }
}

class Task extends Component{
    render(){        
        const tasklist = this.props.tasks.map(x => <li> {x} </li>);
        return(
            <ul>
                {tasklist}
            </ul>
        );
    }
}


export default Todolist;
