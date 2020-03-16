import React, { Component } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

class ScrollUpBtn extends Component {
	state = {};

	render() {
		return (
			<React.Fragment>
				<ScrollUpButton ContainerClassName="back-to-top" />
			</React.Fragment>
		);
	}
}

export default ScrollUpBtn;
