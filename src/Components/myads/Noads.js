import React from 'react'
import './Noads.css'


function Noads() {
    return (
       <div className='myadsParrentDiv'>
           <div className="unlisted">
                <div className="text">
                    <h3>You haven't listed anything yet</h3>
                </div>
                <div className="sellButton">
                    <button className='sellBtn'>start selling</button>
                </div>
            </div>
            
        </div>
    )
}

export default Noads;
