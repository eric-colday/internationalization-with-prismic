import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-slate-600 flex flex-col justify-center items-center p-52"
    >
      <PrismicRichText
        field={slice.primary.textrich}
        components={{
          heading1: ({ children }) => (
            <h1 className="text-4xl font-bold ">{children}</h1>
          ),
          heading2: ({ children }) => (
            <h2 className="text-3xl font-bold ">{children}</h2>
          ),
        }}
      />
    </section>
  );
};

export default Hero;
