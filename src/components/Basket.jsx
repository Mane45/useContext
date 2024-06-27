import { useContext } from "react"
import { ProductContext } from "../ProductContext"
import { BasketItem } from "./BasketItem"

export const Basket = () => {
    const { state: { basket, isActive } } = useContext(ProductContext)
    const { dispatch } = useContext(ProductContext)
    return <div>
        {isActive ? <button onClick={() => dispatch({ type: "SALE", payload: false })}>SALE</button> : null}
        <table>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    basket?.map(elm => <BasketItem
                        key={elm.id}
                        {...elm}
                    />)
                }
            </tbody>
        </table>
    </div>
}