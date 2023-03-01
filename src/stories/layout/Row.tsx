import classNames from "classnames";
import React from "react";
import { ConfigContext } from "../configContext";

interface RowProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: String;
  /**
   * Optional click handler
   */
  onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Row: React.FC<RowProps> = (props) => { 
  const { getPrefix } = React.useContext(ConfigContext);
  const prefixCls = getPrefix();
  const classes = classNames(
    [`${prefixCls}-row`,props.className].join(' '),
    {
    },
  );
  
  return <div className={classes} style={props.style}>
    {props.children}
  </div>
}