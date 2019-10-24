import React from 'react'
 import LoadingSpinner from './../../loader/loader.js';
 import FailToLoad from './../../feilToLoad/failToLoad.js';

    const API = 'http://localhost:8000/users';
    const DEFAULT_QUERY = '';

class ViewUser extends React.Component{
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
              <li><i className="fa fa-home"></i><a href="index.html">Home</a></li>
              <li><i className="fa fa-user"></i>Users</li>
            </ol>
          </div>
        </div>
        <div className="row">

          <div className="col-lg-12 col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2><i className="fa fa-flag-o red"></i><strong>Registered Users</strong></h2>
                <div className="panel-actions">
                  <a href="index.html#" className="btn-setting"><i className="fa fa-rotate-right"></i></a>
                  <a href="index.html#" className="btn-minimize"><i className="fa fa-chevron-up"></i></a>
                  <a href="index.html#" className="btn-close"><i className="fa fa-times"></i></a>
                </div>
              </div>
              <div className="panel-body">

              <table className="table table-striped table-advance table-hover">
                <tbody>
                  <tr>
                    <th><i className="icon_profile"></i> Full Name</th>
                    <th><i className="icon_calendar"></i> Date</th>
                    <th><i className="icon_mail_alt"></i> Email</th>
                    <th><i className="icon_pin_alt"></i> City</th>
                    <th><i className="icon_mobile"></i> Mobile</th>
                    <th><i className="icon_active"></i> Active</th>
                    <th><i className="icon_cogs"></i> Action</th>
                  </tr>
                  <tr>
                    <td>Angeline Mcclain</td>
                    <td>2004-07-06</td>
                    <td>dale@chief.info</td>
                    <td>Rosser</td>
                    <td>176-026-5992</td>

                    <td><i className="icon_check_alt2"></i></td>
                    <td>
                      <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2"></i></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2"></i></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2"></i></a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Mario Norris</td>
                    <td>2010-02-08</td>
                    <td>mildred@hour.info</td>
                    <td>Amarillo</td>
                    <td>945-547-5302</td>

                    <td><i className="icon_check_alt2"></i></td>
                    <td>
                      <div className="btn-group">
                        <a className="btn btn-primary" href="#"><i className="icon_plus_alt2"></i></a>
                        <a className="btn btn-success" href="#"><i className="icon_check_alt2"></i></a>
                        <a className="btn btn-danger" href="#"><i className="icon_close_alt2"></i></a>
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

export default ViewUser
