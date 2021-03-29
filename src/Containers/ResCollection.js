import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResCard from '../Components/ResCard';

class ResCollection extends Component {
    render(){
        return(
       <div>
        <h2>Collection of all restaurants</h2> 
            <ResCard />
            <ResCard />
    
      </div>
        )
    }
}

export default ResCollection;






