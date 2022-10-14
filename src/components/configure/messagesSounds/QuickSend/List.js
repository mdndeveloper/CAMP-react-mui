import { Box, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useMemo, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {
  useDeleteElementMutation,
  useGetElementsQuery,
} from '../../../../features/userElement/userElementApiSlice';

const columns = [
  { field: 'displayName', headerName: 'Message', flex: 1 },
  {
    headerName: 'Action',
    field: 'action',
    width: 120,
    sortable: false,
    renderCell: ({ row }) => {
      const removeHandler = () => {
        row.deleteElement(row.id);
      };

      return (
        <>
          <Stack direction='row' gap={2} sx={{ fontSize: '20px' }}>
            <Box
              onClick={removeHandler}
              sx={{
                cursor: 'pointer',
                color: 'gray',
                transition: 'all 0.5s',
                '&:hover': {
                  color: '#F46969',
                },
              }}
            >
              <FaTrashAlt />
            </Box>
          </Stack>
        </>
      );
    },
  },
];

export default function ListTable() {
  const [itemPerPage, setItemPerPage] = useState(5);

  const { data, isSuccess } = useGetElementsQuery();
  const [deleteElement] = useDeleteElementMutation();

  const messages = useMemo(() => {
    if (!isSuccess) return [];
    return data.reduce((acc, cur) => {
      acc.push({
        ...cur,
        deleteElement,
      });
      return acc;
    }, []);
  }, [data, isSuccess, deleteElement]);

  return (
    <Box sx={{}}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={messages}
            columns={columns}
            disableSelectionOnClick
            disableColumnMenu
            pageSize={itemPerPage}
            onPageSizeChange={(newPageSize) => setItemPerPage(newPageSize)}
            rowsPerPageOptions={[5, 10, 20, 30, 50]}
            pagination
            style={{ border: 'none' }}
            autoHeight
          />
        </Box>
      </Box>
    </Box>
  );
}
