import { TodoList } from '@/type/todoList';
import { Trash2 } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';

export default function DelBtn({
  list,
  setList,
  id,
}: {
  id: string;
  list: TodoList;
  setList: Dispatch<SetStateAction<TodoList>>;
}) {
  const handleDelete = () => {
    const filtered = list.filter((item) => item.id !== id);
    setList(filtered);
    localStorage.setItem('task', JSON.stringify(filtered));
  };
  return (
    <button onClick={handleDelete}>
      <Trash2 size={20} />
    </button>
  );
}
