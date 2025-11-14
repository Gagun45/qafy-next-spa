'use client'

import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const TestimonialsLinks = () => {
  const t = useTranslations("Testimonials.TestimonialsLinks");
  const viewAll = t("viewAll");
  const leaveTestimonial = t("leaveTestimonial");
  const href =
    "https://www.google.com/maps/place/Qafy-Mobile/@48.9885294,12.0243309,17z/data=!4m8!3m7!1s0x479fc16245fd3555:0x37f531228e11ac2!8m2!3d48.9885294!4d12.0243309!9m1!1b1!16s%2Fg%2F11x73d1q8d?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D";
  return (
    <div className="flex items-center gap-2 justify-between w-full">
      <Link
        className={buttonVariants({
          variant: "link",
          className: "text-foreground! underline",
        })}
        href={href}
        target="_blank"
      >
        {viewAll}
      </Link>
      <Link
        className={buttonVariants({ variant: "link", className: "underline" })}
        href={href}
        target="_blank"
      >
        {leaveTestimonial}
      </Link>
    </div>
  );
};
export default TestimonialsLinks;
