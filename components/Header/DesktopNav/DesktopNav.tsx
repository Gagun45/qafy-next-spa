import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import {LINKS} from "@/lib/constants";
import {useTranslations} from "next-intl";

const DesktopNav = () => {
    const t = useTranslations("NavLinks");
    return (
        <nav>
            <ul className="items-center gap-8 xl:gap-12 hidden lg:flex">
                {LINKS.map((link) => (
                    <li key={link.href}>
                        <SmoothLink  to={link.href} spy={true}>
                            {t(`${link.href}`)}
                        </SmoothLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default DesktopNav;
