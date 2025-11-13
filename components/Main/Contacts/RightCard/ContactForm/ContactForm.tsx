import { contactFormSchema, type ContactFormType } from "@/lib/zod-schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useRef, useState } from "react";
import NameInput from "./NameInput/NameInput";
import ContactInput from "./ContactInput/ContactInput";
import MessageTextarea from "./MessageTextarea/MessageTextarea";
import { SendRequest } from "@/actions/actions.contact";
import ImageInput from "./ImageInput/ImageInput";
import SubmitBtn from "./SubmitBtn/SubmitBtn";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("Contacts.ContactForm");
  const successMsg = t("success");
  const errorMsg = t("error");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contact: "",
      message: "",
      name: "",
    },
  });

  const formReset = () => {
    form.reset();
    setFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (values: ContactFormType) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await SendRequest(values, files);
      if (!res.success) throw new Error();
      setSuccess(successMsg);
      formReset();
    } catch {
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <fieldset className="space-y-8" disabled={loading}>
          <NameInput />
          <ContactInput />
          <MessageTextarea />
          <ImageInput ref={fileInputRef} setFiles={setFiles} />
          {error && <p className="text-destructive">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <SubmitBtn loading={loading} />
        </fieldset>
      </form>
    </Form>
  );
};
export default ContactForm;
