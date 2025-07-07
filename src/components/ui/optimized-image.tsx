import React, { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes = "100vw",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
  });

  const shouldLoad = priority || isIntersecting;

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);

  // Generate WebP and fallback sources
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const originalSrc = src;

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {shouldLoad && !hasError ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <img
              src={originalSrc}
              alt={alt}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={handleLoad}
              onError={handleError}
              loading={priority ? "eager" : "lazy"}
            />
          </div>
        </picture>
      ) : (
        <div
          className={cn(
            "bg-muted animate-pulse flex items-center justify-center",
            width && height
              ? `w-[${width}px] h-[${height}px]`
              : "w-full h-full aspect-video"
          )}
          role="img"
          aria-label={`Loading ${alt}`}
        >
          {hasError ? (
            <span className="text-muted-foreground text-sm">
              Failed to load image
            </span>
          ) : (
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
