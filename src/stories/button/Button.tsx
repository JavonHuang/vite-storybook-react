import React from 'react';
import './button.scss';
import classNames from 'classnames'
import { tuple } from '../utils/type';
import { ConfigContext } from '../configContext';

export const ClsTypes = tuple('primary', 'success', 'warning', 'info','danger');
export type ClsType = typeof ClsTypes[number];
interface ButtonProps {
  children?: React.ReactNode;
  type?:ClsType;
  round?: boolean;
  plain?: boolean;
  circle?: boolean;
  disabled?:boolean;
  style?: React.CSSProperties;
  /**
   * Optional click handler
   */
  onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined;
}

/**
 * 基础用法
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { getPrefix } = React.useContext(ConfigContext);
  const prefixCls = getPrefix();
  const classes = classNames(
    [`${prefixCls}-button`,`${prefixCls}-button-${props.type}`].join(' '),
    {
      [`is-round`]: props.round,
      [`is-plain`]: props.plain,
      [`is-circle`]: props.circle,
      [`is-disabled`]:props.disabled,
    },
  );
  return (
    <button
      type="button"
      className={classes}
      onClick={props.onClick}
      style={ props.style}
    >
      {props.children}
    </button>
  );
};
