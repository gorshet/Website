import React from "react";
import { Link } from "react-router-dom";
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
					src="https://www.bing.com/images/blob?bcid=TpXyIgG0ngkBwQ"
				/>
				<Link to="/">
					<span className="text-light font-italic h2">Yoyo.s alley</span>
				</Link>

				<Link to="/">
					<button className="btn bg-secondary">Home</button>
				</Link>

				<Link to="/product/">
					<button className="btn bg-secondary">Product</button>
				</Link>
				<Link to="/archive">
					<button className="btn bg-secondary">Archive</button>
				</Link>
				<Link to="/login">
					<button className="btn bg-secondary">Login</button>
				</Link>
			</nav>
		);
	}
}
