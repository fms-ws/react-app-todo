import React, { Component } from 'react';
import ModalWindow from './ModalWindow';

class Todo extends Component{
  render(){ 
      return(
          <div className="todos">
              {this.props.value.map(i=>{if(i.area === this.props.area)
                  return <div className="todo"><ModalWindow name={i.name} des={i.des}/></div>
              })}
          </div>
      );
  }
}
export default Todo;