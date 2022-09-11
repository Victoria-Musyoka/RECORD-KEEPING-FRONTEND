import React from 'react';
import NewStocksForm from './NewStocksForm';
import Stocklist from './Stocklist';



const Stocks = ({stocks, onAddStock, onDeleteStock}) => {


  const display = stocks.map((stock)=>(
   <Stocklist  
   id={stock.id} 
   stock={stock}
   onDeleteStock={onDeleteStock}
 
  />
  ))
  return (
    <div className='stockcontainer'>
      <div>
   <NewStocksForm onAddStock= {onAddStock}/>
   </div>
   <div>
   <table>
      
        <tr>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>ACTION</th>
        </tr>
      

    {display}
    </table>
   </div>
    </div>
  )
}

export default Stocks