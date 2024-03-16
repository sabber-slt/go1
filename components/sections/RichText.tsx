import React from "react";
import xss from "xss";

const RichText = ({
  unsafeHtml,
  ...rest
}: {
  unsafeHtml: string;
  [key: string]: any;
}): JSX.Element => {
  // The rest parameter `...rest` collects all other props passed to RichText
  // [key: string]: any is used to type the rest of the properties that might be passed to the component

  return (
    <article
      // add p, h3, a, and other tags styles here

      className="whitespace-pre-line"
      {...rest} // Spread the rest of the props here
      dangerouslySetInnerHTML={{
        __html: xss(unsafeHtml),
      }}
    />
  );
};

export default RichText;
