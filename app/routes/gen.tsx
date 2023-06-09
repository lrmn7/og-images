import type { LoaderFunction } from "@remix-run/node";

import { Resvg } from "@resvg/resvg-js";

import type { SatoriOptions } from "satori";
import satori from "satori";

import { parseFromData } from "utils/remix";
import { cacheHeader } from "pretty-cache-header";

import variants from "./../components/variants";

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

function getFontData(
  baseURL: string,
  fontName: string,
  fontWeight: "Regular" | "Bold"
) {
  return fetch(new URL(`/fonts/${fontName}-${fontWeight}.ttf`, baseURL)).then(
    (res) => res.arrayBuffer()
  );
}

function SVGtoPNG(svg: string) {
  return new Resvg(svg).render().asPng();
}

export const loader: LoaderFunction = async ({ request }) => {
  const { origin, searchParams } = new URL(request.url);
  const searchParamsData = parseFromData(searchParams);

  console.log(searchParamsData, origin);

  const options: SatoriOptions = {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    fonts: [
      {
        name: "Work Sans",
        data: await getFontData(origin, "WorkSans", "Regular"),
        weight: 400,
      },
      {
        name: "Work Sans",
        data: await getFontData(origin, "WorkSans", "Bold"),
        weight: 700,
      },
    ],
    tailwindConfig: {},
  };

  const Variant =
    variants[searchParamsData.variant ?? "basic"] ?? variants.basic;

  const svg = await satori(
    <Variant
      data={searchParamsData}
      style={{
        width: options.width,
        height: options.height,
      }}
    />,
    options
  );

  return new Response(SVGtoPNG(svg), {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": cacheHeader({
        public: true,
        maxAge: "1d",
        staleWhileRevalidate: "1h",
      }),
    },
  });
};
