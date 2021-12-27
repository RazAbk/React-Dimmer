import * as React from 'react';
import './react-dimmer.css'

interface IDimmerProps {
  isOpen: boolean;
  exitDimmer: (action: boolean) => void;
  zIndex?: string;
}


export const ReactDimmer = ({ isOpen, exitDimmer, zIndex }: IDimmerProps) => {
  return <div onClick={() => {exitDimmer(false)}} style={{zIndex: zIndex}} className={`dimmer ${isOpen ? 'dimmer-active' : ''}`}></div>
};
