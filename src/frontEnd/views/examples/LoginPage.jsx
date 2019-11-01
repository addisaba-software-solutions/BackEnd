import React from "react";

import classnames from "classnames";
import "../../views/IndexSections/local.css"
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  
  InputGroup,
 
  Container,
  Col
} from "reactstrap";

// core components

class LoginPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
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
        <div className="page-header header-filter">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/page7.png") + ")"
            }}
          ></div>
          <div className="content">
            <Container>
              {" "}
              <div className="heading2">
                <h1 align="left"> Login</h1>
              </div>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                <Form className="form">
                    <CardHeader className="text-center"></CardHeader>
                    <CardBody>
                    <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus
                            })}
                          >
                            
                            <Input
                              placeholder="Email"
                              type="email"
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                            
                            
                            
                            <Input
                              placeholder="Password"
                              type="password"
                              onFocus={e =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ passwordFocus: false })
                              }
                            />
                          </InputGroup>
                      <Button
                        className="btn-circle2"
                        color="primary"
                        type="button"
                        onClick={e => e.preventDefault()}
                      
                      >
                        Login
                      </Button>
                    </CardBody>
                    <CardFooter className="text-center">
                      <div className="pull-left"  color="default">
                        <h6>
                          <a
                            className="link"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Create Account
                          </a>
                        </h6>
                      </div>
                      <div className="pull-right">
                        <h6>
                          <a
                            className="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Need Help?
                          </a>
                        </h6>
                      </div>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
export default LoginPage;
