import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ServicesList.module.scss';
import CardService from '../CardService/CardService';
import { useCart } from '@/shared/lib/hooks/useCart';

interface ServicesListProps {
    className?: string;
}

const ServicesList = ({ className }: ServicesListProps) => {
    const { state } = useCart();

    return (
        <div className={classNames(cls.ServicesList, {}, [className])}>
            {state.services.map((service) => (
                <CardService
                    key={service.id}
                    service={service}
                />
            ))}
        </div>
    );
};

export default ServicesList;
