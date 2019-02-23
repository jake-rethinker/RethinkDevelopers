import { h, Component } from 'preact';
import style from './style';

class PromptHelp extends Component {


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
					<div class={style.commandline}>
					    <label class={style.commands}><a class={style.infoa} href="/about"> about </a>&nbsp; </label>
						<label class={style.info}>Get to know a little bit about our company</label>
					</div>
					<div class={style.commandline}>
						<label className={style.commands}><a class={style.infoa} href="/contact"> contact </a>&nbsp;</label>
						<label className={style.info}>Reach out to us for commercial work </label>
					</div>
					<div class={style.commandline}>
						<label className={style.commands}><a class={style.infoa} href="/commands"> commands </a>&nbsp;</label>
						<label className={style.info}>Get a full list of commands</label>
					</div>
					<br />
					<br />
				</div>
				<div class={style.input}>
					<label for="cmd">C:\Websites\Developers>help</label>
			    </div>
				<div className={style.input}>
					<label htmlFor="cmd">C:\Websites\Developers></label> <input className={style.cmd}
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
export default PromptHelp;
