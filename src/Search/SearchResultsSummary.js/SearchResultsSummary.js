import React from 'react' 
import styles from './SearchResultsSummary.module.css'

export function SearchResultsSummary() {
    return (
        <div className={styles['container']}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>Bars </strong>Washington D.C.</h1>
            </div>
        </div>
    )
}