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
		<Carousel>
			<Carousel.Item>
				<img
				
					className="d-block w-100"
					
					src="https://www.bing.com/images/blob?bcid=TkPqDTOMAQUBxw"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.bing.com/images/blob?bcid=TmCvFGmjLwUBSQ"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.bing.com/images/blob?bcid=TlX3n1LXwAUBqxcxoNWLuD9SqbotqVTdP98"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</fragment>
);
