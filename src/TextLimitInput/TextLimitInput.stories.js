// src/components/TextLimitInput.stories.js
import React from 'react';
import { TextLimitInput } from './TextLimitInput';

export default {
  title: 'Example/TextLimitInput',
  component: TextLimitInput,
  argTypes: {
    limit: {
      control: { type: 'number' },
      description: '텍스트 입력 글자 수 제한',
    },
  },
};

const Template = (args) => <TextLimitInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  limit: 10,
};
