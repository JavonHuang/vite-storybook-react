import './row.scss';
interface ColProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /**
   * Optional click handler
   */
  onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export const Col: React.FC<ColProps> = (props) => { 
  return <div style={props.style}>
    {props.children}
  </div>
}