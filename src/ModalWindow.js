import React from 'react';
import Modal from 'react-modal';
import './ModalWindow.css'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

Modal.setAppElement('#root') //任意のアプリを設定する　create-react-appなら#root
class ModalWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  render() {
    return (
      <div>
        <div onClick={this.openModal}>{this.props.name}</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Edit Modal"
        >
          <form >
            <ul>
              <li><label>タスク名</label><input type="text" ref={subtitle => this.subtitle = subtitle} value={this.props.name}/></li>
              <li><label>詳細</label><textarea>{this.props.des}</textarea></li>
            </ul>
            <button onClick={this.closeModal}>保存</button>
          </form>
        </Modal>
      </div>
    );
  }
}
export default ModalWindow;