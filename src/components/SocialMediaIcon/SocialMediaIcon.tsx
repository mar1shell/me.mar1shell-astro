import type { SocialMediaIconProps } from "../../types";

function SocialMediaIcon({
  link,
  title,
  icon,
  hoveredIcon,
  index,
}: SocialMediaIconProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      title={title}
    >
      <div className="socialcontainer interactive">
        <div className="icon social-icon-1-1">{icon}</div>
        <div className={`social-icon-${index}`}>{hoveredIcon}</div>
      </div>
    </a>
  );
}

export default SocialMediaIcon;
