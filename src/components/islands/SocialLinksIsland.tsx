import { getActiveSocialLinks } from '../../config/socialLinks';

interface SocialLinksIslandProps {
  className?: string;
}

export default function SocialLinksIsland({ className = '' }: SocialLinksIslandProps) {
  const socialLinks = getActiveSocialLinks();
  return (
    <div className={className}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          title={social.description}
          aria-label={social.name}
          data-icon={social.iconName}
        />
      ))}
    </div>
  );
}
