import React, { Component } from "react";
import PropTypes from "prop-types";

class Team extends Component {
	render() {
		// Team's Map Loop
		const teamData = this.props.teamsData.map((team, index) => (
			<div
				className="col-lg-3 col-md-6 col-sm-12 owl-item item"
				key={index}
			>
				<div className="our-team">
					<div className="pic">
						<img src={team.image} alt={team.altImage} />
						<ul className="social">
							{team.linkedinLink && (
								<li>
									<a
										href={team.linkedinLink}
										aria-label={team.linkedinLabel}
									>
										<i className="icofont-linkedin" />
									</a>
								</li>
							)}

							{team.githubLink && (
								<li>
									<a
										href={team.githubLink}
										aria-label={team.githubLabel}
									>
										<i className="icofont-github" />
									</a>
								</li>
							)}

							{team.websiteLink && (
								<li>
									<a
										href={team.websiteLink}
										aria-label={team.websiteLabel}
									>
										<i className="icofont-web" />
									</a>
								</li>
							)}
						</ul>
					</div>
					<div className="team-content">
						<h3 className="title">{team.name}</h3>
						<span className="post">{team.designation}</span>
					</div>
				</div>
			</div>
		));

		return (
			<React.Fragment>
				<section id="team" className="team-area ptb-100">
					<div className="container">
						<div className="section-title">
							<span>{this.props.sectionName}</span>
							<h3>
								{this.props.sectionTitle}
								<span>.</span>
							</h3>
							<p>{this.props.sectionDescription}</p>
						</div>
						<div className="row">{teamData}</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

// Props' Types
Team.propTypes = {
	sectionName: PropTypes.string,
	sectionTitle: PropTypes.string,
	sectionDescription: PropTypes.string,

	teamsData: PropTypes.array
};

// Default Props
Team.defaultProps = {
	sectionTitle: "Our Team",

	teamsData: [
		{
			linkedinLink:
				"https://www.linkedin.com/in/jason-matthews-10423073/",
			linkedinLabel: "Jason LinkedIn",
			name: "Jason Matthews",
			designation: "Founder & CEO",
			image: require("../../assets/img/jason.jpg"),
			altImage: "Gäshawk Jason"
		},
		{
			name: "CJ Owens",
			designation: "Co-Founder & COO",
			image: require("../../assets/img/cj.jpg"),
			altImage: "Gäshawk CJ"
		},
		{
			linkedinLink:
				"https://www.linkedin.com/in/steven-claucherty-7a1615b4/",
			linkedinLabel: "Steve LinkedIn",
			websiteLink: "https://www3.nd.edu/~sclauche/",
			websiteLabel: "Steve Website",
			name: "Steve Claucherty",
			designation: "Mechanical Engineer",
			image: require("../../assets/img/steve.jpg"),
			altImage: "Gäshawk Steve"
		},
		{
			linkedinLink: "https://www.linkedin.com/in/lockjio/",
			linkedinLabel: "Jio LinkedIn",
			githubLink: "https://github.com/lockjio",
			githubLabel: "Jio GitHub",
			websiteLink: "https://jbuenviaje.com/",
			websiteLabel: "Jio Website",
			name: "Jio Buenviaje",
			designation: "Technical Advisor",
			image: require("../../assets/img/jio.jpg"),
			altImage: "Gäshawk Jio"
		}
	]
};

export default Team;
