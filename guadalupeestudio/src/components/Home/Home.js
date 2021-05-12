import "./Home.css";

import logo from "../../assets/Logo.svg";
import footer from "./footerObject";

import {
	Image,
	Row,
	Col,
	Container,
	Form,
	Button,
	Alert,
} from "react-bootstrap";
import axios from "axios";

import React, { useState } from "react";

function Home() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [show, setShow] = useState(false);
	const [validated, setValidated] = useState(false);
	const [sendError, setSendError] = useState(false);
	const url = "http://localhost:8000/";
	const uploadUser = async (data) => {
		await axios
			.post(url, data)
			.then((res) => {
				console.log(res.data);
				if (!res.data.error) {
					setShow(true);
					setTimeout(() => setShow(false), 2000);
				}
			})
			.catch((e) => {
				setSendError(true);
				setTimeout(() => setSendError(false), 2000);
			});
	};

	const handleOnChangeName = (e) => {
		setName(e.target.value);
	};
	const handleOnChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleOnClick = async (e) => {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
		}
		if (email.includes("@")) {
			uploadUser({
				name: name.toLowerCase(),
				email: email.toLowerCase(),
			});
		}
		setValidated(true);
	};
	const handleMouseOver = (e, element) => {
		e.target.src = element.img.srcHover;
	};
	const handleMouseOut = (e, element) => {
		e.target.src = element.img.src;
	};

	return (
		<Container fluid>
			<Row xl={1} lg={1} md={1} sm={1} xs={1}>
				<Col className="text-center">
					<Image fluid src={logo} className="mt-5 mb-5 logo"></Image>
				</Col>
				<Col className="back-site text-center m-0">
					<h2 className="title mt-5">
						Nuestra Web está <br></br> en proceso...
					</h2>
					<p className="p-body mt-5">
						Pero quédate cerca, el lanzamiento será pronto.<br></br>
						Mientras tanto ¡Conversemos!
					</p>

					<Row className="mt-5 mb-5">
						<Col></Col>
						<Col xl={6}>
							{footer.map((element, index) => {
								return (
									<>
										<Image
											fluid
											src={element.img.src}
											className={element.img.className}
											onMouseOver={(e) =>
												handleMouseOver(e, element)
											}
											onMouseOut={(e) =>
												handleMouseOut(e, element)
											}
										></Image>
										<a
											href={element.a.href}
											className={element.a.className}
											target="_blank"
											rel="noopener noreferrer nofollow"
										>
											{element.a.text}
										</a>
									</>
								);
							})}
						</Col>
						<Col></Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
