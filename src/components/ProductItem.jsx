import { useContext } from "react"
import { ProductContext } from "../ProductContext"

export const ProductItem = ({ title, id, photo, price }) => {
    const { dispatch } = useContext(ProductContext)
    return <div>
        <p>{title}</p>
        <img src={photo} />
        <p><strong>{price} USD</strong></p>
        <button onClick={() => dispatch({ type: "MOVE", payload: id })}>move</button>
    </div>
}