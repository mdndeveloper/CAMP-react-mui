import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageAsync } from '../../../features/message/thunks';
import { useGetConfigQuery } from '../../../features/userConfig/userConfigApiSlice';
import { getAuthUserId } from '../../../utils/auth';

const Item = ({ type, text, buttons, appendText }) => {
  const { data: config, isSuccess } = useGetConfigQuery(getAuthUserId());

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { isLoading } = useSelector((state) => state.messages);
  const { id } = useSelector((state) => state?.auth?.user);
  const { isProxy, data } = useSelector((state) => state?.auth?.proxy);

  const dispatch = useDispatch();

  const userId = useMemo(() => {
    return isProxy ? data.id : id;
  }, [id, data, isProxy]);

  const sendHandler = () => {
    if (!message) return;
    setLoading(true);
    const data = {
      userId,
      message: message + ' ' + appendText,
      dateTime: moment(),
      days: 0,
      duration: config[0].defaultDuration,
      lastSent: null,
      type: '',
      category: type,
    };

    dispatch(addMessageAsync(data));
    setTimeout(() => {
      setLoading(isLoading);
      setMessage('');
    }, 2000);
  };

  if (!isSuccess || data.length <= 0) return null;
  return (
    <>
      <Stack direction='row' gap={2} alignItems={'center'} flexWrap='wrap'>
        <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            label='Camper Name'
            variant='outlined'
            placeholder='Input here'
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
        <div>
          <LoadingButton loading={loading} onClick={sendHandler} {...buttons}>
            {text}
          </LoadingButton>
        </div>
      </Stack>
    </>
  );
};

export default Item;
