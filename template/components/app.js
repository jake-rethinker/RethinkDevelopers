import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Redirect from './Redirect';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import About from '../routes/about';
import Help from '../routes/help';
import Commands from '../routes/commands';
import Contact from '../routes/contact';
import PromptContact from '../components/prompt-contact';
import Thanks from '../routes/thanks';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Redirect path="/" to="/home" />
					<Home path="/home" />
					<Redirect path="/!home" to="/home" />
					<Redirect path="Home" to="/home" />
					<Redirect path="HOME" to="/home" />
					<About path="/about" />
					<Redirect path="/!about" to="/about" />
					<Redirect path="/About" to="/about" />
					<Redirect path="/ABOUT" to="/about" />
					<Help path="/help" />
					<Redirect path="/!help" to="/help" />
					<Redirect path="/Help" to="/help" />
					<Redirect path="/HELP" to="/help" />
					<Commands path="/commands" />
					<Redirect path="/!commands" to="/commands" />
					<Redirect path="/COMMANDS" to="/commands" />
					<Redirect path="/Commands" to="/commands" />
					<Contact path="/contact" component={PromptContact} />
					<Redirect path="/CONTACT" to="/contact" />
					<Redirect path="!contact" to="/contact" />
					<Thanks path="/thanks" />

				</Router>
			</div>
		);
	}
}
