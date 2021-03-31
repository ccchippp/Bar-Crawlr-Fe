import React from 'react' 
import styles from './NavBar.module.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'

export function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <Link to='/'><h2 className={styles['logo']}>Bar Crawlr</h2></Link>
            <button className={`button ${styles['nav-button']}`}>Past Crawls</button>
            <SearchBar small/>
            <button className={`button ${styles['nav-button logout']}`}>Log Out</button>
        </div>
    )
}