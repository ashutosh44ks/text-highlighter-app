import { ReactComponent as HamMenu } from "./hamburger-menu.svg";
import SectionHead from "./SectionHead";
import { useState } from "react";

const Annotations = ({ AnnotationList, setAnnotationList }) => {
  const [openSideRight, setOpenSideRight] = useState(true);

  console.log(AnnotationList);
  return (
    <>
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
                    setAnnotationList(
                      AnnotationList.filter((_, i) => i !== index)
                    );
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
