import { useEffect, useState } from 'react';
import './App.css';
import Category from './Category';
//import Iphone from "./images/Iphone.jpg"
import axios from 'axios';

function App() {
let [finalCategory,SetFinalCategry]=useState([])
let [finalPro,SetFinalProduct]=useState([])
let [catName,setcatName]=useState('')

let getCategory=()=>{
  axios.get("https://dummyjson.com/products/categories")
  .then((res)=>res.data)
  .then((finalRes)=>{
    SetFinalCategry(finalRes)
  })
}

let getProducts=()=>{
  axios.get('https://dummyjson.com/products')
  .then((proRes)=>proRes.data)
  .then((finalRes)=>{
    //console.log(finalRes)
    SetFinalProduct(finalRes.products)
   //console.log(SetFinalProduct)
  })
}


//useeffect 
useEffect(()=>{
  getCategory();
  getProducts();
},[])

useEffect(()=>{
  if(catName!==""){
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((prores)=>prores.data)
    .then((finalRes)=>{
      SetFinalProduct(finalRes.products)
    })
  }
},[catName])


let Pitems = finalPro.map((products, index) => {
  return <Productitems key={index} pdata={products} />;
});


  return (
    <>
    <div className='py-[40px]'>
      <div className='max-w[1320px] mx-auto'>
        <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
      <div className='grid grid-cols-[30%_auto] gap-[20px]'>
        <div>
        <Category finalCategory={finalCategory} setcatName={setcatName}/> 
        </div>
        <div>
        <div className='grid grid-cols-3 gap-5'>
        {
          finalPro.length>=1
          ?
          Pitems
          :
          'No Data Found'
        }  
        </div>
        </div>
      </div>
      </div> 
    </div>
    </>
  
  );
}

export default App;

function Productitems({pdata}){
console.log(pdata);
  return(
    <div className='shadow-lg text-center pb-4'>
    <img alt="" src={pdata.thumbnail} className='w-[100%] h-[220px]'/>
    <h4>{pdata.title}</h4>
    <b>{pdata.price}</b>
  </div> 
  )
}
