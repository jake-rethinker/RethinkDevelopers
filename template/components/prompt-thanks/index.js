import { h, Component } from 'preact';
import style from './style';

class PromptThanks extends Component {

	constructor(props) {
		super(props);
		this.state = {
		    routeValue: '',
			email: '',
			phone: '',
			message: '',
			name: '',
			cname: ''
		};
	}

	changeURL(args) {
	    window.location = args;
	}


	onKeyPress = (event) => {
	    if (event.key === 'Enter') {
			this.setState({
				routeValue: event.target.value
			});
			this.changeURL(this.state.routeValue);
		}
	};


	render() {
		return (
			<div class={style.commandwindow}>
			    <div class={style.consolecontainer}>
				    <p class={style.para}>Thank you for reaching out to us, we'll be in contact with you shortly </p>
				</div>
				<div className={style.input}>
					<label htmlFor="cmd">C:\Websites\Developers></label> <input className={style.cmd}
						type="text"
						name="input"
						value={this.state.routeValue}
						id="cmd"
						onChange={this.updateRouteValue}
						onKeyPress={this.onKeyPress}
					                                                     />
				</div>
			</div>
		);
	}
}
export default PromptThanks;
