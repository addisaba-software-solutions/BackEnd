import React,{useState,useEffect} from 'react'

import { Link } from "react-router-dom";
//  import swal from 'sweetalert';
import LoadingSpinner from './../loader/loader.js';
import FailToLoad from './../feilToLoad/failToLoad.js';
const API = 'http://localhost:8080';
const DEFAULT_QUERY = '/';

class AlterQuery extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
    .then(res => res.json())
    .then(
      (result) => {
        console.log("the result:"+result);
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

  }
  render(){
    const tdImg={
      height:'18px',
      marginTop:'-2px'
    }	;
    const style={
      background:'#f3f3f3',
      fontSize:'20px',

    }

    const height380={
      width:'380px'
    } ;

    const textAreaBorderRemove={
      border:'none',
      background:'#ffffff'
    } ;
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <FailToLoad  />
      )

    }
    else if (!isLoaded) {
      return(

        <LoadingSpinner />

      )
    }


    else{
      return (


        <div className="container bg-light">
        <div className="row">
        <div className="col-lg-12" >
        <h3 className="page-header"><i className="fa fa-laptop"></i> Alter Users</h3>
        <ol className="breadcrumb" style={{background:'#f3f3f3',fontSize:'20px'}}>
        <li><i className="fa fa-home"></i><Link to='/'>Home</Link></li>
        <li><i className="fa fa-user"></i>Query</li>
        </ol>
        </div>
        </div>
        <div className="row">

        <div className="col-lg-12 col-md-12">
        <div className="panel panel-default">
        <div className="panel-heading">
        <h2><i className="fa fa-flag-o red"></i><strong>Alter Query</strong></h2>
        <div className="panel-actions">
        <Link to='/' className="btn-setting"><i className="fa fa-rotate-right"></i></Link>
        <Link to='/' className="btn-minimize"><i className="fa fa-chevron-up"></i></Link>
        <Link to='/' className="btn-close"><i className="fa fa-times"></i></Link>
        </div>
        </div>
        <div className="panel-body">

        <table class="table table-striped table-advance table-hover">
        <tbody>
        <tr>
        <th><i class="icon_profile"></i> Full Name</th>

        <th><i></i> order</th>
        <th><i class="icon_mail_alt"></i> Message</th>

        <th><i class="icon_cogs"></i> Action</th>
        </tr>
        <tr>
        <td className='col-lg-2'>Endalkh belete</td>
        <td className='col-lg-1'>2</td>
        <td className='col-lg-6'>
        <div className="form-group col-lg-12">
        <textarea className="form-control" name="message" rows="3" readOnly
        style={{ border:'none',background:'#ffffff'}}> Message</textarea>
        <div className="validation"></div>
        </div>
        </td>


        <td className='col-lg-2'>
        <div class="btn-group">
        <Link class="btn btn-primary"  to='/add_query'><i class="icon_plus_alt2" ></i></Link>
        <Link class="btn btn-primary"  onClick={(e)=>this.Delete(e)}><i class="fa fa-edit" ></i></Link>
        <a class="btn btn-danger" href="#"><i class="icon_close_alt2"></i></a>
        </div>
        </td>
        </tr>


        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>

      )
    }
  }
}

export default AlterQuery
