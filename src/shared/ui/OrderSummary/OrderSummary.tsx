import { useState, type MouseEvent } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './OrderSummary.module.scss';
import { Button } from '../Button/Button';
import { ThemeButton } from '../Button/ThemeButton';
import { useCart } from '@/shared/lib/hooks/useCart';

interface OrderSummaryProps {
    className?: string;
}

const OrderSummary = ({ className }: OrderSummaryProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { state, removeFromCart } = useCart();

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleOrderClick = (e: MouseEvent) => {
        e.stopPropagation();
        console.log('Оформление заказа', state.cart);
    };

    const formatPrice = (price: number) => `${price} ₽`;

    return (
        <div
            className={classNames(
                cls.OrderSummary,
                { [cls.collapsed]: isCollapsed },
                [className],
            )}
        >
            <div
                className={cls.head_block}
                onClick={toggleCollapse}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        toggleCollapse();
                    }
                }}
            >
                <div className={cls.total_price}>
                    <p className={cls.text_total}>Итого:</p>
                    <p className={cls.text_price}>
                        {state.total}
                        {' ₽'}
                    </p>
                </div>
                <Button
                    className={cls.btn_order}
                    theme={ThemeButton.ORDER_UP}
                    onClick={handleOrderClick}
                    disabled={state.cart.length === 0}
                >
                    Оформить заказ
                </Button>
            </div>

            <div className={cls.summary_order}>
                {state.cart.map((item) => (
                    <div className={cls.card} key={item.id}>
                        <div className={cls.head_card}>
                            <p className={cls.card_title}>{item.title}</p>
                            <p className={cls.card_price}>
                                {formatPrice(item.price)}
                            </p>
                        </div>
                        <div className={cls.card_footer}>
                            <p className={cls.card_flight}>
                                {item.description}
                            </p>
                            <Button
                                className={cls.btn_delete}
                                theme={ThemeButton.DELETE}
                                onClick={() => removeFromCart(item.id)}
                            >
                                Удалить
                            </Button>
                        </div>
                    </div>
                ))}
                {state.cart.length === 0 && (
                    <div className={cls.empty_cart}>
                        <p>Корзина пуста</p>
                        <p>Добавьте услуги из списка выше</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderSummary;
