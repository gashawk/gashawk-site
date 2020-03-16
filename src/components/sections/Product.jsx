import React, { Component } from "react";
import PropTypes from "prop-types";

import ProductHero from "./ProductHero";

class Product extends Component {
	render() {
		// Product's Map Loop
		const productdata = this.props.productData.map((product, index) => (
			<div className="col-lg-3 col-md-6" key={index}>
				<div className="single-product">
					<i className={product.icon} />
					<h3>{product.productName}</h3>
					<p>{product.description}</p>
				</div>
			</div>
		));

		return (
			<React.Fragment>
				<section id="product" className="product-area bg-gray ptb-100">
					<div className="container">
						<div className="section-title">
							<span>{this.props.sectionName}</span>
							<h3>
								{this.props.sectionTitle}
								<span>.</span>
							</h3>
							<p>{this.props.sectionDescription}</p>
						</div>
						<ProductHero />
						<div className="row">{productdata}</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

// Props' Types
Product.propTypes = {
	sectionName: PropTypes.string,
	sectionTitle: PropTypes.string,
	sectionDescription: PropTypes.string,

	productData: PropTypes.array
};

// Default Props
Product.defaultProps = {
	sectionTitle: "Our Product",

	productData: [
		{
			icon: "icofont-ui-network",
			productName: "LiDAR Detection Technology"
		},
		{
			icon: "icofont-hand-drag1",
			productName: "Touchscreen Display & Controls"
		},
		{
			icon: "icofont-audio",
			productName: "Instant Audio Feedback"
		},
		{
			icon: "icofont-speed-meter",
			productName: "Reliability at High Speeds"
		},
		{
			icon: "icofont-addons",
			productName: "Low Power Consumption"
		},
		{
			icon: "icofont-ui-settings",
			productName: "Customizable Display & Features"
		},
		{
			icon: "icofont-ui-add",
			productName: "...and More Features Soon"
		}
	]
};

export default Product;
