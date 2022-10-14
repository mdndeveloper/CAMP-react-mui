import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Suggested from './Suggested';

const SuggestedModal = ({ open, setIsOpen }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setIsOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Suggested />
        </Box>
      </Modal>
    </div>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default SuggestedModal;
