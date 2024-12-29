import React from 'react';
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
	return (
		<footer className={`p-4 ${styles.footer}`}>
			<div className='d-flex flex-column '>
				<div>
					What is OmdbStream?
					<p>OmdbStream is your ultimate streaming guide, designed to help you discover where to watch any movie or TV show across all your favorite streaming platforms. Easily search for any title to see its availability, or set up alerts to be notified as soon as it’s ready to stream.</p>
				</div>

				<div className='d-flex gap-2'  >
					<a>Home</a>
					<a>Feedback</a>
					<a>𝕏</a>
					<a>Stashlist</a>
				</div>
				<div className='d-flex gap-2 mt-3' >
					<address>
						<a href="mailto:hey@omdbstream.co" target="_blank" rel="noreferrer">hey@omdbstream.co</a>
					</address>
					<a>Climate</a>
					<a>Credits</a>
					<a>Terms</a>
					<a>Privacy</a></div>
			</div>

		</footer>
	);
};

export default Footer;