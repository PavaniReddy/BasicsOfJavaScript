import React from "react";
import ReactDom from "react-dom";
import AnotherComp from "./components/AnotherComp";
import App from "./components/App";
import Footer from "./components/Footer";

const HelloWorld = () =>{
    return(
        <>
         <AnotherComp />
         <App />
         <Footer />
        </>
        
        
    )
}

ReactDom.render(
    <HelloWorld/>,
    document.getElementById("target")
    );