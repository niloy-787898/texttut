import React, { useState } from "react";
import Navber from "./component/Navber";
import Alert from "./component/Alert";
import TextForm from "./component/TextForm";
// import About from "./component/About";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#424549";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    }
  };

  return (
    <>
    <Navber title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>
        </div>
      {/* <BrowserRouter>
        <Navber title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="about" element={<About />} />
            <Route
              path=""
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter> */}
    </>
  );
}

export default App;
