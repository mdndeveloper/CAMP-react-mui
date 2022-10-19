import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import moment from 'moment';
import React from 'react';
import { CSVLink } from 'react-csv';
import FilterDates from './Date';
const Top = (props) => {
  const { from, setFrom, to, setTo, data } = props;

  const fromDate = moment(from).format('L');
  const toDate = moment(to).format('L');

  return (
    <Box sx={{ pb: 2 }}>
      <FilterDates from={from} setFrom={setFrom} to={to} setTo={setTo}>
        <div>
          <CSVLink
            data={data}
            filename={`${fromDate}-${toDate}.csv`}
            style={{ textDecoration: 'none' }}
            target='_blank'
            Download
          >
            <LoadingButton
              loading={false}
              variant='contained'
              sx={{ background: '#6087d4', width: { xs: '100%', sm: '150px' } }}
            >
              Export CSV
            </LoadingButton>
          </CSVLink>
        </div>
      </FilterDates>
    </Box>
  );
};

export default Top;
