import "./DialogBox.css";

const DialogBox = ({
  setDialogBox,
  setCountPerson,
  setCountOrg,
  setAnnotationList,
  AnnotationList,
  rowVal,
}) => {
  console.log(rowVal);
  return (
    <div className="d-box">
      <div>Are you sure you want to delete?</div>
      <div className="d-box-btns">
        <button className="d-btn" onClick={() => setDialogBox(false)}>
          Cancel
        </button>
        <button
          className="d-btn"
          onClick={() => {
            if (rowVal.tag === "Person") {
              setCountPerson((countPerson) => countPerson - 1);
            } else if (rowVal.tag === "Org") {
              setCountOrg((countOrg) => countOrg - 1);
            }
            setAnnotationList(
              AnnotationList.filter((_, i) => i !== rowVal.index)
            );
            const item = document.getElementById(`annotation-${rowVal.val}`);
            item.className = "";
            item.innerText = rowVal.val;
            setDialogBox(false);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DialogBox;
