import classNames from 'classnames';
import React from 'react';
import { ConfigContext } from '../configContext';
import './style/col.scss';
import RowContext from './RowContext';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?:number,
  offset?:number,
  push?: Number,
  pull?: Number,
  xs?: Number,
  sm?: Number,
  md?: Number,
  lg?: Number,
  xl?: Number,
}

export const Col: React.FC<ColProps> = (props) => { 
  const { getPrefix } = React.useContext(ConfigContext);
  const { gutter } = React.useContext(RowContext);
  const prefixCls = getPrefix();
  const classes = classNames(
    [`${prefixCls}-col`,props.className].join(' '),
    {
      [`${prefixCls}-col-${props.span}`]:props.span,
      [`${prefixCls}-col-offset-${props.offset}`]: props.offset,
      [`${prefixCls}-col-pull-${props.pull}`]: props.pull,
      [`${prefixCls}-col-push-${props.push}`]: props.push,
      [`${prefixCls}-col-xs-${props.xs}`]: props.xs,
      [`${prefixCls}-col-sm-${props.sm}`]: props.sm,
      [`${prefixCls}-col-md-${props.md}`]: props.md,
      [`${prefixCls}-col-lg-${props.lg}`]: props.lg,
      [`${prefixCls}-col-xl-${props.xl}`]:props.xl,
    },
  );

  const colStyle: React.CSSProperties = {};
  if(gutter){
    colStyle.paddingLeft=gutter/2
    colStyle.paddingRight=gutter/2
  }
  
  
  return <div className={classes} style={{...props.style,...colStyle}}>
    {props.children}
  </div>
}