import React from "react";

export interface ConfigContextProps {
  getPrefix: (suffixCls?: string, customizePrefixCls?: string) => string;
}

export const defaultGetPrefix = (suffixCls?: string, customizePrefixCls?: string) => {
  const strPrefix="er"
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `${strPrefix}-${suffixCls}` : strPrefix
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  getPrefix: defaultGetPrefix,
})