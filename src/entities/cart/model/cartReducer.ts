import { type CartState, type CartAction, CartActionTypes } from './types';

export const initialState: CartState = {
    services: [],
    cart: [],
    total: 0,
};

export const cartReducer = (
    state: CartState,
    action: CartAction,
): CartState => {
    switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
        const service = action.payload;
        const alreadyInCart = state.cart.some((item) => item.id === service.id);
        if (alreadyInCart) {
            return state;
        }
        const updatedCart = [...state.cart, service];
        const newTotal = updatedCart.reduce(
            (sum, item) => sum + item.price,
            0,
        );

        return {
            ...state,
            cart: updatedCart,
            total: newTotal,
        };
    }

    case CartActionTypes.REMOVE_FROM_CART: {
        const serviceId = action.payload;
        const updatedCart = state.cart.filter((item) => item.id !== serviceId);
        const newTotal = updatedCart.reduce(
            (sum, item) => sum + item.price,
            0,
        );
        return {
            ...state,
            cart: updatedCart,
            total: newTotal,
        };
    }

    case CartActionTypes.CLEAR_CART:
        return {
            ...state,
            cart: [],
            total: 0,
        };

    case CartActionTypes.SET_SERVICES:
        return {
            ...state,
            services: action.payload,
        };

    default:
        return state;
    }
};
