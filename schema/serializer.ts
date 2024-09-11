/**
  * This serializer is included in a stateful component
  * in order to deal with a “read more” button.
  *
 **/
import React, { useState } from "react";
import { PortableText } from 'astro-portabletext';

function RichText(blocks) {
  const [readMore, setReadMore] = useState(true);
  const serializers = {
    types: {
      break: props => {
        const { style } = props.node;
        if (style === "lineBreak") {
          return <hr className="lineBreak" />;
        }
        if (readMore && style === "readMore") {
          return (
            <div className="readMore">
              <button onClick={() => setReadMore(false)}>Read More</button>
            </div>
          );
        }
        return null;
      },
    }
  }
  /**
   * Find the index of the “readMore” block
   */
  const findReadMoreIndex = doc.text.findIndex(
    ({ _type, style }) => _type === "break" && style === "readMore"
  );
  /**
   * Slice the array to the (first) readMore block
   */
  const slicedBlocks = readMore ? blocks.slice(0, findReadMoreIndex + 1) : blocks
  return <PortableText blocks={slicedBlocks} serializers={serializers} />
}

export default RichText