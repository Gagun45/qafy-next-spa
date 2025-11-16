import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ImpressumContent from "./ImpressumContent/ImpressumContent";

export function ImpressumDialog() {
  return (
    <Dialog>
      <DialogTrigger className="underline cursor-pointer">
        Impressum
      </DialogTrigger>

      <ImpressumContent />
    </Dialog>
  );
}
