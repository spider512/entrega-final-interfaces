import React, { Fragment } from 'react';


 


const Random = ({gif}) => {


     return ( 

      <Fragment>
      <div className="col" >
        <div >
            <img src={gif} alt="" />
        </div>
      </div>
      </Fragment>



      );
 }
  
 export default Random ;