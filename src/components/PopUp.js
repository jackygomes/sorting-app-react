import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement(document.getElementById('root'));

const PopUpModal = ( {onEnterPeople} ) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [ people, setPeople] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
  }
  const closeModal = () => {
    setIsOpen(false);
  }
  const enterPeople = () => {
    onEnterPeople(people);
    closeModal();
  }
  // need to implement
  const onlyNumber = (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode < 48 || keyCode > 57) {
      setPeople(event.target.value)
      event.preventDefault();
    }
  }

  return (
    <div className="pop-wrapper">
      <button className="button" onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="popup-header">How many people? <span className="popup-close-button" onClick={closeModal}>X</span></div>
        
        <div className="modal-body">
          <form>
            <input className="people-input" value={people} onChange={(event) => setPeople(event.target.value)} />
          </form>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={enterPeople}> Start </button>
        </div>
       </Modal>
    </div>
  );
}

export default PopUpModal;