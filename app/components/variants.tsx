type TemplateProps = {
  data: Record<string, string>;
  style: Record<string, string>;
};

export function Basic({ data, style }: TemplateProps) {
  return (
    <div
      tw="overflow-hidden bg-white px-16 pt-16 flex flex-col items-start justify-center"
      style={{
        ...style,
      }}
    >
      <div tw="flex flex-row items-center justify-start">
        {data.logo_url ? (
          <img
            src={data.logo_url}
            alt="logo"
            width={64}
            height={64}
            tw="mr-8"
          />
        ) : null}
        {data.author ? (
          <p tw="font-bold text-4xl text-black">{data.author}</p>
        ) : null}
      </div>
      {data.title ? (
        <p tw="mt-8 font-bold text-5xl text-black">{data.title}</p>
      ) : null}
      {data.description ? (
        <p tw="mt-2 text-3xl text-black/75">{data.description}</p>
      ) : null}
      {data.hero_url ? (
        <img
          src={data.hero_url}
          alt=""
          tw="flex-1 rounded-t-xl mt-8 mx-auto w-full h-72 object-center object-fit"
        />
      ) : null}
    </div>
  );
}

export function News({ data, style }: TemplateProps) {
  return (
    <div
      tw="relative overflow-hidden px-16 text-white pt-16 flex flex-col items-center text-center justify-center"
      style={{
        background: `linear-gradient(180deg, magenta, black)`,
        ...style,
      }}
    >
      {data.title ? <p tw=" font-bold text-5xl">{data.title}</p> : null}
      {data.description ? (
        <p tw="mt-2 text-3xl text-white/75">{data.description}</p>
      ) : null}
      <div tw="mt-16 flex flex-row items-center justify-start">
        {data.logo_url ? (
          <img
            src={data.logo_url}
            alt="logo"
            width={42}
            height={42}
            tw="mr-4"
          />
        ) : null}
        {data.author ? <p tw="font-bold text-3xl">{data.author}</p> : null}
      </div>
      {data.hero_url ? (
        <img
          src={data.hero_url}
          alt=""
          tw="-z-50 absolute opacity-10 w-full h-full"
        />
      ) : null}
    </div>
  );
}

export function Cols({ data, style }: TemplateProps) {
  return (
    <div
      tw="relative bg-black overflow-hidden text-white flex flex-row items-stretch justify-start"
      style={{
        ...style,
      }}
    >
      <div tw="w-1/2 p-16 flex flex-col items-stretch justify-start">
        <div tw="flex flex-row items-center justify-start">
          {data.logo_url ? (
            <img
              src={data.logo_url}
              alt="logo"
              width={42}
              height={42}
              tw="mr-4"
            />
          ) : null}
          {data.author ? <p tw="font-bold text-3xl">{data.author}</p> : null}
        </div>
        {data.title ? <p tw="mt-16 font-bold text-5xl">{data.title}</p> : null}
        {data.description ? (
          <p tw="mt-2 text-3xl text-white/75">{data.description}</p>
        ) : null}
      </div>
      {data.hero_url ? (
        <img
          src={data.hero_url}
          alt=""
          tw="w-1/2 h-full"
          style={{
            transform: "rotate(12deg)",
          }}
        />
      ) : (
        <div
          tw="h-full w-1/2"
          style={{
            backgroundColor: "magenta",
            transform: "rotate(12deg)",
          }}
        ></div>
      )}
    </div>
  );
}

export default {
  basic: Basic,
  news: News,
  cols: Cols,
} as Record<string, any>;
