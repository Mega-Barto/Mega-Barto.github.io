import { getActiveSocialLinks } from '../../config/socialLinks';

interface SocialLinksIslandProps {
  className?: string;
}

export default function SocialLinksIsland({ className = '' }: SocialLinksIslandProps) {
  const socialLinks = getActiveSocialLinks();
  return (
    <div className={className}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title={social.description}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
}
