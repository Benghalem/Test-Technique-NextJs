import { Organic } from '@/typings/searchTyping'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './ui/badge'


const Product = ({product}: {product: Organic}) => {
  return (
    <Link href={{
        pathname: "/product",
        query: {url: product.url}
    }}
    className=' flex flex-col relative border rounded-md h-full p-5'
    >
        <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className='mx-auto'
        />
        <p className='text-xl font-bold'>
            {product.price?.currency}
            {product.price.price}
        </p>

        {product.budget && (
            <Badge className='w-full absolute top-2 right-2'>
                {product.budget} 
            </Badge>
        )}

        <p className='font-light'>{product.title}</p>

        {product.rating && (
            <p className='text-yellow-500 text-sm'>
                {product.rating.rating}*
                <span className='text-gray-400 ml-2'> ({product.rating.count})</span>
            </p>
        )}
    </Link>
  )
}

export default Product