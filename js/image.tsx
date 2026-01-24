"use client";

import { useEffect } from "react";

export default function BlogCarouselScript() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);

    const row = document.getElementById("blog-scroll-row");
    if (row) {
      const slides = Array.from(row.querySelectorAll("[data-indicator]"));
      const dots = Array.from(
        document.querySelectorAll("[data-indicator-dot]")
      );

      const updateIndicators = () => {
        const rowRect = row?.getBoundingClientRect();
        const rowCenter = rowRect ? rowRect.left + rowRect.width / 2 : 0;

        let closestIdx = 0;
        let minDist = Infinity;

        slides.forEach((slide, idx) => {
          const slideRect = slide.getBoundingClientRect();
          const slideCenter = slideRect.left + slideRect.width / 2;
          const dist = Math.abs(slideCenter - rowCenter);
          if (dist < minDist) {
            minDist = dist;
            closestIdx = idx;
          }
        });

        dots.forEach((dot, idx) => {
          dot.classList.toggle("bg-pharmacy-700", idx === closestIdx);
          dot.classList.toggle("w-[31px]", idx === closestIdx);

          dot.classList.toggle("bg-[#D9D9D9]", idx !== closestIdx);
          dot.classList.toggle("w-2.5", idx !== closestIdx);
        });
      };

      const handleScroll = () => {
        window.requestAnimationFrame(updateIndicators);
      };

      row.addEventListener("scroll", handleScroll);
      updateIndicators();
      window.addEventListener("resize", updateIndicators);

      return () => {
        row.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateIndicators);
        window.removeEventListener("popstate", handlePopState);
      };
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}
