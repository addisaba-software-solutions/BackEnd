import React from "react";
import { Link } from "react-router-dom";
// react plugin used to create switch buttons
import classnames from "classnames";
import "../../views/IndexSections/local.css";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroup,
  Container,
  FormGroup,
  Col
} from "reactstrap";

import Datetime from "react-datetime";
// core components

class FourthPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: ""
  };
  componentDidMount() {
    document.body.classList.toggle("forth-form");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("forth-form");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      focused: ""
    };
  }
  onFocus = () => {
    this.setState({
      focused: "input-group-focus"
    });
  };
  onBlur = () => {
    this.setState({
      focused: ""
    });
  };
  render() {
    return (
      <>
        <IndexNavbar />
        <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/page5.png") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px"
          }}
        >
          <Container>
            <div>
              <img
                alt="..."
                hight="500"
                width="500"
                align="right"
                src={require("assets/img/love1.png")}
              ></img>
            </div>
            <Col className="heading2" sm="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center"></CardHeader>
                  <CardBody>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <Input
                        placeholder="Where do you live?"
                        type="text"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                      />
                    </InputGroup>

                    <FormGroup>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "When’s your birthday ?" }}
                      />
                    </FormGroup>

                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <Input
                        placeholder="Email..."
                        type="email"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                      />
                    </InputGroup>

                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <Input
                        placeholder="Password..."
                        type="password"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <label className="lables">
                      <p>Almost done!</p>
                    </label>
                    <Link
                      to="login-page"
                      className="btn btn-warning shadow    btn-circle"
                    >
                      <i className="fa fa-arrow-right glypicon_color faa-passing animated"></i>
                    </Link>
                    <div>
                      <label className="lables">
                        <p>
                          Be signing up you agree to our Term of Service &
                          privacy Policy
                        </p>
                      </label>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}
export default FourthPage;
