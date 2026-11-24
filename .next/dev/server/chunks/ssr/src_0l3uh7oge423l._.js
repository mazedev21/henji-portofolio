module.exports = [
"[project]/src/components/PortfolioClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.js [app-ssr] (ecmascript)");
"use client";
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
        href: "#tentang",
        label: "Perjalanan"
    },
    {
        href: "#keahlian",
        label: "Keahlian"
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
        href: "#kontak",
        label: "Kontak"
    }
];
function PortfolioClient() {
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeJourney, setActiveJourney] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("kerja");
    const [activeProject, setActiveProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onKeyDown(e) {
            if (e.key === "Escape") {
                setMenuOpen(false);
            }
        }
        document.addEventListener("keydown", onKeyDown);
        return ()=>document.removeEventListener("keydown", onKeyDown);
    }, []);
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
        setActiveProject((prev)=>(prev + delta + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].length);
    }
    const currentProject = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"][activeProject];
    const journeyItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOURNEY_TABS"][activeJourney] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-hairline",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between h-[72px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#beranda",
                                    className: "text-xl font-bold tracking-tight text-on-surface",
                                    children: "Mazedev"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    "aria-label": "Navigasi utama",
                                    className: "hidden md:flex items-center gap-7",
                                    children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            className: "text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors",
                                            children: link.label
                                        }, link.href, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: toggleTheme,
                                            "aria-label": isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
                                            "aria-pressed": isDark,
                                            className: "ag-btn-secondary w-11 h-11 rounded-full inline-flex items-center justify-center",
                                            children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.75",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.75",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 118,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#kontak",
                                            className: "hidden sm:inline-flex ag-btn-primary items-center justify-center min-h-[44px] px-5 rounded-full text-sm font-medium",
                                            children: "Hubungi Saya"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setMenuOpen((prev)=>!prev),
                                            "aria-label": menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
                                            "aria-expanded": menuOpen,
                                            "aria-controls": "mobile-menu",
                                            className: "md:hidden ag-btn-primary w-11 h-11 rounded-full inline-flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                "aria-hidden": "true",
                                                children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 6l12 12M18 6L6 18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 7h16M4 12h16M4 17h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            id: "mobile-menu",
                            "aria-label": "Navigasi seluler",
                            className: "md:hidden pb-5 pt-2 border-t border-hairline ag-panel-enter",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        onClick: ()=>setMenuOpen(false),
                                        className: "min-h-[44px] px-3 flex items-center rounded-xl text-sm font-medium text-on-surface hover:bg-container",
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 164,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PortfolioClient.js",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioClient.js",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "beranda",
                        className: "pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-5xl mx-auto text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            animationDelay: "0ms"
                                        },
                                        className: "ag-hero-enter text-4xl sm:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.08] text-on-surface",
                                        children: [
                                            "Membangun Produk Web",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-accent mt-1",
                                                children: "yang Jelas, Cepat, dan Terukur."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            animationDelay: "90ms"
                                        },
                                        className: "ag-hero-enter mt-6 text-base sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed",
                                        children: "Emannuel Henji: Software Engineer di KuTanya dan mahasiswa S1 Teknologi Informasi Universitas Tidar yang berfokus pada rekayasa web dan desain antarmuka."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            animationDelay: "180ms"
                                        },
                                        className: "ag-hero-enter mt-9 flex flex-wrap items-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#proyek",
                                                className: "ag-btn-primary inline-flex items-center justify-center min-h-[48px] px-7 rounded-full text-sm sm:text-base font-medium",
                                                children: "Lihat Proyek"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#tentang",
                                                className: "ag-btn-secondary inline-flex items-center justify-center min-h-[48px] px-7 rounded-full text-sm sm:text-base font-medium",
                                                children: "Pengalaman & Pendidikan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animationDelay: "270ms"
                                },
                                className: "ag-hero-enter max-w-6xl mx-auto mt-14 sm:mt-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-container border border-hairline rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8 lg:gap-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/img/profile.png",
                                            alt: "Foto profil Emannuel Henji",
                                            width: 220,
                                            height: 220,
                                            fetchPriority: "high",
                                            className: "w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover border border-hairline shrink-0 bg-container-high"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center md:text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                                    children: "Magelang, Indonesia · Software Engineer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-3",
                                                    children: "Fokus pada Full-Stack Web & Produk EdTech"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl mb-6",
                                                    children: [
                                                        "Saat ini aktif membangun KuTanya (",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://www.kutanya.id",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "text-accent underline underline-offset-4",
                                                            children: "www.kutanya.id"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 245,
                                                            columnNumber: 19
                                                        }, this),
                                                        ") serta menggabungkan ekosistem Next.js, Laravel, Django, dan Tailwind CSS untuk menciptakan aplikasi web yang fungsional."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap justify-center md:justify-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-4 py-2 rounded-full text-xs font-mono bg-surface border border-hairline text-on-surface",
                                                            children: "Software Engineer @ KuTanya"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 257,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-4 py-2 rounded-full text-xs font-mono bg-surface border border-hairline text-on-surface",
                                                            children: "P2MW & KMI Expo 2026"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 260,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioClient.js",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-labelledby": "tech-heading",
                        className: "border-t border-hairline py-20 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "tech-heading",
                                        className: "text-3xl sm:text-4xl font-bold tracking-tight text-on-surface max-w-3xl leading-tight",
                                        children: [
                                            "Dibangun dengan fondasi teknis yang solid,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-on-surface-variant font-medium mt-1",
                                                children: "dari antarmuka modern hingga arsitektur backend."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    delay: 120,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-12 grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 max-w-4xl",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TECH_ORBIT"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex flex-col items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: item.delay
                                                    },
                                                    className: "ag-orbit-circle w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-semibold text-on-surface",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this)
                                            }, item.name, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "tentang",
                        className: "border-t border-hairline py-20 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "lg:col-span-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-4",
                                            children: "Perjalanan & Pengalaman"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base text-on-surface-variant leading-relaxed mb-8",
                                            children: "Saya percaya teknologi yang baik lahir dari pemahaman masalah nyata pengguna serta ketelitian dalam menulis kode. Berikut rekam jejak kerja, pendidikan, dan organisasi saya."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 314,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            role: "tablist",
                                            "aria-label": "Kategori perjalanan",
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                {
                                                    key: "kerja",
                                                    label: "Pengalaman Kerja"
                                                },
                                                {
                                                    key: "pendidikan",
                                                    label: "Pendidikan"
                                                },
                                                {
                                                    key: "organisasi",
                                                    label: "Organisasi"
                                                }
                                            ].map((tab)=>{
                                                const active = activeJourney === tab.key;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    role: "tab",
                                                    "aria-selected": active,
                                                    onClick: ()=>setActiveJourney(tab.key),
                                                    className: `${active ? "ag-btn-primary" : "ag-btn-secondary"} min-h-[44px] px-5 rounded-full text-sm font-medium`,
                                                    children: tab.label
                                                }, tab.key, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 332,
                                                    columnNumber: 21
                                                }, this);
                                            })
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
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    delay: 100,
                                    className: "lg:col-span-7 bg-container border border-hairline rounded-3xl p-5 sm:p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        role: "tabpanel",
                                        className: "space-y-4 ag-panel-enter",
                                        children: journeyItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "bg-surface border border-hairline rounded-2xl p-5 flex flex-col sm:flex-row gap-4 sm:items-start",
                                                children: [
                                                    item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.image,
                                                        alt: item.title,
                                                        width: 64,
                                                        height: 64,
                                                        loading: "lazy",
                                                        className: "w-16 h-16 rounded-xl object-cover shrink-0 border border-hairline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 364,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-16 rounded-xl bg-container-high border border-hairline flex items-center justify-center shrink-0 font-mono text-xs text-accent font-semibold",
                                                        children: "KT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 373,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center justify-between gap-2 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold text-on-surface",
                                                                        children: item.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                                        lineNumber: 379,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-xs text-accent",
                                                                        children: item.period
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                                        lineNumber: 382,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 378,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-2 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-on-surface-variant",
                                                                        children: item.subtitle
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                                        lineNumber: 387,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-container-high text-accent border border-hairline",
                                                                        children: item.badge
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                                        lineNumber: 391,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 386,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-on-surface-variant leading-relaxed",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 396,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 377,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, `${item.title}-${item.period}`, true, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this))
                                    }, activeJourney, false, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "proyek",
                        className: "border-t border-hairline py-20 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "flex flex-wrap items-center justify-between gap-4 mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl sm:text-4xl font-bold tracking-tight text-on-surface",
                                                    children: "Proyek Pilihan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-base text-on-surface-variant",
                                                    children: "Karya perangkat lunak dari platform SaaS EdTech hingga sistem kebutuhan sekolah."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 418,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>stepProject(-1),
                                                    "aria-label": "Proyek sebelumnya",
                                                    className: "ag-btn-secondary w-11 h-11 rounded-full inline-flex items-center justify-center text-lg",
                                                    children: "←"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 425,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>stepProject(1),
                                                    "aria-label": "Proyek berikutnya",
                                                    className: "ag-btn-primary w-11 h-11 rounded-full inline-flex items-center justify-center text-lg",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 433,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ag-panel-enter",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-7 aspect-[848/488] rounded-3xl overflow-hidden border border-hairline bg-container",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: currentProject.image,
                                                alt: currentProject.imageAlt,
                                                width: 848,
                                                height: 488,
                                                className: "w-full h-full object-cover object-top"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 449,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 448,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-5 flex flex-col items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                                    children: currentProject.index
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 459,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl sm:text-3xl font-bold text-on-surface mb-4",
                                                    children: currentProject.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 462,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base text-on-surface-variant leading-relaxed mb-6",
                                                    children: currentProject.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 465,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2 mb-7",
                                                    children: currentProject.stack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 rounded-full text-xs font-mono bg-container border border-hairline text-on-surface",
                                                            children: tech
                                                        }, tech, false, {
                                                            fileName: "[project]/src/components/PortfolioClient.js",
                                                            lineNumber: 470,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 468,
                                                    columnNumber: 17
                                                }, this),
                                                currentProject.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: currentProject.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "ag-btn-primary inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full text-sm font-medium",
                                                    children: currentProject.urlLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center min-h-[44px] px-4 py-2 rounded-full text-xs font-mono bg-container border border-hairline text-on-surface-variant",
                                                    children: "Proyek Arsip Sekolah"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 488,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, currentProject.title, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 grid grid-cols-1 md:grid-cols-3 gap-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROJECTS"].map((proj, idx)=>{
                                        const selected = idx === activeProject;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-pressed": selected,
                                            onClick: ()=>setActiveProject(idx),
                                            className: `text-left bg-container border rounded-2xl p-5 transition-colors hover:bg-container-high ${selected ? "border-accent" : "border-hairline"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-xs text-accent mb-1",
                                                    children: proj.shortLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 508,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-semibold text-on-surface",
                                                    children: proj.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 511,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-on-surface-variant mt-1",
                                                    children: proj.shortDesc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PortfolioClient.js",
                                                    lineNumber: 514,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, proj.title, true, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 499,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 495,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "pencapaian",
                        className: "border-t border-hairline py-20 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "max-w-2xl mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                            children: "Rekam Prestasi"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 531,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl sm:text-4xl font-bold tracking-tight text-on-surface",
                                            children: "Penghargaan & Pencapaian"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 530,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACHIEVEMENTS"].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            delay: idx * 90,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "h-full bg-container border border-hairline rounded-3xl p-7 sm:p-8 flex flex-col justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-xs text-accent",
                                                                children: item.tag
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 544,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl sm:text-2xl font-bold text-on-surface mt-2 mb-3",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 547,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm sm:text-base text-on-surface-variant leading-relaxed",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                                lineNumber: 550,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 543,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-6 font-mono text-xs text-on-surface-variant",
                                                        children: item.issuer
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 554,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 542,
                                                columnNumber: 19
                                            }, this)
                                        }, item.title, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 541,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 539,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 529,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 525,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "keahlian",
                        className: "border-t border-hairline py-20 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-container border border-hairline rounded-3xl p-8 sm:p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                                children: "Hard Skills"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 572,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl font-bold text-on-surface mb-6",
                                                children: "Teknis & Pengembangan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 575,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3 text-base text-on-surface-variant",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Framework Web: Next.js, Laravel, Django"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 579,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Bahasa Pemrograman: JavaScript, Python, HTML5, CSS3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 580,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Styling & UI: Tailwind CSS, Web Development"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 581,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Produktivitas: Microsoft Office"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 582,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 571,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    delay: 90,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full rounded-3xl p-8 sm:p-10 bg-[var(--inverse-bg)] text-[var(--inverse-text)] border border-hairline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-xs uppercase tracking-wider text-accent mb-2",
                                                children: "Soft Skills"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 589,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl font-bold mb-6",
                                                children: "Kepemimpinan & Kolaborasi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 592,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3 text-base text-[var(--inverse-muted)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Kepemimpinan Organisasi (Ketua Umum MPK)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 596,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Public Speaking & Presentasi Produk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 597,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Kerja Sama Tim Lintas Peran"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 598,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "Problem Solving Terstruktur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/PortfolioClient.js",
                                                        lineNumber: 599,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/PortfolioClient.js",
                                                lineNumber: 595,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioClient.js",
                                        lineNumber: 588,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 587,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "kontak",
                        className: "border-t border-hairline py-20 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "max-w-4xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-5xl font-bold tracking-tight text-on-surface mb-5",
                                    children: "Terbuka untuk kolaborasi dan proyek baru."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 612,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base sm:text-lg text-on-surface-variant mb-6",
                                    children: "Hubungi saya langsung melalui email atau kanal berikut:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 615,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:emannuelhenji521@gmail.com",
                                    className: "text-lg sm:text-2xl font-medium text-accent underline underline-offset-4 break-all",
                                    children: "emannuelhenji521@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 618,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex flex-wrap justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/in/emannuel-henji-pratama-putra-39b416384/",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "ag-btn-secondary min-h-[44px] px-6 rounded-full inline-flex items-center text-sm font-medium",
                                            children: "LinkedIn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 626,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.instagram.com/emannuelhenji_21",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "ag-btn-secondary min-h-[44px] px-6 rounded-full inline-flex items-center text-sm font-medium",
                                            children: "Instagram"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 634,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://emannuelhenji.medium.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "ag-btn-secondary min-h-[44px] px-6 rounded-full inline-flex items-center text-sm font-medium",
                                            children: "Medium"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PortfolioClient.js",
                                            lineNumber: 642,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 625,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 611,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioClient.js",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PortfolioClient.js",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-container border-t border-hairline py-12 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-5xl sm:text-8xl font-bold tracking-tight text-hairline select-none mb-8",
                            "aria-hidden": "true",
                            children: "Mazedev"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 658,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-on-surface-variant",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "© 2026 Emannuel Henji. Dibangun statis tanpa database."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 665,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-xs",
                                    children: "Next.js Static Export · Tailwind CSS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PortfolioClient.js",
                                    lineNumber: 666,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PortfolioClient.js",
                            lineNumber: 664,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PortfolioClient.js",
                    lineNumber: 657,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioClient.js",
                lineNumber: 656,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PortfolioClient.js",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
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
"[project]/src/data/portfolio.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACHIEVEMENTS",
    ()=>ACHIEVEMENTS,
    "JOURNEY_TABS",
    ()=>JOURNEY_TABS,
    "PROJECTS",
    ()=>PROJECTS,
    "TECH_ORBIT",
    ()=>TECH_ORBIT
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
const JOURNEY_TABS = {
    kerja: [
        {
            title: "Software Engineer di KuTanya",
            period: "Feb 2026 - Sekarang",
            subtitle: "Platform SaaS EdTech (www.kutanya.id)",
            description: "Mengembangkan arsitektur aplikasi web, integrasi konsultasi akademik berbasis chat, voice call, dan video call, serta memastikan keandalan sistem bagi siswa dan pengajar.",
            image: null,
            badge: "Aktif"
        }
    ],
    pendidikan: [
        {
            title: "Universitas Tidar",
            period: "2025 - Sekarang",
            subtitle: "S1 Teknologi Informasi",
            description: "Mendalami rekayasa perangkat lunak, arsitektur sistem web, dan pengembangan produk digital.",
            image: "/img/untidar.png",
            badge: "Kuliah"
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
    ],
    organisasi: [
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
    ]
};
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
        issuer: "Belmawa Kemdiktisaintek · KuTanya"
    },
    {
        tag: "02 · 2026",
        title: "Lolos KMI Expo 2026",
        description: "Terpilih sebagai peserta Kewirausahaan Mahasiswa Indonesia (KMI) Expo 2026 mewakili pengembangan inovasi produk digital.",
        issuer: "Kewirausahaan Mahasiswa Indonesia"
    }
];
}),
];

//# sourceMappingURL=src_0l3uh7oge423l._.js.map