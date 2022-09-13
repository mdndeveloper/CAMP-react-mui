import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useMemo, useState } from 'react';
import { useDeleteUserMutation } from '../../../features/admin/userApiSlice';
import CameraEditModal from './CameraEditModal/CameraEditModal';

const CamsTable = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [deleteUser] = useDeleteUserMutation();

  const [itemPerPage, setItemPerPage] = useState(10);
  const columns = [
    {
      headerName: 'Center Name:',
      field: 'username',
      width: 250,

      renderCell: (props) => {
        const { formattedValue, row } = props;

        return (
          <>
            <Box
              sx={{
                textDecoration: 'underline',
                color: 'blue',
                cursor: 'pointer',
              }}
              to={`/dashboard`}
              onClick={() => {
                row.setIsOpen(true);
                row.setSelectedItem(row.id);
              }}
            >
              {formattedValue}
            </Box>
          </>
        );
      },
    },
    { headerName: 'Contact #:', field: 'contactno', width: 200 },
    { headerName: 'Email:', field: 'email', width: 200 },
    { headerName: 'Location:', field: 'location', width: 150 },
    {
      headerName: 'Delete',
      width: 100,
      renderCell: (props) => {
        const { id, deleteUser } = props.row;
        return (
          <div className='flex gap-x-1'>
            <Button color='error' onClick={() => deleteUser(id)}>
              <CloseIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  const filterData = useMemo(() => {
    return data.reduce((acc, cur) => {
      acc.push({ ...cur, deleteUser, setSelectedItem, setIsOpen });
      return acc;
    }, []);
  }, [data, deleteUser]);

  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <DataGrid
              rows={filterData}
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
      {isOpen && (
        <CameraEditModal
          open={isOpen}
          setOpen={(result) => {
            setSelectedItem(null);
            setIsOpen(result);
          }}
          id={selectedItem}
        />
      )}
    </>
  );
};

export default CamsTable;
