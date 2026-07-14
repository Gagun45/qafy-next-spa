import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface Props {
  loading: boolean;
}

const SubmitBtn = ({ loading }: Props) => {
  const t = useTranslations("Contacts.ContactForm.submitBtn");
  const submit = t("submit");
  const submitting = t("submitting");
  return (
    <Button className="h-12 w-full rounded-xl text-base font-semibold shadow-lg shadow-primary/20" type="submit">
      {loading ? submitting : submit}
    </Button>
  );
};
export default SubmitBtn;
