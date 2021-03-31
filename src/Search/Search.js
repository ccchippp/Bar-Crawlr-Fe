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
    const [businesses, amountResults, searchParams, setSearchParams] = useBarSearch(term, locationParam)


    return (
        <div>
            <NavBar 
                term={term} 
                location={locationParam}
            />
            <SearchResultsSummary 
                term={term} 
                location={locationParam}
            />
            <SearchResults 
            businesses={businesses}
            />
        </div>
    )
}