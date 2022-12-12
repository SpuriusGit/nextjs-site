import { useHubspotForm } from 'next-hubspot';
import styles from '../styles/modal.module.css';
import $ from 'jquery';
import { useEffect } from 'react';


export default function Modal() {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '5426369',
        formId: '25f636f8-1dbf-4921-8840-a72ff41ed1d6',
        target: '#hubspot-form-container'
    });

    const handleClose = () => {
        $('.'+ styles.modalWindow).fadeOut(300);
    };

    return (
            <div className={styles.modalwindow}>
                <div className={styles.modalBackground}></div>
                <div className={styles.modalContent}>
                    <div className={styles.modalClose} onClick={handleClose}>X</div>
                    <h3 className={styles.footerForm}>Let’s Make Your<br/> Project Intergalactic</h3>
                    <div id="hubspot-form-container"></div>
                </div>
            </div>
    )
}