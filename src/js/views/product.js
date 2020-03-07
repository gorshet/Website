import React from "react";

import "../../styles/product.scss";

export const Product = () => (
	<div>
		<link
			href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
			rel="stylesheet"
			id="bootstrap-css"
		/>
		{/*---- Include the above in your HEAD tag --------*/}
		<div className="container">
			<div className="row">
				<div className="col-xs-4 item-photo">
					<img style={{ maxWidth: "100%" }} src="https://www.bing.com/images/blob?bcid=TkPqDTOMAQUBxw" />
				</div>

				<div className="col-xs-5" style={{ border: "0px solid blue" }}>
					{/* Discription of product*/}
					<h3>Crying Princess</h3>
					<h5 style={{ color: "#337ab7" }}>
						Sold by yoyos alley <a href="#">Queen</a> ·{" "}
						<small style={{ color: "#337ab7" }}>(5054 views)</small>
					</h5>
					{/* Prices */}
					<h6 className="title-price">
						<small>price</small>
					</h6>
					<h3 style={{ marginTop: "0px" }}>$80</h3>
					{/* Deltails of product */}
					<div className="section">
						<h6 className="title-attr" style={{ marginTop: "15px" }}>
							<small>COLOR</small>
						</h6>
						<div>
							<div className="attr" style={{ width: "25px", background: "Purple" }} />
							<div className="attr" style={{ width: "25px", background: "Pink" }} />
						</div>
					</div>
					<div className="section" style={{ paddingBottom: "5px" }}>
						<h6 className="title-attr">
							<small>Size</small>
						</h6>
						<div>
							<div className="attr2">Large</div>
							<div className="attr2">Small</div>
						</div>
					</div>
					<div className="section" style={{ paddingBottom: "20px" }}>
						<h6 className="title-attr">
							<small>How many would you like</small>
						</h6>
						<div>
							<div className="btn-minus">
								<span className="glyphicon glyphicon-minus" />
							</div>
							<input defaultValue={1} />
							<div className="btn-plus">
								<span className="glyphicon glyphicon-plus" />
							</div>
						</div>
					</div>
					{/* Add to buy */}
					<div className="section" style={{ paddingBottom: "20px" }}>
						<button className="btn btn-success">
							<span
								style={{ marginRight: "20px" }}
								className="glyphicon glyphicon-shopping-cart"
								aria-hidden="true"
							/>{" "}
							Add to cart
						</button>
						<h6>
							<a href="#">
								<span className="fas fa-chess-queen" style={{ cursor: "pointer" }} /> Click here to like
							</a>
						</h6>
					</div>
				</div>
				<div className="col-xs-9">
					<ul className="menu-items">
						<li className="active">description</li>
					</ul>
					<div style={{ width: "100%", borderTop: "1px solid silver" }}>
						<p style={{ padding: "15px" }}>
							<small>
								dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
								massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
								mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
								consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
								arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
								felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
								nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
								vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
								tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
								imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
								eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
								semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
								luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec
								vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
								eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
								sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
