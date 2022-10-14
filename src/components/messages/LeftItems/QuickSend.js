import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { useSelector } from 'react-redux';

export default function QuickSend({ value, setValue }) {
  const { data } = useSelector((state) => state.messages);

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
          {data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.message}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
