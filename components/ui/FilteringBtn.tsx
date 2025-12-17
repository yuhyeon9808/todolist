'use client';
import { TodoList } from '@/type/todoList';
import React, { Dispatch, SetStateAction, useState } from 'react';

const BTN = [
  { id: 1, menu: 'All' },
  { id: 2, menu: 'Active' },
  { id: 3, menu: 'Done' },
];

export default function FilteringBtn({
  setIsDone,
}: {
  setIsDone: Dispatch<SetStateAction<number>>;
}) {
  const [active, setActive] = useState(1);

  return (
    <div className="flex w-[270px] h-[35px] rounded-sm border border-grayColor bg-whiteColor overflow-hidden">
      {BTN.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => {
            setActive(item.id);
            setIsDone(item.id);
          }}
          className={`flex-1 h-full border-r border-grayColor last:border-r-0
      ${active === item.id ? 'bg-blueColor text-whiteColor' : 'bg-transparent'}
    `}
        >
          {item.menu}
        </button>
      ))}
    </div>
  );
}
