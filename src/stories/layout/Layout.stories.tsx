import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './style/layout.scss'
import {Row } from './Row';
import { Col } from './Col';

export default {
  title: 'Example/Layout',
  // component: ,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Row|typeof Col>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Row|typeof Col> = (args) => <>
      <Row>
      <Col span={8}><div>1</div></Col>
      <Col span={8} className="er-col-light"><div>2</div></Col>
      <Col span={8}><div>3</div></Col>
    </Row>
    <Row>
        <Col span={8}><div>1</div></Col>
        <Col span={4} offset={2} className="er-col-light"><div>2</div></Col>
        <Col span={4} offset={1}><div>3</div></Col>
    </Row>
    <Row gutter={10}>
      <Col span={8}><div>1</div></Col>
      <Col span={8} className="er-col-light"><div>2</div></Col>
      <Col span={8}><div>3</div></Col>
    </Row>
    <Row gutter={10}>
      <Col span={8} pull={4}><div>1</div></Col>
      <Col span={8} className="er-col-light"><div>2</div></Col>
      <Col span={8} push={4}><div>3</div></Col>
    </Row>
    <Row gutter={10}>
      <Col className="hidden-md-and-down" xs={8} sm={6} md={4} lg={3} xl={ 1} ><div>1</div></Col>
      <Col xs={4} sm={6} md={8} lg={9} xl={ 11} className="er-col-light"><div>2</div></Col>
      <Col xs={4} sm={6} md={8} lg={9} xl={11}><div>3</div></Col>
      <Col xs={8} sm={6} md={4} lg={3} xl={ 1} className="er-col-light"><div>4</div></Col>
    </Row>
</>;

export const layout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
layout.args = {
  
};