import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { TopNav } from '../TopNav/TopNav'
import styles from './LandingPage.module.css'
import useReactRouter from 'use-react-router'

export function LandingPage() {
    const { history } = useReactRouter()

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term)
        const urlEncodedLocation= encodeURI(location)
        history.push(`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`)
    }


    return (
        <div>
            <TopNav/>

        <div className={styles['landing']}>
        <div className={styles['search-area']}> 
            <SearchBar 
            search={search}
            />
        </div>
        </div>
        </div>

    )
}
