"use client"
import { useCarteStore } from '@/store'
import { Product } from '@/typings/productTyping'
import { Button } from './ui/button'
import RemoveFromCart from './RemoveFromCart'


function AddToCart({product}: {product: Product}) {
    const [cart, addToCart] = useCarteStore((state) => [
        state.cart,
        state.AddToCart
    ])
    console.log(cart)
    // how many items in cart
    const howManyInCart = cart.filter(
        (item) => item.meta.sku === product.meta.sku
    ).length

    // add to cart
    const handleAdd = () => {
        console.log("Add to cart ", product)
        addToCart(product)
    }
    console.log("howManyInCart >>>>  " + howManyInCart)
    if (howManyInCart > 0) {
        return(
        <div className='flex items-center space-x-5'>
            <RemoveFromCart product={product}/>
            <span>{howManyInCart}</span>
            <Button  className="bg-blue-400 hover:bg-blue-600" onClick ={handleAdd} >
                +
            </Button>
        </div>
        )
    }
  return (
    <Button variant={"outline"}  onClick={handleAdd}>
        Add to cart
    </Button>
  )
}

export default AddToCart