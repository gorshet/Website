import React, { Component } from "react";
import { component, fragment } from "react";
import Carousel from "react-bootstrap/Carousel";

export const Landing = () => (
	<fragment>
		<div className="container">
			<div className="row">
				<div className="col">
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
						<div className="container">
							<a className="navbar-brand" href="#">
								Start Bootstrap
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarResponsive"
								aria-controls="navbarResponsive"
								aria-expanded="false"
								aria-label="Toggle navigation">
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbarResponsive">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item active">
										<a className="nav-link" href="#">
											Home
											<span className="sr-only">(current)</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											About
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Services
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Contact
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
		<div className="row 2">
			<div className="col 2">
				<header className="jumbotron my-4">
					<h1 className="display-3">A Warm Welcome!</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt
						possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
						numquam repellat.
					</p>
					<a href="#" className="btn btn-primary btn-lg">
						Call to action!
					</a>
				</header>
			</div>
		</div>
		<div className="row 3">
			<div className="col3">
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
						<li data-target="#carouselExampleIndicators" data-slide-to="1" />
						<li data-target="#carouselExampleIndicators" data-slide-to="2" />
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="https://s1.thcdn.com/productimg/300/300/11468185-4804502981934093.jpg"
								className="d-block w-100"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://experiencethemistress.com/wp-content/uploads/2017/11/2017-Funko-Disney-Pop-Vinyl-Figure-2-Pack-Cruella-De-Vil-Ursula-Hot-Topic-P001-300x300.jpg"
								className="d-block w-100"
								alt="..."
							/>
						</div>
						<div className="carousel-item">
							<img
								src="https://www.herohabit.com/wp-content/uploads/2017/07/Funko-Pop-Disney-306-Scrooge-McDuck-300x300.jpg"
								className="d-block w-100"
								alt="..."
							/>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	</fragment>
);
