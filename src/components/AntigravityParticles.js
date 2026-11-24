"use client";

import { useEffect, useRef } from "react";

export default function AntigravityParticles({
  variant = "hero",
  isDark = false,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const pointer = { x: 0.62, y: 0.48, active: false };
    const ring = { x: 0.62, y: 0.48 };
    let particles = [];

    function initParticles() {
      const count = variant === "hero" ? 260 : 120;
      particles = [];
      for (let i = 0; i < count; i++) {
        // Golden-angle spiral + jitter for clean Poisson-like spacing
        const t = (i + 0.5) / count;
        const angle = i * 2.399963229728653;
        const radius = Math.sqrt(t);
        particles.push({
          nx: 0.5 + Math.cos(angle) * radius * 0.52 + (Math.random() - 0.5) * 0.04,
          ny: 0.5 + Math.sin(angle) * radius * 0.52 + (Math.random() - 0.5) * 0.04,
          phase: Math.random() * Math.PI * 2,
          speed: 0.35 + Math.random() * 0.5,
          size: 1.4 + Math.random() * 1.4,
        });
      }
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const rx = (e.clientX - rect.left) / rect.width;
      const ry = (e.clientY - rect.top) / rect.height;
      if (rx >= -0.1 && rx <= 1.1 && ry >= -0.1 && ry <= 1.1) {
        pointer.x = rx;
        pointer.y = ry;
        pointer.active = true;
      }
    }

    function onPointerLeave() {
      pointer.active = false;
    }

    resize();
    initParticles();

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });

    const darkSurface = variant === "dark-cta" || isDark;

    function draw(now) {
      const time = (now || 0) * 0.001;
      ctx.clearRect(0, 0, width, height);

      const targetX = pointer.active
        ? pointer.x
        : 0.58 + Math.cos(time * 0.35) * 0.14;
      const targetY = pointer.active
        ? pointer.y
        : 0.48 + Math.sin(time * 0.28) * 0.1;

      ring.x += (targetX - ring.x) * (prefersReduced ? 1 : 0.045);
      ring.y += (targetY - ring.y) * (prefersReduced ? 1 : 0.045);

      const cx = ring.x * width;
      const cy = ring.y * height;
      const ringRadius = Math.min(width, height) * (variant === "hero" ? 0.34 : 0.42);
      const bandWidth = Math.min(width, height) * 0.22;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const driftX = prefersReduced ? 0 : Math.cos(time * p.speed + p.phase) * 8;
        const driftY = prefersReduced ? 0 : Math.sin(time * p.speed * 0.8 + p.phase) * 8;

        const px = p.nx * width + driftX;
        const py = p.ny * height + driftY;

        const dx = px - cx;
        const dy = py - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const angle = Math.atan2(dy, dx);

        // Ring proximity weight (peaks along the antigravity halo arc)
        const distFromRing = Math.abs(dist - ringRadius);
        const halo = Math.max(0, 1 - distFromRing / bandWidth);
        const smoothHalo = halo * halo * (3 - 2 * halo);

        // Subtle outward push near the ring center
        const push = smoothHalo * 10;
        const fx = px + (dx / dist) * push;
        const fy = py + (dy / dist) * push;

        // Color shifts smoothly along the ring angle (Google Antigravity Blue -> Soft Violet -> Coral)
        let color;
        if (smoothHalo > 0.12) {
          const normAngle = (angle + Math.PI) / (Math.PI * 2); // 0..1
          if (normAngle < 0.55) {
            color = darkSurface
              ? `rgba(91, 151, 255, ${(0.22 + smoothHalo * 0.68).toFixed(2)})`
              : `rgba(50, 121, 249, ${(0.2 + smoothHalo * 0.72).toFixed(2)})`;
          } else if (normAngle < 0.78) {
            color = darkSurface
              ? `rgba(147, 130, 255, ${(0.2 + smoothHalo * 0.62).toFixed(2)})`
              : `rgba(116, 98, 240, ${(0.18 + smoothHalo * 0.65).toFixed(2)})`;
          } else {
            color = darkSurface
              ? `rgba(238, 114, 130, ${(0.18 + smoothHalo * 0.58).toFixed(2)})`
              : `rgba(219, 86, 108, ${(0.18 + smoothHalo * 0.62).toFixed(2)})`;
          }
        } else {
          color = darkSurface
            ? "rgba(178, 187, 197, 0.16)"
            : "rgba(120, 130, 150, 0.18)";
        }

        const dashLen = p.size * (1.2 + smoothHalo * 3.1);
        const dashThick = p.size * (0.7 + smoothHalo * 0.55);

        ctx.save();
        ctx.translate(fx, fy);
        ctx.rotate(angle);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.roundRect(-dashLen * 0.5, -dashThick * 0.5, dashLen, dashThick, dashThick);
        ctx.fill();
        ctx.restore();
      }

      if (!prefersReduced) {
        animId = window.requestAnimationFrame(draw);
      }
    }

    draw(0);

    return () => {
      if (animId) window.cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [variant, isDark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
}
