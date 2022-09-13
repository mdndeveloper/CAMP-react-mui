import { Box, Button } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useGetUsersQuery } from '../../../features/admin/userApiSlice';
import Card from '../Card';
import CameraAddModal from './CameraAddModal/CameraAddModal';
import CamsTable from './CamsTable';

const Cams = ({ search }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError, isSuccess } = useGetUsersQuery();

  const filteredData = useMemo(() => {
    if (!isSuccess) return [];
    return data.reduce((acc, cur) => {
      if (!search) {
        acc.push(cur);
        return acc;
      }
      const condition = cur.cname.toLowerCase().includes(search.toLowerCase());
      if (condition) acc.push(cur);
      return acc;
    }, []);
  }, [isSuccess, data, search]);

  if (isLoading && isError) return null;

  return (
    <Card
      title='Cams'
      color='#5f7686'
      hasButton
      button={<CreateButton setOpen={setIsOpen} />}
    >
      <Box sx={{ minHeight: '300px', boxSizing: 'border-box' }}>
        <CamsTable data={filteredData} />
      </Box>
      <CameraAddModal open={isOpen} setOpen={setIsOpen} />
    </Card>
  );
};

const CreateButton = ({ setOpen }) => {
  return (
    <Button variant='contained' onClick={() => setOpen(true)}>
      Create
    </Button>
  );
};

export default Cams;
