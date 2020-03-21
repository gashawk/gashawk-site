import React, { Component } from "react";
import { Helmet } from "react-helmet";

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
				<Helmet>
					<meta charSet="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta name="author" content="Jio Buenviaje" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Gäshawk" />
					<meta property="og:url" content="gashawkrv.com" />
					<meta property="twitter:url" content="gashawkrv.com" />
					<meta name="theme-color" content="#ffffff" />
					<title>Gäshawk</title>
					<meta property="og:title" content="Gäshawk RV" />
					<meta property="twitter:title" content="Gäshawk RV" />
					<meta
						name="description"
						content="Our passion is the great outdoors. Our calling is creating solutions for it."
					/>
					<meta
						property="og:description"
						content="Our passion is the great outdoors. Our calling is creating solutions for it."
					/>
					<meta
						property="twitter:description"
						content="Our passion is the great outdoors. Our calling is creating solutions for it."
					/>
					<meta
						name="keywords"
						content="gashawk,gashawkrv,sustainablerv,gäshawk,gäshawkrv,sustainablervs,gashawkrvs,gäshawkrvs,naturalgasrv,naturalgasrvs,overwatch,gashawkoverwatch,gäshawkoverwatch,arduino,notredame,notre,dame,nd,southbend,indiana,arduino,lidar,lidartechnology,mccloskey,mccloskeynewventure,mccloskeynewventurecompetition,susbe,elkhart,ideacenter,ndideacenter,innovationpark,ndip,ndic"
					/>
					<meta name="twitter:card" content="summary_large_image" />
					<link rel="canonical" href="https://gashawkrv.com/" />
				</Helmet>
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
