import "./Home.css";

import logo from "../../assets/Logo.svg";
import instagram from "../../assets/ICO-IG.svg";
import facebook from "../../assets/ICO-FB.svg";
import email from "../../assets/ICO-Mail.svg";

import { Image, Row, Col, Container, Form, Button } from "react-bootstrap";
import axios from "axios";

import React, { useRef } from "react";

function Home() {
	const name = useRef("");
	const email = useRef("");
	const url = "http://localhost:8000/";
	const uploadUser = async (data) => {
		console.log(data);
		axios.post(url, data).then((res) => {
			console.log(res.data);
		});
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
							<Form>
								<Form.Row>
									<Col>
										<Form.Control
											required
											type="text"
											placeholder="(Nombre)"
											ref={name}
											className="input"
										></Form.Control>
									</Col>
									<Col>
										<Form.Control
											required
											type="email"
											placeholder="(Email)"
											ref={email}
											className="input"
										></Form.Control>
									</Col>
								</Form.Row>
								<Button
									className="button mt-4"
									type="button"
									onClick={async () => {
										const user = {
											name: name.current.value,
											email: email.current.value,
										};
										console.log(user);
										await uploadUser(user);
									}}
								>
									Enviar
								</Button>
							</Form>
						</Col>
						<Col></Col>
					</Row>

					<Row className="mt-4 mb-4">
						<Col></Col>
						<Col xl={6}>
							<Image
								fluid
								src={instagram}
								className="w-10 "
							></Image>
							<a href="" className="link ml-3 mr-5 font-italic">
								@guadalupe_estudio
							</a>
							<Image
								fluid
								src={facebook}
								className="w-10 "
							></Image>
							<a href="" className="link ml-3 mr-5 font-italic">
								@guadalupe.estudio
							</a>
							<Image fluid src={email} className="w-10 "></Image>
							<a href="" className="link ml-3 mr-5 font-italic">
								hola@guadalupeestudio.cl
							</a>
						</Col>
						<Col></Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
