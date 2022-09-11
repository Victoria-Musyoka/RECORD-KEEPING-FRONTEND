
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`



function Home() {
    const [isLike,setIsLike]=useState();
    function handleLike(){
        setIsLike((isLike)=>!isLike);
      }
  return (
    <div className='homecontainer'>
        <h1>
        REPORTS DISPLAY
        </h1>
        <h2>Mavuno agro storage facility</h2>
        <p>The company has been dedicated to provide a good storage facility for the stocks. We encourage imports and exports</p>
       
        <h2>Services provided</h2>
        <h2>Work with us</h2>
        <Button onClick={handleLike}>{isLike? "YES": "NO"}</Button>
        <br></br>
        <p>*Transparency
            <br></br>
            *Efficiency
            <br></br>
            *Friendly
        </p>
        
        
        
        <br></br>
        <img src='https://media.istockphoto.com/photos/parcels-on-conveyor-belt-in-a-warehouse-picture-id1299083810?b=1&k=20&m=1299083810&s=170667a&w=0&h=f5eNFAJUDp7U-DBUZofl3P5aynOXu42yz4Ix54_iqUs='/>
        
      
        
         </div>
  )
}

export default Home