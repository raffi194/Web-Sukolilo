import React from 'react';

const Loading = () => {
    return (
        <div className="w-full flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
    );
};

export default Loading;
