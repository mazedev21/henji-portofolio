(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AntigravityParticles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AntigravityParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AntigravityParticles({ variant = "hero", isDark = false, className = "" }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AntigravityParticles.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const prefersReduced = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
                ring.x += (targetX - ring.x) * (prefersReduced ? 1 : 0.045);
                ring.y += (targetY - ring.y) * (prefersReduced ? 1 : 0.045);
                const cx = ring.x * width;
                const cy = ring.y * height;
                const ringRadius = Math.min(width, height) * (variant === "hero" ? 0.34 : 0.42);
                const bandWidth = Math.min(width, height) * 0.22;
                for(let i = 0; i < particles.length; i++){
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
                if (!prefersReduced) {
                    animId = window.requestAnimationFrame(draw);
                }
            }
            draw(0);
            return ({
                "AntigravityParticles.useEffect": ()=>{
                    if (animId) window.cancelAnimationFrame(animId);
                    window.removeEventListener("resize", resize);
                    window.removeEventListener("pointermove", onPointerMove);
                    window.removeEventListener("pointerleave", onPointerLeave);
                }
            })["AntigravityParticles.useEffect"];
        }
    }["AntigravityParticles.useEffect"], [
        variant,
        isDark
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        "aria-hidden": "true",
        className: `pointer-events-none absolute inset-0 w-full h-full ${className}`
    }, void 0, false, {
        fileName: "[project]/src/components/AntigravityParticles.js",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_s(AntigravityParticles, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = AntigravityParticles;
var _c;
__turbopack_context__.k.register(_c, "AntigravityParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PortfolioClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AntigravityParticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AntigravityParticles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkillIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SkillIcons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TypedHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TypedHeading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WaveTechOrbit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WaveTechOrbit.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const NAV_LINKS = [
    {
        href: "#beranda",
        label: "Beranda"
    },
    {
        href: "#pengalaman-kerja",
        label: "Pengalaman"
    },
    {
        href: "#pendidikan",
        label: "Pendidikan"
    },
    {
        href: "#organisasi",
        label: "Organisasi"
    },
    {
        href: "#proyek",
        label: "Proyek"
    },
    {
        href: "#pencapaian",
        label: "Pencapaian"
    },
    {
        href: "#keahlian",
        label: "Skills"
    },
    {
        href: "#kontak",
        label: "Kontak"
    }
];
function TimelineCard({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "bg-container border border-hairline rounded-[24px] p-6 flex flex-col sm:flex-row gap-5 sm:items-start transition-colors hover:bg-container-high",
        children: [
            item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: item.image,
                alt: item.title,
                width: 72,
                height: 72,
                loading: "lazy",
                className: "w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl object-cover shrink-0 border border-hairline bg-surface"
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioClient.js",
                lineNumber: 35,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl bg-surface border border-hairline flex items-center justify-center shrink-0 font-mono text-sm text-accent font-semibold",
                children: item.monogram || "KT"
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioClient.js",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-2 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg sm:text-xl font-medium text-on-surface",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs text-accent",
                                children: item.period
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2 mb-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-on-surface-variant",
                                children: item.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-surface text-accent border border-hairline",
                                children: item.badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-on-surface-variant leading-relaxed",
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PortfolioClient.js",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PortfolioClient.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = TimelineCard;
function PortfolioClient() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBanner, setShowBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeProject, setActiveProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioClient.useEffect": ()=>{
            setIsDark(document.documentElement.classList.contains("dark"));
        }
    }["PortfolioClient.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioClient.useEffect": ()=>{
            function onKeyDown(e) {
                if (e.key === "Escape") {
                    setMenuOpen(false);
                }
            }
            document.addEventListener("keydown", onKeyDown);
            return ({
                "PortfolioClient.useEffect": ()=>document.removeEventListener("keydown", onKeyDown)
            })["PortfolioClient.useEffect"];
        }
    }["PortfolioClient.useEffect"], []);
    function toggleTheme() {
        const nextDark = !isDark;
        setIsDark(nextDark);
        document.documentElement.classList.toggle("dark", nextDark);
        try {
            localStorage.setItem("theme", nextDark ? "dark" : "light");
        } catch  {
        // ignore storage errors
        }
    }
    function stepProject(delta) {
        setActiveProject((prev)=>(prev + delta + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].length);
    }
    const currentProject = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"][activeProject];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-50 bg-white/80 dark:bg-[#121317]/80 backdrop-blur-md border-b border-hairline",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between h-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-7",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#beranda",
                                                    className: "inline-flex items-center gap-2 text-lg font-medium tracking-tight text-on-surface",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block w-2.5 h-2.5 rounded-full bg-accent",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 122,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Mazedev"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 126,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 118,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                    "aria-label": "Navigasi utama",
                                                    className: "hidden lg:flex items-center gap-5",
                                                    children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: link.href,
                                                            className: "text-sm text-on-surface-variant hover:text-on-surface transition-colors",
                                                            children: link.label
                                                        }, link.href, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 134,
                                                            columnNumber: 19
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 129,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 117,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: toggleTheme,
                                                    "aria-label": isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
                                                    "aria-pressed": isDark,
                                                    className: "ag-btn-secondary w-11 h-11 rounded-full inline-flex items-center justify-center",
                                                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.75",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 164,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.75",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 176,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 146,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#kontak",
                                                    className: "hidden sm:inline-flex ag-btn-primary items-center justify-center min-h-[44px] px-5 rounded-full text-sm font-medium",
                                                    children: "Hubungi Saya"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 181,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setMenuOpen((prev)=>!prev),
                                                    "aria-label": menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
                                                    "aria-expanded": menuOpen,
                                                    "aria-controls": "mobile-menu",
                                                    className: "lg:hidden ag-btn-primary w-11 h-11 rounded-full inline-flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        "aria-hidden": "true",
                                                        children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M6 6l12 12M18 6L6 18"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 205,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4 7h16M4 12h16M4 17h16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 196,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 188,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 145,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 116,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            showBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-hairline bg-container/80 px-4 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs sm:text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-on-surface text-surface font-medium",
                                                    children: "2026"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-on-surface-variant",
                                                    children: "Software Engineer · Lolos P2MW & KMI Expo 2026"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#pencapaian",
                                                    className: "font-medium text-on-surface underline underline-offset-4 hover:text-accent transition-colors",
                                                    children: "Lihat pencapaian"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowBanner(false),
                                            "aria-label": "Tutup pengumuman",
                                            className: "w-8 h-8 rounded-full inline-flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-container-high shrink-0",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setMenuOpen(false),
                                "aria-hidden": "true",
                                className: "lg:hidden fixed inset-0 z-40 bg-black/20 dark:bg-black/45 backdrop-blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                id: "mobile-menu",
                                "aria-label": "Navigasi seluler",
                                className: "lg:hidden absolute top-full left-0 right-0 z-50 bg-white/80 dark:bg-[#121317]/80 backdrop-blur-xl border-b border-hairline shadow-lg px-4 sm:px-6 pb-5 pt-3 ag-panel-enter",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-7xl mx-auto grid grid-cols-2 gap-1",
                                    children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            onClick: ()=>setMenuOpen(false),
                                            className: "min-h-[44px] px-3 flex items-center rounded-xl text-sm font-medium text-on-surface hover:bg-container",
                                            children: link.label
                                        }, link.href, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PortfolioClient.js",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "beranda",
                        className: "relative overflow-hidden min-h-[76vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AntigravityParticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "hero",
                                isDark: isDark
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 max-w-4xl mx-auto text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            animationDelay: "0ms"
                                        },
                                        className: "ag-hero-enter inline-flex items-center gap-2 text-base sm:text-lg font-medium text-on-surface mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full bg-accent",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Emannuel Henji · Mazedev"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            animationDelay: "90ms"
                                        },
                                        className: "ag-hero-enter ag-display-title text-4xl sm:text-6xl lg:text-[74px] font-medium text-on-surface",
                                        children: [
                                            "Membangun produk web",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block mt-1",
                                                children: "untuk era digital modern"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            animationDelay: "180ms"
                                        },
                                        className: "ag-hero-enter mt-6 text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed",
                                        children: "Software Engineer di KuTanya dan mahasiswa S1 Teknologi Informasi Universitas Tidar. Berpengalaman membangun proyek menggunakan Next.js, Laravel, dan Django."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            animationDelay: "260ms"
                                        },
                                        className: "ag-hero-enter mt-9 flex flex-wrap items-center justify-center gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#proyek",
                                                className: "ag-btn-secondary inline-flex items-center justify-center min-h-[48px] px-7 rounded-full text-sm sm:text-base font-medium",
                                                children: "Lihat Proyek"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#kontak",
                                                className: "ag-btn-primary inline-flex items-center justify-center min-h-[48px] px-7 rounded-full text-sm sm:text-base font-medium",
                                                children: "Mulai Kolaborasi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "px-4 sm:px-6 lg:px-8 pb-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "max-w-6xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-container border border-hairline rounded-[28px] p-6 sm:p-10 lg:p-14 flex flex-col md:flex-row items-center gap-8 lg:gap-14",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/img/profile.png",
                                        alt: "Foto profil Emannuel Henji",
                                        width: 220,
                                        height: 220,
                                        fetchPriority: "high",
                                        className: "w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover border border-hairline shrink-0 bg-container-high"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center md:text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-xs uppercase tracking-wider text-accent mb-2.5",
                                                children: "Magelang, Indonesia · Full-Stack Engineer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "ag-display-title text-2xl sm:text-4xl font-medium text-on-surface mb-4",
                                                children: "Dari riset kebutuhan pengguna hingga produk SaaS siap pakai."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl mb-6",
                                                children: [
                                                    "Saat ini mengembangkan platform EdTech KuTanya (",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://www.kutanya.id",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-accent underline underline-offset-4",
                                                        children: "www.kutanya.id"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, this),
                                                    ") yang menghubungkan siswa dengan ribuan pengajar di seluruh Indonesia melalui chat, voice call, dan video call."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap justify-center md:justify-start gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-4 py-2 rounded-full text-xs font-mono bg-surface border border-hairline text-on-surface",
                                                        children: "Software Engineer @ KuTanya"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 362,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-4 py-2 rounded-full text-xs font-mono bg-surface border border-hairline text-on-surface",
                                                        children: "S1 TI Universitas Tidar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 365,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-labelledby": "tech-heading",
                        className: "border-t border-hairline py-24 px-4 sm:px-6 lg:px-8 overflow-x-clip",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TypedHeading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "tech-heading",
                                    line1: "Dirancang untuk performa web,",
                                    line2: "dari antarmuka hingga backend.",
                                    className: "ag-display-title text-3xl sm:text-5xl font-medium text-on-surface max-w-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WaveTechOrbit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_ORBIT"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "pengalaman-kerja",
                        className: "border-t border-hairline py-24 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "lg:col-span-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                            children: "Karier Profesional"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "ag-display-title text-3xl sm:text-4xl font-medium text-on-surface mb-4",
                                            children: "Pengalaman Kerja"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base text-on-surface-variant leading-relaxed",
                                            children: "Kontribusi rekayasa perangkat lunak dalam membangun sistem produksi yang melayani pengguna nyata."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 403,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 396,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    delay: 90,
                                    className: "lg:col-span-8 space-y-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORK_EXPERIENCE"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineCard, {
                                            item: item
                                        }, item.title, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 409,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "pendidikan",
                        className: "border-t border-hairline py-24 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "lg:col-span-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                            children: "Latar Akademik"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "ag-display-title text-3xl sm:text-4xl font-medium text-on-surface mb-4",
                                            children: "Pendidikan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base text-on-surface-variant leading-relaxed",
                                            children: "Perjalanan studi formal yang membentuk dasar pemikiran komputasi dan rekayasa teknologi informasi."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 430,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    delay: 90,
                                    className: "lg:col-span-8 space-y-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDUCATION"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineCard, {
                                            item: item
                                        }, item.title, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "organisasi",
                        className: "border-t border-hairline py-24 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "lg:col-span-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                            children: "Kepemimpinan & Komunitas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "ag-display-title text-3xl sm:text-4xl font-medium text-on-surface mb-4",
                                            children: "Organisasi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base text-on-surface-variant leading-relaxed",
                                            children: "Keterlibatan aktif dalam organisasi akademik kampus dan kepemimpinan siswa."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    delay: 90,
                                    className: "lg:col-span-8 space-y-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORGANIZATIONS"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineCard, {
                                            item: item
                                        }, item.title, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "proyek",
                        className: "border-t border-hairline py-24 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "flex flex-wrap items-end justify-between gap-4 mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "ag-display-title text-3xl sm:text-5xl font-medium text-on-surface",
                                                    children: "Proyek Pilihan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 479,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-base text-on-surface-variant max-w-xl",
                                                    children: "Produk digital yang dirancang dan dibangun secara langsung, mulai dari platform SaaS EdTech hingga aplikasi sekolah."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 482,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 478,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>stepProject(-1),
                                                    "aria-label": "Proyek sebelumnya",
                                                    className: "ag-btn-secondary w-11 h-11 rounded-full inline-flex items-center justify-center text-lg",
                                                    children: "←"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 489,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>stepProject(1),
                                                    "aria-label": "Proyek berikutnya",
                                                    className: "ag-btn-primary w-11 h-11 rounded-full inline-flex items-center justify-center text-lg",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 477,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ag-panel-enter",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-7 aspect-[848/488] rounded-[24px] overflow-hidden border border-hairline bg-container",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: currentProject.image,
                                                alt: currentProject.imageAlt,
                                                width: 848,
                                                height: 488,
                                                className: "w-full h-full object-cover object-top"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 512,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-5 flex flex-col items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                                    children: currentProject.index
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 523,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "ag-display-title text-2xl sm:text-4xl font-medium text-on-surface mb-4",
                                                    children: currentProject.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 526,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base text-on-surface-variant leading-relaxed mb-6",
                                                    children: currentProject.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 529,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2 mb-7",
                                                    children: currentProject.stack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 rounded-full text-xs font-mono bg-container border border-hairline text-on-surface",
                                                            children: tech
                                                        }, tech, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 534,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 532,
                                                    columnNumber: 17
                                                }, this),
                                                currentProject.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: currentProject.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "ag-btn-primary inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full text-sm font-medium",
                                                    children: currentProject.urlLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 543,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center min-h-[44px] px-4 py-2 rounded-full text-xs font-mono bg-container border border-hairline text-on-surface-variant",
                                                    children: "Proyek Arsip Sekolah"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 552,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, currentProject.title, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 grid grid-cols-1 md:grid-cols-3 gap-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].map((proj, idx)=>{
                                        const selected = idx === activeProject;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-pressed": selected,
                                            onClick: ()=>setActiveProject(idx),
                                            className: `text-left bg-container border rounded-2xl p-5 transition-colors hover:bg-container-high ${selected ? "border-accent" : "border-hairline"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-xs text-accent mb-1",
                                                    children: proj.shortLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 572,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-medium text-on-surface",
                                                    children: proj.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 575,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-on-surface-variant mt-1",
                                                    children: proj.shortDesc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 578,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, proj.title, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 563,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 476,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 472,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "pencapaian",
                        className: "border-t border-hairline py-24 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "max-w-2xl mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                            children: "Rekam Prestasi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 595,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "ag-display-title text-3xl sm:text-5xl font-medium text-on-surface",
                                            children: "Penghargaan & Pencapaian"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 598,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 594,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACHIEVEMENTS"].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            delay: idx * 90,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "h-full bg-container border border-hairline rounded-[24px] p-7 sm:p-8 flex flex-col justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between gap-4 mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-white border border-hairline rounded-2xl px-4 py-2.5 h-16 inline-flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: item.logo,
                                                                            alt: item.logoAlt,
                                                                            width: 140,
                                                                            height: 44,
                                                                            loading: "lazy",
                                                                            className: "h-10 w-auto object-contain"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                                            lineNumber: 610,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                                        lineNumber: 609,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-xs text-accent shrink-0",
                                                                        children: item.tag
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                                        lineNumber: 619,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 608,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl font-medium text-on-surface mb-3",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 623,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm sm:text-base text-on-surface-variant leading-relaxed",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 626,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 607,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-6 pt-4 border-t border-hairline font-mono text-xs text-on-surface-variant",
                                                        children: item.issuer
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 630,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 606,
                                                columnNumber: 19
                                            }, this)
                                        }, item.title, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 605,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 593,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 589,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "keahlian",
                        className: "border-t border-hairline py-24 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto space-y-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                                    children: "Hard Skills"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 649,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "ag-display-title text-3xl sm:text-4xl font-medium text-on-surface",
                                                    children: "Teknologi & Stack Pengembangan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 652,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 648,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            delay: 80,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HARD_SKILLS"].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-container border border-hairline rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-colors hover:bg-container-high",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-12 h-12 rounded-xl bg-surface border border-hairline flex items-center justify-center text-accent shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkillIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillIcon"], {
                                                                    name: skill.icon,
                                                                    className: "w-6 h-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                                    lineNumber: 665,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 664,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-base font-medium text-on-surface",
                                                                        children: skill.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                                        lineNumber: 668,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-mono text-on-surface-variant",
                                                                        children: skill.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                                        lineNumber: 671,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 667,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, skill.name, true, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 660,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 658,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 657,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-12 border-t border-hairline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                                    children: "Soft Skills"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 684,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "ag-display-title text-3xl sm:text-4xl font-medium text-on-surface",
                                                    children: "Kepemimpinan & Kolaborasi"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 687,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 683,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            delay: 80,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOFT_SKILLS"].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-2xl p-5 sm:p-6 bg-[var(--inverse-bg)] text-[var(--inverse-text)] border border-hairline flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#5B97FF] shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkillIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillIcon"], {
                                                                    name: skill.icon,
                                                                    className: "w-6 h-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                                    lineNumber: 700,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 699,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-base font-medium",
                                                                        children: skill.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                                        lineNumber: 703,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-[var(--inverse-muted)]",
                                                                        children: skill.detail
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                                        lineNumber: 704,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 702,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, skill.name, true, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 695,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 693,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 692,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 682,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 645,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "kontak",
                        className: "py-12 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "max-w-6xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-[28px] bg-[#121317] text-[#F8F9FC] border border-[#2F3034] px-6 py-16 sm:px-12 sm:py-24 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AntigravityParticles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "dark-cta",
                                        isDark: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 720,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 max-w-2xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-xs uppercase tracking-wider text-[#5B97FF] mb-3",
                                                children: "Kontak & Kolaborasi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 723,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "ag-display-title text-3xl sm:text-5xl font-medium text-[#F8F9FC] mb-5",
                                                children: "Siap membangun proyek web berikutnya?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 726,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base text-[#B2BBC5] mb-8",
                                                children: "Hubungi saya langsung melalui email atau kanal sosial media berikut untuk diskusi proyek dan kolaborasi."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 729,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap justify-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:emannuelhenji521@gmail.com",
                                                        className: "min-h-[48px] px-7 rounded-full inline-flex items-center justify-center text-sm sm:text-base font-medium bg-[#F8F9FC] text-[#121317] hover:bg-[#E1E6EC] transition-colors",
                                                        children: "emannuelhenji521@gmail.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 735,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://www.linkedin.com/in/emannuel-henji-pratama-putra-39b416384/",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "min-h-[48px] px-6 rounded-full inline-flex items-center justify-center text-sm font-medium border border-[#414347] text-[#F8F9FC] hover:bg-[#212226] transition-colors",
                                                        children: "LinkedIn"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 741,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://www.instagram.com/emannuelhenji_21",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "min-h-[48px] px-6 rounded-full inline-flex items-center justify-center text-sm font-medium border border-[#414347] text-[#F8F9FC] hover:bg-[#212226] transition-colors",
                                                        children: "Instagram"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 749,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://emannuelhenji.medium.com",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "min-h-[48px] px-6 rounded-full inline-flex items-center justify-center text-sm font-medium border border-[#414347] text-[#F8F9FC] hover:bg-[#212226] transition-colors",
                                                        children: "Medium"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 757,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 734,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 722,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 719,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 718,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 717,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PortfolioClient.js",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-12 border-t border-hairline pt-8 pb-8 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full px-2 sm:px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 1000 190",
                            className: "w-full h-auto block opacity-10 text-on-surface select-none",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "500",
                                y: "162",
                                textAnchor: "middle",
                                textLength: "990",
                                lengthAdjust: "spacingAndGlyphs",
                                fill: "currentColor",
                                fontFamily: "Google Sans Flex, system-ui, sans-serif",
                                fontWeight: "600",
                                fontSize: "218",
                                letterSpacing: "-6",
                                children: "Mazedev"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 780,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 775,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 774,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-6 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-on-surface-variant",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "© 2026 Emannuel Henji"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 797,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-xs",
                                children: "Next.js · Tailwind CSS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 798,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 796,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PortfolioClient.js",
                lineNumber: 773,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PortfolioClient.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(PortfolioClient, "tF41+gYRqapI+DIgR2B4j4nUmXI=");
_c1 = PortfolioClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "TimelineCard");
__turbopack_context__.k.register(_c1, "PortfolioClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Reveal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, className = "", delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            if (("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                setVisible(true);
                return;
            }
            const observer = new IntersectionObserver({
                "Reveal.useEffect": (entries)=>{
                    entries.forEach({
                        "Reveal.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setVisible(true);
                                observer.unobserve(entry.target);
                            }
                        }
                    }["Reveal.useEffect"]);
                }
            }["Reveal.useEffect"], {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            });
            observer.observe(el);
            return ({
                "Reveal.useEffect": ()=>observer.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(Reveal, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SkillIcons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillIcon",
    ()=>SkillIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SkillIcon({ name, className = "w-6 h-6" }) {
    switch(name){
        case "nextjs":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 7l4-2 4 2v6l4-2 4 2v5l-4 2-4-2v-3l-4 2-4-2V7z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 3c-3 0-3.5 1.3-3.5 2.8V8h4.5v1H7c-2 0-3.5 1.2-3.5 3.5S5 16 7 16h1.5v-2.2c0-1.6 1.2-2.8 3-2.8h4c1.4 0 2.5-1.1 2.5-2.5V5.8C18 4.2 16.5 3 12 3z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 21c3 0 3.5-1.3 3.5-2.8V16H11v-1h6c2 0 3.5-1.2 3.5-3.5S19 8 17 8h-1.5v2.2c0 1.6-1.2 2.8-3 2.8h-4C7.1 13 6 14.1 6 15.5v2.7C6 19.8 7.5 21 12 21z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "10.2",
                        cy: "5.7",
                        r: "0.7",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.5 11v4.5a1.5 1.5 0 0 1-3 0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "currentColor",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
        case "mysql":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "12",
                        cy: "6.5",
                        rx: "7",
                        ry: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 6.5v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 11.5v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5"
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
        case "postgre":
        case "postgresql":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 4c-3.8 0-6.5 2.4-6.5 5.8 0 2.1.9 3.9 2.3 5l-.3 4.2c0 .6.5 1 1.1 1 .8 0 1.4-.6 1.4-1.4v-2.2c.6.2 1.3.3 2 .3s1.4-.1 2-.3v2.2c0 .8.6 1.4 1.4 1.4.6 0 1.1-.4 1.1-1l-.3-4.2c1.4-1.1 2.3-2.9 2.3-5C18.5 6.4 15.8 4 12 4z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9.8",
                        cy: "9.2",
                        r: "0.8",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "14.2",
                        cy: "9.2",
                        r: "0.8",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 11v4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 76,
                columnNumber: 9
            }, this);
        case "leadership":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "7",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 20a7 7 0 0 1 14 0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2v2m4.5 1.5L15 7M7.5 5.5L9 7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 85,
                columnNumber: 9
            }, this);
        case "speaking":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "9",
                        y: "3",
                        width: "6",
                        height: "10",
                        rx: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 11a7 7 0 0 0 14 0M12 18v3m-4 0h8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 93,
                columnNumber: 9
            }, this);
        case "teamwork":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9",
                        cy: "8",
                        r: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "16",
                        cy: "9",
                        r: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3.5 19a5.5 5.5 0 0 1 11 0M14.5 19a4.5 4.5 0 0 1 6-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 100,
                columnNumber: 9
            }, this);
        case "problem-solving":
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: className,
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 8v4l2.5 2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillIcons.js",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillIcons.js",
                lineNumber: 109,
                columnNumber: 9
            }, this);
    }
}
_c = SkillIcon;
var _c;
__turbopack_context__.k.register(_c, "SkillIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TypedHeading.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TypedHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TypedHeading({ line1, line2, id, className = "" }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fullText = `${line1}\n${line2}`;
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(fullText.length);
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypedHeading.useEffect": ()=>{
            const el = containerRef.current;
            if (!el) return;
            const prefersReduced = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReduced) {
                setCount(fullText.length);
                setStarted(true);
                return;
            }
            setCount(0);
            const observer = new IntersectionObserver({
                "TypedHeading.useEffect": (entries)=>{
                    entries.forEach({
                        "TypedHeading.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setStarted(true);
                                observer.unobserve(entry.target);
                            }
                        }
                    }["TypedHeading.useEffect"]);
                }
            }["TypedHeading.useEffect"], {
                threshold: 0.35
            });
            observer.observe(el);
            return ({
                "TypedHeading.useEffect": ()=>observer.disconnect()
            })["TypedHeading.useEffect"];
        }
    }["TypedHeading.useEffect"], [
        fullText
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypedHeading.useEffect": ()=>{
            if (!started || count >= fullText.length) return;
            const timer = window.setTimeout({
                "TypedHeading.useEffect.timer": ()=>{
                    setCount({
                        "TypedHeading.useEffect.timer": (c)=>c + 1
                    }["TypedHeading.useEffect.timer"]);
                }
            }["TypedHeading.useEffect.timer"], 22);
            return ({
                "TypedHeading.useEffect": ()=>window.clearTimeout(timer)
            })["TypedHeading.useEffect"];
        }
    }["TypedHeading.useEffect"], [
        started,
        count,
        fullText.length
    ]);
    const shownLine1 = line1.slice(0, Math.min(count, line1.length));
    const line2Count = Math.max(0, count - line1.length - 1);
    const shownLine2 = line2.slice(0, line2Count);
    const isTyping = started && count < fullText.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        ref: containerRef,
        id: id,
        "aria-label": `${line1} ${line2}`,
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "invisible block select-none",
                "aria-hidden": "true",
                children: [
                    line1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 block",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: shownLine1
                    }, void 0, false, {
                        fileName: "[project]/src/components/TypedHeading.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    count <= line1.length && isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block w-[3px] h-[0.9em] bg-accent align-middle ml-1 ag-caret"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TypedHeading.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-on-surface-variant mt-1",
                        children: [
                            shownLine2,
                            count > line1.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(TypedHeading, "kgb7PqUkJ9fGhUagsTEgmnvPISU=");
_c = TypedHeading;
var _c;
__turbopack_context__.k.register(_c, "TypedHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WaveTechOrbit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaveTechOrbit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkillIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SkillIcons.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WaveTechOrbit({ items }) {
    _s();
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveTechOrbit.useEffect": ()=>{
            const prefersReduced = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
                itemRefs.current.forEach({
                    "WaveTechOrbit.useEffect.tick": (node, idx)=>{
                        if (!node) return;
                        const rect = node.getBoundingClientRect();
                        const relX = listRect ? rect.left - listRect.left + rect.width / 2 : idx * 120;
                        const waveY = Math.sin(relX / wavelength * Math.PI * 2 + phase) * 24;
                        node.style.transform = `translate3d(0, ${waveY.toFixed(2)}px, 0)`;
                    }
                }["WaveTechOrbit.useEffect.tick"]);
                animId = window.requestAnimationFrame(tick);
            }
            animId = window.requestAnimationFrame(tick);
            return ({
                "WaveTechOrbit.useEffect": ()=>{
                    if (animId) window.cancelAnimationFrame(animId);
                }
            })["WaveTechOrbit.useEffect"];
        }
    }["WaveTechOrbit.useEffect"], [
        items
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: listRef,
        onMouseEnter: ()=>{
            pausedRef.current = true;
        },
        onMouseLeave: ()=>{
            pausedRef.current = false;
        },
        className: "mt-14 py-8 overflow-visible",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-7 max-w-4xl mx-auto",
            children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex flex-col items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            itemRefs.current[idx] = el;
                        },
                        "aria-label": item.name,
                        title: item.name,
                        className: "ag-bouncer-node w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-on-surface will-change-transform",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkillIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillIcon"], {
                            name: item.icon,
                            className: "w-8 h-8 sm:w-9 sm:h-9"
                        }, void 0, false, {
                            fileName: "[project]/src/components/WaveTechOrbit.js",
                            lineNumber: 74,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/WaveTechOrbit.js",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this)
                }, item.name, false, {
                    fileName: "[project]/src/components/WaveTechOrbit.js",
                    lineNumber: 65,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/WaveTechOrbit.js",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WaveTechOrbit.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(WaveTechOrbit, "LU7AeBewXTgMj97qRlsbd6CCmcg=");
_c = WaveTechOrbit;
var _c;
__turbopack_context__.k.register(_c, "WaveTechOrbit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/portfolio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        icon: "nextjs",
        delay: "0s"
    },
    {
        name: "Laravel",
        icon: "laravel",
        delay: "0.35s"
    },
    {
        name: "Django",
        icon: "django",
        delay: "0.7s"
    },
    {
        name: "Python",
        icon: "python",
        delay: "1.05s"
    },
    {
        name: "JavaScript",
        icon: "javascript",
        delay: "1.4s"
    },
    {
        name: "Tailwind CSS",
        icon: "tailwind",
        delay: "1.75s"
    }
];
const WORK_EXPERIENCE = [
    {
        title: "Software Engineer di KuTanya",
        period: "Feb 2026 - Sekarang",
        subtitle: "Platform SaaS EdTech (www.kutanya.id)",
        description: "Mengembangkan arsitektur aplikasi web, integrasi konsultasi akademik berbasis chat, voice call, dan video call, serta memastikan keandalan sistem bagi siswa dan pengajar.",
        image: "/img/mascot2.png",
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
        image: "/img/himatif.png",
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
            "PostgreSQL"
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
        name: "MySQL",
        category: "Database",
        icon: "mysql"
    },
    {
        name: "PostgreSQL",
        category: "Database",
        icon: "postgre"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0akcyybd_m1cz._.js.map