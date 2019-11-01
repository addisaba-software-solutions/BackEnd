import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import classnames from "classnames";
// reactstrap components
import {
 
  NavItem,
  NavLink,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components



class Home  extends React.Component {
  
  componentDidMount() {
    document.body.classList.toggle("home-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("home-page");
  } 
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
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
      <IndexNavbar />
      <div className="wrapper">
      
        <div className="section">
          <Container>
          


   
        <Row >
          

            <Col>
                <Card >
                <CardHeader >
                  <Nav className="justify-content-center" role="tablist" tabs>
                  <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 1
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-spaceship" />
                        Share your thoughts
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 2
                        })}
                        onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                        Image
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.iconTabs}
                  >
                    <TabPane tabId="link1">
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. <br />
                        <br />
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI.
                      </p>
                    </TabPane>
                    <TabPane tabId="link2">
                      <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas. <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
                <Card >
                    <CardHeader>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                            <div class="media m-0">
			   <div class="d-flex mr-3">
				<a href="#m"><img class="img-fluid rounded-circle" src={require("assets/img/ryan.jpg")} alt="User"/></a>
			   </div>
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0">@LeeCross</div>
                                    <div className="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                               
                                    
                        <UncontrolledDropdown>
                        <DropdownToggle
                          caret
                          color="default"
                          href="#pablo"
                          nav
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            aria-hidden={true}
                            className="now-ui-icons ui-1_settings-gear-63"
                          ></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Save
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Hide
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Report
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                                
                            </div>
                            </div>
                        </CardHeader>

                   
                    <CardBody>
                        <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>10 min ago</div>
                        <a className="card-link" href="#b">
                            <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                        </a>

                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                    </CardBody>
                    <CardFooter >
                        <div className="content_div d-flex justify-content">
                          <div>
                        <sup className="colo">999</sup>
                        <a href="#l" className="card-link"><i className="fa fa-heart"></i> Like</a>
                          </div>
                          <div>
                             <sup className="colo">999</sup>
                        <a href="#c" className="card-link"><i className="fa fa-comment-alt"></i> Comment</a>
                            </div>
                            <div>
                             <sup className="colo">999</sup>
                        <a href="#s" className="card-link"><i className="fa fa-share"></i> Share</a>
                            </div>
             
                        </div>
                    </CardFooter>
                </Card>
 
                <Card>
                    <CardHeader>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                            <div class="media m-0">
			   <div class="d-flex mr-3">
				<a href="#b"><img class="img-fluid rounded-circle" src={require("assets/img/julie.jpg")} alt="User"/></a>
			   </div>
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0">@Julie</div>
                                    <div className="h7 text-muted">Julie Lee Cross</div>
                                </div>
                            </div>
                            <div>
                               
                                    
                        <UncontrolledDropdown>
                        <DropdownToggle
                          caret
                          color="default"
                          href="#pablo"
                          nav
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            aria-hidden={true}
                            className="now-ui-icons ui-1_settings-gear-63"
                          ></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Save
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Hide
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Report
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                                
                            </div>
                            </div>
                        </CardHeader>

                   
                    <CardBody>
                        <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>12 hr ago</div>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                        <img class="post_img " src={require("assets/img/julie.jpg")} alt="User"/>
                    </CardBody>
                    <CardFooter >
                   





                    <Row  >
    <Col >
   
                        <a href="#l" className="card-link"><i className="fa fa-heart"></i> Like</a>
    </Col>
    <Col xs="6">
    
                        <a href="#c" className="card-link"><i className="fa fa-comment"></i>Comment</a>
    </Col>
    <Col >
   
                        <a href="#s" className="card-link"><i className="fa fa-share"></i> Share</a>
    </Col>
  </Row>
                         
             
                        
                    </CardFooter>
                </Card>
 
                <Card>
                    <CardHeader>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                            <div class="media m-0">
			   <div class="d-flex mr-3">
				<a href="#b"><img class="img-fluid rounded-circle" src={require("assets/img/julie.jpg")} alt="User"/></a>
			   </div>
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0">@Julie</div>
                                    <div className="h7 text-mute">Julie Lee Cross</div>
                                </div>
                            </div>
                            <div>
                               
                                    
                        <UncontrolledDropdown>
                        <DropdownToggle
                          caret
                          color="default"
                          href="#pablo"
                          nav
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            aria-hidden={true}
                            className="now-ui-icons ui-1_settings-gear-63"
                          ></i>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Save
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Hide
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Report
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                                
                            </div>
                            </div>
                        </CardHeader>

                   
                    <CardBody>
                        <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>12 hr ago</div>
                        <img class="post_img" src={require("assets/img/julie.jpg")} alt="User"/>
                    </CardBody>
                    <CardFooter >
                    <div className="content_div d-flex justify-content">
                          <div>
                        <sup className="colo">999</sup>
                        <a href="#l" className="card-link"><i className="fa fa-heart"></i> Like</a>
                          </div>
                          <div>
                             <sup className="colo">999</sup>
                        <a href="#c" className="card-link"><i className="fa fa-comment-alt"></i> Comment</a>
                            </div>
                            <div>
                             <sup className="colo">999</sup>
                        <a href="#s" className="card-link"><i className="fa fa-share"></i> Share</a>
                            </div>
             
                        </div>
                    </CardFooter>
                </Card>
             </Col>



            <Col >
                <Card className="cards">
                    <div className="card-body">
                        <h5 className="card-title">Reminder</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Date</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#b" className="card-link">Card link</a>
                        <a href="#b" className="card-link">Another link</a>
                    </div>
                </Card>
              
            </Col>

            <Col>


<Card>
<CardHeader>
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
            <div class="media m-0">
<div class="d-flex mr-3">
<a href="#b"><img 
class="rounded-circle img-raised" 
src={require("assets/img/ryan.jpg")} 
alt="User"/></a>
</div>
                </div>
                <div className="ml-2">
                    <div className="h5 m-0">@LeeCross</div>
                 
                </div>
            </div>
            <div>  
            </div>
            </div>
        </CardHeader>
    <CardBody>
        
    <div class="d-flex mr-3">
</div>
        
        <div className="h7 text-muted">Fullname : Miracles Lee Cross</div>
        <div className="h7">Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,
            etc.
        </div>
    </CardBody>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">
            <div className="h6 text-muted">Followers</div>
            <div className="h5">5.2342</div>
        </li>
        <li className="list-group-item">
            <div className="h6 text-muted">Following</div>
            <div className="h5">6758</div>
        </li>
        <li className="list-group-item">Vestibulum at eros</li>
    </ul>
</Card>
</Col>

        </Row>
   




          </Container>
        </div>
        
      </div>
    </>
  );
}
}

export default Home;
