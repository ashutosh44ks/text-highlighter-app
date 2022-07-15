import SectionHead from "./SectionHead";
import { useState } from "react";
import DialogBox from "./DialogBox";

const Annotations = ({
  AnnotationList,
  setAnnotationList,
  setCountPerson,
  setCountOrg,
  dialogBox,
  setDialogBox,
}) => {
  const [openSideRight, setOpenSideRight] = useState(true);
  const [rowVal, setRowVal] = useState({});
  console.log(AnnotationList);
  return (
    <>
      {dialogBox && (
        <DialogBox
          setDialogBox={setDialogBox}
          AnnotationList={AnnotationList}
          setAnnotationList={setAnnotationList}
          rowVal={rowVal}
          setCountPerson={setCountPerson}
          setCountOrg={setCountOrg}
        />
      )}
      {openSideRight === true ? (
        <section className="side-section annotations">
          <SectionHead
            title="Annotations"
            openSide={openSideRight}
            setOpenSide={setOpenSideRight}
          />
          <div className="annotation-list">
            {AnnotationList.map((annotation, index) => (
              <div className="annotation-item" key={index}>
                <span className="annotation-text">{annotation.val}</span>
                <span className="annotation-tag">{annotation.tag}</span>
                <span
                  className="annotation-remove"
                  onClick={() => {
                    setDialogBox(true);
                    setRowVal({...annotation, index});
                  }}
                >
                  X
                </span>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div
          className="mini-side mini-annotations"
          onClick={() => setOpenSideRight(!openSideRight)}
        >
          Annotations
        </div>
      )}
    </>
  );
};

export default Annotations;
