import React from 'react';
import './button.scss';
import classNames from 'classnames'
import { tuple } from '../utils/type';
import { ConfigContext } from '../configContext';
import './../iconfont/iconfont.css';
import './../style/common.scss'

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
  loadingIcon?: String;
  loading?: boolean;
  /**
   * Optional click handler
   */
  onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined;
}

/**
 * 基础用法
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const { loadingIcon = "er-icon-loading",loading=false } = props;
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
      {
        loading && <i className={['iconfont', 'er-icon','is-loading',loadingIcon].join(' ')}></i>
      }
      <span>
      {props.children}
      </span>
    </button>
  );
};
