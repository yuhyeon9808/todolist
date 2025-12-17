import { Search } from 'lucide-react';
import React from 'react';

export default function SearchInput() {
  return (
    <div className="relative">
      <Search size={15} className="absolute top-1/2 translate-y-[-50%] ml-2" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-whiteColor border border-grayColor rounded-sm pl-7 w-[200px] h-[35px]"
      />
    </div>
  );
}
