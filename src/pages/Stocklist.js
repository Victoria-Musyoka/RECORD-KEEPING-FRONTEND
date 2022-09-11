import React from 'react'

const Stocklist = ({stock,id,onDeleteStock}) => {
    
    const handleclick =()=>{
        fetch(`http://localhost:9292/stocksdelete/${id}`,{
          method: "DELETE",
          headers: {
            "content-Type": "application/json",
          },
        
        })
        // .then(resp=>resp.json())
        // .then(data=>console.log(data))
      onDeleteStock(id)
      
      
      }
  return (
   

<tr>
    <td>{stock.title}</td>
    <td>{stock.description}</td>
    <td><button onClick={handleclick}>DELETE</button></td>
    </tr>
    
  )
}

export default Stocklist