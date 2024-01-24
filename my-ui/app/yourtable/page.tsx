"use client"
import { CompactTable, Column } from '@table-library/react-table-library/compact';
import { TableNode, Data, TableProps, RowProps } from '@table-library/react-table-library/types/table';
 
const nodes = [
    {
      id: '0',
      name: 'React Learning',
      deadline: new Date(2024, 1, 15),
      type: 'TASK',
      isComplete: true,
      nodes: 3,
    },
    {
      id: '1',
      name: 'Next.js Learning',
      deadline: new Date(2024, 1, 15),
      type: 'TASK',
      isComplete: true,
      nodes: 5,
    },
    {
      id: '2',
      name: 'ES/TS Learning',
      deadline: new Date(2024, 1, 15),
      type: 'TASK',
      isComplete: false,
      nodes: 8,
    },
  ];

const COLUMNS:Column<TableNode>[] = [
    { label: 'Task', renderCell: (item) => item.name },
    {
      label: 'Deadline',
      renderCell: (item) =>
        item.deadline.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Type', renderCell: (item) => item.type },
    {
      label: 'Complete',
      renderCell: (item) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item) => item.nodes },
  ];

  
  export default function Comp(){
    const data = { nodes }
    return <CompactTable columns={COLUMNS} data={data}  />
  }