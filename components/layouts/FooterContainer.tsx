import React from 'react';
import styles from '../../styles/layouts/Footer.module.css';

const FooterContainer = () => {
	return (
		<footer className={styles.footer}>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by <img src="/favicon.png" alt="Vercel Logo" className={styles.logo} />
			</a>
		</footer>
	);
};

export default FooterContainer;
