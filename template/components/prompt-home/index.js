import { h, Component } from 'preact';
import style from './style';

class PromptHome extends Component {


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
			<div class={style.terminal}>
			    <div class={style.consolecontainer}>
				    <label class={style.info}>Type &nbsp;<a class={style.infoa} href="/help"> help </a>&nbsp;  to get started!</label>
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
export default PromptHome;
