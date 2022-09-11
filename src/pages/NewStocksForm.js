import React ,{useState} from "react";

const URL = 'https://record-vic-mine.herokuapp.com'


function NewStocksForm({onAddStock}) {
 const [submitData, setSubmitData]= useState({
  title:"",
  description:""
 })

 
  const handleInputChange= (e) => {
    setSubmitData({
      ...submitData,[e.target.name]: e.target.value
  })
  };


  const handleContentChange= (e) => {
    setSubmitData({
      ...submitData,[e.target.name]: e.target.value
  })
  };



  const handleSubmit = (e) => {
   e.preventDefault()
   const inputData = {
    title: submitData.title,
    description: submitData.description
   }

     fetch(`${URL}/stockspost`,{
      method: "POST",
      headers:{
        "content-Type": "application/json"
      },
      body: JSON.stringify(inputData)
        
     })
     
     .then((res) => res.json())
     .then((data) => onAddStock(data));
 setSubmitData({
       title: "",
       description: ""
      
     })
    //  window.location.reload();
  };

  
  return (
<div>
      <form onSubmit={handleSubmit} className="formR">
        <input
          type="text"
          name="title"
          placeholder="Enter Type of stock"
          onChange={handleInputChange}
          value={submitData.title}
        />
        <br />
        <textarea
          type="text"
          name="description"
          placeholder="Enter Description of the stock" rows={10}
          onChange={handleContentChange}
          value={submitData.description}
        
        />
        <br />
      

        <div className="action_btn">
        <button type="submit" className="report-btn">
          Submit
        </button>

      
        </div>
        
      </form>
    </div>
  );
}

export default NewStocksForm;