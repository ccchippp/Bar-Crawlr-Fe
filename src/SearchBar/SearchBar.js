import React from 'react'
import styles from './SearchBar.module.css'

export function SearchBar(props) {
     const sizeClass = props.small ? '' : 'is-medium'
    return (
        <div className="field has-addons search-bar">
       <p className='control'>
            <button className={`button is-static ${sizeClass}`}>Search</button>
       </p>
       <p className='control'>
            <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" placeholder="Start Crawling" />
       </p>
       <p className='control'>
            <button className={`button is-static ${sizeClass}`}>NEAR</button>
       </p>
       <p className='control'>
            <input className={`input ${sizeClass} ${styles['input-control']}`} type="text" placeholder="Where are you" />
       </p>
       <div className={`button is-medium ${styles['search-button']}`}>
           <span className='icon'>
            <i className="fas fa-search"></i>
           </span>
       </div>
        </div>
        // <div class="field has-addons">
        //     <div class="control">
        //         <input class="input" type="text" placeholder="Find a repository" />
        // </div>
        // <div class="control">
        //     <a class="button is-info">
        //         Start your Crawl
        //      </a>
        // </div>
        // </div>
    )
}
