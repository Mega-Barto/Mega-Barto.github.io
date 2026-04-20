import type { CarouselItemDef } from '../../content/types';
import '../sections/common/CarouselCard.css';

interface CarouselCardProps {
  item: CarouselItemDef;
}

export default function CarouselCard({ item }: CarouselCardProps) {
  const src = new URL(`../../assets/CarouselImages/${item.imageFile}`, import.meta.url).href;
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="carousel-card">
      <img src={src} alt={item.name} className="carousel-card-image" />
    </a>
  );
}
