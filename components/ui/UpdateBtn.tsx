import { Pencil } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';

export default function UpdateBtn({
  id,
  setUpdate,
}: {
  id: string;
  setUpdate: Dispatch<SetStateAction<string>>;
}) {
  return (
    <button onClick={() => setUpdate(id)}>
      <Pencil size={20} />
    </button>
  );
}
