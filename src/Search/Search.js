import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { SearchResults } from './SearchResults/SearchResults'
import { SearchResultsSummary } from './SearchResultsSummary.js/SearchResultsSummary'
import userReactRouter from 'use-react-router'
import { useBarSearch } from '../hooks/yelp-api/useBarSearch'

export function Search() {
    const { location } = userReactRouter()
    const params = new URLSearchParams(location.search)
    const term = params.get('find_desc')
    const locationParam = params.get('find_loc')
    const [businesses, amountResults, searchParams, performSearch] = useBarSearch(term, locationParam)

    function search(term, location) {
        performSearch({term, location})
    }
    return (
        <div>
            <NavBar 
                term={term} 
                location={locationParam}
                search={search}
            />
            <SearchResultsSummary 
                term={searchParams.term} 
                location={searchParams.location}
                amountResults={amountResults}
                shownResults={businesses ? businesses.length : 0}
            />
            <SearchResults 
                businesses={businesses}
            />
        </div>
    )
} 