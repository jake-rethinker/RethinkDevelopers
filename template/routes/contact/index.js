import { h, Component } from 'preact';
import style from './style';
import PromptContact from '../../components/prompt-contact';
import TopMenu from '../../components/top-menu';

class Contact extends Component {

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
						<PromptContact />
					</div>
				</div>
			</div>

		);
	}
}

export default Contact;
