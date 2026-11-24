module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/components/AntigravityParticles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AntigravityParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AntigravityParticles({ variant = "hero", isDark = false, className = "" }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const prefersReduced = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let animId = null;
        let width = 0;
        let height = 0;
        let dpr = 1;
        const pointer = {
            x: 0.62,
            y: 0.48,
            active: false
        };
        const ring = {
            x: 0.62,
            y: 0.48
        };
        let particles = [];
        function initParticles() {
            const count = variant === "hero" ? 260 : 120;
            particles = [];
            for(let i = 0; i < count; i++){
                // Golden-angle spiral + jitter for clean Poisson-like spacing
                const t = (i + 0.5) / count;
                const angle = i * 2.399963229728653;
                const radius = Math.sqrt(t);
                particles.push({
                    nx: 0.5 + Math.cos(angle) * radius * 0.52 + (Math.random() - 0.5) * 0.04,
                    ny: 0.5 + Math.sin(angle) * radius * 0.52 + (Math.random() - 0.5) * 0.04,
                    phase: Math.random() * Math.PI * 2,
                    speed: 0.35 + Math.random() * 0.5,
                    size: 1.4 + Math.random() * 1.4
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
        window.addEventListener("resize", resize, {
            passive: true
        });
        window.addEventListener("pointermove", onPointerMove, {
            passive: true
        });
        window.addEventListener("pointerleave", onPointerLeave, {
            passive: true
        });
        const darkSurface = variant === "dark-cta" || isDark;
        function draw(now) {
            const time = (now || 0) * 0.001;
            ctx.clearRect(0, 0, width, height);
            const targetX = pointer.active ? pointer.x : 0.58 + Math.cos(time * 0.35) * 0.14;
            const targetY = pointer.active ? pointer.y : 0.48 + Math.sin(time * 0.28) * 0.1;
            ring.x += (targetX - ring.x) * (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0.045);
            ring.y += (targetY - ring.y) * (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0.045);
            const cx = ring.x * width;
            const cy = ring.y * height;
            const ringRadius = Math.min(width, height) * (variant === "hero" ? 0.34 : 0.42);
            const bandWidth = Math.min(width, height) * 0.22;
            for(let i = 0; i < particles.length; i++){
                const p = particles[i];
                const driftX = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : Math.cos(time * p.speed + p.phase) * 8;
                const driftY = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : Math.sin(time * p.speed * 0.8 + p.phase) * 8;
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
                const fx = px + dx / dist * push;
                const fy = py + dy / dist * push;
                // Color shifts smoothly along the ring angle (Google Antigravity Blue -> Soft Violet -> Coral)
                let color;
                if (smoothHalo > 0.12) {
                    const normAngle = (angle + Math.PI) / (Math.PI * 2); // 0..1
                    if (normAngle < 0.55) {
                        color = darkSurface ? `rgba(91, 151, 255, ${(0.22 + smoothHalo * 0.68).toFixed(2)})` : `rgba(50, 121, 249, ${(0.2 + smoothHalo * 0.72).toFixed(2)})`;
                    } else if (normAngle < 0.78) {
                        color = darkSurface ? `rgba(147, 130, 255, ${(0.2 + smoothHalo * 0.62).toFixed(2)})` : `rgba(116, 98, 240, ${(0.18 + smoothHalo * 0.65).toFixed(2)})`;
                    } else {
                        color = darkSurface ? `rgba(238, 114, 130, ${(0.18 + smoothHalo * 0.58).toFixed(2)})` : `rgba(219, 86, 108, ${(0.18 + smoothHalo * 0.62).toFixed(2)})`;
                    }
                } else {
                    color = darkSurface ? "rgba(178, 187, 197, 0.16)" : "rgba(120, 130, 150, 0.18)";
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
            if ("TURBOPACK compile-time truthy", 1) {
                animId = window.requestAnimationFrame(draw);
            }
        }
        draw(0);
        return ()=>{
            if (animId) window.cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerleave", onPointerLeave);
        };
    }, [
        variant,
        isDark
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        "aria-hidden": "true",
        className: `pointer-events-none absolute inset-0 w-full h-full ${className}`
    }, void 0, false, {
        fileName: "[project]/src/components/AntigravityParticles.js",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/PortfolioClient.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var e = new Error("Could not parse module '[project]/src/components/PortfolioClient.js'\n\nExpected '</', got 'jsx text'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/components/Reveal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Reveal({ children, className = "", delay = 0 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) //TURBOPACK unreachable
        ;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            transitionDelay: `${delay}ms`
        },
        className: `ag-reveal ${visible ? "is-visible" : ""} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Reveal.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SkillIcons.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillIcon",
    ()=>SkillIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SkillIcon({ name, className = "w-6 h-6" }) {
    switch(name){
        case "nextjs":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3.9 14.4L9.7 8.4v7.1H8.3V7h1.6l5.9 7.6V7h1.4v9.4h-1.3Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/SkillIcons.js",
                    lineNumber: 6,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 5,
                columnNumber: 9
            }, this);
        case "laravel":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 7l4-2 4 2v6l4-2 4 2v5l-4 2-4-2v-3l-4 2-4-2V7z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 5v6l4 2m4-2v5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 11,
                columnNumber: 9
            }, this);
        case "django":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11 4h2.5v11.5c-1.3.25-2.3.35-3.4.35-3.2 0-4.9-1.45-4.9-4.2 0-2.65 1.8-4.35 4.5-4.35.45 0 .85.05 1.3.15V4Zm0 5.5c-.35-.1-.65-.15-1-.15-1.4 0-2.25.85-2.25 2.3 0 1.4.8 2.2 2.2 2.2.35 0 .65-.03 1.05-.1V9.5ZM15.5 7.5H18v8.4c0 2.9-.2 4.3-.95 5.45-.7 1.1-1.7 1.8-3.65 2.65l-2.3-1.1c1.9-.9 2.8-1.5 3.35-2.45.55-.9.75-2 .75-4.7V7.5Zm0-3.5H18v2.4h-2.5V4Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/SkillIcons.js",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 18,
                columnNumber: 9
            }, this);
        case "python":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 3c-3 0-3.5 1.3-3.5 2.8V8h4.5v1H7c-2 0-3.5 1.2-3.5 3.5S5 16 7 16h1.5v-2.2c0-1.6 1.2-2.8 3-2.8h4c1.4 0 2.5-1.1 2.5-2.5V5.8C18 4.2 16.5 3 12 3z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 21c3 0 3.5-1.3 3.5-2.8V16H11v-1h6c2 0 3.5-1.2 3.5-3.5S19 8 17 8h-1.5v2.2c0 1.6-1.2 2.8-3 2.8h-4C7.1 13 6 14.1 6 15.5v2.7C6 19.8 7.5 21 12 21z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "10.2",
                        cy: "5.7",
                        r: "0.7",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "13.8",
                        cy: "18.3",
                        r: "0.7",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 24,
                columnNumber: 9
            }, this);
        case "javascript":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "3",
                        y: "3",
                        width: "18",
                        height: "18",
                        rx: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.5 11v4.5a1.5 1.5 0 0 1-3 0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16.5 12c-.5-.7-1.4-1-2.2-.7-.8.3-1 1.2-.3 1.7.7.5 2.3.7 2.5 1.9.2 1.1-.8 2-2 1.9-.9-.1-1.6-.5-2-1.1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 33,
                columnNumber: 9
            }, this);
        case "html5":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8.5 8h7l-.3 2.5H9l.3 3h5.4l-.4 3-2.3.7-2.3-.7-.1-1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 41,
                columnNumber: 9
            }, this);
        case "css3":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 8h8l-.5 3H9.5l5.5 1-.4 3.5-2.6.8-2.6-.8-.2-1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 48,
                columnNumber: 9
            }, this);
        case "tailwind":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.84 14.53 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.16 14.47 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.84 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.16 9.47 12 7 12Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/SkillIcons.js",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 55,
                columnNumber: 9
            }, this);
        case "office":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5 6.5L13.5 3 19 4.8v14.4L13.5 21 5 17.5l8.5 1.2V6.8L8.5 8.5v7L5 17.5V6.5z"
                }, void 0, false, {
                    fileName: "[project]/src/components/SkillIcons.js",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 61,
                columnNumber: 9
            }, this);
        case "leadership":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "7",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 20a7 7 0 0 1 14 0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2v2m4.5 1.5L15 7M7.5 5.5L9 7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 67,
                columnNumber: 9
            }, this);
        case "speaking":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "9",
                        y: "3",
                        width: "6",
                        height: "10",
                        rx: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 11a7 7 0 0 0 14 0M12 18v3m-4 0h8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 75,
                columnNumber: 9
            }, this);
        case "teamwork":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9",
                        cy: "8",
                        r: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "16",
                        cy: "9",
                        r: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3.5 19a5.5 5.5 0 0 1 11 0M14.5 19a4.5 4.5 0 0 1 6-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 82,
                columnNumber: 9
            }, this);
        case "problem-solving":
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 8v4l2.5 2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 91,
                columnNumber: 9
            }, this);
    }
}
}),
"[project]/src/components/TypedHeading.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypedHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function TypedHeading({ line1, line2, id, className = "" }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fullText = `${line1}\n${line2}`;
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(fullText.length);
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = containerRef.current;
        if (!el) return;
        const prefersReduced = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setCount(0);
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.35
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        fullText
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!started || count >= fullText.length) return;
        const timer = window.setTimeout(()=>{
            setCount((c)=>c + 1);
        }, 22);
        return ()=>window.clearTimeout(timer);
    }, [
        started,
        count,
        fullText.length
    ]);
    const shownLine1 = line1.slice(0, Math.min(count, line1.length));
    const line2Count = Math.max(0, count - line1.length - 1);
    const shownLine2 = line2.slice(0, line2Count);
    const isTyping = started && count < fullText.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        ref: containerRef,
        id: id,
        "aria-label": `${line1} ${line2}`,
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "invisible block select-none",
                "aria-hidden": "true",
                children: [
                    line1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block mt-1",
                        children: line2
                    }, void 0, false, {
                        fileName: "[project]/src/components/TypedHeading.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TypedHeading.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 block",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: shownLine1
                    }, void 0, false, {
                        fileName: "[project]/src/components/TypedHeading.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    count <= line1.length && isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block w-[3px] h-[0.9em] bg-accent align-middle ml-1 ag-caret"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TypedHeading.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-on-surface-variant mt-1",
                        children: [
                            shownLine2,
                            count > line1.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-block w-[3px] h-[0.9em] bg-accent align-middle ml-1 ag-caret ${!isTyping ? "opacity-70" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/TypedHeading.js",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TypedHeading.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TypedHeading.js",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TypedHeading.js",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WaveTechOrbit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaveTechOrbit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function WaveTechOrbit({ items }) {
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const prefersReduced = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
            itemRefs.current.forEach((node, idx)=>{
                if (!node) return;
                const rect = node.getBoundingClientRect();
                const relX = listRect ? rect.left - listRect.left + rect.width / 2 : idx * 120;
                const waveY = Math.sin(relX / wavelength * Math.PI * 2 + phase) * 24;
                node.style.transform = `translate3d(0, ${waveY.toFixed(2)}px, 0)`;
            });
            animId = window.requestAnimationFrame(tick);
        }
        animId = window.requestAnimationFrame(tick);
        return ()=>{
            if (animId) window.cancelAnimationFrame(animId);
        };
    }, [
        items
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: listRef,
        onMouseEnter: ()=>{
            pausedRef.current = true;
        },
        onMouseLeave: ()=>{
            pausedRef.current = false;
        },
        className: "mt-14 py-8 overflow-visible",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-7 max-w-4xl mx-auto",
            children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex flex-col items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            itemRefs.current[idx] = el;
                        },
                        className: "ag-bouncer-node w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-medium text-on-surface will-change-transform",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/WaveTechOrbit.js",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                }, item.name, false, {
                    fileName: "[project]/src/components/WaveTechOrbit.js",
                    lineNumber: 64,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/WaveTechOrbit.js",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WaveTechOrbit.js",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/portfolio.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACHIEVEMENTS",
    ()=>ACHIEVEMENTS,
    "EDUCATION",
    ()=>EDUCATION,
    "HARD_SKILLS",
    ()=>HARD_SKILLS,
    "ORGANIZATIONS",
    ()=>ORGANIZATIONS,
    "PROJECTS",
    ()=>PROJECTS,
    "SOFT_SKILLS",
    ()=>SOFT_SKILLS,
    "TECH_ORBIT",
    ()=>TECH_ORBIT,
    "WORK_EXPERIENCE",
    ()=>WORK_EXPERIENCE
]);
const TECH_ORBIT = [
    {
        name: "Next.js",
        delay: "0s"
    },
    {
        name: "Laravel",
        delay: "0.35s"
    },
    {
        name: "Django",
        delay: "0.7s"
    },
    {
        name: "Python",
        delay: "1.05s"
    },
    {
        name: "JS",
        delay: "1.4s"
    },
    {
        name: "Tailwind",
        delay: "1.75s"
    }
];
const WORK_EXPERIENCE = [
    {
        title: "Software Engineer di KuTanya",
        period: "Feb 2026 - Sekarang",
        subtitle: "Platform SaaS EdTech (www.kutanya.id)",
        description: "Mengembangkan arsitektur aplikasi web, integrasi konsultasi akademik berbasis chat, voice call, dan video call, serta memastikan keandalan sistem bagi siswa dan pengajar.",
        image: null,
        monogram: "KT",
        badge: "Aktif"
    }
];
const EDUCATION = [
    {
        title: "Universitas Tidar",
        period: "2025 - Sekarang",
        subtitle: "S1 Teknologi Informasi",
        description: "Mendalami rekayasa perangkat lunak, arsitektur sistem web, dan pengembangan produk digital.",
        image: "/img/untidar.png",
        badge: "IPK: 3.93/4.00"
    },
    {
        title: "SMA Negeri 2 Magelang",
        period: "2022 - 2025",
        subtitle: "Lulus",
        description: "Aktif mengembangkan produk web sekolah serta memimpin organisasi siswa.",
        image: "/img/sman2magelang.webp",
        badge: null
    },
    {
        title: "SMP Negeri 1 Magelang",
        period: "2019 - 2022",
        subtitle: "Pendidikan Menengah Pertama",
        description: "Fondasi awal minat pada pemrograman dan desain antarmuka web.",
        image: "/img/smpn1magelang.jpg",
        badge: null
    }
];
const ORGANIZATIONS = [
    {
        title: "HIMATIF Untidar",
        period: "Feb 2026 - Sekarang",
        subtitle: "Staff Divisi Akademik",
        description: "Mendukung program kerja bidang akademik dan pengembangan kompetensi mahasiswa Teknologi Informasi Universitas Tidar.",
        image: null,
        monogram: "HM",
        badge: "Aktif"
    },
    {
        title: "MPK SMA Negeri 2 Magelang",
        period: "2023 - 2024",
        subtitle: "Ketua Umum",
        description: "Memimpin koordinasi Majelis Perwakilan Kelas dan menginisiasi platform digital Aspirasiku untuk menampung suara siswa.",
        image: "/img/mpk.png",
        badge: "Kepemimpinan"
    },
    {
        title: "MUDIKA SMA Negeri 2 Magelang",
        period: "2023 - 2024",
        subtitle: "Sekretaris",
        description: "Mengelola administrasi, dokumentasi kegiatan, dan komunikasi internal organisasi.",
        image: "/img/logosmada.jpg",
        badge: null
    }
];
const PROJECTS = [
    {
        index: "01 / FEATURED PROJECT",
        shortLabel: "01 · EdTech SaaS",
        shortDesc: "Konsultasi akademik chat, voice, dan video call.",
        title: "KuTanya",
        url: "https://www.kutanya.id",
        urlLabel: "Kunjungi www.kutanya.id",
        description: "Platform SaaS EdTech yang mempertemukan siswa dengan ribuan pengajar di seluruh Indonesia yang terdaftar untuk melakukan konsultasi akademik fleksibel berbasis chat, voice call, atau video call sesuai budget.",
        stack: [
            "Next.js",
            "Laravel",
            "Django",
            "Tailwind CSS"
        ],
        image: "/img/kutanya.png",
        imageAlt: "Tangkapan layar header website KuTanya (www.kutanya.id)"
    },
    {
        index: "02 / SCHOOL PLATFORM",
        shortLabel: "02 · Aspirasi Siswa",
        shortDesc: "Dikelola oleh MPK SMA Negeri 2 Magelang.",
        title: "Aspirasiku",
        url: null,
        urlLabel: null,
        description: "Website penampung aspirasi siswa yang dirancang untuk mempermudah penyampaian masukan secara terstruktur. Saat ini dikelola oleh MPK SMA Negeri 2 Magelang.",
        stack: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "PHP"
        ],
        image: "/img/aspirasiku.png",
        imageAlt: "Tampilan website Aspirasiku"
    },
    {
        index: "03 / EVENT SYSTEM",
        shortLabel: "03 · Event System",
        shortDesc: "Daftar hadir digital pameran lukisan SMAN 2 Magelang.",
        title: "Guestbook Website",
        url: null,
        urlLabel: null,
        description: "Website pencatat daftar hadir digital yang digunakan untuk mendukung pencatatan kehadiran pengunjung pada pameran lukisan SMA Negeri 2 Magelang.",
        stack: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "PHP",
            "Bootstrap"
        ],
        image: "/img/guestbook.jpg",
        imageAlt: "Tampilan website Guestbook"
    }
];
const ACHIEVEMENTS = [
    {
        tag: "01 · 2026",
        title: "Lolos Pendanaan Wirausaha (P2MW) 2026",
        description: "Program Pembinaan Mahasiswa Wirausaha dari Belmawa Kemdiktisaintek dengan platform KuTanya.",
        issuer: "Belmawa Kemdiktisaintek · KuTanya",
        logo: "/img/logo-p2mw.png",
        logoAlt: "Logo P2MW Program Pembinaan Mahasiswa Wirausaha"
    },
    {
        tag: "02 · 2026",
        title: "Lolos KMI Expo 2026",
        description: "Terpilih sebagai peserta Kewirausahaan Mahasiswa Indonesia (KMI) Expo 2026 mewakili pengembangan inovasi produk digital.",
        issuer: "Kewirausahaan Mahasiswa Indonesia",
        logo: "/img/logo-kmi-2026.png",
        logoAlt: "Logo KMI Expo 2026"
    }
];
const HARD_SKILLS = [
    {
        name: "Next.js",
        category: "Frontend & SSR",
        icon: "nextjs"
    },
    {
        name: "Laravel",
        category: "Backend PHP",
        icon: "laravel"
    },
    {
        name: "Django",
        category: "Backend Python",
        icon: "django"
    },
    {
        name: "Python",
        category: "Bahasa Pemrograman",
        icon: "python"
    },
    {
        name: "JavaScript",
        category: "Bahasa Pemrograman",
        icon: "javascript"
    },
    {
        name: "Tailwind CSS",
        category: "UI & Styling",
        icon: "tailwind"
    },
    {
        name: "HTML5",
        category: "Markup Web",
        icon: "html5"
    },
    {
        name: "CSS3",
        category: "Layout & Stylesheet",
        icon: "css3"
    },
    {
        name: "Microsoft Office",
        category: "Produktivitas",
        icon: "office"
    }
];
const SOFT_SKILLS = [
    {
        name: "Kepemimpinan",
        detail: "Ketua Umum MPK SMA Negeri 2 Magelang",
        icon: "leadership"
    },
    {
        name: "Public Speaking",
        detail: "Presentasi produk & koordinasi forum",
        icon: "speaking"
    },
    {
        name: "Kerja Sama Tim",
        detail: "Kolaborasi lintas divisi & engineering",
        icon: "teamwork"
    },
    {
        name: "Problem Solving",
        detail: "Analisis masalah & solusi terstruktur",
        icon: "problem-solving"
    }
];
}),
];

//# sourceMappingURL=_1qdi80nwx8il5._.js.map