import {
    createContext, useReducer, useEffect, useMemo, type ReactNode,
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
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        dispatch({
            type: CartActionTypes.SET_SERVICES,
            payload: mockServices,
        });
    }, []);

    const addToCart = useMemo(() => (service: Service) => {
        dispatch({
            type: CartActionTypes.ADD_TO_CART,
            payload: service,
        });
    }, [dispatch]);

    const removeFromCart = useMemo(() => (serviceId: string) => {
        dispatch({
            type: CartActionTypes.REMOVE_FROM_CART,
            payload: serviceId,
        });
    }, [dispatch]);

    const clearCart = useMemo(() => () => {
        dispatch({
            type: CartActionTypes.CLEAR_CART,
        });
    }, [dispatch]);

    const contextValue = useMemo((): CartContextType => ({
        state,
        addToCart,
        removeFromCart,
        clearCart,
    }), [state, addToCart, removeFromCart, clearCart]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
