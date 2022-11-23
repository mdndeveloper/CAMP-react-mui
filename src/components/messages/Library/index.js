import { Box, Divider, Paper, Typography } from '@mui/material';
import moment from 'moment';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Table from './Table';
import Top from './Top';

const Library = () => {
  const [from, setFrom] = useState(moment());
  const [to, setTo] = useState(moment());

  const { data: messages } = useSelector((state) => state.messages);

  const data = useMemo(() => {
    console.log(to);
    return messages.filter((m) => {
      return moment(m.createdAt).isBetween(from, moment(to).add(1, 'day'));
    });
  }, [messages, from, to]);

  const topProps = {
    to,
    setTo,
    from,
    setFrom,
    data,
  };

  return (
    <div>
      <Box
        as={Paper}
        sx={{
          boxSizing: 'border-box',
          px: '10px',
          borderRadius: '10px',
          mt: '30px',
        }}
      >
        <Box
          sx={{
            py: '15px',
            pl: '10px',
            width: {
              xs: '95%',
              sm: '40%',
            },
            borderTop: '3px solid #6087d4',
          }}
        >
          <Typography
            variant='body1'
            sx={{ textTransform: 'uppercase' }}
            component={'h2'}
          >
            Exports
          </Typography>
        </Box>
        <Divider />
        <div>
          <Top {...topProps} />
          <Table data={data} />
        </div>
      </Box>
    </div>
  );
};

export default Library;
