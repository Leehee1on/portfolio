import React from 'react';
import '../assets/css/hello.css';
import { greeting } from '../utils/portfolio';
import Social from './Social';

function Hello() {
	const Fade: any = require("react-reveal/Fade");
	return (
		<Fade bottom duration={800}>
		<section className="section--hello">
			<div className="inner">
				<div className="wrapper">
					<div className="text-title">
						{greeting.title}&nbsp;
						{/* <span className="hello-emoji">👋</span> */}
					</div>
					<div className="role">
						<span>{greeting.role}</span>
					</div>
					<div className="text-subtitle">
						<span>{greeting.subTitle}</span>
					</div>
					<div className="social-links">
						<Social />
					</div>
					<div className="wrapper-links">
						<a href="#contact" id="about">Contact &gt;</a>
					</div>
				</div>

			</div>
		</section>
		</Fade>
	);
}
export default Hello;