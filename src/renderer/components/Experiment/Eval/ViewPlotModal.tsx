import React from 'react';
import { Modal, ModalDialog, ModalClose, Box, Typography } from '@mui/joy';
import Chart from './Chart';
import * as chatAPI from 'renderer/lib/transformerlab-api-sdk';

function parseJSON(data) {
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export default function ViewPlotModal({ open, onClose, data, jobId, chart = true}) {
  if (!jobId) {
    return <></>;
  }

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        sx={{ width: '90vw', height: '90vh', pt: 5, position: 'relative' }}
      >
        <ModalClose />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Typography level="h4" mb={2}>
            Chart
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              maxWidth: '800px',
              maxHeight: '80vh',
              overflowY: 'auto',
              borderRadius: '8px',
              boxShadow: 1,
              p: 2,
            }}
          >
           {chart ? (
    <Chart metrics={parseJSON(data)} />
  ) : (
    <div>{JSON.stringify(parseJSON(data))}</div>
  )}
          </Box>
        </Box>
      </ModalDialog>
    </Modal>
  );
}
