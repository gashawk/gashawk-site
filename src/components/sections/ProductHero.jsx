import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductHero extends Component {
	render() {
		return (
			<React.Fragment>
				<section className="hero-area pb-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6">
								<div className="hero-img">
									<img
										src={this.props.leftsideImage}
										alt={this.props.leftsideImageAlt}
										className="hero-img"
									/>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="hero-content">
									<h3>
										{this.props.titles}
										<span className="overwatch">hawk</span>
									</h3>
									<p>{this.props.descriptions}</p>
									{this.props.benefitsBtnLink && (
										<a
											href={this.props.benefitsBtnLink}
											className="btn btn-primary"
										>
											{this.props.benefitsBtnText}
										</a>
									)}

									{this.props.contactBtnLink && (
										<a
											href={this.props.contactBtnLink}
											className="btn btn-secondary"
										>
											{this.props.contactBtnText}
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

// Props' Types
ProductHero.propTypes = {
	titles: PropTypes.string,
	descriptions: PropTypes.string,

	leftsideImage: PropTypes.string,
	leftsideImageAlt: PropTypes.string,

	benefitsBtnLink: PropTypes.string,
	benefitsBtnText: PropTypes.string,
	contactBtnLink: PropTypes.string,
	contactBtnText: PropTypes.string
};

// Default Props
ProductHero.defaultProps = {
	titles: "Overwatch by Gäs",
	descriptions:
		"A LiDAR-based system for monitoring overhead objects nestled right on your dashboard.",

	leftsideImage: require("../../assets/img/overwatch.png"),
	leftsideImageAlt: "Gäshawk Overwatch",

	benefitsBtnLink: "#benefits",
	benefitsBtnText: "Why Overwatch?",
	contactBtnLink: "#contact",
	contactBtnText: "Contact Us"
};

export default ProductHero;
