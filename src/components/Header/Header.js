import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const Header = ({ openModalFn }) => (
    <header className={styles.wrapper}>
        <NavLink className={styles.logo} to='/'>FavNote.</NavLink>
        <HeaderNavigation />
        <Button onClick={openModalFn} secondary>new item</Button>
    </header>
);

export default Header;
