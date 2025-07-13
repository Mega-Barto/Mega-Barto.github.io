// Configuración de secciones para facilitar mantenimiento y modificaciones

export interface SectionConfig {
  id: string;
  component: string;
  isVisible: boolean;
  order: number;
}

export const SECTIONS_CONFIG: SectionConfig[] = [
  {
    id: 'hero',
    component: 'HeroSection',
    isVisible: true,
    order: 0
  },
  {
    id: 'autobiography',
    component: 'AutobiographySection',
    isVisible: true,
    order: 1
  },
  {
    id: 'projects',
    component: 'ProjectsSection',
    isVisible: true,
    order: 2
  }
];

// Función para obtener secciones activas ordenadas
export const getActiveSections = (): SectionConfig[] => {
  return SECTIONS_CONFIG
    .filter(section => section.isVisible)
    .sort((a, b) => a.order - b.order);
};

// Configuración específica de cada sección
export const SECTION_SETTINGS = {
  hero: {
    showScrollIndicator: true,
    parallaxEffect: false
  },
  autobiography: {
    showTimeline: false,
    showSkills: true
  },
  projects: {
    itemsPerPage: 6,
    showFilters: true,
    categories: ['web', 'mobile', 'api', 'tools']
  }
} as const;
