import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import styles from "../../assets/jss/material-dashboard-react/components/formDialogStyle.js";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Pending");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" style={styles.button} onClick={handleClickOpen}>
        Open
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" style={styles.window}>
          <Button onClick={handleClose} color="primary" style={styles.close_button}>
            X
          </Button>
  <DialogTitle id="form-dialog-title">Status: {status}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setStatus({status: "Approved"}).handleClose} color="primary">
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}