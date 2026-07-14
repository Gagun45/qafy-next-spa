import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileImage, X } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Dispatch, RefObject, SetStateAction } from "react";

interface Props {
  ref: RefObject<HTMLInputElement | null>;
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

const MAX_FILES = 5;

const formatFileSize = (bytes: number) => {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const isSameFile = (first: File, second: File) =>
  first.name === second.name &&
  first.size === second.size &&
  first.lastModified === second.lastModified;

const ImageInput = ({ ref, files, setFiles }: Props) => {
  const t = useTranslations("Contacts.ContactForm.FormFields.images");
  const label = t.rich("label", {
    i: (chunk) => <i>{chunk}</i>,
  });

  const addFiles = (selectedFiles: File[]) => {
    setFiles((currentFiles) => {
      const uniqueFiles = [...currentFiles, ...selectedFiles].filter(
        (file, index, allFiles) =>
          allFiles.findIndex((candidate) => isSameFile(candidate, file)) === index
      );

      return uniqueFiles.slice(0, MAX_FILES);
    });
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((currentFiles) =>
      currentFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-dashed border-input/70 bg-accent/30 p-4 transition-colors hover:border-primary/40 hover:bg-accent/60">
        <Label htmlFor="contact-images" className="mb-2 font-medium">
          {label}
        </Label>
        <Input
          id="contact-images"
          ref={ref}
          type="file"
          accept="image/*"
          multiple
          onChange={(event) => {
            addFiles(Array.from(event.currentTarget.files ?? []));
            event.currentTarget.value = "";
          }}
        />
      </div>

      {files.length > 0 && (
        <ul className="space-y-2" aria-label="Attached images">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.lastModified}-${index}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card/80 px-3 py-2.5 shadow-sm"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileImage className="size-4" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block truncate text-sm font-semibold text-foreground">
                  {file.name}
                </span>
                <span className="numeric block text-xs text-muted-foreground">
                  {formatFileSize(file.size)}
                </span>
              </span>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => removeFile(index)}
                className="shrink-0 rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                aria-label={`Remove ${file.name}`}
                title={`Remove ${file.name}`}
              >
                <X className="size-4" aria-hidden="true" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ImageInput;
