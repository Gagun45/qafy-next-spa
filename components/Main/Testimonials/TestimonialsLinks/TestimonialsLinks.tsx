import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowUpRight, MessageSquarePlus } from "lucide-react";

const TestimonialsLinks = () => {
  const t = useTranslations("Testimonials.TestimonialsLinks");
  const viewAll = t("viewAll");
  const leaveTestimonial = t("leaveTestimonial");
  const href =
    "https://www.google.com/maps/place/Qafy-Mobile/@48.9885294,12.0243309,17z/data=!4m8!3m7!1s0x479fc16245fd3555:0x37f531228e11ac2!8m2!3d48.9885294!4d12.0243309!9m1!1b1!16s%2Fg%2F11x73d1q8d?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D";
  return (
    <div className="flex w-full flex-col items-stretch justify-center gap-3 pt-3 sm:flex-row sm:items-center">
      <Link
        className={buttonVariants({
          variant: "outline",
          className: "h-11 rounded-xl border-border bg-card/70 px-5",
        })}
        href={href}
        target="_blank"
      >
        {viewAll}
        <ArrowUpRight />
      </Link>
      <Link
        className={buttonVariants({ variant: "default", className: "h-11 rounded-xl px-5 shadow-lg shadow-primary/15" })}
        href={href}
        target="_blank"
      >
        <MessageSquarePlus />
        {leaveTestimonial}
      </Link>
    </div>
  );
};
export default TestimonialsLinks;
