import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import { LINKS } from "@/lib/constants";


const QuickLinks = () => {
  return (
    <div className="h-full">
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        {LINKS.map((link) => (
          <li key={link.href}>
            <SmoothLink
              className="text-muted-foreground underline"
              to={link.href}
            >
              {link.label}
            </SmoothLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default QuickLinks;
