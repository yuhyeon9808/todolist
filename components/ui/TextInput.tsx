import React, { Dispatch, SetStateAction } from 'react';
import AddBtn from './AddBtn';
import { TodoList } from '@/type/todoList';

export default function TextInput({
  text,
  list,
  setText,
  setList,
}: {
  text: string;
  list: TodoList;
  setText: Dispatch<SetStateAction<string>>;
  setList: Dispatch<SetStateAction<TodoList>>;
}) {
  return (
    <div className=" border-y border-divider py-5 mb-5">
      <div className="relative">
        <input
          type="text"
          placeholder="Add a new task..."
          className="w-[690px] h-[55px] bg-whiteColor border border-grayColor text-darkGrayColor rounded-md pl-4 focus:outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (text.trim() === '') return;
              const next = [
                ...list,
                { id: crypto.randomUUID(), text: text, done: false },
              ];
              setList(next);
              localStorage.setItem('task', JSON.stringify(next));
              setText('');
            }
          }}
        />
        <AddBtn text={text} list={list} setText={setText} setList={setList} />
      </div>
      <p className="pt-3 pl-1 text-darkGrayColor">Press Enter to add task</p>
    </div>
  );
}
