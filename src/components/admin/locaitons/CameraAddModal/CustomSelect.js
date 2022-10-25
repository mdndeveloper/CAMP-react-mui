import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import React, { useMemo } from 'react';
import TIMEZONES from './timezones';

const CustomSelect = ({ value, onChange }) => {
  const timezones = useMemo(() => {
    const data = TIMEZONES.sort((a, b) => {
      if (a.offset > b.offset) return 1;
      if (a.offset < b.offset) return -1;
      return 0;
    }).reduce((acc, cur) => {
      acc.push({ label: cur.text, value: cur.text });
      return acc;
    }, []);
    return data;
  }, []);
  return (
    <Box component='div'>
      <FormControl
        className='form-control1'
        sx={{
          width: {
            xs: '100%',
          },
        }}
        size='small'
        fullWidth
      >
        <Select
          input={<OutlinedInput />}
          placeholder='Select'
          fullWidth
          className='select-control1'
          onChange={onChange}
          value={value}
          sx={{ width: '100%' }}
        >
          {timezones.map((item) => (
            <MenuItem key={Math.random()} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
