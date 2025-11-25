import React, { useState, useEffect, useCallback } from 'react';
import { ImageOff, Loader2, RefreshCw } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Custom element to render when the image fails to load.
   */
  fallback?: React.ReactNode;
  /**
   * Custom element to render while the image is loading.
   */
  loadingFallback?: React.ReactNode;
  /**
   * The aspect ratio of the image container (e.g., "16/9", "4/3", "1/1").
   * Helps prevent layout shift (CLS).
   */
  aspectRatio?: string;
  /**
   * Whether to show a retry button on error. Defaults to false.
   */
  showRetry?: boolean;
  /**
   * Class name for the wrapper div.
   */
  wrapperClassName?: string;
}

type ImageStatus = 'loading' | 'loaded' | 'error';

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  wrapperClassName,
  fallback,
  loadingFallback,
  aspectRatio,
  showRetry = false,
  style,
  onLoad,
  onError,
  ...props
}) => {
  const [status, setStatus] = useState<ImageStatus>('loading');
  // Ensure src is a string before setting state
  const [imgSrc, setImgSrc] = useState<string | undefined>(typeof src === 'string' ? src : undefined);

  // Reset status when src changes
  useEffect(() => {
    setStatus('loading');
    if (typeof src === 'string') {
      setImgSrc(src);
    } else {
      setImgSrc(undefined);
    }
  }, [src]);

  const handleLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setStatus('loaded');
    if (onLoad) onLoad(e);
  }, [onLoad]);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setStatus('error');
    if (onError) onError(e);
  }, [onError]);

  const handleRetry = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof src !== 'string') return;
    
    setStatus('loading');
    // Force a re-fetch by appending a timestamp or simply resetting (if purely network transient)
    // For this example, we just toggle the state to trigger a re-render attempt if logic permits,
    // but usually, we might want to append a cache-buster or just try setting src again.
    setImgSrc(`${src}${src.includes('?') ? '&' : '?'}retry=${Date.now()}`);
  };

  // Determine styles for aspect ratio wrapper if provided
  const wrapperStyle: React.CSSProperties = aspectRatio 
    ? { aspectRatio, ...style } 
    : { ...style };

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-gray-50 dark:bg-gray-800", // Base background for loading/error
        wrapperClassName
      )}
      style={wrapperStyle}
    >
      {/* 
        Image Element 
        - Opacity 0 while loading to allow smooth fade-in
        - Hidden if error
      */}
      {imgSrc && status !== 'error' && (
        <img
          src={imgSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500 ease-in-out",
            status === 'loading' ? "opacity-0 scale-105" : "opacity-100 scale-100", // Subtle zoom-out effect on load
            className
          )}
          {...props}
        />
      )}

      {/* Loading State - Skeleton / Spinner */}
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {loadingFallback ? (
            loadingFallback
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400">
               {/* Shimmer Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer" />
              <Loader2 className="w-8 h-8 animate-spin text-gray-300" />
            </div>
          )}
        </div>
      )}

      {/* Error State */}
      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-20 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm">
          {fallback ? (
            fallback
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-400 animate-in fade-in zoom-in duration-300">
              <div className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-sm">
                <ImageOff className="w-6 h-6 text-gray-400 dark:text-gray-500" />
              </div>
              <span className="text-xs font-medium text-gray-500">Image failed to load</span>
              {showRetry && (
                 <button 
                   onClick={handleRetry}
                   className="mt-2 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
                 >
                   <RefreshCw className="w-3 h-3" /> Retry
                 </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};