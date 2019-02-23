import { h, Component } from 'preact';
import style from './style';
import Headroom from 'react-headroom';
const Logo = require('../../assets/laptop.png');


class Header extends Component {
	constructor() {
		super();
		this.state ={
			items: ['Home', 'About', 'Login']
		};
	}
	render() {
		return (
			<Headroom class={style.headroom} wrapperStyle={{ position: 'fixed', left: '0', right: '0', fontsize: '25px' }}>
				<nav className="navbar navbar-default">
					<a className="navbar-brand" href="/">
						<img src={Logo} width="175" height="175"
							className="d-inline-block align-top" alt=""
						/>
					</a>
				</nav>
			</Headroom>
		);
	}
}

export default Header;
