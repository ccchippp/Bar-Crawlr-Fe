import React from 'react'
import styles from './SearchResult.module.css'

export function SearchResult() {
    return(
        <div className={styles['search-result']}>
            <img src='http://placehold.jp/150x150.png' alt='business image'></img>
                <p>image</p>
                <p>info</p>
                <p>data</p>
        </div>
    )
}