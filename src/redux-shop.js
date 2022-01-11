import { createStore } from 'redux';


//actions 
const ADD_TO_CART = "ADD_TO-CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const UPDATE_CART = "UPDATE_CART"
const REMOVE_WHOLE_CART = "REMOVE_WHOLE_CART"

//action creators
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item
    }
}

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        item
    }
}

export const removeWholeCart = (item) => {
    return {
        type: REMOVE_WHOLE_CART,
        item
    }
}

var initialState = {
    cartItems: [],
    orderTotal: 0
}

//reducer

var shop = (state = initialState, action) => {

    //checking if the right value is passing
    console.log("redux-shop" + JSON.stringify(action.item));

    switch (action.type) {

        case ADD_TO_CART:
            //add the item to the cart

            //check if product already exists in the cart
            var isProductExistsAlready = state.cartItems.some((cartItem) => {
                return cartItem.id == action.item.id
            })

            //if the product already exists in the cart
            if (isProductExistsAlready) {
                var item = state.cartItems.find((cartItem) => {
                    return cartItem.id = action.item.id
                })
                var quantity = item.qty;
                //increase the quantity of the product by one
                action.item.qty = quantity + 1;


            }
            //if the product does not exist in the cart
            else {
                action.item.qty = 1;
            }
            return {
                //update cart items:
                cartItems: [
                    ...state.cartItems.filter((cartItem) => {
                        return cartItem.id != action.item.id
                    }), action.item
                ],
                //update ordertotal
                orderTotal:
                    state.cartItems.filter((cartItem) => {
                        return cartItem.id != action.item.id
                    }).reduce((total, cartItem) => {
                        return total + cartItem.priceOne * cartItem.qty

                    }, 0) + action.item.priceOne * action.item.qty
            }
            break;
        case REMOVE_FROM_CART:
            //remove te item from cart
            return {
                cartItems: [...state.cartItems.filter((cartItem) => {
                    return cartItem.id != action.item.id
                })
                ],
                orderTotal:
                    state.cartItems.filter((cartItem) => {
                        return cartItem.id != action.item.id
                    }).reduce((total, cartItem) => {
                        return total + cartItem.priceOne * cartItem.qty

                    }, 0)
            }
            break;
        case REMOVE_WHOLE_CART:
            //remove all the items from the cart
            return Object.assign({}, state, {
                cartItems: [],
                orderTotal: 0
            })

            break;

        default:
            return state;
    }
}

//export store
export const store = createStore(shop);