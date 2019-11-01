import React from "react";
import { Link } from "react-router-dom";
// react plugin used to create switch buttons
//import classnames from "classnames"
//import $ from "jquery"

import {
 
  Container,
  Form,
  
  
} from "reactstrap";
import "./local.css";
// core components



class FormFirst extends React.Component { 
  componentDidMount() {
   // document.body.classList.toggle("second-form");
    
  }
  componentWillUnmount() {
    //document.body.classList.toggle("second-form");
  }
  constructor(props) {
    super(props);
    this.state = {
      colorUp: 'secondary',
      clicked: false,
      pills: 1
    };

    this.handleUp = this.handleUp.bind(this);
   // this.handleDown = this.handleDown.bind(this);
  }

  handleUp(event) {
  if (this.state.clicked === false) {
    this.setState({
      colorUp: 'success',
      clicked: true
    });
   }
  }

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  
  render() { 
    
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/page2.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container>
          <img
            className="div-img"
            alt="..."
            hight="500"
            width="500"
            align="right"
            src={require("assets/img/love1.png")}
          ></img>

          <div className="heading">
            <h1> Find your</h1>
            <h1>true love</h1>
          </div>
          <Form>
            <div>
            
            <p className="text-left">i'am a </p>

            <div className="toggle_radio">
              <input
                type="radio"
                className="toggle_option"
                id="first_toggle"
                name="toggle_option"
              />
              <input
                type="radio"
                checked
                className="toggle_option"
                id="second_toggle"
                name="toggle_option"
              />
              <label for="first_toggle">
                <p>Woman</p>
              </label>
              <label for="second_toggle">
                <p>Man</p>
              </label>
              <div className="toggle_option_slider" />
            </div> <p className="text-left faa-horizontal faa-slow animated">And...</p>
         

            <button
              type="button" 
              className="btn btn-info shadow  btn-circle btn-lg " 
              
            >
              <i className="fa fa-venus-mars glypicon_color faa-shake animated"></i>
            </button>

            <button
              type="button" 
              className="btn btn-success  shadow btn-circle btn-lg"
            >
              <i className="fa fa-venus-double glypicon_color faa-pulse animated"></i>
            </button>

            <button
            
              type="button" 
              className="btn btn-warning shadow  btn-circle btn-lg"
            >
              <i className="fa fa-mars-double glypicon_color faa-tada animated"></i>
            </button>
          </div>
          <div>
            <label className="lables">
              <p>Straight</p>
            </label>
            <label className="lables">
              <p>Lesbian</p>
            </label>
            <label className="lables">
              <p>Bisexual</p>
            </label>
          </div>
          <p class="text-left faa-horizontal faa-slow animated">Looking for</p>

          <button
            type="button" 
            className="btn btn-info shadow  btn-circle btn-lg"
          >
            <i className="fa fa-smile-beam glypicon_color faa-tada animated"></i>
          </button>

          <button
            type="button" 
            className="btn btn-success  shadow btn-circle btn-lg"
          >
            <i className="fa fa fa-kiss-beam glypicon_color faa-tada animated"></i>
          </button>

          <button
            type="button" 
            className="btn btn-warning shadow  btn-circle btn-lg"
          >
            <i className="fa fa-grin-hearts glypicon_color faa-tada animated"></i>
          </button>
          <button
            type="button" 
            className="btn btn-warning shadow  btn-circle btn-lg"
          >
            <i className="fa fa-grin-stars glypicon_color faa-tada animated"></i>
          </button>
          <div>
            <label className="lables">
              <p>Friendship</p>
            </label>
            <label className="lables">
              <p>Flirt</p>
            </label>
            <label className="lables">
              <p>Romance</p>
            </label>
            <label className="lables">
              <p>Relationship</p>
            </label>
          </div>
          <Link
            className="btn btn-warning shadow    mar_center "
            tag={Link}
            to="/second-form"
          >
            <i className="fa fa-arrow-right glypicon_color faa-passing animated"></i>
          </Link>
          </Form>
        </Container>
      </div>
    </>
  );
}
}
export default FormFirst;
