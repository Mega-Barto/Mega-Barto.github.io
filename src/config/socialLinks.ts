import type { IconType } from 'react-icons';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaTelegram
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
    url: 'mailto:personal.jperez@gmail.com',
    icon: FaEnvelope,
    description: 'Envíame un email',
    isActive: true
  },

  {
    name: 'Telegram',
    url: 'https://t.me/MegaBarto',
    icon: FaTelegram,
    description: 'Contáctame en Telegram',
    isActive: true
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
  companyName: 'Bartland Labs.',
  logoUrl: 'https://i.imgur.com/kBWOFBL.png',
  description: 'Ingeniero en sistemas y computación.',
  domain: 'megabarto.rocks'
} as const;
