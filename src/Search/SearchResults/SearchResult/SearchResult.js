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

    // const address = b.location.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>)

    return(
        <div className={styles['search-result']}>
            <img
            src={b.image_url}
            alt='business image'
            className={styles['bar-image']}>
            </img>
            <div className={styles['bar-info']}>
                <h2 className='subtitle'>
                    {b.name}
                </h2>
                <p> {b.price} {tags} </p>
            </div>
            <div className={styles['contact-info']}>
            <p>{b.phone}</p>
            <p>{b.location.address1}</p>
            <p>{b.location.city}, {b.location.state}</p>
            <p>{b.location.zip_code}</p>
            </div>
        </div>
    )
}