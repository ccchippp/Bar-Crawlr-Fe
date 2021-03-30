import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { TopNav } from '../TopNav/TopNav'
import styles from './LandingPage.module.css'

export function LandingPage() {
    return (
        <div className={styles['landing']}>
        <div className={styles['search-area']}> 
            <TopNav/>
            <SearchBar/>
        </div>
        </div>

    )
}
