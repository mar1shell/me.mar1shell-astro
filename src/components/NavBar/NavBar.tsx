import { useEffect, useState } from "react";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import useScrollTop from "../../hooks/useScrollTop/useScrollTop";

function NavBar() {
  const [showNav] = useScrollTop();
  const [isHoveringTop, setIsHoveringTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsHoveringTop(e.clientY < 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const shouldShowNav = showNav || isHoveringTop;

  return (
    <nav
      className={`z-2000 ${shouldShowNav ? "translate-y-0" : "-translate-y-full"} fixed top-0 left-0 flex w-full flex-row-reverse items-center px-10 py-2 transition-all duration-300 md:px-15 md:py-5 lg:px-20`}
    >
      <DarkModeSwitch />
    </nav>
  );
}

export default NavBar;
