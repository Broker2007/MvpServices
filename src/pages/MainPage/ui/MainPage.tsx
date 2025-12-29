import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';
import ServicesList from '@/shared/ui/ServicesList/ServicesList';
import OrderSummary from '@/shared/ui/OrderSummary/OrderSummary';

interface MainPageProps {
    className?: string,
}

const MainPage = ({ className }:MainPageProps) => {
    const a = 123;
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <div className={cls.head_block}>
                <p className={cls.text_head}>Дополнительные услуги</p>
            </div>
            <ServicesList />
            <OrderSummary className={cls.position_order} />
        </div>
    );
};
export default MainPage;
