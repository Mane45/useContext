import React from "react";

export const ProductContext = React.createContext()
export const initialState = {
    products: [
        { id: 101, title: "The Psychology", price: 20, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgpVTwNrESrCG82DuHe8-klkFIyiwqA23gQ-2sQ1p9-OxBuV0" },
        { id: 102, title: "The Economics", price: 28, photo: "https://m.media-amazon.com/images/I/81x4TMV20wL._SL1500_.jpg" },
        { id: 103, title: "The Science", price: 50, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-SvCOPQsxVPkaCI3V1V6vkY_b7oJiAKe3cqlVXgg-TVDSV_4" },
        { id: 104, title: "The Politics", price: 25, photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9eR3LWalGx45QTQYBrvUfvf0XCbmr14fUwZ_P4G17APXE0Xwd" },
        { id: 105, title: "The Business", price: 32, photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRubWC99yyQHl1YNX33vNGmh6nFrPmpitLgYK814qbEUknCF_Ds" },
        { id: 106, title: "The Religiness", price: 30, photo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhlIHIOuYcMTzauXfExkO9eUePRbYVimHsPUXu_Ay_HAUH0oK1" }
    ],
    basket: [],
    isActive: true
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "MOVE": {
            let found = state.basket.find(x => x.id == action.payload)
            if (found) {
                found.count++
                return { ...state, basket: [...state.basket] }
            } else {

                return {
                    ...state,
                    basket: [...state.basket, { ...state.products.find(x => x.id == action.payload), count: 1 }]
                }
            }
        }
        case "ADD": {
            let found = state.basket.find(x => x.id == action.payload)
            found.count++
            return {
                ...state,
                basket: [...state.basket]
            }
        }
        case "DEC": {
            let found = state.basket.find(x => x.id == action.payload)
            found.count == 1 ? found.count : found.count--
            return {
                ...state,
                basket: [...state.basket]
            }
        }
        case "REMOVE": {
            return {
                ...state,
                basket: state.basket.filter(x => x.id != action.payload)
            }
        }
        case "SALE": {
            let found = state.basket.filter(x => x.count >= 3)
            if (found.length != 0) {
                found.map(elm => elm.count--)
                return {
                    ...state,
                    basket: [...state.basket],
                    isActive: !state.isActive
                }
            } else return {
                ...state,
                basket: [...state.basket]
            }
        }
        default:
            return state
    }
}