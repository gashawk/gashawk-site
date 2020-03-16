import React, { Component } from "react";
import PropTypes from "prop-types";

class Vision extends Component {
	render() {
		// Vision's Map Loop
		const visionData = this.props.visionsData.map((vision, index) => (
			<React.Fragment key={index}>
				{index % 2 === 0 ? (
					<div className="row mt-100">
						<div className="col-lg-6 col-md-6">
							<div className="img">
								<img src={vision.image} alt={vision.imageAlt} />
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="vision-text mb-0">
								<span>{vision.position}</span>
								<h3>{vision.title}</h3>
								<p>{vision.description}</p>
								{index % 3 === 0 ? (
									<div></div>
								) : (
									<a
										href={vision.buttonLink}
										className="btn btn-secondary"
									>
										{vision.buttonText}
									</a>
								)}
							</div>
						</div>
					</div>
				) : (
					<div className="row mt-100">
						<div className="col-lg-6 col-md-6">
							<div className="vision-text mt-0">
								<span>{vision.position}</span>
								<h3>{vision.title}</h3>
								<p>{vision.description}</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="img">
								<img src={vision.image} alt="img" />
							</div>
						</div>
					</div>
				)}
			</React.Fragment>
		));

		return (
			<React.Fragment>
				<section id="vision" className="vision-area ptb-100">
					<div className="container">
						<div className="section-title">
							<span>{this.props.sectionName}</span>
							<h3>
								{this.props.sectionTitle}
								<span>.</span>
							</h3>
							<p>{this.props.sectionDescription}</p>
						</div>
						{visionData}
					</div>
				</section>
			</React.Fragment>
		);
	}
}

// Props' Types
Vision.propTypes = {
	sectionName: PropTypes.string,
	sectionTitle: PropTypes.string,
	sectionDescription: PropTypes.string,

	visionsData: PropTypes.array
};

// Default Props
Vision.defaultProps = {
	sectionTitle: "Our Vision",

	visionsData: [
		{
			image: require("../../assets/img/world_map.svg"),
			imageAlt: "Gäshawk world map",
			position: ".01",
			title: "Our Origin",
			description:
				"We are an innovation-driven startup that is focused on Internet-of-Things (IoT) enabled products for the RV and transportation industries. We hail from a small city in the state of Indiana."
		},
		{
			image: require("../../assets/img/road_trip.svg"),
			imageAlt: "Gäshawk road trip",
			position: ".02",
			title: "Our Journey",
			description:
				"At Gäshawk, we recognize that the journey matters more than the destination. We create solutions with the aim to reduce negative impact on both the environment and the economy."
		},
		{
			image: require("../../assets/img/camping.svg"),
			imageAlt: "Gäshawk camping",
			position: ".03",
			title: "Our Destination",
			description:
				"We need your help to validate our latest Proof-of-Concept solution: Overwatch. We kindly request any connections to decision makers and those in charge of reducing risk for fleets or companies.",
			buttonLink: "#contact",
			buttonText: "Contact Us"
		}
	]
};

export default Vision;
