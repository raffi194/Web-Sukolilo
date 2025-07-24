import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-full max-w-sm animate-pulse">
            {/* Image skeleton */}
            <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>

            <div className="p-4 space-y-3">
                {/* Title skeleton */}
                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-3/4"></div>

                {/* Description skeleton */}
                <div className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-full"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-2/3"></div>
                </div>

                {/* Address skeleton */}
                <div className="flex items-start space-x-2">
                    <div className="h-4 w-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded flex-1"></div>
                </div>

                {/* Contact skeleton */}
                <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-1/2"></div>
                </div>

                {/* Button skeleton */}
                <div className="pt-2">
                    <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;