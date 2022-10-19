import CloseIcon from '@mui/icons-material/Close';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDeleteUserMutation } from '../../../features/admin/userApiSlice';
import { setProxyUser } from '../../../features/login/authSlice';
import CameraEditModal from './CameraEditModal/CameraEditModal';

const CamsTable = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      headerName: 'Action',
      width: 150,
      renderCell: (props) => {
        const { id, deleteUser, setIsOpen, setSelectedItem } = props.row;

        return (
          <Stack direction={'row'} spacing={1} className='flex gap-x-1'>
            <Box
              sx={{
                color: '#1874D0',
                cursor: 'pointer',
              }}
              color='error'
              onClick={() => {
                setIsOpen(true);
                setSelectedItem(id);
              }}
            >
              <EditIcon />
            </Box>
            <Box
              sx={{
                color: '#A51E36',
                cursor: 'pointer',
              }}
              color='error'
              onClick={() => deleteUser(id)}
            >
              <CloseIcon />
            </Box>
            <Box
              sx={{
                color: '#82da73',
                cursor: 'pointer',
              }}
              color='error'
              onClick={() => {
                dispatch(setProxyUser(props.row));
                navigate('/messages');
              }}
            >
              <EastOutlinedIcon />
            </Box>
          </Stack>
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
