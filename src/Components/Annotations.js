import SectionHead from "./SectionHead";
import React from "react";

const Annotations = ({ AnnotationList, setAnnotationList }) => {
    console.log(AnnotationList);
  return (
    <section className="side-section">
      <SectionHead title="Annotations" />
      <div className="annotation-list">
        {AnnotationList.map((annotation, index) => (
          <div className="annotation-item" key={index}>
            <span className="annotation-text">{annotation.val}</span>
            <span className="annotation-tag">{annotation.tag}</span>
            <span className="annotation-remove" onClick={() => {
                setAnnotationList(AnnotationList.filter((_, i) => i !== index));
            }
            }>X</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Annotations;
