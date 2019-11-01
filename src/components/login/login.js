
import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import axios from 'axios'
import Error from './../error/Error.jsx';

const API = "http://localhost:8000/login";

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:     '',
      password: '',
      isFetching:false,
      isLogging:false,
      errors:{},
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleUserLogin=this.handleUserLogin.bind(this);
  }
  handleChange(event){
  this.setState({
    [event.target.name]:event.target.value,
  });
  }
  handleUserLogin(e) {
    const token=localStorage.getItem('token');
    e.preventDefault();
    const data={
    email:this.state.email,
    password:this.state.password,
  }
  this.setState({
    isFetching:true,
  })

  axios.request({
  method:'get',
  url:API,
  params:data,
  headers:{
  Authorization:'Bearer'+ token,
  'Content-Type':'application/application-json'
  }
  })
  .then(res=>{
     localStorage.setItem('token',res.data.success.token);
     localStorage.setItem('id',res.data.success.id);
     localStorage.setItem('firstName',res.data.success.firstName);
     localStorage.setItem('lastName',res.data.success.lastName);
     localStorage.setItem('email',res.data.success.email);
     console.log(localStorage.getItem('token'));
     this.setState({
       isLogging:true,
     });
     })
  .catch(ex =>{
    this.setState({isFetching:false,errors:ex.response.data})
  })
  }
  render(){
    if(this.state.isLogging){
    this.props.history.push("/");
    }
    return (



          <div className="content"  style={{margin:'10%'}}>
            <Row style={{margin:'10%',height:'400px'}} >
            <Col md={3}/>
              <Col md={6} mdOffset={4} xs={10} xsOffset={1}  style={{background:'#f3f3f3'}}>
                <form className="form-horizontal" noValidate onSubmit={this.handleUserLogin}>

                  <fieldset>
                    <legend className="text-center">
                      <h1>
                        <i className="fa fa-3x fa-user-circle" aria-hidden="true" />
                      </h1>
                      <h2>Login</h2>
                    </legend>
                    <Error
                      error={
                        this.state.errors.error ? this.state.errors.error : null
                      }
                    />
                    <div className="form-group">
                      <label htmlFor="inputEmail" className="col-lg-2 control-label">
                        Email
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail"
                          placeholder="Email"
                          name='email'
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="inputPassword"
                        className="col-lg-2 control-label"
                      >
                        Password
                      </label>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword"
                          placeholder="Password"
                          name='password'
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <Col lg={12} lgOffset={2}>
                        <Button type="submit"
                          className="login-button btn-block btn-alert"
                          bsStyle="primary"
                          disabled={this.state.isFetching}

                        >
                        {this.state.isFetching ? (
                          <span>
                            login in... &nbsp;
                            <i className="fa fa-spinner fa-pulse fa-fw" />
                          </span>
                        ) : (
                          <span>Login</span>
                        )}

                        </Button>
                      </Col>
                    </div>
                  </fieldset>
                </form>
              </Col>
            </Row>
          </div>
        );
      }
}
export default LoginForm
