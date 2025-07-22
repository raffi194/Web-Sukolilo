import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

// SVG Custom sebagai React Component
const LongArrowLeft = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M11.4965 18.4411L10.5055 19.4321C10.0859 19.8517 9.40743 19.8517 8.9923 19.4321L0.314697 10.7589C-0.104899 10.3393 -0.104899 9.66085 0.314697 9.24572L8.9923 0.568115C9.4119 0.148519 10.0904 0.148519 10.5055 0.568115L11.4965 1.55908C11.9205 1.98314 11.9116 2.67502 11.4786 3.09015L6.09977 8.21458H18.9287C19.5224 8.21458 20 8.69221 20 9.28589V10.7143C20 11.308 19.5224 11.7856 18.9287 11.7856H6.09977L11.4786 16.91C11.9161 17.3252 11.925 18.0171 11.4965 18.4411Z" fill="#0F78F7" />
    </svg>
);

const LongArrowRight = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.50346 1.55893L9.49447 0.567937C9.91406 0.148341 10.5926 0.148341 11.0077 0.567937L19.6853 9.24109C20.1049 9.66069 20.1049 10.3391 19.6853 10.7543L11.0077 19.4319C10.5881 19.8515 9.90963 19.8515 9.49447 19.4319L8.50346 18.4409C8.07941 18.0169 8.08838 17.325 8.52138 16.9098L13.9002 11.7854H1.07129C0.477609 11.7854 0 11.3078 0 10.7141V9.28571C0 8.69203 0.477609 8.2144 1.07129 8.2144H13.9002L8.52138 3.08997C8.08391 2.67483 8.075 1.98295 8.50346 1.55893Z" fill="#0F78F7" />
    </svg>
);

const CustomPagination = ({ count = 10, defaultPage = 1, onChange }) => {
    const [page, setPage] = useState(defaultPage);

    const handleChange = (event, value) => {
        setPage(value);
        if (onChange) {
            onChange(event, value);
        }
    };

    return (
        <div className="flex justify-center p-4">
            <Pagination
                count={count}
                page={page}
                onChange={handleChange}
                renderItem={(item) => (
                    <PaginationItem
                        components={{
                            previous: LongArrowLeft,
                            next: LongArrowRight,
                        }}
                        {...item}
                    />
                )}
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: 'black',
                        lineHeight: '1.5',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        minWidth: '48px',
                        minHeight: '48px',
                        borderRadius: '50%',
                    },
                    '& .Mui-selected': {
                        backgroundColor: 'rgba(15, 120, 247, 1)',
                        color: 'white',
                    },
                    '& .MuiPaginationItem-root:hover': {
                        backgroundColor: '#A6D1FF',
                    },

                    '& .MuiPaginationItem-ellipsis': {
                        fontSize: '1rem', // bikin kecil biar gak naik
                        lineHeight: '48px', // sejajarin dengan tombol
                        verticalAlign: 'middle',
                    },
                }}
            />
        </div>
    );
};

export default CustomPagination;