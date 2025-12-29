export interface Service {
    id: string;
    title: string;
    description: string;
    price: number;
    currency: string;
    imageUrl?: string;
}

export interface CartItem extends Service {}

// Состояние корзины
export interface CartState {
    services: Service[]; // Все доступные услуги
    cart: CartItem[]; // Выбранные услуги
    total: number; // Общая сумма
}

// Типы действий (actions)
export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CLEAR_CART = 'CLEAR_CART',
    SET_SERVICES = 'SET_SERVICES',
}
export interface SetServicesAction {
    type: CartActionTypes.SET_SERVICES;
    payload: Service[];
}
// Action для добавления
export interface AddToCartAction {
    type: CartActionTypes.ADD_TO_CART;
    payload: Service;
}

// Action для удаления
export interface RemoveFromCartAction {
    type: CartActionTypes.REMOVE_FROM_CART;
    payload: string;
}

// Action для очистки
export interface ClearCartAction {
    type: CartActionTypes.CLEAR_CART;
}

// Объединенный тип всех действий
export type CartAction =
    | AddToCartAction
    | RemoveFromCartAction
    | ClearCartAction
    | SetServicesAction

// Тип для контекста (что будут видеть компоненты)
export interface CartContextType {
    state: CartState;
    addToCart: (service: Service) => void;
    removeFromCart: (serviceId: string) => void;
    clearCart: () => void;
}
