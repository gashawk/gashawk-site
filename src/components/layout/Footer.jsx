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
										Copyright &copy;{" "}
										{new Date().getFullYear()}
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
													aria-label={
														this.props.facebookLabel
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
													aria-label={
														this.props.twitterLabel
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
													aria-label={
														this.props
															.instagramLabel
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
													aria-label={
														this.props.linkedinLabel
													}
												>
													<i className="icofont-linkedin" />
												</a>
											</li>
										)}

										{this.props.githubLink && (
											<li>
												<a
													href={this.props.githubLink}
													aria-label={
														this.props.githubLabel
													}
												>
													<i className="icofont-github" />
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
	facebookLabel: PropTypes.string,
	twitterLink: PropTypes.string,
	twitterLabel: PropTypes.string,
	instagramLink: PropTypes.string,
	instagramLabel: PropTypes.string,
	linkedinLink: PropTypes.string,
	linkedinLabel: PropTypes.string,
	githubLink: PropTypes.string,
	githubLabel: PropTypes.string
};

// Default Props
Footer.defaultProps = {
	copyrightText: " Gäshawk Incorporated. All Rights Reserved.",

	facebookLink: "https://www.facebook.com/gashawkrv/",
	facebookLabel: "Gäshawk Facebook",
	twitterLink: "https://twitter.com/gashawkrv",
	twitterLabel: "Gäshawk Twitter",
	instagramLink: "https://www.instagram.com/gashawkrv/",
	instagramLabel: "Gäshawk Instagram",
	linkedinLink: "https://www.linkedin.com/company/gashawkrv/about/",
	linkedinLabel: "Gäshawk LinkedIn",
	githubLink: "https://github.com/gashawk",
	githubLabel: "Gäshawk GitHub"
};

export default Footer;
