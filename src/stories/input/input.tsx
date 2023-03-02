import RcInput, {InputProps as RcInputProps} from 'rc-input';
export interface InputProps extends RcInputProps {
}


export const Input: React.FC<RcInputProps> = (props) => { 
  return <RcInput></RcInput>
}