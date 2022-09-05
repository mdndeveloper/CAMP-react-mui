import { Box, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { FaCamera, FaPen, FaTrashAlt } from 'react-icons/fa';
import data from './streams.json';
const columns = [
  { field: 'name', headerName: 'Camera Name', flex: 1 },
  { field: 'id', headerName: 'ID', width: 130, flex: 1 },
  {
    headerName: 'Icon',
    width: 100,
    flex: 1,
    field: 'icon',
    sortable: false,
    renderCell: (props) => {
      const { row } = props;

      return (
        <>
          <Box
            as='p'
            sx={{ fontSize: '20px', color: 'gray' }}
            to={`/dashboard`}
          >
            <FaCamera />
          </Box>
        </>
      );
    },
  },
  {
    headerName: 'Action',
    field: 'action',
    width: 120,
    sortable: false,
    renderCell: (props) => {
      const { row } = props;

      return (
        <>
          <Stack direction='row' gap={2} sx={{ fontSize: '20px' }}>
            <Box
              sx={{
                cursor: 'pointer',
                color: 'gray',
                transition: 'all 0.5s',
                '&:hover': {
                  color: '#6087D4',
                },
              }}
            >
              <FaPen />
            </Box>
            <Box
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

export default function Table() {
  const [itemPerPage, setItemPerPage] = React.useState(5);
  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={data}
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
