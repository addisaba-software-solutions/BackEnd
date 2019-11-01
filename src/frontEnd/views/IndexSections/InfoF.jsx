import React from "react";
//import { Link } from "react-router-dom";
// react plugin used to create switch buttons

import {
 
  Container,
  Col,
  Card,
  Row
  
} from "reactstrap";
import "./local.css";
// core components

function InfoF() {
 
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/page2.png") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "500px"
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
           
        <Col>
          <div className="heading" >
            <p> Our dating platform is like a breath of fresh air.
                 Clean and trendy design with ready to use 
                 features we are sure you will love.</p>
           
          </div>
          </Col>
          <div className="upup"> 
        
          <Row className="upup">
            <Col>
            
            
            <Card className="cardsofInfo">
                    <div className="card-body">
                       
                        <p className="cardp">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#b" className="card-link">Card link</a>
                        <a href="#b" className="card-link">Another link</a>
                    </div>
                </Card>
            
            </Col>

            <Col>
            
            
            <Card className="cardsofInfo">
                    <div className="card-body">
                       
                        <p className="cardp">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#b" className="card-link">Card link</a>
                        <a href="#b" className="card-link">Another link</a>
                    </div>
                </Card>
            
            </Col>
            <Col>
            
            
            <Card className="cardsofInfo">
                    <div className="card-body">
                       
                        <p className="cardp">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#b" className="card-link">Card link</a>
                        <a href="#b" className="card-link">Another link</a>
                    </div>
                </Card>
            
            </Col>
             <Col>
            
            
            <Card className="cardsofInfo">
                    <div className="card-body">
                       
                        <p className="cardp">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#b" className="card-link">Card link</a>
                        <a href="#b" className="card-link">Another link</a>
                    </div>
                </Card>
            
            </Col>
           
            
            
           
          

</Row>

</div>  
          
        </Container>
      </div>
    </>
  );
}

export default InfoF;