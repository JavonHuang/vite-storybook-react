import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Row } from './Row';

export default {
  title: 'Example/Layout',
  component: Row,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Row>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Row> = (args) => <Row {...args}>默认</Row>;

export const row = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
row.args = {
};