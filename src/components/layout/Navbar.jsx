import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

class Navibar extends Component {
	componentDidMount() {
		let elem = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elem.classList.add("is-sticky");
			} else {
				elem.classList.remove("is-sticky");
			}
		});
		let scrollWithOffset = (el, offset) => {
			const elementPosition = el.offsetTop - offset;
			window.scroll({
				top: elementPosition,
				left: 0,
				behavior: "smooth"
			});
		};
		this.setState({ scrollWithOffset });
	}

	closeNavbar() {
		if (window.matchMedia("screen and (max-width: 991px)").matches) {
			document.getElementById("collaspe-btn").click();
		}
	}

	render() {
		return (
			<React.Fragment>
				<Navbar
					sticky="top"
					id="navbar"
					bg="light"
					expand="lg"
					className="navbar navbar-expand-lg navbar-light bg-light"
					collapseOnSelect={true}
				>
					<Container>
						{this.props.pageName === "home" ? (
							<React.Fragment>
								<Link
									activeClass="active"
									to="home"
									spy={true}
									smooth={true}
									offset={-200}
									duration={800}
									className="navbar-brand"
								>
									<img
										src={require("../../assets/img/gashawk.png")}
										alt="Gäshawk logo"
									/>
									äs<span>hawk</span>
								</Link>
							</React.Fragment>
						) : (
							<LinkContainer exact to="/">
								<Navbar.Brand className="navbar-brand">
									Gäs<span>hawk</span>
								</Navbar.Brand>
							</LinkContainer>
						)}

						<Navbar.Toggle
							aria-controls="basic-navbar-nav"
							id="collaspe-btn"
						/>

						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ml-auto">
								{this.props.pageName === "home" ? (
									<React.Fragment>
										<Link
											activeClass="active"
											to="home"
											spy={true}
											smooth={true}
											offset={-200}
											duration={800}
											className="nav-link homenav"
										>
											Home
										</Link>

										<Link
											activeClass="active"
											to="vision"
											spy={true}
											smooth={true}
											offset={-70}
											duration={800}
											className="nav-link"
											onClick={this.closeNavbar}
										>
											Vision
										</Link>

										<Link
											activeClass="active"
											to="product"
											spy={true}
											smooth={true}
											offset={-70}
											duration={800}
											className="nav-link"
											onClick={this.closeNavbar}
										>
											Product
										</Link>

										<Link
											activeClass="active"
											to="benefits"
											spy={true}
											smooth={true}
											offset={-70}
											duration={800}
											className="nav-link"
											onClick={this.closeNavbar}
										>
											Benefits
										</Link>

										<Link
											activeClass="active"
											to="team"
											spy={true}
											smooth={true}
											offset={-70}
											duration={800}
											className="nav-link"
											onClick={this.closeNavbar}
										>
											Team
										</Link>

										<Link
											activeClass="active"
											to="contact"
											spy={true}
											smooth={true}
											offset={-70}
											duration={800}
											className="nav-link"
											onClick={this.closeNavbar}
										>
											Contact
										</Link>
									</React.Fragment>
								) : (
									<React.Fragment>
										<NavLink
											className="nav-link"
											to="/"
											activeClassName=""
										>
											Home
										</NavLink>

										<NavLink
											className="nav-link"
											to="/"
											activeClassName=""
										>
											Vision
										</NavLink>

										<NavLink
											className="nav-link"
											to="/"
											activeClassName=""
										>
											Product
										</NavLink>

										<NavLink
											className="nav-link"
											to="/"
											activeClassName=""
										>
											Benefits
										</NavLink>

										<NavLink
											className="nav-link"
											to="/"
											activeClassName=""
										>
											Team
										</NavLink>

										<NavLink
											className="nav-link"
											to="/"
											activeClassName=""
										>
											Contact
										</NavLink>
									</React.Fragment>
								)}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Navibar;
