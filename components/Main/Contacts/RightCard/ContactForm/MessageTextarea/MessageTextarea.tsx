import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormType } from "@/lib/zod-schemas";
import { useFormContext } from "react-hook-form";

const MessageTextarea = () => {
  const { control } = useFormContext<ContactFormType>();
  return (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Describe the problem</FormLabel>
          <FormControl>
            <Textarea placeholder="Screen cracked, doesn`t turn on, water damage..." {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default MessageTextarea;