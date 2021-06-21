import React,{useState} from 'react'
import Noads from '../Components/myads/Noads'
import Header from '../Components/Header/Header'
import {Nav} from 'react-bootstrap'
import Myadss from '../Components/myads/Myadss'


function MyadsPage() {
    const[myads,setMyads] = useState(false)
    return (
        <div>
            <Header/>
            <div className="simpleNav">
                   <Nav variant="tabs" defaultActiveKey="/home">
                       <Nav.Item>
                         <Nav.Link onClick={()=>setMyads(!myads)} >ADS</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                           <Nav.Link>FAVOURITES</Nav.Link>
                       </Nav.Item> 
                    </Nav> 
                    {myads ? <Myadss/> : <Noads/>}
                </div>
            
        </div>
    )
}

export default MyadsPage
