import React, { Component } from "react";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import PropTypes from "prop-types";
import axios from "axios";

import GoogleMap from "../forms/GoogleMap";

class Contact extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
			successMsg: ""
		};
	}

	handleForm = e => {
		let that = this;
		axios
			.post("https://formcarry.com/s/3hE5esvVi4Uv", this.state, {
				headers: { Accept: "application/json" }
			})
			.then(function(response) {
				document.getElementById("contactForm").reset();
				that.setState({
					successMsg: "We have received your message. Thank you!"
				});
				document.getElementById("contactForm").reset();
				setTimeout(function() {
					that.setState({
						successMsg: ""
					});
				}, 3000);
			})
			.catch(function(error) {});
	};

	handleFields = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<React.Fragment>
				<section id="contact" className="contact-area bg-gray ptb-100">
					<div className="container">
						<div className="section-title">
							<span>{this.props.sectionName}</span>
							<h3>
								{this.props.sectionTitle}
								<span>.</span>
							</h3>
							<p>{this.props.sectionDescription}</p>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-12">
								<div className="contact-box">
									<div className="icon">
										<i className="icofont-phone" />
									</div>
									<div className="content">
										<h4>{this.props.phoneTitle}</h4>
										<p>
											<a href="callto:+021245522455">
												{this.props.phoneNumberOne}
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-12">
								<div className="contact-box">
									<div className="icon">
										<i className="icofont-envelope" />
									</div>
									<div className="content">
										<h4>{this.props.emailTitle}</h4>
										<p>
											<a
												href={
													"mailto:" +
													this.props.emailAddressOne +
													""
												}
											>
												{this.props.emailAddressOne}
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-12">
								<div className="contact-box">
									<div className="icon">
										<i className="icofont-google-map" />
									</div>
									<div className="content">
										<h4>{this.props.locationTitle}</h4>
										<p>
											<a
												href={
													"https://goo.gl/maps/1id4Ym87DeuJYLkf9"
												}
											>
												{
													this.props
														.locationAddressLineOne
												}
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<div id="map">
									<GoogleMap />
								</div>
							</div>
							<div className="col-lg-12 col-md-12">
								<ValidationForm
									id="contactForm"
									onSubmit={(e, formData, inputs) => {
										e.preventDefault();
										this.handleForm(formData);
									}}
								>
									<div className="row">
										<div className="col-lg-6 col-md-12">
											<div className="form-group">
												<label for="name">Name</label>
												<TextInput
													name="name"
													id="name"
													required
													successMessage=""
													errorMessage="Please enter your name"
													className="form-control"
													placeholder="Name"
													autoComplete="off"
													onChange={this.handleFields}
												/>
												<div className="help-block with-errors" />
											</div>
										</div>
										<div className="col-lg-6 col-md-12">
											<div className="form-group">
												<label for="email">Email</label>
												<TextInput
													name="email"
													id="email"
													type="email"
													required
													successMessage=""
													errorMessage="Please enter your email address"
													className="form-control"
													placeholder="Email"
													autoComplete="off"
													onChange={this.handleFields}
												/>
												<div className="help-block with-errors" />
											</div>
										</div>

										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<label for="subject">
													Subject
												</label>
												<TextInput
													name="subject"
													id="subject"
													type="text"
													required
													successMessage=""
													errorMessage="Please enter your email subject"
													className="form-control"
													placeholder="Subject"
													autoComplete="off"
													onChange={this.handleFields}
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<label for="message">
													Message
												</label>
												<TextInput
													name="message"
													id="message"
													multiline
													placeholder="Message"
													className="form-control"
													required
													successMessage=""
													errorMessage="Please write your message"
													rows="5"
													autoComplete="off"
													onChange={this.handleFields}
												/>
											</div>
										</div>
									</div>

									<div className="form-group">
										<button className="btn btn-primary">
											{this.props.contactBtnTitle}
										</button>
									</div>
									<div className="clearfix" />
								</ValidationForm>
								{this.state.successMsg !== "" ? (
									<h3 className="contactMsg">
										{this.state.successMsg}
									</h3>
								) : null}
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

// Props' Types
Contact.propTypes = {
	sectionName: PropTypes.string,
	sectionTitle: PropTypes.string,
	sectionDescription: PropTypes.string,

	phoneTitle: PropTypes.string,
	phoneNumberOne: PropTypes.string,
	emailTitle: PropTypes.string,
	emailAddressOne: PropTypes.string,
	locationTitle: PropTypes.string,
	locationAddressLineOne: PropTypes.string,

	contactBtnTitle: PropTypes.string
};

// Default Props
Contact.defaultProps = {
	sectionTitle: "Contact Us",

	phoneTitle: "Phone",
	phoneNumberOne: "+1 (574) 360-0009",
	emailTitle: "Email",
	emailAddressOne: "jason@gashawkrv.com",
	locationTitle: "Location",
	locationAddressLineOne: "1400 E Angela Blvd, South Bend, IN 46617",

	contactBtnTitle: "Send"
};

export default Contact;
