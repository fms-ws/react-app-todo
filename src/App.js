import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component{

  constructor(props){
    super();
    const todos=[
      {name:"test1",area:1,des:"テスト1だよ",id:0},
      {name:"test1-1",area:1,des:"テスト1-1だよ",id:1},
      {name:"test2",area:2,des:"テスト2だよ",id:2},
      {name:"test3",area:3,des:"テスト3だよ",id:3},
    ];
    this.state={
      todos:todos,
      idCount:4,
    }
  }
  add(e){
    this.setState({idCount:this.state.idCount+1});
    const newtodo = {name: e, area: 1,des: "",id:this.state.idCount};
    this.setState(state =>({
      todos: this.state.todos.concat(newtodo)
    }));
    console.log(this.state.idCount);
  }
  render(){
    return(
      <TodoList 
        value = {this.state.todos}
        add={e=>this.add(e)}
        />
    );
  }
}
export default App;