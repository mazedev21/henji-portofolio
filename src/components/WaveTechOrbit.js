"use client";

import { useEffect, useRef } from "react";
import { SkillIcon } from "./SkillIcons";

export default function WaveTechOrbit({ items }) {
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const pausedRef = useRef(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let animId = null;
    let phase = 0;
    let lastTime = performance.now();

    function tick(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!pausedRef.current) {
        phase += dt * 1.15;
      }

      const listEl = listRef.current;
      const listRect = listEl ? listEl.getBoundingClientRect() : null;
      const wavelength = Math.max(window.innerWidth * 0.72, 640);

      itemRefs.current.forEach((node, idx) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const relX = listRect
          ? rect.left - listRect.left + rect.width / 2
          : idx * 120;
        const waveY = Math.sin((relX / wavelength) * Math.PI * 2 + phase) * 24;
        node.style.transform = `translate3d(0, ${waveY.toFixed(2)}px, 0)`;
      });

      animId = window.requestAnimationFrame(tick);
    }

    animId = window.requestAnimationFrame(tick);
    return () => {
      if (animId) window.cancelAnimationFrame(animId);
    };
  }, [items]);

  return (
    <div
      ref={listRef}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      className="mt-14 py-8 overflow-visible"
    >
      <ul className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-7 max-w-4xl mx-auto">
        {items.map((item, idx) => (
          <li key={item.name} className="flex flex-col items-center">
            <div
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              aria-label={item.name}
              title={item.name}
              className="ag-bouncer-node w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-on-surface will-change-transform"
            >
              <SkillIcon name={item.icon} className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
