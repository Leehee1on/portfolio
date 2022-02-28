import React from 'react';
import '../assets/css/social.css'
import { socialMediaLinks } from "../utils/portfolio";

function Social() {
	return(
		<div className="social-media-links">
			{socialMediaLinks.github && <a href={socialMediaLinks.github} className="icon-button github" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-github"></i>
			</a>}
			{socialMediaLinks.email && <a href={`mailto:${socialMediaLinks.email}`} className="icon-button email" target="_blank" rel="noopener noreferrer">
				<i className="fas fa-envelope"></i>
			</a>}
		</div>
	);
}
export default Social;