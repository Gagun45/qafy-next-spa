"use client";
import { useEffect } from "react";

export default function GincoreWidget() {

  useEffect(() => {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src =
      "https://qafymobile.gincore.net/widget.php?ajax=&w=state&jquery=" +
      ("jQuery" in window ? 1 : 0);
    document.body.appendChild(s);
    const interval = setInterval(() => {
      const wrapper = document.getElementById("gcwidgets-wrapper");
      if (wrapper) wrapper.style.cssText = "display: none;";
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.removeChild(s);
    };
  }, []);
  return null;
}
