import { h, Component } from 'preact';
import style from './style';

class PromptAbout extends Component {


	constructor(props) {
		super(props);
		this.state = {
		    routeValue: ''
		};
	}

	updateRouteValue(event) {

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
					<p class={style.para}> #Rethink Developers is a company focused on developing software and technologies that will benefit patients with ALS and other neurodegenerative diseases</p>
				</div>
				<div class={style.input}>
					<label for="cmd">C:\Websites\Developers></label> <input class={style.cmd}
						type="text"
						name="input"
						value={this.state.routeValue}
						id="cmd"
						onChange={this.updateRouteValue}
						onKeyPress={this.onKeyPress}
						autoFocus
					                                                 />
			    </div>
			</div>
		);
	}
}
export default PromptAbout;
