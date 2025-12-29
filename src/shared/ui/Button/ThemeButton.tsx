// Это расширяемый enum для кнопки, он дает нам возможность обьявить кнопке возможные стили, чтобы впоследствии
// не возникало ошибок по типу "такого класса не существует и прочее"
export enum ThemeButton {
    CLEAR = 'clear',
    ORDER_UP = 'order_up',
    DELETE = 'delete',
    ADD_ITEM = 'add_item',
    REMOVE_ITEM = 'remove_item'
}
