import "./Home.css";

import logo from "../../assets/Logo.svg";
import footer from "./footerObject";

import { Image, Row, Col, Container } from "react-bootstrap";

import React from "react";

function Home() {
	const handleMouseOver = (e, element) => {
		e.target.src = element.img.srcHover;
	};
	const handleMouseOut = (e, element) => {
		e.target.src = element.img.src;
	};

	return (
		<Container fluid>
			<Row xl={1} lg={1} md={1} sm={1} xs={1}>
				<Col className="text-center mt-4 mb-4">
					<Image
						fluid
						src={logo}
						className="mt-5 mb-5 w-xl-20 w-lg-25 w-md-35 w-sm-40"
					></Image>
				</Col>
				<Col className="back-site back-site2 text-center m-0">
					<h2 className="title mt-5 mb-5">
						Nuestra Web está <br></br> en proceso...
					</h2>
					<p className="p-body mt-5">
						Pero quédate cerca, el lanzamiento será pronto.<br></br>
						Mientras tanto ¡Conversemos!
					</p>

					<div className="w-xl-65 w-lg-75" style={{ margin: "auto" }}>
						<Row
							className="mb-5 mt-5 align-items-center"
							sm={1}
							lg={3}
						>
							{footer.map((element, index) => {
								return (
									<Col
										className={element.col.className}
										key={index}
										xl={element.col.xl}
									>
										<a
											href={element.a.href}
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											<Image
												fluid
												src={element.img.src}
												className={
													element.img.className
												}
												onMouseOver={(e) =>
													handleMouseOver(e, element)
												}
												onMouseOut={(e) =>
													handleMouseOut(e, element)
												}
											></Image>
										</a>
										<a
											href={element.a.href}
											className={element.a.className}
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											{element.a.text}
										</a>
									</Col>
								);
							})}
						</Row>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
