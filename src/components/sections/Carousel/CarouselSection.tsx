import React from "react";
import CarouselCard from "../common/CarouselCard";
import {
  getLanguages,
  getFrameworks,
  getServices,
  calculateRepetitions,
  calculateGap,
  type CarouselItem,
} from "../../../contents/carousel";
import "./CarouselSection.css";
import { useTranslation } from "react-i18next";

interface CarouselRowProps {
  items: CarouselItem[];
  speed?: number;
  reverse?: boolean;
}

const CarouselRow: React.FC<CarouselRowProps> = ({ items, speed = 12, reverse = false }) => {
  const repetitions = calculateRepetitions(items.length);
  const gap = calculateGap(items.length);
  // Crear array de items duplicados para el loop infinito (siempre en pares)
  const duplicatedItems = Array.from({ length: repetitions }).flatMap(
    () => items,
  );

  return (
      <div
        className={`carousel ${reverse ? 'carousel-reverse' : ''}`}
        style={{ 
          "--carousel-speed": `${speed}s`,
          "--carousel-gap": gap 
        } as React.CSSProperties}
      >
        <div className="carousel-track">
          {/* Primera mitad */}
          <div className="group">
            {duplicatedItems.map((item, index) => (
              <CarouselCard key={`first-${item.name}-${index}`} item={item} />
            ))}
          </div>
          {/* Segunda mitad (duplicado para loop infinito) */}
          <div className="group" aria-hidden>
            {duplicatedItems.map((item, index) => (
              <CarouselCard key={`second-${item.name}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
  );
};

const CarouselSection: React.FC = () => {
  const { t } = useTranslation();
  const languages = getLanguages();
  const frameworks = getFrameworks();
  const services = getServices();

  return (
    <div className="carousel-background">
      <h2 className="carousel-section-title">{t("carousel.title")}</h2>
      <CarouselRow items={languages} speed={15} />
      <CarouselRow items={frameworks} speed={20} reverse={true} />
      <CarouselRow items={services} speed={18} />
    </div>
  );
};

export default CarouselSection;
