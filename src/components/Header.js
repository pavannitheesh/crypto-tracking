import React,{useState,useEffect} from 'react'
import axios from "axios";
import Item from './Item'


const Header = () => {
  const [value, setvalue] = React.useState("");
  const [data , setData] = useState([]);
useEffect(() => {
  axios.get("https://api.coinstats.app/public/v1/coins").then(res=>{
        setData(res.data.coins);
      
       
      }
        );


   }, [value])



  return (
    <>
    <div className='header'><input type="text" placeholder='Search for Crypto' value={value} onChange={(e)=>{
      setvalue(e.target.value);
  
     }} ></input></div>
      <div>
     {
      data.length>1 && <div className="grid">
      {data.filter((e)=>e.name.toLowerCase().includes(value.toLowerCase())).map((item)=>{
      return <Item item={item} />  })
        

}



      </div>

    

      }
    
     

      </div>
   
     </>


  )
}

export default Header;