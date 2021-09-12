import React, { useContext, useEffect, Component } from "react";
import { Context } from "../store/appContext";
import ScriptTag from "react-script-tag";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Carta } from "../component/Cards";
import { Aboutus } from "../component/AboutUs";
import { Contact } from "../component/Contact";
import { Banner } from "../component/jumbotron";
import { Welcome } from "../component/welcome";
import { Instructions } from "../component/instructions";
import "../../styles/cards.scss";

export const Home = () => {
	return (
		<div>
			<Banner />

			<Welcome />

			<Row
				className="cards"
				data-aos="fade-zoom-in"
				data-aos-offset="200"
				data-aos-easing="ease-in-sine"
				data-aos-duration="600">
				<Col sm={4}>
					<Carta />
				</Col>
				<Col sm={4}>
					<Carta />
				</Col>
				<Col sm={4}>
					<Carta />
				</Col>
				<ScriptTag src="/workspace/Final-Project-/node_modules/aos/dist/aos.js" />
			</Row>
			<Instructions />
		</div>
	);
};
