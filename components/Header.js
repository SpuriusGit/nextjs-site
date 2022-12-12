import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/header.module.css';
import modalStyles from '../styles/modal.module.css';
import $ from 'jquery';

export default function Header() {
    const handleModalOpen = () => {
        alert('.'+ modalStyles.modalWindow);
        $('.'+ modalStyles.modalWindow).fadeIn(300);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <Image src="/images/logo.png" width='100' height="20"></Image>
            </div>
            <div className={styles.headerNav}>
                <ul>
                <li className={styles.headerNavItem}>
                    <Link href="about-us">
                        <span className={styles.headerLetter}>A</span>
                        <span className={styles.headerLetter}>b</span>
                        <span className={styles.headerLetter}>o</span>
                        <span className={styles.headerLetter}>u</span>
                        <span className={styles.headerLetter}>t</span>
                    </Link>
                </li>
                <li className={styles.headerNavItem}>
                    <Link href="">
                        <span className={styles.headerLetter}>S</span>
                        <span className={styles.headerLetter}>e</span>
                        <span className={styles.headerLetter}>r</span>
                        <span className={styles.headerLetter}>v</span>
                        <span className={styles.headerLetter}>i</span>
                        <span className={styles.headerLetter}>c</span>
                        <span className={styles.headerLetter}>e</span>
                        <span className={styles.headerLetter}>s</span>
                    </Link>
                </li>
                <li className={styles.headerNavItem}>
                    <Link href="">
                        <span className={styles.headerLetter}>I</span>
                        <span className={styles.headerLetter}>n</span>
                        <span className={styles.headerLetter}>d</span>
                        <span className={styles.headerLetter}>u</span>
                        <span className={styles.headerLetter}>s</span>
                        <span className={styles.headerLetter}>t</span>
                        <span className={styles.headerLetter}>r</span>
                        <span className={styles.headerLetter}>i</span>
                        <span className={styles.headerLetter}>e</span>
                        <span className={styles.headerLetter}>s</span>
                    </Link>
                </li>
                <li className={styles.headerNavItem}>
                    <Link href="faq">
                        <span className={styles.headerLetter}>F</span>
                        <span className={styles.headerLetter}>A</span>
                        <span className={styles.headerLetter}>Q</span>
                    </Link>
                </li>
                <li className={styles.headerNavItem}>
                    <Link href="contacts">
                        <span className={styles.headerLetter}>C</span>
                        <span className={styles.headerLetter}>o</span>
                        <span className={styles.headerLetter}>n</span>
                        <span className={styles.headerLetter}>t</span>
                        <span className={styles.headerLetter}>a</span>
                        <span className={styles.headerLetter}>c</span>
                        <span className={styles.headerLetter}>t</span>
                        <span className={styles.headerLetter}>s</span>
                    </Link>
                </li>
                </ul>
            </div>
            <button className={styles.headerGetInTouch} onClick={handleModalOpen}>Get In Touch</button>
        </header>
    );
};