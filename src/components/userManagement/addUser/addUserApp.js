  import React from 'react'
  import { Link } from "react-router-dom";
  import axios from 'axios'
  import Error from './../../error/Error.jsx'
  import API from './../../api.js'
  const DEFAULT_QUERY = '';
  class AddUserApp extends React.Component{
constructor(props){
  super(props);
  this.state={
    firstName: '',
    lastName:  '',
    email:     '',
    phone:     '',
    status:    'active',
    role:'user',
    gender  :'Female',
    password:'1234546789',
    c_password:'1234546789',
    errors:{},
  }
this.handleChange=this.handleChange.bind(this);
this.handleUserRegistration=this.handleUserRegistration.bind(this);
}

handleChange(event){
this.setState({
  [event.target.name]:event.target.value,
});
}

handleUserRegistration(e) {
  e.preventDefault();
  const data={
  firstName:this.state.firstName,
  lastName:this.state.lastName,
  email:this.state.email,
  phone:this.state.phone,
  status:'active',
  role:this.state.role,
  gender:this.state.gender,
  password:this.state.password,
  c_password:this.state.c_password,
}

axios.request({
method:'get',
url:API+'/register',
params:data,
})
.then(function(res){
   localStorage.setItem('token',res.data.success.token);
   localStorage.setItem('firstName',res.data.success.firstName);
   localStorage.setItem('lastName',res.data.success.lastName);
   localStorage.setItem('email',res.data.success.email);
   })
.catch(ex =>{
  this.setState({ errors:ex.response.data.error})
})
}

render(){

            return (
            <div className="container " style={{background:'#f3f3f3',paddingBottom:'10%'}}>
              <div className="row">
              <div className="col-lg-12" >
                <ol className="breadcrumb" style={{
                background:'#f3f3f3',
                fontSize:'20px',
                }}>
                  <li><i className="fa fa-home"></i><Link path='/'>Home</Link></li>
                  <li><i className="fa fa-user"></i>Add User</li>
                </ol>
              </div>
            </div>

    <div className='row'>
    <form className='col-lg-6' onSubmit={this.handleUserRegistration} style={{background:'#f3f3f3'}}>
        <div className="form-group">
    <input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.handleChange} placeholder="Your First Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
</div>
     <div className="form-group">
                    <input type="text" name="lastName" className="form-control" value={this.state.lastName}  onChange={this.handleChange} placeholder="Your Last Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />

                  </div>
                   <div className="form-group">
                    <input type="text" name="email" className="form-control" value={this.state.email}  onChange={this.handleChange} placeholder="Your Email" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />

                  </div>
                   <div className="form-group">
                    <input type="text" name="phone" className="form-control" value={this.state.phone}  onChange={this.handleChange} placeholder="Your Phone Number" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />

                  </div>

                  <div className="form-group">
                    <select className="form-control" value={this.state.gender}  onChange={this.handleChange} name='gender'>
                    <option>Female</option>
                    <option>Male</option>
                    </select>
                  </div>
                  <div className="form-group">
                  <select className="form-control" name="role" value={this.state.role}  onChange={this.handleChange}  >
                  <option>User</option>
                  <option>Admin</option>
                </select>
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Register"  />

         </form>
    </div>

            </div>


                )
            }
        }

        export default AddUserApp
