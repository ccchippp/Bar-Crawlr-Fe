import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { TopNav } from '../TopNav/TopNav'
import styles from './LandingPage.module.css'

export function LandingPage() {
    return (
        <div>
            <TopNav/>
            <SearchBar/>
        </div>
    )
}
