import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<footer className="footer-area">
					<div className="copyright-area">
						<div className="container">
							<div className="row">
								<div className="col-lg-7 col-md-7">
									<p>
										&copy; {new Date().getFullYear()}
										{this.props.copyrightText}
									</p>
								</div>
								<div className="col-lg-5 col-md-5">
									<ul>
										{this.props.facebookLink && (
											<li>
												<a
													href={
														this.props.facebookLink
													}
												>
													<i className="icofont-facebook" />
												</a>
											</li>
										)}

										{this.props.twitterLink && (
											<li>
												<a
													href={
														this.props.twitterLink
													}
												>
													<i className="icofont-twitter" />
												</a>
											</li>
										)}

										{this.props.instagramLink && (
											<li>
												<a
													href={
														this.props.instagramLink
													}
												>
													<i className="icofont-instagram" />
												</a>
											</li>
										)}

										{this.props.linkedinLink && (
											<li>
												<a
													href={
														this.props.linkedinLink
													}
												>
													<i className="icofont-linkedin" />
												</a>
											</li>
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}

// Props' Types
Footer.propTypes = {
	copyrightText: PropTypes.string,

	facebookLink: PropTypes.string,
	twitterLink: PropTypes.string,
	instagramLink: PropTypes.string,
	linkedinLink: PropTypes.string
};

// Default Props
Footer.defaultProps = {
	copyrightText: " Gäshawk Incorporated. All Rights Reserved.",

	facebookLink: "https://www.facebook.com/gashawkrv/",
	twitterLink: "https://twitter.com/gashawkrv",
	instagramLink: "https://www.instagram.com/gashawkrv/",
	linkedinLink: "https://www.linkedin.com/company/gashawkrv/about/"
};

export default Footer;
