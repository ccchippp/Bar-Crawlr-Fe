import React from 'react';
import { Search } from '../Search';
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchResults.module.css'

export function SearchResults() {
    return(
        <div className={styles['search-results']}>
            <SearchResult/>
            <SearchResult/>
        </div>
    )
}