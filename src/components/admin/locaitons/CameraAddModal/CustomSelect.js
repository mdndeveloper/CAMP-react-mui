import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

function getStyles(name, selected, theme) {
  return {
    fontWeight:
      selected !== name
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CustomSelect = ({ value, onChange, values }) => {
  const theme = useTheme();

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
          value={value || values[0]?.value || ''}
          sx={{ width: '100%' }}
        >
          {values.map(({ label, value: itemValue }) => (
            <MenuItem
              key={Math.random()}
              value={itemValue}
              style={getStyles(value, itemValue, theme)}
            >
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
