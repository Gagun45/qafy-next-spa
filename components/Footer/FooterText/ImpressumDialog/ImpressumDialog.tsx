import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ImpressumContent from "./ImpressumContent/ImpressumContent";

export function ImpressumDialog() {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer text-sm text-slate-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white">
        Impressum
      </DialogTrigger>

      <ImpressumContent />
    </Dialog>
  );
}
