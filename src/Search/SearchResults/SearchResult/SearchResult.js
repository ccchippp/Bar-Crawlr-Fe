import React from 'react'
import styles from './SearchResult.module.css'

export function SearchResult(props) {
    const b = props.business
    if (!b) {
        return(<div/>)
    }

    const tags = b.categories.map
    (category => (<span 
        className='tag' 
        key={b.id + category.title}>
            {category.title}
        </span>))

    return(
        <div className={styles['search-result']}>
            <img
            src={b.image_url}
            alt='business'
            className={styles['bar-image']}>
            </img>
            <div className={styles['bar-info']}>
                <h2 className=''>
                    {b.name}  {b.price}
                </h2>
                <p> {tags} </p>
                <p className={`is-size-6 ${styles['words']}`}> Transportation options:</p>
                <p className={`is-size-7 ${styles['transportation']}`}  >Car: 2   Transit: 12    Bike: 4    Walk: 15</p>
            </div>
            <div>
            <p  className={'is-size-6'} >{b.phone}</p>
            <p  className={`is-size-6 ${styles['contact-info']}`} >{b.location.address1}</p>
            <p  className={`is-size-6 ${styles['contact-info']}`} >{b.location.city}, {b.location.state}</p>
            <p  className={`is-size-6 ${styles['contact-info']}`} >{b.location.zip_code}</p>

            </div>
        </div>
    )
}