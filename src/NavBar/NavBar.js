import React from 'react' 
import styles from './NavBar.module.css'
import { SearchBar } from '../SearchBar/SearchBar'

export function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <h2 className={styles['logo']}>Bar Crawlr</h2>
            <button className={`button ${styles['nav-button']}`}>Past Crawls</button>
            <SearchBar small/>
            <button className={`button ${styles['nav-button logout']}`}>Log Out</button>
        </div>
    )
}