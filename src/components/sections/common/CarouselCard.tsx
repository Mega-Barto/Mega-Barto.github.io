import React from 'react';
import type { CarouselItem } from '../../../contents/carousel';
import './CarouselCard.css';

interface CarouselCardProps {
    item: CarouselItem;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ item }) => {
    return (
        <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="carousel-card"
        >
            <img 
                src={item.image} 
                alt={item.name}
                className="carousel-card-image"
            />
        </a>
    );
};

export default CarouselCard;