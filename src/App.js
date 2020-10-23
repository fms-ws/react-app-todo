import React, { Component } from 'react';
import Todolist from './TodoList';

class App extends Component{
  constructor(props){
    super();
    const todos=[
      {name:"test1",area:1,des:"テスト1だよ"},
      {name:"test1-1",area:1,des:"テスト1-1だよ"},
      {name:"test2",area:2,des:"テスト2だよ"},
      {name:"test3",area:3,des:"テスト3だよ"},
    ];
    this.state={
      todos:todos,
    }
  }

  add(e){
    const newtodo = {name: e, area: 1,des: ""};
    this.setState(state =>({
      todos: this.state.todos.concat(newtodo)
    }));
  }

  render(){
    return(
      <Todolist 
        value = {this.state.todos}
        add = {e => this.add(e)}
      />
    );
  }
}
export default App;