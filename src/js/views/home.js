import React, { Component } from "react";
import { component, fragment } from "react";
import rigoImage from "../../img/yoyo_logo.jpg";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/home.scss";

export const Home = () => (
	<fragment>
		<div className="container-fluid home-page">
			<div className="row">
				<div className="col" />
			</div>
		</div>

		<div className="row">
			<div className="col 3">
				<header className="jumbotron container">
					<h2 className="display-3">Yoyo&#39;s alley</h2>
					<img
						style={{
							width: "130px",
							height: "140px"
						}}
						src={rigoImage}
					/>
					{/* <p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt
						possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
						numquam repellat.
					</p> */}
					<a href="/product" className="btn btn-primary btn-lg">
						Checkout these awesome pins!
					</a>
				</header>
			</div>
		</div>
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://i.ebayimg.com/images/g/m5MAAOSwPbdeE7qP/s-l1600.jpg"
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
					src="https://i.ebayimg.com/images/g/sKAAAOSww~VePljh/s-l1600.jpg"
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
					src="https://i.ebayimg.com/images/g/tpIAAOSwbTNeadLC/s-l1600.jpg"
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
