import { h, Component } from 'preact';
import style from './style';

class TopMenu extends Component {
	constructor() {
		super();
		this.state ={

		};
	}
	render() {
		return (
			<div class={style.menu}>
				<div class={style.name}>
					<p>Rethink Developers</p>
				</div>
			</div>
		);
	}
}
export default TopMenu;
