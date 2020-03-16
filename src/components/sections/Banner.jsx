import React, { Component } from "react";
import PropTypes from "prop-types";

class Banner extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}

	render() {
		return (
			<React.Fragment>
				<div id="home" className="main-banner bg-gray">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="main-banner-content">
											<h1>
												{this.props.bannerName}
												<span>.</span>
											</h1>
											<h1>
												{this.props.bannerDescription}
												<span>.</span>
											</h1>
											<a
												href={
													this.props.bannerBtnOneLink
												}
												className="btn btn-primary"
											>
												<i className="icofont-bird-alt" />
												{this.props.bannerBtnOneText}
											</a>
											<a
												href={
													this.props.bannerBtnTwoLink
												}
												className="btn btn-secondary"
											>
												{this.props.bannerBtnTwoText}
											</a>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="banner-img img-fluid mover">
											<img
												src={this.props.bannerImage}
												alt={this.props.bannerAltImage}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="waveWrapper waveAnimation">
						<div class="waveWrapperInner bgTop">
							<div class="wave waveTop"></div>
						</div>
						<div class="waveWrapperInner bgMiddle">
							<div class="wave waveMiddle"></div>
						</div>
						<div class="waveWrapperInner bgBottom">
							<div class="wave waveBottom"></div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

// Props' Types
Banner.propTypes = {
	bannerName: PropTypes.string,
	bannerDescription: PropTypes.string,
	bannerImage: PropTypes.string,
	bannerAltImage: PropTypes.string,

	bannerBtnOneLink: PropTypes.string,
	bannerBtnOneText: PropTypes.string,
	bannerBtnTwoLink: PropTypes.string,
	bannerBtnTwoText: PropTypes.string
};

// Default Props
Banner.defaultProps = {
	bannerName: "Our passion is the great outdoors",
	bannerDescription: "Our calling is creating solutions for it",
	bannerImage: require("../../assets/img/landing.svg"),
	bannerAltImage: "Gäshawk main banner",

	bannerBtnOneLink: "#product",
	bannerBtnOneText: "Overwatch",
	bannerBtnTwoLink: "#contact",
	bannerBtnTwoText: "Contact Us"
};

export default Banner;
