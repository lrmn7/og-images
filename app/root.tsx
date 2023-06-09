import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { getOGTags } from "utils/general";

import tailwindStyles from "~/styles/tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
  "theme-color": "#000000",

  title: "GetOG — OG image generator. 🔮",
  description: "Design eye-catching open graph images in seconds.",

  ...getOGTags({
    site_url: "https://getog.vercel.app",
    title: "GetOG — OG image generator. 🔮",
    description: "Design eye-catching open graph images in seconds.",
    width: "2400",
    height: "1280",
    image_type: "image/png",
    image_url: "https://getog.vercel.app/og.png",
  }),
});

export const links: LinksFunction = () => [
  // meta
  {
    rel: "icon",
    type: "image/svg",
    href: "/logo.svg",
  },

  // font
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },

  // styles
  { rel: "stylesheet", href: tailwindStyles },
];

export default function App() {
  return (
    <html
      lang="en"
      prefix="og: http://ogp.me/ns#"
      className="scroll-smooth accent-blue-500"
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen w-full bg-black text-white antialiased selection:bg-white selection:text-black">
        <Outlet />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
