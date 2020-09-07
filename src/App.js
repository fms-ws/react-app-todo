import React, { Component } from 'react';
class App extends Component{
  constructor(props){
    super(props);
    const todos=[
      {name:"test1",area:1,des:"テスト1だよ"},
      {name:"test2",area:2,des:"テスト2だよ"},
      {name:"test3",area:3,des:"テスト3だよ"},
    ];
    this.state={
      todos:todos,
    }
  }
  render(){
    return(
      <div className="app">
        {this.state.todos[0].area}
      </div>
    );
  }
}
export default App;
