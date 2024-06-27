import { ProductContext } from "../ProductContext"
import { ProductItem } from "./ProductItem"
import { useContext } from "react"

export const ProductList = () => {
    const { state: { products } } = useContext(ProductContext)
    return <div>
        <h3>Product List</h3>
        <div className="list">
            {
                products?.map(elm => <ProductItem
                    key={elm.id}
                    {...elm}
                />)
            }
        </div>
    </div>
}