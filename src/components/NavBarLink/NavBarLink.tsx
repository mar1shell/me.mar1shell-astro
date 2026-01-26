import type { NavBarLinkProps } from "../../types";

function NavBarLink({
  href,

  content = "",
}: NavBarLinkProps) {
  return (
    <a
      href={href}
      className="interactive group relative hidden flex-nowrap items-center px-8 py-4 text-sm font-semibold text-nowrap text-gray-700 transition-colors duration-300 ease-out hover:text-blue-600 md:flex lg:text-base dark:text-gray-200 dark:hover:text-green-400"
    >
      <span className="relative z-10">{content}</span>
      <span className="absolute right-8 bottom-2 left-8 h-0.5 scale-x-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 transition-transform duration-300 ease-out group-hover:scale-x-100 dark:from-teal-400 dark:via-lime-500 dark:to-green-600"></span>
    </a>
  );
}

export default NavBarLink;
