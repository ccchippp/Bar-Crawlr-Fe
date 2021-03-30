import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { SearchResults } from './SearchResults/SearchResults'
import { SearchResultsSummary } from './SearchResultsSummary.js/SearchResultsSummary'

export function Search() {
    return (
        <div>
            <NavBar/>
            <SearchResultsSummary/>
            <SearchResults/>
        </div>
    )
}