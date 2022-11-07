import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); //react hook can only be called within the function and custom hooks
  //first is a variable, second is function to set the modalIsOpenOpen variable
  //initial state set to false
  //always return array with two elements

  function deleteHandler() {
    //here we write standard js code
    //we have to create overlay
    //Find a way of showing it conditionally
    setModalIsOpen(true);
  }

  function closeModelHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button onClick={deleteHandler} className="btn">
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModelHandler} />}
    </div>
  );
}
//what ever you write inside {} is a JS expression
export default Todo;
