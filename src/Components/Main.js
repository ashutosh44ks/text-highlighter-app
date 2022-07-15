import { useState } from "react";

const Main = ({
  AnnotationList,
  setAnnotationList,
  countPerson,
  countOrg,
  setCountPerson,
  setCountOrg,
}) => {
  const [text, setText] = useState("");
  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      setText(text);
    };
    reader.readAsText(e.target.files[0]);
  };
  function setAnnotation(tag) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    setAnnotationList([
      ...AnnotationList,
      {
        val: selection.toString(),
        tag: tag,
      },
    ]);
    const span = document.createElement("span");
    span.className = "annotation highlight";
    span.innerHTML = selection.toString() + `<small> (${tag})</small>`;
    range.deleteContents();
    range.insertNode(span);
    if (tag === "Person") {
      setCountPerson((countPerson) => countPerson + 1);
    } else if (tag === "Org") {
      setCountOrg((countOrg) => countOrg + 1);
    }
  }
  return (
    <section className="section-main">
      <div className="section-head">
        <span></span>
        <span>
          <button
            className="btn-main"
            onClick={(e) => {
              setAnnotation(e.target.innerText);
            }}
          >
            Person
          </button>
          <button
            className="btn-main"
            onClick={(e) => {
              setAnnotation(e.target.innerText);
            }}
          >
            Org
          </button>
        </span>
      </div>
      <div className="main-info">
        <input type="file" onChange={showFile} />
        <span>
          persons - {countPerson} | orgs - {countOrg}
        </span>
      </div>
      <div className="input-text-container">{text}</div>
    </section>
  );
};

export default Main;
