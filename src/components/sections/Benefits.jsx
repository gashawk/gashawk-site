import React, { Component } from "react";
import PropTypes from "prop-types";

class Benefits extends Component {
	render() {
		// Benefits' Map Loop
		const benefitdata = this.props.benefitsData.map((benefit, index) => (
			<div className="col-lg-4 col-md-6" key={index}>
				<div className="single-benefits text-center">
					<div className="img">
						<img src={benefit.image} alt={benefit.altImage} />
					</div>
					<h3>{benefit.heading}</h3>
					<p>{benefit.description}</p>
				</div>
			</div>
		));

		return (
			<React.Fragment>
				<section id="benefits" className="benefits-area  ptb-100">
					<div className="container">
						<div className="section-title">
							<span>{this.props.sectionName}</span>
							<h3>
								{this.props.sectionTitle}
								<span>.</span>
							</h3>
							<p>{this.props.sectionDescription}</p>
						</div>
						<div className="row">{benefitdata}</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

// Props' Types
Benefits.propTypes = {
	sectionName: PropTypes.string,
	sectionTitle: PropTypes.string,
	sectionDescription: PropTypes.string,

	benefitsData: PropTypes.array
};

// Default Props
Benefits.defaultProps = {
	sectionTitle: "Our Benefits",

	benefitsData: [
		{
			image: require("../../assets/img/hiking.svg"),
			altImage: "Gäshawk hiking",
			heading: "Have Peace of Mind",
			description: "when traveling to unfamiliar roads and new places"
		},
		{
			image: require("../../assets/img/fishing.svg"),
			altImage: "Gäshawk fishing",
			heading: "Save Time & Money",
			description:
				"by preventing costly collisions and avoidable accidents"
		},
		{
			image: require("../../assets/img/adventure.svg"),
			altImage: "Gäshawk adventure",
			heading: "Improve Safety & Awareness",
			description:
				"when navigating busy campgrounds and packed truck yards"
		},
		{
			image: require("../../assets/img/motorcycle.svg"),
			altImage: "Gäshawk motorcycle",
			heading: "Draw Support & Expertise",
			description: "with 24/7 on-demand personal technical assistance"
		},
		{
			image: require("../../assets/img/parachute.svg"),
			altImage: "Gäshawk parachute",
			heading: "Take Flight & Soar",
			description:
				"with us through your valued input on future product updates"
		}
	]
};

export default Benefits;
