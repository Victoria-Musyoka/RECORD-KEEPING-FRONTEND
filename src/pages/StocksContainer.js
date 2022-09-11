import React, { useEffect,useState } from "react";


const URL = "http://localhost:3000/stocks";
function StocksContainer() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((poem) => {
        setStocks(stocks);
      });
  }, [stocks]);

//   const stocksDisplay=stocks.map((stocks) => (
//     <Stocks
//       key={stocks.id}
//       stocksIt={stocks}
//       onDelete={onDelete}
//     />

//   ))

//   function onDelete(deletedStocks){
//     const updatedStocks = stocks.filter((stocky) => stocky.id !==deletedStocks.id);
//     setStocks(updatedStocks);
//   }

  return (
    <div className="stocks-container">
      {/* {stocksDisplay} */}
    </div>
  );
}

export default StocksContainer;