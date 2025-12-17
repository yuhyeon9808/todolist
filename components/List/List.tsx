'use client';
import React, { useEffect, useState } from 'react';
import Header from '../ui/Header';
import TextInput from '../ui/TextInput';
import FilteringBtn from '../ui/FilteringBtn';
import SearchInput from '../ui/SearchInput';
import DelBtn from '../ui/DelBtn';
import UpdateBtn from '../ui/UpdateBtn';
import { TodoList } from '@/type/todoList';

export default function List() {
  const [text, setText] = useState('');
  const [list, setList] = useState<TodoList>([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const task = localStorage.getItem('task');
    if (!task) return;

    try {
      const parsed = JSON.parse(task);
      if (Array.isArray(parsed)) {
        queueMicrotask(() => setList(parsed));
      }
    } catch {
      return;
    }
  }, []);

  const filtered =
    keyword.trim() === ''
      ? list
      : list.filter((item) => item.text.includes(keyword));

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[690px] h-auto border-b border-divider ">
        <Header list={list}>
          <TextInput
            text={text}
            setText={setText}
            list={list}
            setList={setList}
          />
        </Header>
        <div className="flex justify-between">
          <FilteringBtn />
          <SearchInput keyword={keyword} setKeyword={setKeyword} />
        </div>
        <div className=" bg-whiteColor border border-grayColor my-10 rounded-md w-full h-auto min-h-[260px] ">
          <div>
            <ul>
              {filtered.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between pl-4 pr-10 border-b border-grayColor last:border-b-0 py-5"
                >
                  <div className="flex gap-3">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    {item.text}
                  </div>
                  <div className="flex gap-5">
                    <UpdateBtn />
                    <DelBtn id={item.id} list={list} setList={setList} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
