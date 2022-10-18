import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import SOUNDS from './soundData.json';

export default function SelectSound({ value = '3beeps', setValue }) {
  const data = SOUNDS;

  const handleChange = (event) => {
    const dataValue = event.target.value;
    setValue(dataValue);
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id='select-music-sound'>Select Music Sound</InputLabel>
        <Select
          labelId='select-music-sound'
          id='demo-multiple-chip'
          value={value}
          onChange={handleChange}
        >
          {data.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
