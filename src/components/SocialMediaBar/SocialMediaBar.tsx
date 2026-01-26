import "./SocialMediaBar.css";
import { SocialMediaIcons } from "../../data";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";

/**
 * SocialMediaIcon component hugely inspired by
 * https://uiverse.io/javierBarroso/ancient-badger-33
 * I made a lot of changes to the inital code so it can be more modular and easy to add new icons
 * and also I made it support dark mode.
 * Thanks to Javier Barroso for the inspiration!
 */
function SocialMediaBar() {
  return (
    <div className="social-login-icons">
      {SocialMediaIcons.map((socialLink, index) => (
        <SocialMediaIcon
          link={socialLink.link}
          title={socialLink.title}
          icon={socialLink.icon}
          hoveredIcon={socialLink.hoveredIcon}
          key={index}
          index={socialLink.index}
        />
      ))}
    </div>
  );
}

export default SocialMediaBar;
