"use client"
import { useCarteStore } from "@/store"
import { Product } from "@/typings/productTyping"
import { Button } from "./ui/button"


function RemoveFromCart({product}: {product: Product}) {
    const removeFromCart = useCarteStore((state) => state.removeFromCart)

    const handleRemove = () => {
        console.log("Remove from cart ", product)
        removeFromCart(product)
    }
  return (
    <Button  className="bg-blue-400 hover:bg-blue-600" onClick={handleRemove}>
        -
    </Button>
  )
}

export default RemoveFromCart