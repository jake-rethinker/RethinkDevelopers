import { h, Component } from 'preact';
import style from './style';
import PromptHome from '../../components/prompt-home';
import TopMenu from '../../components/top-menu';

class Home extends Component {

	constructor() {
		super();
		this.state = {
		};
	}

	render() {
		return (
			<div class={style.home}>
				<div class={style.program}>
					<div class={style.menu}>
						<TopMenu />
					</div>
					<div className={style.consolewindow}>
						<PromptHome />
					</div>
				</div>
			</div>

		);
	}
}

export default Home;
