"use client";

import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'feature' | 'hero';
  count?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  variant = 'card', 
  count = 1, 
  className = '' 
}) => {
  const renderSkeleton = () => {
    switch (variant) {
      case 'hero':
        return (
          <div className="animate-pulse space-y-8">
            {/* Badge skeleton */}
            <div className="h-8 bg-slate-700/50 rounded-full w-48 mx-auto"></div>
            {/* Title skeleton */}
            <div className="space-y-4">
              <div className="h-12 bg-slate-700/50 rounded-lg w-3/4 mx-auto"></div>
              <div className="h-12 bg-slate-700/50 rounded-lg w-2/3 mx-auto"></div>
            </div>
            {/* Description skeleton */}
            <div className="space-y-3 max-w-3xl mx-auto">
              <div className="h-4 bg-slate-700/50 rounded w-full"></div>
              <div className="h-4 bg-slate-700/50 rounded w-5/6 mx-auto"></div>
              <div className="h-4 bg-slate-700/50 rounded w-4/5 mx-auto"></div>
            </div>
            {/* Button skeleton */}
            <div className="h-12 bg-slate-700/50 rounded-full w-40 mx-auto"></div>
          </div>
        );

      case 'feature':
        return (
          <div className="animate-pulse">
            <div className="bg-slate-800/50 border border-slate-700/30 rounded-2xl p-6 h-full">
              {/* Tag skeleton */}
              <div className="h-6 bg-slate-700/50 rounded-full w-20 mb-4"></div>
              {/* Title skeleton */}
              <div className="h-8 bg-slate-700/50 rounded-lg w-3/4 mb-4"></div>
              {/* Content skeleton */}
              <div className="space-y-3">
                <div className="h-4 bg-slate-700/50 rounded w-full"></div>
                <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
                <div className="h-4 bg-slate-700/50 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-slate-700/50 rounded w-full"></div>
            <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
            <div className="h-4 bg-slate-700/50 rounded w-4/5"></div>
          </div>
        );

      case 'card':
      default:
        return (
          <div className="animate-pulse">
            <div className="bg-slate-800/50 border border-slate-700/30 rounded-xl p-6">
              <div className="space-y-4">
                <div className="h-6 bg-slate-700/50 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-700/50 rounded w-full"></div>
                  <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
                </div>
                <div className="h-10 bg-slate-700/50 rounded-lg w-1/3"></div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={count > 1 ? 'mb-4' : ''}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader; 