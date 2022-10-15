import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useMemo } from 'react';
import { useGetElementsQuery } from '../../../features/userElement/userElementApiSlice';

export default function SelectSound({ value, setValue }) {
  const { data, isSuccess } = useGetElementsQuery();

  const messages = useMemo(() => {
    if (!isSuccess) return [];
    return data.reduce((acc, cur) => {
      if (cur.type === 'interview') {
        acc.push(cur);
      }
      return acc;
    }, []);
  }, [data, isSuccess]);
  const handleChange = (event) => {
    const dataValue = event.target.value;
    setValue(dataValue);
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id='demo-multiple-chip-label'>Select Quick Send</InputLabel>
        <Select
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          value={value}
          onChange={handleChange}
        >
          {messages.map((item) => (
            <MenuItem key={item.id} value={item.displayName}>
              {item.displayName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
