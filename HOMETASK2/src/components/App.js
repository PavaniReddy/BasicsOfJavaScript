import React from "react";
import ReactDom from "react-dom";
import './AnotherComp.scss';


function App(){
    return(
        <div class='content'>
            <h4>1.Setup React</h4>
            <p>- Setup folder with npm and git.Create HTML and Javascript (React) file.Let’s write some code</p>
          <h4>2.Setup webpack</h4>
          <p>
          - Install webpack.Add configuration file.Define entry point for webpack. Define output path for the bundled file. Add the bundled js file to the HTML file
          </p>
          <h4>3.Setup Babel</h4>
          <p>- Install babel.Configure webpack to use babel.Defining rules (presets) for babel</p>
          <h4>4.Build and run</h4>
          <h4>5.Extra useful configs</h4>
          <p>- Babel config for CSS files.Babel config for images.Babel config for SVG as react component</p>
     
        </div>
       
    )
}

export default App;