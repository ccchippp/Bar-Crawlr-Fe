import React from 'react'
import styles from './TopNav.module.css'

export function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles['left']}>
                <image></image>
                <h2>Bar Crawlr</h2>
            </div>
           
            <div className={styles['right']}>
                <button className='logout'>logout</button>
            </div>
            
        </div>
    )
}
