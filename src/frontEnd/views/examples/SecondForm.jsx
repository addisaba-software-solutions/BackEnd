import React from "react";
import { Link } from "react-router-dom";
// react plugin used to create switch buttons

import {
Container
} from "reactstrap";
import '../../views/IndexSections/local.css'
// core components

class SecondForm extends React.Component { 
  componentDidMount() {
    document.body.classList.toggle("second-form");
  }
  componentWillUnmount() {
    document.body.classList.toggle("second-form");
  }
  render() {
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/page3.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
        <div >
        <img
              alt="..."
              hight="500"
              width="500"
              align="right"
              src={require("assets/img/love1.png")}
            ></img>
            
          </div>

          <h2 className="text-left " align="left"> Pick  a cool name </h2>
          <div class="d-flex justify-content-left h-100">
          <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Username"/>
          <a href="#b" class="search_icon"><i class="fa fa-user-circle"></i></a>
        </div>
             </div>
              <button 
              type="button"
              className="btn btn-info shadow  btn-circle btn-xxl">
                 <i className="fa fa-camera glypicon_color faa-tada animated"></i>
                 
              </button>
               <img
              alt="..."
              
              align="center"
              
              src={require("assets/img/or.png")}
            ></img>
 <label className="lables" ><p>Create your character</p></label>
<Link 
              to="/third-form"
              className="btn btn-warning shadow    btn-circle">
                <i className="fa fa-arrow-right glypicon_color faa-passing animated"></i>
                
              </Link>
        </Container>
      </div>
    </>
  );
}
}
export default SecondForm;
