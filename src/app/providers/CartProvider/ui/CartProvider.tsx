import React, {
    createContext, useReducer, useEffect,
} from 'react';
import {
    type CartContextType, CartActionTypes, type Service,
} from '@/entities/cart/model/types';
import { cartReducer, initialState } from '@/entities/cart/model/cartReducer';
import { mockServices } from '@/entities/service/lib/mockServices';

export const CartContext = createContext<CartContextType>({
    state: initialState,
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
});

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    useEffect(() => {
        dispatch({
            type: CartActionTypes.SET_SERVICES,
            payload: mockServices,
        });
    }, []);
    const addToCart = (service: Service) => {
        dispatch({
            type: CartActionTypes.ADD_TO_CART,
            payload: service,
        });
    };

    const removeFromCart = (serviceId: string) => {
        dispatch({
            type: CartActionTypes.REMOVE_FROM_CART,
            payload: serviceId,
        });
    };

    const clearCart = () => {
        dispatch({
            type: CartActionTypes.CLEAR_CART,
        });
    };
    const contextValue: CartContextType = {
        state,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
