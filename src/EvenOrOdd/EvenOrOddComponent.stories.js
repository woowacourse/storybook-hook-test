import React from "react";
import EvenOrOddComponent from "./EvenOrOddComponent";

export default {
  title: "Example/EvenOrOddComponent",
  component: EvenOrOddComponent,
  argTypes: {
    number: {
      control: {
        type: "number",
      },
    },
  },
};

const Template = (args) => <EvenOrOddComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: 0,
};
