import React from 'react'
import styles from './SearchResult.module.css'

export function SearchResult() {
    return(
        <div className={styles['search-result']}>
            <img
            src='http://placehold.jp/210x210.png'
            alt='business image'
            className={styles['bar-image']}>
            </img>
            <div className={styles['bar-info']}>
                <h2 className='subtitle'>
                    Bar Name
                </h2>
                <p>$$ 
                    <span 
                        className='tag'>
                            Drinks
                    </span> <span 
                        className='tag'>
                            Burgers
                    </span>
                </p>
            </div>
            <div className={styles['contact-info']}>
            <p>(202)310-8963</p>
            <p>Example St.</p>
            <p>Washington D.C. 20002</p>
            </div>
        </div>
    )
}