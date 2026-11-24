"use client";

import { useEffect, useRef, useState } from "react";

export default function TypedHeading({
  line1,
  line2,
  id,
  className = "",
}) {
  const containerRef = useRef(null);
  const fullText = `${line1}\n${line2}`;
  const [count, setCount] = useState(fullText.length);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setCount(fullText.length);
      setStarted(true);
      return;
    }

    setCount(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fullText]);

  useEffect(() => {
    if (!started || count >= fullText.length) return;
    const timer = window.setTimeout(() => {
      setCount((c) => c + 1);
    }, 22);
    return () => window.clearTimeout(timer);
  }, [started, count, fullText.length]);

  const shownLine1 = line1.slice(0, Math.min(count, line1.length));
  const line2Count = Math.max(0, count - line1.length - 1);
  const shownLine2 = line2.slice(0, line2Count);
  const isTyping = started && count < fullText.length;

  return (
    <h2
      ref={containerRef}
      id={id}
      aria-label={`${line1} ${line2}`}
      className={`relative ${className}`}
    >
      {/* Reserve exact height so zero CLS occurs during typing */}
      <span className="invisible block select-none" aria-hidden="true">
        {line1}
        <span className="block mt-1">{line2}</span>
      </span>

      <span className="absolute inset-0 block" aria-hidden="true">
        <span>{shownLine1}</span>
        {count <= line1.length && isTyping && (
          <span className="inline-block w-[3px] h-[0.9em] bg-accent align-middle ml-1 ag-caret" />
        )}
        <span className="block text-on-surface-variant mt-1">
          {shownLine2}
          {count > line1.length && (
            <span
              className={`inline-block w-[3px] h-[0.9em] bg-accent align-middle ml-1 ag-caret ${
                !isTyping ? "opacity-70" : ""
              }`}
            />
          )}
        </span>
      </span>
    </h2>
  );
}
