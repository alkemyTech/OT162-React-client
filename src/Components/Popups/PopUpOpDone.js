import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import Modal from "@mui/material/Modal";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

const PopUpOpDone = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => props.setOpen([false, ""])}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Paper
          variant="outlined"
          style={{
            position: "absolute",
            maxWidth: 400,
            padding: "20px",
            backgroundColor: "#e0e0e0",
          }}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Icon
                component={props.result === "error" ? ErrorIcon : CheckIcon}
                style={{
                  fontSize: 100,
                  color: props.result === "error" ? "#c65753" : "#61b146",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom align="center" variant="h4">
                {props.result === "error"
                  ? "Operación Fallida."
                  : "Operación Exitosa."}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography gutterBottom align="center" variant="body1">
                {props.text}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                fullWidth={true}
                size="medium"
                variant="contained"
                onClick={() => props.setOpen([false, ""])}
                style={{
                  background: props.result === "error" ? "#c65753" : "#61b146",
                }}
              >
                Aceptar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </div>
  );
};

export default PopUpOpDone;
