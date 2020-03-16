import React, { Component } from "react";

// CSS Packages
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "../assets/scss/icofont.min.css";

// SCSS Styling
import "../assets/scss/style.scss";
import "../assets/scss/responsive.scss";

// Component Imports
import Banner from "../components/sections/Banner404";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import ScrollUpBtn from "../components/layout/ScrollUpBtn";

class App extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="App">
				<div>
					{/* Banner */}
					<Banner />
					{/* Contact */}
					<Contact />
					{/* Footer */}
					<Footer pageName="home" />
					{/* ScrollUpBtn */}
					<ScrollUpBtn />
				</div>
			</div>
		);
	}
}

export default App;
