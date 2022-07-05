import React, { useState } from "react";

export default function About(props) {
    
    const[myStyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const[btnText, SetBtnText] = useState("Enable Dark mode");
    
    const toogleDarkStyle = () => {
        if (myStyle.color === "black") {
            setMystyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
            })
            SetBtnText("Dark Mode")
        }else {
            setMystyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
            })
            SetBtnText("Dark Mode")
        }
    } 
    const toogleLightStyle = () => {
        if (myStyle.color === "white") {
            setMystyle({
                color: "black",
                backgroundColor: "white",
                border: "1px solid black",
            })
            SetBtnText("Light Mode")
        }else {
            setMystyle({
                color: "black",
                backgroundColor: "white",
                border: "1px solid black",
            })
            SetBtnText("Light Mode")
        }
    } 
    



  return (
    <>
    <div className="container my-4" style = {myStyle}>
        <h1><strong>About Us</strong></h1>
      <div className="accordion my-4 " id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button show" style = {myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is the purpose of  <strong> Text Analyzer</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show" style = {myStyle}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed" style = {myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              why you should use  <strong> Text Analyzer</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show" style = {myStyle}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed" style = {myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              purpose of create application  <strong> Text Analyzer</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse show" style = {myStyle}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
    <button type="button" onClick={toogleDarkStyle} className="btn btn-dark mx-2 my-3">Dark Mode</button>
    <button type="button" onClick={toogleLightStyle} className="btn btn-light mx-2 my-3">Light Mode</button>
    </div>
    </>
  );
}
