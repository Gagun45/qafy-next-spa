import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import type { Dispatch, RefObject, SetStateAction } from "react";

interface Props {
  ref: RefObject<HTMLInputElement | null>;
  setFiles: Dispatch<SetStateAction<File[]>>;
}

const ImageInput = ({ ref, setFiles }: Props) => {
  const t = useTranslations("Contacts.ContactForm.FormFields.images");
  const label = t.rich("label", {
    i: (chunk) => <i>{chunk}</i>,
  });
  return (
    <Label className="flex flex-col gap-1 items-start">
      <span>{label}</span>
      <Input
        ref={ref}
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          if (e.target.files) setFiles(Array.from(e.target.files));
        }}
      />
    </Label>
  );
};
export default ImageInput;
