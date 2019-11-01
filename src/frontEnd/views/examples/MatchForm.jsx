import React from "react";
import { Link } from "react-router-dom";
// react plugin used to create switch buttons
//import classnames from "classnames";
import $ from "jquery";

import { Container, Form } from "reactstrap";
import "../IndexSections/local.css";
// core components

class MatchForm extends React.Component {
  componentDidMount() {
    // document.body.classList.toggle("second-form");
  }
  componentWillUnmount() {
    //document.body.classList.toggle("second-form");
  }
  hidebox1 = () => {
    $("#btn1").click(function() {
      $("#btn2").hide("fast");
      $("#btn3").hide("fast");
      $("#lab2").hide("fast");
      $("#lab3").hide("fast");
    });
  };
  hidebox1of2 = () => {
    $("#btn2").click(function() {
      $("#btn1").hide("fast");
      $("#btn3").hide("fast");
      $("#lab1").hide("fast");
      $("#lab3").hide("fast");
    });
  };
  hidebox1of3 = () => {
    $("#btn3").click(function() {
      $("#btn2").hide("fast");
      $("#btn1").hide("fast");
      $("#lab2").hide("fast");
      $("#lab1").hide("fast");
    });
  };
  hidebox2 = () => {
    $("#btn4").click(function() {
      $("#btn5").hide("fast");
      $("#lab5").hide("fast");
    });
  };
  hidebox3 = () => {
    $("#btn1").click(function() {
      $("#btn2").hide("fast");
      $("#btn3").hide("fast");
      $("#lab2").hide("fast");
      $("#lab3").hide("fast");
    });
  };
  hidebox4 = () => {
    $("#btn1").click(function() {
      $("#btn2").hide("fast");
      $("#btn3").hide("fast");
      $("#lab2").hide("fast");
      $("#lab3").hide("fast");
    });
  };
  hidebox6 = () => {
    $("#btn1").click(function() {
      $("#btn2").hide("fast");
      $("#btn3").hide("fast");
      $("#lab2").hide("fast");
      $("#lab3").hide("fast");
    });
  };

  hidebox7 = () => {
    $("#btn1").click(function() {
      $("#btn2").hide("fast");
      $("#btn3").hide("fast");
      $("#lab2").hide("fast");
      $("#lab3").hide("fast");
    });
  };
  hidebox8 = () => {
    $("#btn1").click(function() {
      $("#btn2").hide("fast");
      $("#btn3").hide("fast");
      $("#lab2").hide("fast");
      $("#lab3").hide("fast");
    });
  };

  hidebox9 = () => {
    $("#btn1").click(function() {
      $("#btn2").hide("fast");
      $("#btn3").hide("fast");
      $("#lab2").hide("fast");
      $("#lab3").hide("fast");
    });
  };

