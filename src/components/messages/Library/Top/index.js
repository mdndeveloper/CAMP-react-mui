import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import moment from 'moment';
import React, { useMemo, useState } from 'react';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';
import FilterDates from './Date';
const Top = () => {
  const [from, setFrom] = useState(moment());
  const [to, setTo] = useState(moment());

  const { data: messages } = useSelector((state) => state.messages);

  const data = useMemo(() => {
    return messages.filter((m) => {
      return moment(m.createdAt).isBetween(from, to);
    });
  }, [messages, from, to]);

  return (
    <Box sx={{ pb: 2 }}>
      <FilterDates from={from} setFrom={setFrom} to={to} setTo={setTo}>
        <div>
          <CSVLink
            data={data}
            filename={'my-file.csv'}
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
