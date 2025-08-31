import React from 'react';
import Insta from '../public/insta.png'
import meta from '../public/meta.png'

function Splash() {
  
  return (
    <div className="splash-screen d-flex flex-column justify-content-between align-items-center vh-100 bg-black text-white">
      
     
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <img
          src={Insta}
          alt="Instagram Logo"
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'black', 

          }}
        />
      </div>

    
      <div className="text-center mb-4">
        <h5 className="mb-2">From</h5>
        <img
          src={meta}
          alt="Meta Logo"
          className="img-fluid"
          style={{ height: '25px' }}
        />
      </div>
    </div>
  );
}




export default Splash;
