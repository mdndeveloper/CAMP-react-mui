import { Box, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import React, { useMemo } from 'react';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { activeEditMode } from '../../../../features/message/messageSlice';
import { deleteMessageAsync } from '../../../../features/message/thunks';

const columns = [
  { headerName: 'Message:', field: 'message', width: 250 },
  {
    headerName: 'Date and Time',
    field: 'dateTime',
    width: 200,
    renderCell: ({ value }) => {
      return <p>{moment(value).format(' h:mm:ss a ,MMM D, YYYY ')}</p>;
    },
  },
  { headerName: 'Days', field: 'days', width: 100 },
  { headerName: 'Duration', field: 'duration', width: 100 },
  {
    headerName: 'Action',
    width: 100,
    sortable: false,
    renderCell: ({ row }) => {
      const styles = {
        color: 'red',
        cursor: 'pointer',
        ':hover': { color: '#6c94dc' },
      };
      return (
        <Stack direction={'row'} spacing={1}>
          <Box
            component={FaPen}
            sx={styles}
            onClick={() =>
              row.dispatch(activeEditMode({ data: row, type: 'admin' }))
            }
          />
          <Box
            component={FaTrashAlt}
            sx={styles}
            onClick={() => row.dispatch(deleteMessageAsync(row.id))}
          />
        </Stack>
      );
    },
  },
];

export default function Table() {
  const [itemPerPage, setItemPerPage] = React.useState(10);

  const dispatch = useDispatch();

  const { data: messages } = useSelector((state) => state.messages);

  const messageFormate = useMemo(() => {
    if (messages.length === 0) return [];
    return messages.reduce((acc, cur) => {
      acc.push({ ...cur, dispatch });
      return acc;
    }, []);
  }, [messages, dispatch]);

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={messageFormate}
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
