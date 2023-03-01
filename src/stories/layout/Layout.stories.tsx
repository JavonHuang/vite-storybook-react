import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Layout } from './Layout';

export default {
  title: 'Example/Layout',
  component: Layout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Layout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args}></Layout>;

export const layout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
layout.args = {
};