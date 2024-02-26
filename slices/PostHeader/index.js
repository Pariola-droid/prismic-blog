/**
 * @typedef {import("@prismicio/client").Content.PostHeaderSlice} PostHeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PostHeaderSlice>} PostHeaderProps
 * @param {PostHeaderProps}
 */
const PostHeader = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for post_header (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PostHeader;
