import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import React from 'react';

const columns = [
  { headerName: 'Message:', field: 'message', flex: 1 },
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
];

export default function Table({ data }) {
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
