/**
 * @typedef {import("@prismicio/client").Content.SourcesSlice} SourcesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SourcesSlice>} SourcesProps
 * @param {SourcesProps}
 */
const Sources = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sources (variation: {slice.variation}) Slices
    </section>
  );
};

export default Sources;
