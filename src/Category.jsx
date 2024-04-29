import React from 'react'

const Category = ({finalCategory,setcatName}) => {


let catgory=finalCategory.map((v,i)=>{
return(
    <li onClick={()=>setcatName(v)} key={i} className='bg-[#ccc] p[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>{v}</li>
)
})



  return (
    <>
    <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
    
    <ul>
        {catgory}       
    </ul>
    
    </>
  )
}

export default Category