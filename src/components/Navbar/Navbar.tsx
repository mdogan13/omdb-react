import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss'

const Navbar: React.FC = () => {
    return (
        <nav className={`d-flex align-items-center px-4 ${styles.navbar}`}>
            <Link className={styles.homeLink} to="/">OMDbStream</Link>
        </nav>
    );
};

export default Navbar;