import { Product } from "@/typings/productTyping";



export function getCartTotal(product: Product[]): string {
    const total = product.reduce(
        (accumulator: number, currentProduct: Product) =>  accumulator + currentProduct.price, 0
    )

    return `${product[0]?.currency ? product[0]?.currency : " $ "}  ${total.toFixed(2)}`
}