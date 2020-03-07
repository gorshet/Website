import React from "react";

import "../../styles/archive.scss";

export class Archive extends React.Component {
	render() {
		return (
			<div>
				<link
					href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css"
					rel="stylesheet"
					id="bootstrap-css"
				/>
				{/*---- Include the above in your HEAD tag --------*/}
				<div className="container">
					<div className="row">
						<div className="span12">
							<div className="row">
								<div className="span8">
									<h4>
										<strong>
											<a href="#">Title of the post</a>
										</strong>
									</h4>
								</div>
							</div>
							<div className="row">
								<div className="span2">
									<a href="#" className="thumbnail">
										{/* <img
											src="https://lh3.googleusercontent.com/0QYvo-PgW2q8hCQ-iASDqwwMwpdPkAoLG_E3yYoz36NOXWJ5ysnQtm1lV9tzrwdM031ik9heLdc9qWGUF1Q9t5Rf6QGotTbHUh5Uvqo25qYjta2FCgfevz9dInTYcomJ4DHrSaKsXXTf17nIUgLigY8B827hbBctTf-UrXxbmfqfLeCyQmeheqrHLzocq99b5b4z8JRw6x9vq6Xr59f9qpGMEohJOZzXwC7dswcmDPUNAG6zs6Z_uF1XZ7e6iIEcQCv22XDNMbRohaXyrxdonejxOMubNhWypKfeZq5LcDE60lFN23_EVq6seqBbS84F5DSUuEq6okZZn42JYTpanKsQ-mbA-O_Ml4yBUzhHf-rGK_h2im5apWtsmh4D3kX0o13ACDS2CM1UIs74h7hFH_UHCiDtusVTBviaAs2e9pxeIXDfVZzIQNhwIB3BxRV6xSdBylCbzzjgtWPsfGarvWzND3XFuYCeWCONj698fFFNm3WfcFc6wV0iJpbUyre9y6tQmZWPEwl-Qa0FnlAHnu7L5Kqw-m1sopJkSg975MP05TCjsHFlTbPErAw3QD1W3fn5zDdizihZ3V2OzmNFNBgwe_G75yCoBYp1t0W0DgcG2ZzGaxdY8c0toBZAHhhaTEM2r6IqYVSrhD9c0ifeifTdHohRptc=w1173-h881-no"
											alt=""
										/> */}
									</a>
								</div>
								<div className="span10">
									<p>Helping those in need</p>
									<p>
										<a className="btn" href="#">
											Read more
										</a>
									</p>
								</div>
							</div>
							<div className="row">
								<div className="span8">
									<p />
									<p>
										<i className="icon-user" /> by <a href="#">Marcelo</a>|{" "}
										<i className="icon-calendar" /> Aug 10th, 2019 | <i className="icon-comment" />{" "}
										<a href="#">3 Comments</a>| <i className="icon-share" />{" "}
										<a href="#">39 Shares</a>| <i className="icon-tags" /> Tags :{" "}
										<a href="#">
											<span className="label label-info">Reactstrap</span>
										</a>
										<a href="#">
											<span className="label label-info">Bootstrap</span>
										</a>
										<a href="#">
											<span className="label label-info">UI</span>
										</a>
										<a href="#">
											<span className="label label-info">growth</span>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="span12">
							<div className="row">
								<div className="span8">
									<h4>
										<strong>
											<a href="#">Title of the post</a>
										</strong>
									</h4>
								</div>
							</div>
							<div className="row">
								<div className="span2">
									<a href="#" className="thumbnail">
										<img
											src="https://lh3.googleusercontent.com/oSkWqVMOziLJiDTg2Zh3MJIx0Z9jWtMTGsI5Kh1K0pthxCV8jlwq6xRK8sQgiO8qWLscOb5BLvM7MU2sh0aUGQuIwHl4z7fULiOWuGvJUBhXUPvaypNBpEv9DsJzYle90nDlDc3TqSmgwkTKo4hSHuFzxiHToThIod0ZUF2IFmuD_W5KojhISSzROir1EHKWaZ6_ynEfvfGEJ879LL84wan6z_CHRUwR5er6bR6UoQogISCVLMvar4Zhix8g-MwpfNtUDmZ8LwcGgSz6m2HGQejKBAhlw3nFGxx00tX_DGlgGk2PeJxX9upwysd8lIJ7a1Eitpc0fvzeyACrefncJlyaQIftNbiuhhYIyB8AriwkUh3dpvVtj2B-op55RN-09JKLGF6b8cH87UTBtezzfJ_WvcH54Xh9quwc8Vr5LqMsI-8sM9s73zmBq_YUlShDB_7zqwbdAApBoskKC7gfk3NcurXWNK6wWCIr8ZgFqVgI4t5O5mktfQRS16oWyAw4Y0JkuXMyj-qD79Cr149A4aC7Cd9dtzEtXWHR80uohnO5CvsUaSVnkcWYZuzy1820v3Cvm3qHrCQQ7bs8l5DrKw3kGdFmNp30nZ5BcavyiJ4RkKgGnpYgVpawJpHKxu227JXF5PiOjElLbLTf3kbGUMTOWahjXYM=w662-h881-no"
											alt=""
										/>
									</a>
								</div>
								<div className="span10">
									<p>Helping those in need</p>
									<p>
										<a className="btn" href="#">
											Read more
										</a>
									</p>
								</div>
							</div>
							<div className="row">
								<div className="span8">
									<p />
									<p>
										<i className="icon-user" /> by <a href="#">Marcelo</a>|{" "}
										<i className="icon-calendar" /> Aug 10th, 2019 | <i className="icon-comment" />{" "}
										<a href="#">3 Comments</a>| <i className="icon-share" />{" "}
										<a href="#">39 Shares</a>| <i className="icon-tags" /> Tags :{" "}
										<a href="#">
											<span className="label label-info">Reactstrap</span>
										</a>
										<a href="#">
											<span className="label label-info">Bootstrap</span>
										</a>
										<a href="#">
											<span className="label label-info">UI</span>
										</a>
										<a href="#">
											<span className="label label-info">growth</span>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="span12">
							<div className="row">
								<div className="span8">
									<h4>
										<strong>
											<a href="#">Title of the post</a>
										</strong>
									</h4>
								</div>
							</div>
							<div className="row">
								<div className="span2">
									<a href="#" className="thumbnail">
										<img
											src="https://lh3.googleusercontent.com/WOoW1I5wn5C3IQFFkFWLgqu6sCRZ1_kcVUXSR9Y9lfsoRX-ofxBLcBmeqXArOSEiKLVmonVY9wkNxHMsfJNwc0FKdM4f619pjKNoHH2DPPzVhfHYgjIQWJwXsBKpMItxwXPYyhN4V3UoMibcjiZFaBUQUjffCEoJSoVpKIll9pRtsdlWOaeEpN02IDnHKypyLq6fjsWb0JbqolIW2Y1h3TRFWGHDhNSjy3RlhvGZvU6aB9dKR7KYowq_celjTT-H7AUf_YTFq6x7VjJpm-fVcMx4-BVG0TcZIN1215_h5V2n3Oftn1CoDsBV-2iv5cMD13s1NPK8-mSWiD1wy2dTw19SDbkFEyXSaydQCnI7BlMdYsJ4z4gTL5XjabwwHT033qfWgbHHibUy9RSXTfc9_h2EgCTkdimYWzfi26AdbQKccaSsAqTlZwfEkzjh2xDBQ6kgWPHf1rka08Ly_PPtK6Fz4SdpBNsRYCW6d0eOgt5Q-5F6Uo5mSx7lAVo7BKb0qx0fj5xJKTg3o4r-kxI-Vhk3p56-XhLOR785ROv0KwwuTJfcNH8uYBOanre1nwFExnZaexnV1_zZDeTj1CqBfZTZbfSSN-YSgvHhYiAzkhFVtstGWK_a7jNFStqCz55q515X7EPUM9ynUFOXLNpCgoP4GcP2N5c=w550-h313-no"
											alt=""
										/>
									</a>
								</div>
								<div className="span10">
									<p>Helping those in need</p>
									<p>
										<a className="btn" href="#">
											Read more
										</a>
									</p>
								</div>
							</div>
							<div className="row">
								<div className="span8">
									<p />
									<p>
										<i className="icon-user" /> by <a href="#">Marcelo</a>|{" "}
										<i className="icon-calendar" /> Aug 10th, 2019 | <i className="icon-comment" />{" "}
										<a href="#">3 Comments</a>| <i className="icon-share" />{" "}
										<a href="#">39 Shares</a>| <i className="icon-tags" /> Tags :{" "}
										<a href="#">
											<span className="label label-info">Reactstrap</span>
										</a>
										<a href="#">
											<span className="label label-info">Bootstrap</span>
										</a>
										<a href="#">
											<span className="label label-info">UI</span>
										</a>
										<a href="#">
											<span className="label label-info">growth</span>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<hr />
				</div>
			</div>
		);
	}
}
