import { h, Component } from 'preact';
import style from './style';
import PromptAbout from '../../components/prompt-about';
import TopMenu from "../../components/top-menu";
import PromptHome from "../../components/prompt-home";


class About extends Component {

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
						<PromptAbout />
					</div>
				</div>
			</div>

		);
	}
}

export default About;
