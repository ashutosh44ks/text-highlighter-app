import "./App.css";
import Main from "./Components/Main";
import Records from "./Components/Records";
import Annotations from "./Components/Annotations";
import { useState } from "react";

function App() {
  const [AnnotationList, setAnnotationList] = useState([]);
  return (
    <div className="container">
      <Records />
      <Main
        AnnotationList={AnnotationList}
        setAnnotationList={setAnnotationList}
      />
      <Annotations
        AnnotationList={AnnotationList}
        setAnnotationList={setAnnotationList}
      />
    </div>
  );
}

export default App;
