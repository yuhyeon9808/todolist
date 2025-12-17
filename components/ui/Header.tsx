import { TodoList } from '@/type/todoList';
import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
  list: TodoList;
}
export default function Header({ children, list }: HeaderProps) {
  return (
    <header className="pb-2 py-5">
      <div className=" flex justify-between items-center pb-3 ">
        <h1 className="text-32 text-navyColor font-bold">Today</h1>
        <div className="text-darkGrayColor font-semibold">
          <span>{list.length} tasks</span>
          <span> · </span>
          <span>{list.filter((item) => item.done === true).length}done</span>
        </div>
      </div>
      {children}
    </header>
  );
}
