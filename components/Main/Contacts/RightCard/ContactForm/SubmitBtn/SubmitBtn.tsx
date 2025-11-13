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
    <Button className="w-full" type="submit">
      {loading ? submitting : submit}
    </Button>
  );
};
export default SubmitBtn;
