import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/15 border-input/60 h-12 w-full min-w-0 rounded-xl border bg-background/70 px-4 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:mr-3 file:inline-flex file:h-8 file:rounded-lg file:border-0 file:bg-accent file:px-3 file:text-sm file:font-semibold file:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
