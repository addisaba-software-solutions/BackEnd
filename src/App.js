import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pusher from 'pusher-js'
import ChatApp from './components/chatManagement/chat.js'
import LoginForm from './components/login/login.js'
import Nav from './components/nav/nav'
import Body from './components/mainContent/body'
import Asider from './components/asider/asider'
import AddUserApp from './components/userManagement/addUser/addUserApp.js'
import ViewUser from './components/userManagement/viewUser/viewUser.js'
import AddQuery from './components/queryManagement/addQuery.js'
import AlterQuery from './components/queryManagement/alterQuery.js'
import ChatWith from './components/chatManagement/chatSomeOne.js'
import AuthRoute from './components/auth/AuthRoute.js'
import LoginAuth from './components/login/loginAuth.js'
import $ from 'jquery'
import { getAllUser, getMessage, sendMessage } from './components/store/userAction';
class App extends Component {
	render() {

		return (
			<Router>
				<Switch>
					<LoginAuth
						path="/login"
						component={LoginForm}
						exact
					/>


					<div id="container" className="">
						<div className='container-fluid page-body-wrapper'>
							<AuthRoute component={Asider} />
							<AuthRoute component={Nav} />
							<section id="main-content">
								<section className="wrapper">
									<AuthRoute
										path="/chat_with"
										component={AddUserApp}
										exact
									/>
									<AuthRoute
										path="/"
										component={Body}
										exact
									/>


									<AuthRoute
										path="/add_user"
										component={AddUserApp}
									/>
									<AuthRoute
										path="/view_user"
										component={ViewUser}
									/>
									<AuthRoute
										path="/add_query"
										component={AddQuery}
									/>
									<AuthRoute
										path="/alter_query"
										component={AlterQuery}
									/>
									<Route
										path="/chat"
										component={ChatApp}

									/>

									<AuthRoute component={ChatWith} />

								</section>

							</section>


						</div>

					</div>
				</Switch>
			</Router>

		)
	}
}
function mapStateToProps(state) {
	return {
		message: state.capd.messages,

	}
}

const mapDispatchToProps = {
	getMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
