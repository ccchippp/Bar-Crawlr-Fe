import React from 'react'
import styles from './TopNav.module.css'

export function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles['left']}>
                <image></image>
                <h2 className={styles['title']} >Bar Crawlr</h2>
            </div>
           
            <div className={styles['right']}>
                <button className={`logout ${styles['right-button']}`}>Log Out</button>
            </div>
            
        </div>
    )
}
