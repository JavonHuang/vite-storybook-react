import classNames from 'classnames';
import React from 'react';
import { ConfigContext } from '../configContext';
import './col.scss';
import RowContext from './RowContext';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?:number,
  offset?:number,
}

export const Col: React.FC<ColProps> = (props) => { 
  const { getPrefix } = React.useContext(ConfigContext);
  const { gutter } = React.useContext(RowContext);
  const prefixCls = getPrefix();
  const classes = classNames(
    [`${prefixCls}-col`,props.className].join(' '),
    {
      [`${prefixCls}-col-${props.span}`]:props.span,
      [`${prefixCls}-col-offset-${props.offset}`]:props.offset,
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