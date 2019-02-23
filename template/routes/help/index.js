import { h, Component } from 'preact';
import style from './style';
import PromptHelp from '../../components/prompt-help';
import TopMenu from "../../components/top-menu";
import PromptHome from "../../components/prompt-home";


class Help extends Component {

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
						<PromptHelp />
					</div>
				</div>
			</div>

		);
	}
}

export default Help;
