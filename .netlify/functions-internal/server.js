var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 91,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// utils/general.ts
function getOGTags(data) {
  let alt = "og header";
  return {
    // Open Graph
    "og:type": "website",
    "og:url": data.site_url,
    "og:title": data.title,
    "og:description": data.description,
    "og:image:width": data.width,
    "og:image:height": data.height,
    "og:image:type": data.image_type,
    "og:image:alt": alt,
    "og:image": data.image_url,
    "og:image:secure_url": data.image_url,
    // Twitter
    "twitter:card": "summary_large_image",
    "twitter:image:alt": alt,
    "twitter:image": data.image_url
  };
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-W4BPJPFG.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
  "theme-color": "#000000",
  title: "GetOG \u2014 OG image generator. \u{1F52E}",
  description: "Design eye-catching open graph images in seconds.",
  ...getOGTags({
    site_url: "https://getog.vercel.app",
    title: "GetOG \u2014 OG image generator. \u{1F52E}",
    description: "Design eye-catching open graph images in seconds.",
    width: "2400",
    height: "1280",
    image_type: "image/png",
    image_url: "https://getog.vercel.app/og.png"
  })
}), links = () => [
  // meta
  {
    rel: "icon",
    type: "image/svg",
    href: "/logo.svg"
  },
  // font
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  },
  // styles
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "html",
    {
      lang: "en",
      prefix: "og: http://ogp.me/ns#",
      className: "scroll-smooth accent-blue-500",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 67,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "min-h-screen w-full bg-black text-white antialiased selection:bg-white selection:text-black", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 71,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/root.tsx",
      lineNumber: 62,
      columnNumber: 5
    },
    this
  );
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_react4 = require("@remix-run/react");

// app/components/ui.tsx
var import_react3 = require("react"), import_class_variance_authority = require("class-variance-authority"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), INTERACTION_RESET_STYLES = " focus:outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/25 disabled:cursor-not-allowed disabled:opacity-50 ", buttonStyles = (0, import_class_variance_authority.cva)(
  (0, import_class_variance_authority.cx)(
    "flex flex-row items-center justify-center leading-none gap-2 rounded-lg border border-white/25  hover:scale-105 active:scale-95 transition-transform",
    INTERACTION_RESET_STYLES
  ),
  {
    variants: {
      intent: {
        primary: "bg-gradient-to-br from-blue-600 to-purple-600",
        secondary: "bg-white/5"
      },
      size: {
        small: "px-3 py-1.5 font-medium text-sm",
        medium: "px-4 py-2 font-semibold text-base",
        large: "px-5 py-2.5 font-bold text-lg"
      },
      justifyItems: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end"
      }
    },
    defaultVariants: {
      intent: "secondary",
      size: "medium",
      justifyItems: "center"
    }
  }
), Button = (0, import_react3.forwardRef)(function({
  children,
  iconLeft = null,
  iconRight = null,
  type = "button",
  className,
  intent,
  size,
  justifyItems,
  ...otherProps
}, ref) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "button",
    {
      ref,
      type,
      className: buttonStyles({ intent, size, justifyItems, className }),
      ...otherProps,
      children: [
        iconLeft,
        children,
        iconRight
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui.tsx",
      lineNumber: 66,
      columnNumber: 5
    },
    this
  );
}), inputStyles = (0, import_class_variance_authority.cva)(
  (0, import_class_variance_authority.cx)(
    "rounded-lg border border-white/25 bg-white/5 px-4 py-2 text-base font-medium leading-none focus:outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/25 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-white/50",
    INTERACTION_RESET_STYLES
  )
), inputLabelStyles = (0, import_class_variance_authority.cva)("text-lg font-semibold"), inputErrorMessageStyles = (0, import_class_variance_authority.cva)("text-sm text-red-500"), Input = (0, import_react3.forwardRef)(function({
  label = null,
  error = null,
  id,
  type = "text",
  disabled = !1,
  className,
  ...otherProps
}, ref) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "fieldset",
    {
      className: "flex flex-col items-stretch justify-start gap-0.5",
      disabled,
      children: [
        label ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: id, className: inputLabelStyles(), children: label }, void 0, !1, {
          fileName: "app/components/ui.tsx",
          lineNumber: 115,
          columnNumber: 9
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "input",
          {
            ref,
            id,
            type,
            className: inputStyles({ className }),
            ...otherProps
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui.tsx",
            lineNumber: 119,
            columnNumber: 7
          },
          this
        ),
        error ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: inputErrorMessageStyles(), children: error }, void 0, !1, {
          fileName: "app/components/ui.tsx",
          lineNumber: 126,
          columnNumber: 16
        }, this) : null
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui.tsx",
      lineNumber: 110,
      columnNumber: 5
    },
    this
  );
});

