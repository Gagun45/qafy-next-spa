import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface Props {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuToggle = ({ menuOpen, toggleMenu }: Props) => {
  return (
    <Button
      onClick={toggleMenu}
      variant={"ghost"}
      className="aspect-square rounded-full border border-border bg-card/70 p-0! shadow-sm lg:hidden"
      aria-label="Toggle mobile menu"
    >
      {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
    </Button>
  );
};
export default MobileMenuToggle;
