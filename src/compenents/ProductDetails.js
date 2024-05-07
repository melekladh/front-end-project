import React from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetails = () => {
  const params=useParams()

  return (
    <>
  
    <div>{params.title}</div>
    <div>{params.image}</div>
  </>
  )
}

export default ProductsDetails