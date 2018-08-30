import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Gitgraph } from "gitgraph-react/src/Gitgraph";
import { Commit } from "gitgraph-core";

storiesOf("Gitgraph events", module).add("on commit click", () => (
  <Gitgraph>
    {(gitgraph) => {
      function onClick(commit: Commit) {
        alert(`Commit ${commit.hashAbbrev} clicked: "${commit.subject}"`);
      }

      const master = gitgraph.branch("master");
      master.commit({
        subject: "Hello",
        body: "First commit",
        onClick,
      });
      master.commit({
        subject: "World",
        body: "Second commit",
        onClick,
      });
    }}
  </Gitgraph>
));
