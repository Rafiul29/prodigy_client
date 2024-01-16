import React from 'react'

const PayButton = ({course}) => {

  const handleOrder=(course)=>{
console.log(course)
  }
  
  return (
    <button onClick={()=>handleOrder(course)}
     className='text-xl bg-deep-purple-700 px-5 py-2 rounded-lg text-white hover:bg-deep-purple-900 duration-500'>BUY</button>
  )
}

export default PayButton