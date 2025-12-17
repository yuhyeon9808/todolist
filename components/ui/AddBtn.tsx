import { TodoList } from '@/type/todoList';
import { Plus } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';

export default function AddBtn({
  text,
  list,
  setList,
  setText,
}: {
  text: string;
  list: TodoList;
  setList: Dispatch<SetStateAction<TodoList>>;
  setText: Dispatch<SetStateAction<string>>;
}) {
  return (
    <button
      className="w-[110px] h-[40px] bg-blueColor text-whiteColor text-20 rounded-sm gap-2 px-3 py-1 absolute right-5 top-1/2 translate-y-[-50%] flex items-center justify-center "
      onClick={() => {
        const next = [
          ...list,
          { id: crypto.randomUUID(), text: text, done: false },
        ];
        setList(next);
        localStorage.setItem('task', JSON.stringify(next));
        setText('');
      }}
    >
      <Plus color="#FEFEFE" size={20} />
      <span>Add</span>
    </button>
  );
}
