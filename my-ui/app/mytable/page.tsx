"use client"
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

import { CompactTable } from '@table-library/react-table-library/compact'

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

// we should make our itmes type-safe
type itemType = {name:''} //we would bneed to add all the members - or use an interface

// the table is made up of columns. One convention is to CAPITALIZE contant values
const COLUMNS = [ //            type :any should be tightened up later
    { label: 'Task', renderCell: (item:any) => item.name },
    {
      label: 'Deadline',
      renderCell: (item:any) =>
        item.deadline.toLocaleDateString('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
    },
    { label: 'Type', renderCell: (item:any) => item.type },
    {
      label: 'Complete',
      renderCell: (item:any) => item.isComplete.toString(),
    },
    { label: 'Tasks', renderCell: (item:any) => item.nodes },
  ];

  export default function Comp(){
    const data = { nodes }
    const theme = useTheme(getTheme());
    return <CompactTable columns={COLUMNS} data={data} theme={theme} />
  }
