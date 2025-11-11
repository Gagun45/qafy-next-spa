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
      className="lg:hidden p-0! aspect-square"
    >
      {menuOpen ? <X className="size-8" /> : <Menu className="size-8" />}
    </Button>
  );
};
export default MobileMenuToggle;
