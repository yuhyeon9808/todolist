import { TodoList } from '@/type/todoList';
import React from 'react';

export default function Header({
  children,
  list,
}: Readonly<{
  children: React.ReactNode;
  list: TodoList;
}>) {
  return (
    <header className="pb-2 py-5">
      <div className=" flex justify-between items-center pb-3 ">
        <h1 className="text-32 text-navyColor font-bold">Today</h1>
        <div className="text-darkGrayColor font-semibold">
          <span>{list.length} tasks</span>
          <span> · </span>
          <span>done</span>
        </div>
      </div>
      {children}
    </header>
  );
}
