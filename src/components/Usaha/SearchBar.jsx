import React from 'react';
import { Search } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="flex items-center border-2 rounded-3xl px-5 py-2 w-full max-w-2xl bg-white sm:mx-20 border-[var(--clr-primary-5)]">
            <FontAwesomeIcon icon={faSearch} className='mr-2' />
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Cari UMKM Desa Sukolilo di sini"
                className="w-full focus:outline-none text-sm"
            />
        </div>
    );
};

export default SearchBar;
