import { contactFormSchema, type ContactFormType } from "@/lib/zod-schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import NameInput from "./NameInput/NameInput";
import ContactInput from "./ContactInput/ContactInput";
import MessageTextarea from "./MessageTextarea/MessageTextarea";

const ContactForm = () => {
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
    console.log(values);
    // setLoading(true);
    // setError(null);
    // setSuccess(null);
    // try {
    //   const formData = new FormData();
    //   const { contact, message, name } = values;
    //   formData.append("name", name);
    //   formData.append("contact", contact);
    //   formData.append("message", message);
    //   files.forEach((file) => {
    //     formData.append("files", file);
    //   });
    //   const res = await fetch(`${BACKEND_BASE_URL}/api/contact`, {
    //     method: "POST",
    //     body: formData,
    //   });
    //   if (!res.ok) {
    //     throw new Error();
    //   }
    //   setSuccess("Request sent successfully!");
    //   formReset();
    // } catch {
    //   setError("Something went wrong");
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <fieldset className="space-y-8" disabled={loading}>
          <NameInput />
          <ContactInput />
          <MessageTextarea />
          <Label className="flex flex-col gap-1 items-start">
            <span>
              Upload images <i>(optional, up to 5)</i>
            </span>
            <Input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={(e) => {
                if (e.target.files) setFiles(Array.from(e.target.files));
              }}
            />
          </Label>
          {error && <p className="text-destructive">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <Button className="w-full" type="submit">
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};
export default ContactForm;
