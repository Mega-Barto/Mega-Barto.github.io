import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
import { Link } from "react-router-dom";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const Header = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark") || window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("darkMode", newDarkMode ? "true" : "false");
    } catch (error) {
      console.error("Failed to save theme preference", error);
    }
  };
  return /* @__PURE__ */ jsxs("header", { className: `sticky top-0 z-50 w-full border-b border-sidebar-border bg-sidebar text-sidebar-foreground ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/favicon.ico",
            alt: "Logo",
            className: "h-8 w-8"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "MegaBarto" })
      ] }) }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center space-x-6", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "text-sidebar-foreground hover:text-sidebar-primary transition-colors", children: "Home" }),
        /* @__PURE__ */ jsx(Link, { to: "/projects", className: "text-sidebar-foreground hover:text-sidebar-primary transition-colors", children: "Projects" }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-sidebar-foreground hover:text-sidebar-primary transition-colors", children: "About" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-sidebar-foreground hover:text-sidebar-primary transition-colors", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: toggleTheme,
            className: "rounded-full p-2 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90 transition-colors",
            "aria-label": isDarkMode ? "Switch to light mode" : "Switch to dark mode",
            children: isDarkMode ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" }) }) : /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: toggleMenu,
            className: "md:hidden rounded-full p-2 bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90 transition-colors",
            "aria-label": "Toggle menu",
            "aria-expanded": isMenuOpen,
            children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }) })
          }
        )
      ] })
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden bg-sidebar border-t border-sidebar-border", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto py-4 px-4 space-y-4", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "block py-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors",
          onClick: () => setIsMenuOpen(false),
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/projects",
          className: "block py-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors",
          onClick: () => setIsMenuOpen(false),
          children: "Projects"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/about",
          className: "block py-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors",
          onClick: () => setIsMenuOpen(false),
          children: "About"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          className: "block py-2 text-sidebar-foreground hover:text-sidebar-primary transition-colors",
          onClick: () => setIsMenuOpen(false),
          children: "Contact"
        }
      )
    ] }) })
  ] });
};
const Footer = ({ className = "" }) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: `w-full border-t border-sidebar-border bg-sidebar text-sidebar-foreground ${className}`, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto py-8 px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/favicon.ico",
              alt: "Logo",
              className: "h-8 w-8"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "MegaBarto" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sidebar-foreground/80 max-w-xs", children: "Professional portfolio and personal blog showcasing projects, skills, and insights." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/projects", className: "text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors", children: "Projects" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-4", children: "Connect" }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 mb-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/Mega-Barto",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-sidebar-foreground hover:text-sidebar-primary transition-colors",
              "aria-label": "GitHub",
              children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }) })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://linkedin.com/in/mega_barto",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-sidebar-foreground hover:text-sidebar-primary transition-colors",
              "aria-label": "LinkedIn",
              children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
                /* @__PURE__ */ jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
                /* @__PURE__ */ jsx("circle", { cx: "4", cy: "4", r: "2" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://twitter.com/mega_barto",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-sidebar-foreground hover:text-sidebar-primary transition-colors",
              "aria-label": "Twitter",
              children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }) })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:personal.jperez@gmail.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-sidebar-foreground hover:text-sidebar-primary transition-colors",
              "aria-label": "Email",
              children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" }) })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-sidebar-border/50 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-sidebar-foreground/70", children: [
        "© ",
        currentYear,
        " Bartland Labs. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-sidebar-foreground/70 mt-2 md:mt-0", children: "Designed and built with ♥ by MegaBarto" })
    ] })
  ] }) });
};
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx("style", {
        dangerouslySetInnerHTML: {
          __html: `
              body {
                font-family: 'Ubuntu', system-ui, sans-serif;
              }
            `
        }
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex flex-col min-h-screen",
        children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("main", {
          className: "flex-grow",
          children
        }), /* @__PURE__ */ jsx(Footer, {})]
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const logoDark = "/assets/logo-dark-C9q8wJVT.svg";
const logoLight = "data:image/svg+xml,%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='100%25'%20viewBox='0%200%201080%20174'%20enable-background='new%200%200%201080%20174'%20xml:space='preserve'%3e%3cpath%20fill='%23000000'%20opacity='1.000000'%20stroke='none'%20d='%20M1079.386719,175.000000%20C719.566711,175.000000%20360.283356,175.000000%201.056668,175.000000%20C1.056668,116.921028%201.056668,58.960480%201.056668,1.040897%20C361.075562,1.040897%20721.037781,1.040897%201081.000000,1.040897%20C1081.000000,57.580143%201081.008057,114.078499%201080.954834,170.576797%20C1080.953491,172.051514%201080.282349,173.525620%201079.386719,175.000000%20z'/%3e%3c/svg%3e";
function Welcome() {
  return /* @__PURE__ */ jsx("main", { className: "flex items-center justify-center pt-16 pb-4", children: /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col items-center gap-16 min-h-0", children: /* @__PURE__ */ jsx("header", { className: "flex flex-col items-center gap-9", children: /* @__PURE__ */ jsxs("div", { className: "w-[500px] max-w-[100vw] p-4", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: logoLight,
        alt: "React Router",
        className: "block w-full dark:hidden opacity-70"
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: logoDark,
        alt: "React Router",
        className: "hidden w-full dark:block opacity-100"
      }
    )
  ] }) }) }) });
}
function meta({}) {
  return [{
    title: "MegaBarto's Portfolio"
  }, {
    name: "description",
    content: "Welcome to MegaBarto's Portfolio!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-B4QzlZyZ.js", "imports": ["/assets/chunk-QMGIS6GS-DwwANxhG.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BTE0svaS.js", "imports": ["/assets/chunk-QMGIS6GS-DwwANxhG.js"], "css": ["/assets/root-6HR8KgS0.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-C0Klcg4i.js", "imports": ["/assets/chunk-QMGIS6GS-DwwANxhG.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-eb91bfd8.js", "version": "eb91bfd8", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
