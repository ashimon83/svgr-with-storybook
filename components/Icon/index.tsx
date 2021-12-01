import { Story } from "@storybook/react/types-6-0";
import React from "react";

import IconCodeBrackets from "./CodeBrackets";
export { IconCodeBrackets };

import IconColors from "./Colors";
export { IconColors };

import IconComments from "./Comments";
export { IconComments };

import IconDirection from "./Direction";
export { IconDirection };

import IconFlow from "./Flow";
export { IconFlow };

import IconPlugin from "./Plugin";
export { IconPlugin };

import IconRepo from "./Repo";
export { IconRepo };

import IconStackalt from "./Stackalt";
export { IconStackalt };

// for storybook
export default {
  title: "Icons",
};

export const AllIcons: Story = (args) => {
  return (
    <ul>
      <li>
        <IconCodeBrackets width={20} height={20} {...args} />
        <span>IconCodeBrackets</span>
      </li>
      <li>
        <IconColors width={20} height={20} {...args} />
        <span>IconColors</span>
      </li>
      <li>
        <IconComments width={20} height={20} {...args} />
        <span>IconComments</span>
      </li>
      <li>
        <IconDirection width={20} height={20} {...args} />
        <span>IconDirection</span>
      </li>
      <li>
        <IconFlow width={20} height={20} {...args} />
        <span>IconFlow</span>
      </li>
      <li>
        <IconPlugin width={20} height={20} {...args} />
        <span>IconPlugin</span>
      </li>
      <li>
        <IconRepo width={20} height={20} {...args} />
        <span>IconRepo</span>
      </li>
      <li>
        <IconStackalt width={20} height={20} {...args} />
        <span>IconStackalt</span>
      </li>
    </ul>
  );
};
