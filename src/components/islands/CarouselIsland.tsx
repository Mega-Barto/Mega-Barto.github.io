import type { CSSProperties } from 'react';
import {
  calculateGap,
  calculateRepetitions,
  FRAMEWORK_CAROUSEL,
  LANGUAGE_CAROUSEL,
  SERVICE_CAROUSEL,
} from '../../content/carousel';
import type { CarouselItemDef } from '../../content/types';
import CarouselCard from './CarouselCard';
import '../sections/Carousel/CarouselSection.css';

interface CarouselRowProps {
  items: CarouselItemDef[];
  speed?: number;
  reverse?: boolean;
}

function CarouselRow({ items, speed = 12, reverse = false }: CarouselRowProps) {
  const repetitions = calculateRepetitions(items.length);
  const gap = calculateGap(items.length);
  const duplicatedItems = Array.from({ length: repetitions }).flatMap(() => items);

  return (
    <div
      className={`carousel ${reverse ? 'carousel-reverse' : ''}`}
      style={
        {
          '--carousel-speed': `${speed}s`,
          '--carousel-gap': gap,
        } as CSSProperties
      }
    >
      <div className="carousel-track">
        <div className="group">
          {duplicatedItems.map((item, index) => (
            <CarouselCard key={`first-${item.name}-${index}`} item={item} />
          ))}
        </div>
        <div className="group" aria-hidden>
          {duplicatedItems.map((item, index) => (
            <CarouselCard key={`second-${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CarouselIsland() {
  return (
    <div className="carousel-background">
      <CarouselRow items={LANGUAGE_CAROUSEL} speed={15} />
      <CarouselRow items={FRAMEWORK_CAROUSEL} speed={20} reverse />
      <CarouselRow items={SERVICE_CAROUSEL} speed={18} />
    </div>
  );
}
