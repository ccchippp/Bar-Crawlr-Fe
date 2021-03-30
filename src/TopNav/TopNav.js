import React from 'react'
import styles from './TopNav.module.css'

export function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles['left']}>
                <image></image>
                <h4>Bar Crawlr</h4>
            </div>
           
            <div className={styles['right']}>
                <button className='logout'>logout</button>
            </div>
            
        </div>
    )
}
