import { useState } from "react";

const Main = ({ AnnotationList, setAnnotationList }) => {
  const [text, setText] = useState("");
  const [countPerson, setCountPerson] = useState(0);
  const [countOrg, setCountOrg] = useState(0);
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
    span.innerText = selection.toString() + tag;
    range.deleteContents();
    range.insertNode(span);
    if (tag === "Person") {
      setCountPerson((countPerson) => countPerson + 1);
    } else if (tag === "Org") {
      setCountOrg((countOrg) => countOrg + 1);
    }
  }
  return (
    <section>
      <div className="section-head">
        <span></span>
        <span>
          <button
            onClick={(e) => {
              setAnnotation(e.target.innerText);
            }}
          >
            Person
          </button>
          <button
            onClick={(e) => {
              setAnnotation(e.target.innerText);
            }}
          >
            Org
          </button>
        </span>
      </div>
      <input type="file" onChange={showFile} />
      persons - {countPerson} | orgs - {countOrg}
      <div className="input-text-container">{text}</div>
    </section>
  );
};

export default Main;
