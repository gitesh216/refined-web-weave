
import React from 'react';
import { cn } from '@/lib/utils';
import CodeSnippet from './code-snippet';

interface FloatingCodeProps {
  code: string;
  className?: string;
  opacity?: number;
  rotate?: number;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'custom';
  animate?: boolean;
  language?: 'jsx' | 'css' | 'typescript';
}

const FloatingCode: React.FC<FloatingCodeProps> = ({ 
  code, 
  className,
  opacity = 0.15,
  rotate = 0,
  position,
  animate = false,
  language = 'jsx'
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'absolute top-4 left-4 z-0';
      case 'top-right':
        return 'absolute top-4 right-4 z-0';
      case 'bottom-left':
        return 'absolute bottom-4 left-4 z-0';
      case 'bottom-right':
        return 'absolute bottom-4 right-4 z-0';
      case 'center':
        return 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0';
      default:
        return 'absolute z-0';
    }
  };

  return (
    <div 
      className={cn(
        getPositionClasses(),
        animate && "animate-fade-in-up",
        className
      )}
    >
      <CodeSnippet 
        code={code}
        opacity={opacity}
        rotate={rotate}
        language={language}
      />
    </div>
  );
};

export default FloatingCode;
