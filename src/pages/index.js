import React, { Component } from "react";
import { Preloader, Placeholder } from "react-preloading-screen";

// CSS Packages
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "../assets/scss/icofont.min.css";

// SCSS Styling
import "../assets/scss/style.scss";
import "../assets/scss/responsive.scss";

// Component Imports
import Navbar from "../components/layout/Navbar";
import Banner from "../components/sections/Banner";
import Vision from "../components/sections/Vision";
import Product from "../components/sections/Product";
import Benefits from "../components/sections/Benefits";
import Team from "../components/sections/Team";
import Partners from "../components/sections/Partners";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import ScrollUpBtn from "../components/layout/ScrollUpBtn";
import Loader from "../components/layout/Loader";

class App extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="App">
				<div>
					<Preloader>
						<Navbar pageName="home" />
						{/* Banner */}
						<Banner />
						{/* Vision */}
						<Vision />
						{/* Product */}
						<Product />
						{/* Benefits */}
						<Benefits />
						{/* Team */}
						<Team />
						{/* Partners */}
						<Partners />
						{/* Contact */}
						<Contact />
						{/* Footer */}
						<Footer pageName="home" />
						{/* ScrollUpBtn */}
						<ScrollUpBtn />
						{/* Preloader */}
						<Placeholder>
							<Loader />
						</Placeholder>
					</Preloader>
				</div>
			</div>
		);
	}
}

export default App;
