import React from 'react';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const Timesheet: React.FC = () => {
  const columns: GridColumns = [
    {
      field: 'description',
      headerName: 'Description',
      flex: 2,
      editable: true,
    },
    {
      field: 'start',
      headerName: 'Start',
      flex: 1,
      editable: true,
    },
    {
      field: 'end',
      headerName: 'End',
      flex: 1,
      editable: true,
    },
    {
      field: 'elapse',
      headerName: 'Time elapsed',
      flex: 1,
      editable: true,
    },
  ];

  const rows = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => {
    return {
      id: index,
      description: `test description ${index}`,
      start: 1000 * index,
      end: 1000 * (index + 1),
      elapse: 1000 * (index + 1) - 1000 * index,
    };
  });

  return (
    <Box width={1} height="30rem">
      <DataGrid rows={rows} columns={columns} hideFooter />
    </Box>
  );
};

export default Timesheet;
