import React, { Component } from 'react';



import {
  
    
  } from "reactstrap";

 
class Explorer extends Component {
    state = {  modalIsOpen: false  };
    toggleModal = () => {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));};
    render() { 
       

        return ( 
            <div
            className="section section-signup"
            style={{
              backgroundImage: "url(" + require("assets/img/page4.png") + ")",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              minHeight: "700px"
            }}>
          







</div>
        
        
     
         );
         
    }
}
 
export default Explorer;