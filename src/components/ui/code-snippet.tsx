
import React from 'react';
import { cn } from '@/lib/utils';

interface CodeSnippetProps {
  code: string;
  className?: string;
  opacity?: number;
  rotate?: number;
  language?: 'jsx' | 'css' | 'typescript';
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ 
  code, 
  className, 
  opacity = 0.2, 
  rotate = 0,
  language = 'jsx'
}) => {
  const highlightSyntax = (code: string, lang: string) => {
    let highlighted = code;
    
    // Keywords
    const keywords = ['const', 'let', 'var', 'function', 'return', 'import', 'export', 'from', 'interface', 'type', 'class', 'extends'];
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="text-primary font-medium">${keyword}</span>`);
    });
    
    // JSX elements
    highlighted = highlighted.replace(/<(\/?[A-Z][a-zA-Z0-9]*)/g, '<span class="text-purple-400">$1</span>');
    highlighted = highlighted.replace(/(<\/?[a-z][a-zA-Z0-9-]*)/g, '<span class="text-blue-300">$1</span>');
    
    // Strings
    highlighted = highlighted.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="text-green-400">$1$2$1</span>');
    
    // Properties
    highlighted = highlighted.replace(/([a-zA-Z][a-zA-Z0-9]*)\s*:/g, '<span class="text-orange-400">$1</span>:');
    
    // Comments
    highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="text-muted-foreground italic">$1</span>');
    highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-muted-foreground italic">$1</span>');
    
    // Numbers
    highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="text-red-400">$1</span>');
    
    return highlighted;
  };

  return (
    <pre 
      className={cn(
        "font-mono text-xs leading-relaxed whitespace-pre-wrap pointer-events-none select-none",
        className
      )}
      style={{ 
        opacity,
        transform: `rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      <code 
        dangerouslySetInnerHTML={{ 
          __html: highlightSyntax(code, language) 
        }} 
      />
    </pre>
  );
};

export default CodeSnippet;
