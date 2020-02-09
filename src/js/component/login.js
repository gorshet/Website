import React, { Component } from "react";

export const Login = () => (
	<div className="container-fluid login-container">
		<div className="row justify-content-center">
			<div className="col-md-6 login-form-2">
				<div className="login-logo">
					<img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
				</div>
				<h3>Login Form 2</h3>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Your Email *" value="" />
				</div>
				<div className="form-group">
					<input type="password" className="form-control" placeholder="Your Password *" value="" />
				</div>
				<div className="form-group">
					<input type="submit" className="btnSubmit" value="Login" />
				</div>
				<div className="form-group">
					<a href="#" className="btnForgetPwd" value="Login">
						Forget Password?
					</a>
				</div>
			</div>
		</div>
	</div>
);
