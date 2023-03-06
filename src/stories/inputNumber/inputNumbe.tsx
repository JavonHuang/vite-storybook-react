import React, { useEffect, useRef, useState } from 'react';

import  RcInputNumber,{ InputNumberProps as RcInputNumberProps } from 'rc-input-number';


type showPropsKeyList=keyof RcInputNumberProps
type showProps = {
  [key in showPropsKeyList]?: RcInputNumberProps[key];
};

export interface InputNumberProps extends showProps {
  // value?: string | number | readonly string[] | undefined,
  // disabled?: boolean,
  // clearable?: boolean,
  showPassword?:boolean,
}

export  const InputNumber = (props:InputNumberProps) => { 
  return <div>
    <i className="iconfont er-icon-jianhao"></i>
    <RcInputNumber></RcInputNumber>
    <i className="iconfont er-icon-jiahao_o"></i>
  </div>
}