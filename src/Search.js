import React from 'react'

const Search = () => {
    <div class='center-form'>
    <form id="bar-search" action="submit" method="GET"> 
        <input 
            type="text" 
            name="text" 
            class="search" 
            placeholder="Start a Crawl!" 
            />
        <input 
            type="submit" 
            name="submit" 
            class="submit" 
            value="Search" 
            // onSubmit{search}
            />
    </form>
</div>
}