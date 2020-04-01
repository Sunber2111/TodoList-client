import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Loading = ({ content }) => {
  return (
    <Dimmer
      active
      inverted={true}
      style={{ paddingTop: "5em", paddingBottom: "4em" }}
    >
      <Loader content={content} />
    </Dimmer>
  );
};

export default Loading;
