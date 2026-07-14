import { CONTACTS_GENERAL, CONTACTS_SOCIAL } from "@/lib/constants";
import { useTranslations } from "next-intl";

const GetInTouch = () => {
  const t = useTranslations("Footer.GetInTouch");
  const title = t("title");
  return (
    <div className="space-y-4 h-full">
      <h4 className="microLabel mb-5 text-slate-500">{title}</h4>
      <ul className="space-y-3">
        {CONTACTS_GENERAL.map((contact) => (
          <li
            key={contact.label}
            className="flex justify-center md:justify-start"
          >
            <a
              href={contact.href}
              target="_blank"
              className="flex items-center justify-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <contact.icon className="text-primary size-6" />
              <span>{contact.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
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
                className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:-translate-y-0.5 hover:bg-white/10"
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
