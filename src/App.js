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
  render(){
    return(
      <Todolist value = {this.state.todos}/>
    );
  }
}
export default App;