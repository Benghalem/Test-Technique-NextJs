import { Product } from "@/typings/productTyping";

export function groupBySKU( product: Product[] ): Record<string, Product[]> {
    return product?.reduce((accumulator: Record<string, Product[]>, currentProduct: Product) => {
        const sku = currentProduct.meta.sku
        if(!accumulator[sku]) {
            accumulator[sku] = []
        }

        accumulator[sku].push(currentProduct)

        return accumulator
    }, {})
} 