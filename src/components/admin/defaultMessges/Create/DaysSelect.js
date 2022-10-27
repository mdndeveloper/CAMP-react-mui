import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  { label: 'Monday', value: 1 },
  { label: 'Tuesday', value: 2 },
  { label: 'Wednesday', value: 3 },
  { label: 'Thursday', value: 4 },
  { label: 'Friday', value: 5 },
  { label: 'Saturday', value: 6 },
  { label: 'Sunday', value: 0 },
];

function getStyles(name, days, theme) {
  return {
    fontWeight:
      days.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function DaysSelect({ days = 'Sunday', setDays }) {
  const theme = useTheme();

  const handleChange = (event) => {
    const value = event.target.value;
    setDays(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id='daysSelectId'>Days</InputLabel>
        <Select
          labelId='daysSelectId'
          id='demo-multiple-chip'
          multiple
          value={days}
          onChange={handleChange}
          input={<OutlinedInput id='selectInput' label='Days' />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => {
                const find = names.find((i) => i.value === value);
                return <Chip key={find.value} label={find.label} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name.value}
              value={name.value}
              style={getStyles(name.label, days, theme)}
            >
              {name.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
