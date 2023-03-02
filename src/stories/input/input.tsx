import classNames from 'classnames';
import RcInput, {InputProps as RcInputProps} from 'rc-input';
import React from 'react';
import { ConfigContext } from '../configContext';
import "./input.scss";
type showPropsKeyList=keyof Pick<RcInputProps,'value'|'disabled'>
type showProps = {
  [key in showPropsKeyList]?: RcInputProps[key];
};
interface InputProps {
  tetyt?:String
}
export const Input: React.FC<InputProps&showProps> = (props) => { 
  const { getPrefix } = React.useContext(ConfigContext);
  const prefixCls = getPrefix();
  const classes = classNames(
    [`${prefixCls}-input`].join(' '),
    {
      ['is-disabled']:props.disabled,
    },
  );
  return <RcInput {...props} className={classes} allowClear/>
}