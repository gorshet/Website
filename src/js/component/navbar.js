import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/yoyo_logo.jpg";
import "../../styles/navbar.scss";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar text-light bg-secondary mb-3">
				<img
					style={{
						width: "30px",
						height: "40px"
					}}
					src={rigoImage}
				/>

				<Link to="/">
					<span className="text-light font-italic h2">Yoyo&#39;s alley</span>
				</Link>
				<Link to="/">
					<button className="btn bg-secondary">
						<i className="fas fa-chess-queen" />
						Home
					</button>
				</Link>
				<Link to="/product">
					<button className="btn bg-secondary">
						<i className="fas fa-dolly" />
						Product
					</button>
				</Link>
				<Link to="/archive">
					<button className="btn bg-secondary">
						<i className="fas fa-sign-in-alt" />
						Archive
					</button>
				</Link>
				<Link to="/login">
					<button className="btn bg-secondary">
						<i className="fas fa-chess-queen" />
						Login
					</button>
				</Link>
			</nav>
		);
	}
}
