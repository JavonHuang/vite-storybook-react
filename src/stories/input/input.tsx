import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { ConfigContext } from '../configContext';
import "./input.scss";
import { resolveOnChange } from './commonUtils';
// type showPropsKeyList=keyof Pick<RcInputProps,'value'|'disabled'>
// type showProps = {
//   [key in showPropsKeyList]?: RcInputProps[key];
// };
export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string | number | readonly string[] | undefined,
  disabled?: boolean,
  clearable?: boolean,
  showPassword?:boolean,
}
export const Input: React.FC<InputProps> = (props) => { 
  const { showPassword, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { getPrefix } = React.useContext(ConfigContext);
  const prefixCls = getPrefix();
  const classes = classNames(
    [`${prefixCls}-input-inner`].join(' '),
    {
      ['is-disabled']: props.disabled,
    },
  );
  const classesParent = classNames(
    [`${prefixCls}-input`].join(' '),
    {
      [`${prefixCls}-input-suffix`]:props.clearable||showPassword,
    },
  ); 

  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value,
  });
  const [focused, setFocused] = useState<boolean>(false);
  const [hovered, setHover] = useState<boolean>(false);
  const [isPassword,setisPassword] = useState<boolean>(showPassword??false);

  useEffect(() => {
    setFocused((prev) => (prev && props.disabled ? false : prev));
  }, [props.disabled]);

  
  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setFocused(false);
    props.onBlur?.(e);
  };

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setHover(true);
  };

  const handleMouseleave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setHover(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.value === undefined) {
      setValue(e.target.value);
    }
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, props.onChange);
    }
  };

  const handleClear = (e: React.MouseEvent<HTMLElement, MouseEvent>) => { 
    setValue('');
    focus();
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, props.onChange);
    }
  }
  const handleShowPassword = (e: React.MouseEvent<HTMLElement, MouseEvent>) => { 
    setisPassword(!isPassword);
  }
  return <div className={classesParent} onMouseEnter ={handleMouseEnter} onMouseLeave ={handleMouseleave}>
    <input
      {...rest}
      type={isPassword?'password':'text'}
      className={classes}
      ref={inputRef}
      value={ value}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange} />
    <span className={[`${prefixCls}-input-suffix-inner`].join(' ')}>
      {props.clearable &&
        value && !showPassword &&
        <i onClick={handleClear}
          className={[
            'iconfont', `${prefixCls}-input-icon`,
            'is-clear',
            `${prefixCls}-icon-qingchu`,
            focused && value ? 'is-focused' : '',
            hovered && value ? 'is-hover' : ''].join(' ')}>
        </i>}
      {showPassword && <i onClick={handleShowPassword} className={ ['iconfont', `${prefixCls}-input-icon`,`${prefixCls}-icon-huabanfuben`,].join(' ')}></i>}
    </span>
  </div>
}