// app/routes/index.tsx
var import_solid = require("@heroicons/react/24/solid");

// utils/remix.tsx
var import_qs = __toESM(require("qs"));
function parseFromData(formData) {
  return import_qs.default.parse(new URLSearchParams(formData).toString(), {
    strictNullHandling: !0
  });
}

// app/routes/index.tsx
var import_class_variance_authority2 = require("class-variance-authority"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader = async ({ request }) => {
  let { searchParams } = new URL(request.url), searchParamsData = parseFromData(searchParams);
  return searchParamsData.title ? searchParamsData : (
    // defaults
    {
      title: "Stay curious.",
      description: "Discover stories, thinking, and expertise from writers on any topic.",
      author: "LRMN.dev",
      logo_url: "https://res.cloudinary.com/lrmn/image/upload/v1685525452/lrmn_lhq5i4.png",
      hero_url: "https://res.cloudinary.com/lrmn/image/upload/v1686293456/pattern_rxulbr_d0kqjo.png",
      default: !0
    }
  );
};
function Index() {
  let loaderData = (0, import_react4.useLoaderData)(), isBusy = (0, import_react4.useNavigation)().state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex min-h-screen flex-col items-stretch justify-start gap-0 divide-y divide-white/25 md:flex-row md:divide-y-0 md:divide-x", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "flex flex-col items-center justify-start gap-4 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "img",
      {
        src: "/lrmn.png",
        alt: "logo",
        width: 64,
        height: 64,
        loading: "lazy",
        decoding: "async"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 38,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_react4.Form,
      {
        replace: !0,
        method: "get",
        className: "flex flex-1 flex-col items-stretch justify-start gap-8 p-4",
        preventScrollReset: !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("fieldset", { className: "contents", disabled: isBusy, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-row items-center justify-between gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-xl font-bold", children: "Image Data" }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-row items-center justify-end gap-4", children: [
              loaderData.default ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "/", className: buttonStyles(), children: "Reset" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                Button,
                {
                  className: "hidden md:flex",
                  type: "submit",
                  intent: "primary",
                  iconLeft: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_solid.SparklesIcon, { width: 18, height: 18 }, void 0, !1, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 68,
                    columnNumber: 27
                  }, this),
                  children: "Generate"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 64,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 55,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col items-stretch justify-start gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Input,
              {
                id: "title",
                type: "text",
                name: "title",
                label: "Title",
                placeholder: "Eg. Is Twitter gonna survive?",
                defaultValue: loaderData.title,
                required: !0,
                autoFocus: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 76,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Input,
              {
                id: "description",
                type: "text",
                name: "description",
                label: "Description",
                placeholder: "...",
                defaultValue: loaderData.description
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 86,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Input,
              {
                id: "author",
                type: "text",
                name: "author",
                label: "Author",
                placeholder: "Eg. Elon Maskara",
                defaultValue: loaderData.author
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 94,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 gap-4 xl:grid-cols-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                Input,
                {
                  id: "logo_url",
                  type: "url",
                  name: "logo_url",
                  label: "Logo Image URL",
                  defaultValue: loaderData.logo_url
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 104,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                Input,
                {
                  id: "hero_url",
                  type: "url",
                  name: "hero_url",
                  label: "Hero Image URL",
                  defaultValue: loaderData.hero_url
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 111,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 103,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 75,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Button,
            {
              className: "md:hidden",
              type: "submit",
              intent: "primary",
              iconLeft: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_solid.SparklesIcon, { width: 18, height: 18 }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 125,
                columnNumber: 23
              }, this),
              children: "Generate"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 121,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "section",
      {
        className: (0, import_class_variance_authority2.cx)(
          "flex flex-1 flex-col items-stretch justify-start gap-4 p-4 md:h-screen md:overflow-y-auto",
          isBusy ? "pointer-events-none opacity-50" : ""
        ),
        children: [
          loaderData ? ["basic", "cols", "news"].map(function(variant, i) {
            let href = `/gen?variant=${variant}&title=${encodeURIComponent(
              loaderData.title
            )}&description=${encodeURIComponent(
              loaderData.description
            )}&author=${encodeURIComponent(
              loaderData.author
            )}&logo_url=${encodeURIComponent(
              loaderData.logo_url
            )}&hero_url=${encodeURIComponent(loaderData.hero_url)}`;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "a",
              {
                href,
                target: "_blank",
                rel: "noreferrer",
                className: "flex flex-col items-stretch justify-start gap-0 bg-stone-200 transition-transform hover:scale-95 hover:opacity-75",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  "img",
                  {
                    src: href,
                    alt: `variant ${i + 1}`,
                    className: "bg-white md:max-w-[50vw]",
                    loading: "lazy",
                    decoding: "async"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 157,
                    columnNumber: 19
                  },
                  this
                )
              },
              variant,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 150,
                columnNumber: 17
              },
              this
            );
          }) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "mt-auto flex flex-col items-center justify-center gap-2 border-t border-white/25 pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm font-medium text-white/75", children: [
            "Made with \u2661 by",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "a",
              {
                href: "https://lrmn.is-a.dev",
                target: "_blank",
                rel: "noreferrer",
                className: "text-white",
                children: "L RMN"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 172,
                columnNumber: 13
              },
              this
            ),
            " "
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 170,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 169,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 131,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/gen.tsx
var gen_exports = {};
__export(gen_exports, {
  OG_IMAGE_HEIGHT: () => OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH: () => OG_IMAGE_WIDTH,
  loader: () => loader2
});
var import_resvg_js = require("@resvg/resvg-js"), import_satori = __toESM(require("satori"));
var import_pretty_cache_header = require("pretty-cache-header");

// app/components/variants.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Basic({ data, style }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      tw: "overflow-hidden bg-white px-16 pt-16 flex flex-col items-start justify-center",
      style: {
        ...style
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { tw: "flex flex-row items-center justify-start", children: [
          data.logo_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "img",
            {
              src: data.logo_url,
              alt: "logo",
              width: 64,
              height: 64,
              tw: "mr-8"
            },
            void 0,
            !1,
            {
              fileName: "app/components/variants.tsx",
              lineNumber: 16,
              columnNumber: 11
            },
            this
          ) : null,
          data.author ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { tw: "font-bold text-4xl text-black", children: data.author }, void 0, !1, {
            fileName: "app/components/variants.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/variants.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        data.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { tw: "mt-8 font-bold text-5xl text-black", children: data.title }, void 0, !1, {
          fileName: "app/components/variants.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this) : null,
        data.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { tw: "mt-2 text-3xl text-black/75", children: data.description }, void 0, !1, {
          fileName: "app/components/variants.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this) : null,
        data.hero_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            src: data.hero_url,
            alt: "",
            tw: "flex-1 rounded-t-xl mt-8 mx-auto w-full h-72 object-center object-fit"
          },
          void 0,
          !1,
          {
            fileName: "app/components/variants.tsx",
            lineNumber: 35,
            columnNumber: 9
          },
          this
        ) : null
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/variants.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}
function News({ data, style }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      tw: "relative overflow-hidden px-16 text-white pt-16 flex flex-col items-center text-center justify-center",
      style: {
        background: "linear-gradient(180deg, magenta, black)",
        ...style
      },
      children: [
        data.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { tw: " font-bold text-5xl", children: data.title }, void 0, !1, {
          fileName: "app/components/variants.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this) : null,
        data.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { tw: "mt-2 text-3xl text-white/75", children: data.description }, void 0, !1, {
          fileName: "app/components/variants.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { tw: "mt-16 flex flex-row items-center justify-start", children: [
          data.logo_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "img",
            {
              src: data.logo_url,
              alt: "logo",
              width: 42,
              height: 42,
              tw: "mr-4"
            },
            void 0,
            !1,
            {
              fileName: "app/components/variants.tsx",
              lineNumber: 60,
              columnNumber: 11
            },
            this
          ) : null,
          data.author ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { tw: "font-bold text-3xl", children: data.author }, void 0, !1, {
            fileName: "app/components/variants.tsx",
            lineNumber: 68,
            columnNumber: 24
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/variants.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        data.hero_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            src: data.hero_url,
            alt: "",
            tw: "-z-50 absolute opacity-10 w-full h-full"
          },
          void 0,
          !1,
          {
            fileName: "app/components/variants.tsx",
            lineNumber: 71,
            columnNumber: 9
          },
          this
        ) : null
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/variants.tsx",
      lineNumber: 47,
      columnNumber: 5
    },
    this
  );
}
function Cols({ data, style }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      tw: "relative bg-black overflow-hidden text-white flex flex-row items-stretch justify-start",
      style: {
        ...style
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { tw: "w-1/2 p-16 flex flex-col items-stretch justify-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { tw: "flex flex-row items-center justify-start", children: [
            data.logo_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "img",
              {
                src: data.logo_url,
                alt: "logo",
                width: 42,
                height: 42,
                tw: "mr-4"
              },
              void 0,
              !1,
              {
                fileName: "app/components/variants.tsx",
                lineNumber: 92,
                columnNumber: 13
              },
              this
            ) : null,
            data.author ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { tw: "font-bold text-3xl", children: data.author }, void 0, !1, {
              fileName: "app/components/variants.tsx",
              lineNumber: 100,
              columnNumber: 26
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/variants.tsx",
            lineNumber: 90,
            columnNumber: 9
          }, this),
          data.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { tw: "mt-16 font-bold text-5xl", children: data.title }, void 0, !1, {
            fileName: "app/components/variants.tsx",
            lineNumber: 102,
            columnNumber: 23
          }, this) : null,
          data.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { tw: "mt-2 text-3xl text-white/75", children: data.description }, void 0, !1, {
            fileName: "app/components/variants.tsx",
            lineNumber: 104,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/variants.tsx",
          lineNumber: 89,
          columnNumber: 7
        }, this),
        data.hero_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            src: data.hero_url,
            alt: "",
            tw: "w-1/2 h-full",
            style: {
              transform: "rotate(12deg)"
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/variants.tsx",
            lineNumber: 108,
            columnNumber: 9
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            tw: "h-full w-1/2",
            style: {
              backgroundColor: "magenta",
              transform: "rotate(12deg)"
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/variants.tsx",
            lineNumber: 117,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/variants.tsx",
      lineNumber: 83,
      columnNumber: 5
    },
    this
  );
}
var variants_default = {
  basic: Basic,
  news: News,
  cols: Cols
};

// app/routes/gen.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), OG_IMAGE_WIDTH = 1200, OG_IMAGE_HEIGHT = 630;
function getFontData(baseURL, fontName, fontWeight) {
  return fetch(new URL(`/fonts/${fontName}-${fontWeight}.ttf`, baseURL)).then(
    (res) => res.arrayBuffer()
  );
}
function SVGtoPNG(svg) {
  return new import_resvg_js.Resvg(svg).render().asPng();
}
var loader2 = async ({ request }) => {
  let { origin, searchParams } = new URL(request.url), searchParamsData = parseFromData(searchParams);
  console.log(searchParamsData, origin);
  let options = {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    fonts: [
      {
        name: "Work Sans",
        data: await getFontData(origin, "WorkSans", "Regular"),
        weight: 400
      },
      {
        name: "Work Sans",
        data: await getFontData(origin, "WorkSans", "Bold"),
        weight: 700
      }
    ],
    tailwindConfig: {}
  }, Variant = variants_default[searchParamsData.variant ?? "basic"] ?? variants_default.basic, svg = await (0, import_satori.default)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      Variant,
      {
        data: searchParamsData,
        style: {
          width: options.width,
          height: options.height
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/gen.tsx",
        lineNumber: 58,
        columnNumber: 5
      },
      this
    ),
    options
  );
  return new Response(SVGtoPNG(svg), {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": (0, import_pretty_cache_header.cacheHeader)({
        public: !0,
        maxAge: "1d",
        staleWhileRevalidate: "1h"
      })
    }
  });
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ASRJUQWI.js", imports: ["/build/_shared/chunk-3LEPT6RH.js", "/build/_shared/chunk-DG4HR4CT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2FCOMMOG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/gen": { id: "routes/gen", parentId: "root", path: "gen", index: void 0, caseSensitive: void 0, module: "/build/routes/gen-LPXTEL6C.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-JGDDO5MX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "65ba55cc", hmr: void 0, url: "/build/manifest-65BA55CC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/gen": {
    id: "routes/gen",
    parentId: "root",
    path: "gen",
    index: void 0,
    caseSensitive: void 0,
    module: gen_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
