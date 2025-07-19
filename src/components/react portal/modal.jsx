import ReactDOM from "react-dom";

const Modal = ({ onClose, itemsCount }) => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-blue-500 p-20 rounded">
        <p>Liczba elementów na liście: {itemsCount}</p>
        <button onClick={onClose}>Zamknij</button>
      </div>
    </div>,
    document.body
  );
};
export default Modal;
