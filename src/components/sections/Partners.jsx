import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Partners extends Component {
	render() {
		// Partners' Map Loop
		const partnerData = this.props.partnersData.map((partner, index) => (
			<div
				className="col-lg-4 col-md-6 col-sm-12 owl-item item"
				key={index}
			>
				<a href={partner.partnerLink}>
					<img src={partner.partnerLogo} alt="partner" />
				</a>
			</div>
		));

		return (
			<React.Fragment>
				<div className="partner-area pb-100 pt-50">
					<div className="container">
						<div className="section-title">
							<span>{this.props.sectionName}</span>
							<h3>
								{this.props.sectionTitle}
								<span>.</span>
							</h3>
							<p>{this.props.sectionDescription}</p>
						</div>
						<div className="row">{partnerData}</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

// Props' Types
Partners.propTypes = {
	sectionName: PropTypes.string,
	sectionTitle: PropTypes.string,
	sectionDescription: PropTypes.string,

	partnersData: PropTypes.array
};

// Default Props
Partners.defaultProps = {
	sectionTitle: "Our Partners",

	partnersData: [
		{
			partnerLogo: require("../../assets/img/fitrv.png"),
			partnerLink: "https://www.thefitrv.com/"
		},
		{
			partnerLogo: require("../../assets/img/ideacenter.png"),
			partnerLink: "https://ideacenter.nd.edu/"
		},
		{
			partnerLogo: require("../../assets/img/ndesteem.png"),
			partnerLink: "https://esteem.nd.edu/"
		}
	]
};

export default Partners;
