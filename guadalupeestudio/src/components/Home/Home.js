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
	const url = "http://localhost:8000/";
	const uploadUser = async (data) => {
		await axios.post(url, data).then((res) => {
			if (!res.data.error) {
				setShow(true);
				setTimeout(() => setShow(false), 1500);
			}
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
			setValidated(true);
			uploadUser({
				name: name.toLowerCase(),
				email: email.toLowerCase(),
			});
		}
	};

	return (
		<Container fluid>
			<Row xl={1} lg={1} md={1} sm={1} xs={1}>
				<Col className="text-center">
					<Image fluid src={logo} className="mt-5 mb-5 logo"></Image>
				</Col>
				<Col className="back-site text-center m-0">
					<h2 className="title mt-3">
						Nuestra Web está <br></br> en proceso...
					</h2>
					<p className="p-body">
						Pero quédate cerca, el lanzamiento será pronto.<br></br>
						Deja tus datos y te avisamos!
					</p>

					<Row>
						<Col></Col>
						<Col className="w-75">
							<Form noValidate validated={validated}>
								<Form.Row>
									<Col>
										<Form.Control
											required
											type="text"
											placeholder="(Nombre)"
											className="input"
											onChange={handleOnChangeName}
										></Form.Control>
										<Form.Control.Feedback></Form.Control.Feedback>
									</Col>
									<Col>
										<Form.Control
											required
											type="email"
											placeholder="(Email)"
											className="input"
											onChange={handleOnChangeEmail}
										></Form.Control>
									</Col>
								</Form.Row>
								<Button
									className="button mt-4"
									type="button"
									onClick={handleOnClick}
								>
									Enviar
								</Button>
							</Form>
							<Alert show={show} variant="success">
								Tus datos se han registrado con exito, te
								enviaremos un correo solo cuando la web este
								activa
							</Alert>
						</Col>
						<Col></Col>
					</Row>

					<Row className="mt-4 mb-4">
						<Col></Col>
						<Col xl={6}>
							{footer.map((element) => {
								return (
									<>
										<Image
											key={element.img.key}
											fluid
											src={element.img.src}
											className={element.img.className}
										></Image>
										<a
											key={element.a.key}
											href={element.a.href}
											className={element.a.className}
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
