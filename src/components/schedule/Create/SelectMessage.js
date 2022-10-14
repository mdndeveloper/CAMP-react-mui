import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useMemo } from 'react';
import { useGetElementsQuery } from '../../../features/userElement/userElementApiSlice';

export default function SelectMessage({ value = '', setValue }) {
  const { data: items, isSuccess } = useGetElementsQuery();
  const data = useMemo(() => {
    if (!isSuccess) return [];
    return items.reduce((acc, cur) => {
      if (cur.type === 'schedule') {
        acc.push(cur);
      }
      return acc;
    }, []);
  }, [items, isSuccess]);
  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id='demo-multiple-chip-label'>Select Quick Send</InputLabel>
        <Select
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {data.map((item) => (
            <MenuItem key={item.id} value={item.displayName}>
              {item.displayName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
