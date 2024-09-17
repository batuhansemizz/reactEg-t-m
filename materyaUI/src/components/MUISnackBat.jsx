import React from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function MUISnackBat() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="white" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="white"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
    <Button onClick={handleClick}>Open Snackbar</Button>
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message="Note archived"
      action={action}
      anchorOrigin={{vertical:'bottom',horizontal:'center'}}
    />
  </div>
  )
}

export default MUISnackBat