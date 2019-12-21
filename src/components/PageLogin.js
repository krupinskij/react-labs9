import React from 'react'

class PageLogin extends React.Component {

	render() {

		return (
			<div>
				<label htmlFor="login">Login: </label>
				<input id="login" type="text"></input>

				<button>Log in</button>
			</div>
		);
	}
}

export default PageLogin;