import React, { Component } from "react";

class GoogleMap extends Component {
	render() {
		return (
			<div className="map">
				<iframe
					title="Gäshawk location"
					src="https://snazzymaps.com/embed/226239"
					style={{ border: 0 }}
					allowFullScreen
				></iframe>
			</div>
		);
	}
}

export default GoogleMap;
