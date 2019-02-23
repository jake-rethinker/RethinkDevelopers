import { h, Component } from 'preact';
import style from './style';
import PromptCommands from '../../components/prompt-commands';
import TopMenu from "../../components/top-menu";
import PromptHome from "../../components/prompt-home";


class Commands extends Component {

	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div class={style.home}>
				<div className={style.program}>
					<div className={style.menu}>
						<TopMenu />
					</div>
					<div className={style.consolewindow}>
						<PromptCommands />
					</div>
				</div>
			</div>

		);
	}
}

export default Commands;
