import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import { LINKS } from "@/lib/constants";

const DesktopNav = () => {
  return (
    <nav className="items-center gap-8 xl:gap-12 hidden md:flex">
      {LINKS.map((link) => (
        <SmoothLink key={link.href} to={link.href} spy={true}>
          {link.label}
        </SmoothLink>
      ))}
    </nav>
  );
};
export default DesktopNav;
