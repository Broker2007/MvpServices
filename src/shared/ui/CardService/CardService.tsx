import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CardService.module.scss';
import { Button } from '../Button/Button';
import { ThemeButton } from '../Button/ThemeButton';
import { useCart } from '@/shared/lib/hooks/useCart';
import type { Service } from '@/entities/cart';

interface CardServiceProps {
    className?: string;
    service: Service;
}

const CardService = ({ className, service }: CardServiceProps) => {
    const { state, addToCart, removeFromCart } = useCart();
    const isSelected = state.cart.some((item) => item.id === service.id);
    const handleButtonClick = () => {
        if (isSelected) {
            removeFromCart(service.id);
        } else {
            addToCart(service);
        }
    };

    return (
        <div className={classNames(cls.CardService, {}, [className])}>

            <div className={cls.card_container}>
                <div className={cls.card_header}>
                    <img src={service.imageUrl} alt="изображение услуги" className={cls.card_icon} />
                    <div className={cls.card_content}>
                        <p className={cls.card_title}>{service.title}</p>
                        <p className={cls.card_description}>{service.description}</p>
                    </div>
                </div>

                <div className={cls.card_footer}>
                    <p className={cls.card_price}>
                        {service.price}
                        {service.currency}
                    </p>
                    <Button
                        theme={isSelected ? ThemeButton.REMOVE_ITEM : ThemeButton.ADD_ITEM}
                        onClick={handleButtonClick}
                    >
                        {isSelected ? 'Убрать' : 'Добавить'}
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default CardService;
