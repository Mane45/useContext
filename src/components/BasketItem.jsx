import { useContext } from "react"
import { ProductContext } from "../ProductContext"

export const BasketItem = ({ id, title, price, count }) => {
    const { dispatch } = useContext(ProductContext)
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count * price} USD</td>
        <td>
            <button onClick={() => dispatch({ type: "ADD", payload: id })}>+</button>
            <button onClick={() => dispatch({ type: "DEC", payload: id })}>-</button>
            <button onClick={() => dispatch({ type: "REMOVE", payload: id })}>X</button>
        </td>
    </tr>
}