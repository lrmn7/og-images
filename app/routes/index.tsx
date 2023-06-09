import type { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";

import { buttonStyles, Button, Input } from "~/components/ui";
import { SparklesIcon } from "@heroicons/react/24/solid";

import { parseFromData } from "utils/remix";
import { cx } from "class-variance-authority";

export const loader: LoaderFunction = async ({ request }) => {
  const { searchParams } = new URL(request.url);
  const searchParamsData = parseFromData(searchParams);

  return searchParamsData.title
    ? searchParamsData
    : // defaults
      {
        title: "Stay curious.",
        description:
          "Discover stories, thinking, and expertise from writers on any topic.",
        author: "LRMN.dev",
        logo_url:
          "https://res.cloudinary.com/lrmn/image/upload/v1685525452/lrmn_lhq5i4.png",
        hero_url:
          "https://res.cloudinary.com/lrmn/image/upload/v1686293456/pattern_rxulbr_d0kqjo.png",
        default: true,
      };
};

export default function Index() {
  const loaderData = useLoaderData();
  const isBusy = useNavigation().state !== "idle";

  return (
    <div className="flex min-h-screen flex-col items-stretch justify-start gap-0 divide-y divide-white/25 md:flex-row md:divide-y-0 md:divide-x">
      <nav className="flex flex-col items-center justify-start gap-4 p-4">
        <a href="/">
          <img
            src="/lrmn.png"
            alt="logo"
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
          />
        </a>
      </nav>
      <Form
        replace
        method="get"
        className="flex flex-1 flex-col items-stretch justify-start gap-8 p-4"
        preventScrollReset
      >
        <fieldset className="contents" disabled={isBusy}>
          <div className="flex flex-row items-center justify-between gap-4">
            <p className="text-xl font-bold">Image Data</p>

            <div className="flex flex-row items-center justify-end gap-4">
              {!loaderData.default ? (
                <a href="/" className={buttonStyles()}>
                  Reset
                </a>
              ) : null}
              <Button
                className="hidden md:flex"
                type="submit"
                intent="primary"
                iconLeft={<SparklesIcon width={18} height={18} />}
              >
                Generate
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-stretch justify-start gap-4">
            <Input
              id="title"
              type="text"
              name="title"
              label="Title"
              placeholder="Eg. Is Twitter gonna survive?"
              defaultValue={loaderData.title}
              required
              autoFocus
            />
            <Input
              id="description"
              type="text"
              name="description"
              label="Description"
              placeholder="..."
              defaultValue={loaderData.description}
            />
            <Input
              id="author"
              type="text"
              name="author"
              label="Author"
              placeholder="Eg. Elon Maskara"
              defaultValue={loaderData.author}
            />

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <Input
                id="logo_url"
                type="url"
                name="logo_url"
                label="Logo Image URL"
                defaultValue={loaderData.logo_url}
              />
              <Input
                id="hero_url"
                type="url"
                name="hero_url"
                label="Hero Image URL"
                defaultValue={loaderData.hero_url}
              />
            </div>
          </div>

          <Button
            className="md:hidden"
            type="submit"
            intent="primary"
            iconLeft={<SparklesIcon width={18} height={18} />}
          >
            Generate
          </Button>
        </fieldset>
      </Form>
      <section
        className={cx(
          "flex flex-1 flex-col items-stretch justify-start gap-4 p-4 md:h-screen md:overflow-y-auto",
          isBusy ? "pointer-events-none opacity-50" : ""
        )}
      >
        {loaderData
          ? ["basic", "cols", "news"].map(function (variant, i) {
              const href = `/gen?variant=${variant}&title=${encodeURIComponent(
                loaderData.title
              )}&description=${encodeURIComponent(
                loaderData.description
              )}&author=${encodeURIComponent(
                loaderData.author
              )}&logo_url=${encodeURIComponent(
                loaderData.logo_url
              )}&hero_url=${encodeURIComponent(loaderData.hero_url)}`;

              return (
                <a
                  key={variant}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-stretch justify-start gap-0 bg-stone-200 transition-transform hover:scale-95 hover:opacity-75"
                >
                  <img
                    src={href}
                    alt={`variant ${i + 1}`}
                    className="bg-white md:max-w-[50vw]"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              );
            })
          : null}

        <footer className="mt-auto flex flex-col items-center justify-center gap-2 border-t border-white/25 pt-4">
          <p className="text-sm font-medium text-white/75">
            Made with ♡ by{" "}
            <a
              href="https://lrmn.is-a.dev"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              L RMN
            </a>{" "}
          </p>
        </footer>
      </section>
    </div>
  );
}
