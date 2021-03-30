
import React, { Component } from 'react';
import ResCollection  from './ResCollection';
import GoogleApiWrapper from '../GoogleApiWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainContainer extends Component {
    render(){
        return(
      <div>
            <div>
            {/* <ResCollection/>    */}
        {/* <div className="col-4">
        </div>  */}
            </div>

            <div className='ApiWrapper'>
            <GoogleApiWrapper />
            </div>
      </div>
     )
    }
}

export default MainContainer;