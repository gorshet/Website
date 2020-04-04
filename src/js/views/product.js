import React from "react";

import "../../styles/product.scss";

export const Product = () => (
	<div>
		{/*---- Include the above in your HEAD tag --------*/}
		<link
			href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
			rel="stylesheet"
			id="bootstrap-css"
		/>
		{/*---- Include the above in your HEAD tag --------*/}
		<div className="container">
			<div className="row">
				<div className="col-lg-12 my-3">
					<div className="pull-right">
						<div className="btn-group">
							{/* <button className="btn btn-info" id="list">
								List View
							</button>
							<button className="btn btn-danger" id="grid">
								Grid View
							</button> */}
						</div>
					</div>
				</div>
			</div>
			<div id="products" className="row view-group">
				<div className="item col-xs-4 col-lg-4">
					<div className="thumbnail card">
						<div className="img-event">
							<img
								className="group list-group-image img-fluid"
								src="https://i.ebayimg.com/images/g/m5MAAOSwPbdeE7qP/s-l1600.jpg"
								alt=""
							/>
						</div>
						<div className="caption card-body">
							<h4 className="group card-title inner list-group-item-heading">Product title</h4>
							<p className="group inner list-group-item-text">
								Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
							</p>
							<div className="row">
								<div className="col-xs-12 col-md-6">
									<p className="lead">$21.000</p>
								</div>
								<div className="col-xs-12 col-md-6">
									<a className="btn btn-success">
										<a href="/checkout">Add to cart</a>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item col-xs-4 col-lg-4">
					<div className="thumbnail card">
						<div className="img-event">
							<img
								className="group list-group-image img-fluid"
								src="https://i.ebayimg.com/images/g/sKAAAOSww~VePljh/s-l1600.jpg"
								alt=""
							/>
						</div>
						<div className="caption card-body">
							<h4 className="group card-title inner list-group-item-heading">Product title</h4>
							<p className="group inner list-group-item-text">
								Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
							</p>
							<div className="row">
								<div className="col-xs-12 col-md-6">
									<p className="lead">$21.000</p>
								</div>
								<div className="col-xs-12 col-md-6">
									<a className="btn btn-success" href="http://www.jquery2dotnet.com">
										<a href="/checkout">Add to cart</a>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item col-xs-4 col-lg-4">
					<div className="thumbnail card">
						<div className="img-event">
							<img
								className="group list-group-image img-fluid"
								src="https://i.ebayimg.com/images/g/tpIAAOSwbTNeadLC/s-l1600.jpg"
								alt=""
							/>
						</div>
						<div className="caption card-body">
							<h4 className="group card-title inner list-group-item-heading">Product title</h4>
							<p className="group inner list-group-item-text">
								Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
							</p>
							<div className="row">
								<div className="col-xs-12 col-md-6">
									<p className="lead">$21.000</p>
								</div>
								<div className="col-xs-12 col-md-6">
									<a className="btn btn-success" href="http://www.jquery2dotnet.com">
										<a href="/checkout">Add to cart</a>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item col-xs-4 col-lg-4">
					<div className="thumbnail card">
						<div className="img-event">
							<img
								className="group list-group-image img-fluid"
								src="https://i.ebayimg.com/images/g/EUAAAOSwAD5eadNC/s-l500.jpg"
								alt=""
							/>
						</div>
						<div className="caption card-body">
							<h4 className="group card-title inner list-group-item-heading">Product title</h4>
							<p className="group inner list-group-item-text">
								Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
							</p>
							<div className="row">
								<div className="col-xs-12 col-md-6">
									<p className="lead">$21.000</p>
								</div>
								<div className="col-xs-12 col-md-6">
									<a className="btn btn-success" href="http://www.jquery2dotnet.com">
										<a href="/checkout">Add to cart</a>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item col-xs-4 col-lg-4">
					<div className="thumbnail card">
						<div className="img-event">
							<img
								className="group list-group-image img-fluid"
								src="https://i.ebayimg.com/images/g/TN4AAOSwc1BeadEY/s-l500.jpg"
								alt=""
							/>
						</div>
						<div className="caption card-body">
							<h4 className="group card-title inner list-group-item-heading">Product title</h4>
							<p className="group inner list-group-item-text">
								Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
							</p>
							<div className="row">
								<div className="col-xs-12 col-md-6">
									<p className="lead">$21.000</p>
								</div>
								<div className="col-xs-12 col-md-6">
									<a className="btn btn-success" href="http://www.jquery2dotnet.com">
										<a href="/checkout">Add to cart</a>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item col-xs-4 col-lg-4">
					<div className="thumbnail card">
						<div className="img-event">
							<img
								className="group list-group-image img-fluid"
								src="https://i.ebayimg.com/images/g/a5YAAOSwDDdeadBe/s-l500.jpg"
								alt=""
							/>
						</div>
						<div className="caption card-body">
							<h4 className="group card-title inner list-group-item-heading">Product title</h4>
							<p className="group inner list-group-item-text">
								Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
							</p>
							<div className="row">
								<div className="col-xs-12 col-md-6">
									<p className="lead">$21.000</p>
								</div>
								<div className="col-xs-12 col-md-6">
									<a className="btn btn-success" href="http://www.jquery2dotnet.com">
										<a href="/checkout">Add to cart</a>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
