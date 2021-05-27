import React from 'react';
import styles from './RootView.module.scss';
import Title from '../../components/Title/Title';

const RootView = () => (
    <div className={styles.wrapper}>
        <h1>Hi!</h1>
        <p>This is a demo app of the</p>
        <Title children={'FavNote.'} />
        <ul>
            <li>created in 2021 by <span className={styles.name}>Karol Skolasiński</span></li>
        </ul>
        <p>Enjoy!</p>
    </div>

);

export default RootView;
