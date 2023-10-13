import "./modal.css";

const Modal = ({ children, isOpenForm }) => {
  return (
    <div className={`modal ${isOpenForm && "is-open"}`}>
      <div className="modal-container">{children}</div>
    </div>
  );
};
export default Modal;

//componente genérico --> children: propiedad del atributo props
