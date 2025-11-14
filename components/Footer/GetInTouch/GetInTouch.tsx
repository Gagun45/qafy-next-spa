import { CONTACTS_GENERAL, CONTACTS_SOCIAL } from "@/lib/constants";
import { useTranslations } from "next-intl";

const GetInTouch = () => {
  const t = useTranslations("Footer.GetInTouch");
  const title = t("title");
  return (
    <div className="space-y-4 h-full">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-4">
        {CONTACTS_GENERAL.map((contact) => (
          <li
            key={contact.label}
            className="flex justify-center hover:underline underline-offset-2 md:justify-start"
          >
            <a
              href={contact.href}
              target="_blank"
              className="flex items-center justify-center gap-2"
            >
              <contact.icon className="text-primary size-6" />
              <span>{contact.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex justify-center items-center md:justify-start gap-8 flex-wrap">
        {CONTACTS_SOCIAL.map((contact) => {
          const textColor =
            contact.label === "Telegram"
              ? "text-telegram"
              : contact.label === "Instagram"
              ? "text-instagram"
              : "text-whatsapp";
          return (
            <li key={contact.label} className={`cursor-pointer ${textColor}`}>
              <a
                href={contact.href}
                target="_blank"
                aria-label={`${contact.label} link`}
              >
                <contact.icon className="size-6" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default GetInTouch;
