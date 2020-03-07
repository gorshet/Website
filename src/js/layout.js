import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Product } from "./views/product";
import { Archive } from "./views/archive";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Login } from "./component/login.js";
import { Landing } from "./component/landing";
//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/demo" component={Demo} />
						<Route path="/login" component={Login} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/product" component={Product} />
						<Route path="/archive" component={Archive} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
