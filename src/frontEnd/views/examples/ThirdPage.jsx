import React from "react";

// reactstrap components
import {
  
  Container
} from "reactstrap";
import '../../views/IndexSections/local.css'
// core components

class ThirdPage extends React.Component  {
  componentDidMount() {
    document.body.classList.toggle("third-form");
  }
  componentWillUnmount() {
    document.body.classList.toggle("third-form");
  }
  render() {
        return ( 
          <>
        
        
        
        
        <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/page4.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
        <div>
        <img
              alt="..."
              hight="400"
              width="400"
              align="right"
              src={require("assets/img/love1.png")}
            ></img>
            
          </div>
         
          
       
         

  
        
   


















        </Container>
      </div>
        
        
     
        </> );
    }
  }

 
export default ThirdPage;