import classNames from "classnames";
import React from "react";
import { ConfigContext } from "../configContext";
import RowContext from './RowContext';
import { tuple } from "../utils/type";
import './Row.scss';


const RowAligns = tuple('top', 'middle', 'bottom');
const RowJustify = tuple('start', 'end', 'center', 'space-around', 'space-between');
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number;
  align?: typeof RowAligns[number];
  justify?: typeof RowJustify[number];
}


export const Row: React.FC<RowProps> = (props) => { 
  const { getPrefix } = React.useContext(ConfigContext);
  const prefixCls = getPrefix();
  const classes = classNames(
    [`${prefixCls}-row`,props.className].join(' '),
    {
      [`is-${props.justify}`]: props.justify,
      [`is-${props.align}`]: props.align,
    },
  );
  const rowStyle: React.CSSProperties = {};
  if(props.gutter){
    rowStyle.marginLeft=-props.gutter/2
    rowStyle.marginRight=-props.gutter/2
  }
  
  return <RowContext.Provider value={{gutter:props.gutter}}>
      <div className={classes} style={{...props.style,...rowStyle}}>
        {props.children}
      </div>
  </RowContext.Provider>
}