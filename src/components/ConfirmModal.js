import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import Unicons from '@iconscout/react-unicons';

const ConfirmModal = ({ title, desc, open, onCancel, onFinish }) => {
  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <Box position="absolute" top={0} right={0}>

      </Box>
      <DialogContent>
        <Typography>{desc}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary" variant="contained">
          Cancel
        </Button>
        <Button onClick={onFinish} color="secondary" variant="contained" >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;