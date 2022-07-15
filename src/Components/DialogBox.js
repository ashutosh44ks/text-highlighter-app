import "./DialogBox.css";

const DialogBox = ({ setDialogBox }) => {
  return (
    <div className="d-box">
      <div>Are you sure you want to delete?</div>
      <div className="d-box-btns">
        <button className="d-btn" onClick={() => setDialogBox(false)}>
          Cancel
        </button>
        <button className="d-btn">Delete</button>
      </div>
    </div>
  );
};

export default DialogBox;
