import { RichTextField } from '@/components/common/RichTextField';
import { createHeadingId } from '@/utils/createHeadingId';

/**
 * @typedef {import("@prismicio/client").Content.RichTextSlice} RichTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextSlice>} RichTextProps
 * @param {RichTextProps}
 */
const RichText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <RichTextField field={slice.primary.blog_content} />
    </section>
  );
};

export default RichText;
