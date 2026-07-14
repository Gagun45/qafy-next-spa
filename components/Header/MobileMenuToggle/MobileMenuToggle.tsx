import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Menu, X } from "lucide-react";

interface Props {
  menuOpen: boolean;
}

const MobileMenuToggle = ({ menuOpen }: Props) => {
  return (
    <DialogTrigger asChild>
      <Button
        type="button"
        variant="ghost"
        className="relative size-11 rounded-full border border-border bg-card/70 p-0! shadow-sm lg:hidden"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <Menu
          className={`absolute size-5 transition-all duration-200 ${menuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
          aria-hidden="true"
        />
        <X
          className={`absolute size-5 transition-all duration-200 ${menuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
          aria-hidden="true"
        />
      </Button>
    </DialogTrigger>
  );
};
export default MobileMenuToggle;
