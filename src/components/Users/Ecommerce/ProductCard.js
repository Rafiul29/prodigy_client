import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Link key={product?._id} to={`/product/${product?._id}`} className="group">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
            src={product?.image_link}
            alt={product?.title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{product?.title}</h3>
    <p className="mt-1 text-lg font-medium text-green-800">{product.price}৳ </p>
</Link>
  )
}

export default ProductCard