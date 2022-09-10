import { Box, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { FaCamera, FaPen, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStreamAsync } from '../../../../features/stream/thunks';

const columns = [
  { field: 'cameraName', headerName: 'Camera Name', flex: 1 },
  { field: 'ipAddress', headerName: 'Ip', flex: 2 },
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
    renderCell: ({ row }) => {
      const removeHandler = () => {
        console.log('first');
        row.dispatch(deleteStreamAsync(row.id));
      };

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

export default function Table() {
  const [itemPerPage, setItemPerPage] = React.useState(10);

  const dispatch = useDispatch();

  const {
    data: streams,
    isLoading,
    error,
  } = useSelector((state) => state.stream);

  const streamSetup = React.useMemo(() => {
    if (streams.length === 0) return [];
    return streams.reduce((acc, cur) => {
      acc.push({ ...cur, dispatch });
      return acc;
    }, []);
  }, [streams, dispatch]);

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={streamSetup}
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