  hidebox10 = () => {
    $("#btn1").click(function() {
      $("#btn2").hide("fast");
      $("#btn3").hide("fast");
      $("#lab2").hide("fast");
      $("#lab3").hide("fast");
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
            <Form>
              <p className="text-left faa-horizontal faa-slow animated">
                {" "}
                To maximize the chance to finding what you <br />
                are looking for, we recommend that you fill in <br />
                our quiz and more about you, it’s fast and fun. <br />
                <hr className="hr-style2" />
              </p>

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  i'am ...
                </p>

                <button
                  class="btn1"
                  type="button"
                  id="btn1"
                  onClick={this.hidebox1}
                  className="btn btn-primary shadow  btn-circle btn-lg "
                ></button>

                <button
                  class="btn2"
                  id="btn2"
                  type="button"
                  onclick={this.hidebox1of2}
                  className="btn btn-primary   shadow btn-circle btn-lg"
                ></button>

                <button
                  type="button"
                  id="btn3"
                  onclick={this.hidebox1of3}
                  className="btn btn-primary  shadow  btn-circle btn-lg"
                ></button>
              </div>

              <div>
                <label id="lab1" className="lables2">
                  <p>Nerd</p>
                </label>
                <label id="lab2" className="lables2">
                  <p>Geek</p>
                </label>
                <label id="lab3" className="lables2">
                  <p>Dork</p>
                </label>
              </div>

              <hr className="hr-style" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  Pets ...
                </p>

                <button
                  type="button"
                  id="btn4"
                  onClick={this.hidebox2}
                  className="btn btn-primary shadow  btn-circle btn-lg btn-mar1 "
                ></button>

                <button
                  class="btn5"
                  id="btn5"
                  type="button"
                  className="btn btn-primary   shadow btn-circle btn-lg"
                ></button>
              </div>

              <div>
                <label id="lab4" className="lables">
                  <p>CAT PERSON</p>
                </label>
                <label id="lab5" className="lables">
                  <p>DOG PERSON</p>
                </label>
              </div>
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  My flock ...
                </p>

                <button
                  type="button"
                  id="btn6"
                  onClick={this.hidebox1}
                  className="btn btn-primary shadow  btn-circle btn-lg btn-mar1 "
                ></button>

                <button
                  class="btn2"
                  id="btn7"
                  type="button"
                  className="btn btn-primary   shadow btn-circle btn-lg"
                ></button>
              </div>

              <div>
                <label id="lab6" className="lables">
                  <p>EARLY BIRDS</p>
                </label>
                <label id="lab7" className="lables">
                  <p>NIGHT OWLS</p>
                </label>
              </div>
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  Kickstarts my day ...
                </p>

                <button
                  type="button"
                  id="btn8"
                  onClick={this.hidebox1}
                  className="btn btn-primary shadow  btn-circle btn-lg btn-mar1 "
                ></button>

                <button
                  class="btn2"
                  id="btn9"
                  type="button"
                  className="btn btn-primary   shadow btn-circle btn-lg"
                ></button>
              </div>

              <div>
                <label id="lab8" className="lables2">
                  <p>COFFE</p>
                </label>
                <label id="lab9" className="lables3">
                  <p>TEA</p>
                </label>
              </div>
              <hr className="hr-style2" />
              {/* end point  */}
              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  In my fridge ...
                </p>

                <button
                  type="button"
                  id="btn10"
                  onClick={this.hidebox1}
                  className="btn btn-primary shadow  btn-circle btn-lg btn-mar1 "
                ></button>

                <button
                  class="btn2"
                  id="btn11"
                  type="button"
                  className="btn btn-primary   shadow btn-circle btn-lg"
                ></button>
              </div>

              <div>
                <label id="lab10" className="lables2">
                  <p>MEAT</p>
                </label>
                <label id="lab11" className="lables3">
                  <p>TOFU</p>
                </label>
              </div>
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  Phone are for ...
                </p>

                <button
                  type="button"
                  id="btn12"
                  onClick={this.hidebox1}
                  className="btn btn-primary shadow  btn-circle btn-lg btn-mar1 "
                ></button>

                <button
                  class="btn13"
                  id="btn13"
                  type="button"
                  className="btn btn-primary   shadow btn-circle btn-lg"
                ></button>
              </div>

              <div>
                <label id="lab12" className="lables">
                  <p>TEXTING</p>
                </label>
                <label id="lab13" className="lables3">
                  <p>TALKING</p>
                </label>
              </div>
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  After a long day ...
                </p>

                <button
                  type="button"
                  id="btn14"
                  onClick={this.hidebox1}
                  className="btn btn-primary shadow  btn-circle btn-lg btn-mar1 "
                ></button>

                <button
                  class="btn15"
                  id="btn15"
                  type="button"
                  className="btn btn-primary   shadow btn-circle btn-lg"
                ></button>
              </div>

              <div>
                <label id="lab16" className="lables">
                  <p>TEXTING</p>
                </label>
                <label id="lab17" className="lables3">
                  <p>TALKING</p>
                </label>
              </div>
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  I’m hungry ...
                </p>

                <button
                  type="button"
                  id="btn18"
                  onClick={this.hidebox1}
                  className="btn btn-primary shadow  btn-circle btn-lg btn-mar1 "
                ></button>

                <button
                  class="btn19"
                  id="btn19"
                  type="button"
                  className="btn btn-primary   shadow btn-circle btn-lg"
                ></button>
              </div>

              <div>
                <label id="lab18" className="lables">
                  <p>I COOK</p>
                </label>
                <label id="lab19" className="lables3">
                  <p>ORDER IN</p>
                </label>
              </div>
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  Going out ...
                </p>

                <button
                  type="button"
                  id="btn20"
                  onClick={this.hidebox1}
                  className="btn btn-primary shadow  btn-circle btn-lg btn-mar1 "
                ></button>

                <button
                  class="btn21"
                  id="btn21"
                  type="button"
                  className="btn btn-primary   shadow btn-circle btn-lg"
                ></button>
              </div>

              <div>
                <label id="lab20" className="lables">
                  <p>GUEST LIST</p>
                </label>
                <label id="lab21" className="lables">
                  <p>AIN’T NO LIST</p>
                </label>
              </div>
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point */}
              <div>
                <p className="text-left faa-horizontal faa-slow animated">
                  My life is ...
                </p>

                <button
                  type="button"
                  id="btn22"
                  onClick={this.hidebox1}
                  className="btn btn-primary shadow  btn-circle btn-lg btn-mar1 "
                ></button>

                <button
                  class="btn23"
                  id="btn23"
                  type="button"
                  className="btn btn-primary   shadow btn-circle btn-lg"
                ></button>
              </div>

              <div>
                <label id="lab22" className="lables">
                  <p>ONLINE</p>
                </label>
                <label id="lab23" className="lables3">
                  <p>OFFLINE</p>
                </label>
              </div>
              <hr className="hr-style2" />
              {/* end point  */}

              {/* start point of submit btn*/}
              <div>
                <Link
                  className="btn btn-primary shadow    mar_center2 "
                  tag={Link}
                  to="/"
                >
                  <i className="fa fa-arrow-right glypicon_color faa-passing animated"></i>
                </Link>
              </div>

              {/* end point  */}
            </Form>
          </Container>
        </div>
      </>
    );
  }
}
export default MatchForm;
