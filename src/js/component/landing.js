import React, { Component } from "react";
import { component, fragment } from "react";
import Carousel from "react-bootstrap/Carousel";

export const Landing = () => (
	<fragment>
		<div className="container">
			<div className="row">
				<div className="col" />
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
					src="https://www.bing.com/images/blob?bcid=ThOUOJgwqQYBIQ"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide stage</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</fragment>
);
