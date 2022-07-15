import "./App.css";
import Main from "./Components/Main";
import Records from "./Components/Records";
import Annotations from "./Components/Annotations";
import { useState } from "react";

function App() {
  const [AnnotationList, setAnnotationList] = useState([]);
  const [countPerson, setCountPerson] = useState(0);
  const [countOrg, setCountOrg] = useState(0);
  const [dialogBox, setDialogBox] = useState(false);

  return (
    <>
      {dialogBox && <div className="cover-d"></div>}
      <div className="container">
        <Records />
        <Main
          AnnotationList={AnnotationList}
          setAnnotationList={setAnnotationList}
          countPerson={countPerson}
          countOrg={countOrg}
          setCountPerson={setCountPerson}
          setCountOrg={setCountOrg}
        />
        <Annotations
          AnnotationList={AnnotationList}
          setAnnotationList={setAnnotationList}
          countPerson={countPerson}
          countOrg={countOrg}
          setCountPerson={setCountPerson}
          setCountOrg={setCountOrg}
          dialogBox={dialogBox}
          setDialogBox={setDialogBox}
        />
      </div>
    </>
  );
}

export default App;
