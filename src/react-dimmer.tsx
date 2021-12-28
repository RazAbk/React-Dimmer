import * as React from 'react';
import './react-dimmer.css';

export interface IDimmerProps {
  isOpen: boolean;
  exitDimmer: (action: boolean) => void;
  zIndex?: number;
  opacity?: number;
  blur?: number;
  saturate?: number;
  transition?: number;
}

export const ReactDimmer = ({ isOpen, exitDimmer, zIndex = 100, opacity = 0.5, blur = 0, saturate = 100, transition = 0.3 }: IDimmerProps) => {
  const defaultStyle = { zIndex: zIndex.toString(), background: 'rgba(0, 0, 0, 0)', backdropFilter: `blur(0px) saturate(100%)`, transition: `${transition}s` };
  const activeStyle = { zIndex: zIndex.toString(), background: `rgba(0, 0, 0, ${opacity})`, backdropFilter: `blur(${blur}px) saturate(${saturate}%)`, transition: `${transition}s` };

  return (
    <div
      style={isOpen ? activeStyle : defaultStyle}
      onClick={() => {
        exitDimmer(false);
      }}
      className={`dimmer ${isOpen ? 'dimmer-active' : ''}`}
    ></div>
  );
};
