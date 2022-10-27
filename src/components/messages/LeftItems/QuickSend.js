import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { useGetElementsQuery } from '../../../features/userElement/userElementApiSlice';

export default function QuickSend({ value, setValue }) {
  const { data, isSuccess } = useGetElementsQuery();

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
          {isSuccess &&
            data
              .filter((d) => d.type === 'quick-send')
              .map((item) => (
                <MenuItem key={item.id} value={item.displayName}>
                  {item.displayName}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </div>
  );
}
