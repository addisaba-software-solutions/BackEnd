import React from 'react';
import { Link } from "react-router-dom";
class Asider extends React.Component {
  render() {
    return (

      <aside>
        <div id="sidebar" className="nav-collapse ">
          <ul className="sidebar-menu">
            <li className="active" >
              <Link className="" to='/'>
                <i className="icon_house_alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="sub-menu">
              <a href="javascript:;" className="">
                <i className="icon_profile"></i>
                <span>Manage User</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><Link to="/add_user">Add User</Link></li>
                <li><Link to="/view_user">Alter User</Link></li>
              </ul>
            </li>
            <li className="active" >
              <Link className="" to='/chat'>
                <i className="icon_house_alt"></i>
                <span>Chat</span>
              </Link>
            </li>
            <li className="sub-menu">
              <a href="javascript:;" className="">
                <i className="icon_desktop"></i>
                <span>Manage Report</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><Link to="/view">View Reports</Link></li>
                <li><Link to="/view">Contact User</Link></li>
                <li><Link to="/view">take Action </Link></li>
              </ul>
            </li>
            <li>
              <a className="" href="widgets.html">
                <i className="icon_genius"></i>
                <span>Widgets</span>
              </a>
            </li>
            <li>
              <a className="" href="chart-chartjs.html">
                <i className="icon_piechart"></i>
                <span>Charts</span>

              </a>

            </li>

            <li className="sub-menu">
              <a href="#" className="">
                <i className="icon_table"></i>
                <span>Client Info</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><a className="" href="basic_table.html">All Clients</a></li>
                <li><a className="" href="basic_table.html"></a></li>
              </ul>
            </li>

            <li className="sub-menu">
              <a href="#" className="">
                <i className="icon_documents_alt"></i>
                <span>Manage Query</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><Link to='/add_query'> Add Query </Link> </li>
                <li><Link className="" to='/alter_query'><span>Alter Query</span></Link></li>

              </ul>
            </li>

            <li className="sub-menu">
              <a href="#" className="">
                <i className="icon_documents_alt"></i>
                <span>More</span>
                <span className="menu-arrow arrow_carrot-right"></span>
              </a>
              <ul className="sub">
                <li><a className="" href="profile.html">Profile</a></li>
                <li><a className="" href="login.html"><span>Login Page</span></a></li>
                <li><a className="" href="contact.html"><span>Contact Page</span></a></li>
                <li><a className="" href="blank.html">Blank Page</a></li>
                <li><a className="" href="404.html">404 Error</a></li>
              </ul>
            </li>

          </ul>
        </div>

      </aside>


    )
  }
}

export default Asider