import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { logUser } from '../redux/actions'

class PageLogin extends React.Component {

	constructor(props) {
		super(props);

		this.loginChanged = this.loginChanged.bind(this);
		this.logIn = this.logIn.bind(this);

		this.state = {
			login: ''
		}
	}

	loginChanged(e) {
		this.setState({ login: e.target.value });
	}
	
	logIn() {
    this.setState({ isLogging: true, error: null });
    
    const { 
      login
    } = this.state;

		this.props.logUser(login)
		.then(() => {
			if(this.props.isLogged) this.props.history.push("/list"); 
		});
  }

	render() {
		const { isLogging } = this.props;

		if(isLogging) {
      return <p>Logging ...</p>
    }

		return (
			<div>
				<label htmlFor="login">Login: </label>
				<input id="login" type="text" onChange={this.loginChanged}></input>

				<button onClick={this.logIn}>Log in</button>
			</div>
		);
	}
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
		isLogging: state.logging,
		isLogged: state.logged
  }
}

const mapDispatchToProps = (dispatch) => ({
  logUser: login => dispatch(logUser(login))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageLogin));