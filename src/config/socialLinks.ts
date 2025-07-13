import type { IconType } from 'react-icons';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaDiscord
} from 'react-icons/fa';

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  description: string;
  isActive: boolean;
}

// Configuración principal de redes sociales
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Mega-Barto',
    icon: FaGithub,
    description: 'Sígueme en GitHub',
    isActive: true
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/Mega-Barto',
    icon: FaLinkedin,
    description: 'Conecta conmigo en LinkedIn',
    isActive: true
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/Mega-Barto',
    icon: FaTwitter,
    description: 'Sígueme en Twitter',
    isActive: true
  },
  {
    name: 'Email',
    url: 'mailto:personal.jpere@gmail.com',
    icon: FaEnvelope,
    description: 'Envíame un email',
    isActive: true
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/tu-usuario',
    icon: FaInstagram,
    description: 'Sígueme en Instagram',
    isActive: false // Desactivado por defecto
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@tu-canal',
    icon: FaYoutube,
    description: 'Suscríbete a mi canal',
    isActive: false // Desactivado por defecto
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/tu-servidor',
    icon: FaDiscord,
    description: 'Únete a mi Discord',
    isActive: false // Desactivado por defecto
  }
];

// Función para obtener solo los enlaces activos
export const getActiveSocialLinks = (): SocialLink[] => {
  return SOCIAL_LINKS.filter(link => link.isActive);
};

// Función para obtener un enlace específico por nombre
export const getSocialLinkByName = (name: string): SocialLink | undefined => {
  return SOCIAL_LINKS.find(link => link.name.toLowerCase() === name.toLowerCase());
};

// Configuración de información personal (para reutilizar en diferentes componentes)
export const PERSONAL_INFO = {
  name: 'MegaBarto',
  displayName: 'MegaBarto',
  companyName: 'Bartland Labs',
  logoUrl: '/logo.png',
  description: 'Ingeniero en sistemas y computación.',
  domain: 'megabarto.rocks'
} as const;
