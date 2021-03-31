import React, { useState } from 'react'
import styles from './SearchBar.module.css'

export function SearchBar(props) {

     const [term, setTerm] = useState(props.term || '')
     const [location, setLocation] = useState(props.location || '')

     const sizeClass = props.small ? '' : 'is-medium'

     function submit(e) {
          if(typeof props.search === 'function') {
               props.search(term, location)
          }
          e.preventDefault()
          console.log(term, location)
     }
     
     return (
     <form onSubmit={submit}>
        <div className="field has-addons search-bar">
          <div className='control'>
               <div className={`button is-static ${sizeClass}`}>Search</div>
          </div>
          <p className='control'>
               <input className={`input ${sizeClass} ${styles['input-control']}`} 
                    onChange={(e) => setTerm(e.target.value)}
                    type="text" 
                    placeholder="Start Crawling"
               />
          </p>
          <div className='control'>
               <div className={`button is-static ${sizeClass}`}>NEAR</div>
          </div>
          <p className='control'>
               <input className={`input ${sizeClass} ${styles['input-control']}`} 
                    onChange={(e) => setLocation(e.target.value)}
                    type="text" 
                    placeholder="Where are you"
               />
          </p>
          <div className={`button is-medium ${styles['search-button']}`} 
               onClick={submit}>
                    <span className='icon'>
                         <i className="fas fa-search"></i>
                    </span>
          </div>
        </div>
     </form>
    )
}
