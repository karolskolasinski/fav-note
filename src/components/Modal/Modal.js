import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => (
    <div className={styles.wrapper}>
        <button onClick={closeModalFn} className={styles.closeButton} />
        <Form />
    </div>
);

export default Modal;
