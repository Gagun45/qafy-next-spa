import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ImpressumContent = () => {
  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Impressum</DialogTitle>
        <DialogDescription className="sr-only">
          Legal disclosure information required by applicable law.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4 leading-relaxed">
        <p>
          <strong className="text-foreground">Angaben gemäß § 5 TMG</strong>
          <br />
          Qafy Mobile
          <br />
          Waldstraße 37
          <br />
          93161 Sinzing
        </p>

        <p className="mt-4">
          <strong className="text-foreground">Vertreten durch:</strong>
          <br />
          Denys Burlaka
        </p>

        <p className="mt-4">
          <strong className="text-foreground">Kontakt</strong>
          <br />
          Telefon: <span>+49 1514 0164020</span>
          <br />
          E-Mail: <span>denys@qafy.info</span>
        </p>

        <p className="mt-4">
          <strong className="text-foreground">Registereintrag</strong>
          <br />
          Eintragung im Handelsregister
          <br />
          Registergericht: Gemeinde Sinzing
          <br />
          Registernummer: 09375199
        </p>
      </div>
    </DialogContent>
  );
};
export default ImpressumContent;
