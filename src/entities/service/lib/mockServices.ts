import type { Service } from '@/entities/cart';

export const mockServices: Service[] = [
    {
        id: '1',
        title: 'Дополнительный багаж',
        description: 'Добавьте к провозу 10 кг багажа',
        price: 50,
        currency: '$',
        imageUrl: '/images/luggage.jpg',
    },
    {
        id: '2',
        title: 'Страхование полета',
        description: 'Полис страхования на время полета',
        price: 25,
        currency: '$',
        imageUrl: '/images/insurance.jpg',
    },
    {
        id: '3',
        title: 'Премиум питание',
        description: 'Специальное меню от шеф-повара',
        price: 35,
        currency: '$',
        imageUrl: '/images/food.jpg',
    },
    {
        id: '4',
        title: 'Приоритетная посадка',
        description: 'Выход на посадку в первой группе',
        price: 20,
        currency: '$',
        imageUrl: '/images/boarding.jpg',
    },
    {
        id: '5',
        title: 'Дополнительное место',
        description: 'Бронирование соседнего места для комфорта',
        price: 150,
        currency: '$',
        imageUrl: '/images/seat.jpg',
    },
];
