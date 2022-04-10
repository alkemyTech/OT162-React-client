import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import './Loader.css'

function SkeletonChildrenDemo({ circular, text, rectangular }) {  

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ margin: 1 }}>
          {circular && (
            <Skeleton variant="circular" height={70} width={70}>
              <Avatar />
            </Skeleton>
          )}
        </Box>
        <Box sx={{ width: "100%" }}>
          {text && (
            <>
              <Skeleton width="100%" height="20px">
                <Typography>.</Typography>
              </Skeleton>
              <Skeleton width="100%" height="20px">
                <Typography>.</Typography>
              </Skeleton>
              <Skeleton width="100%" height="20px">
                <Typography>.</Typography>
              </Skeleton>
            </>
          )}
        </Box>
      </Box>
      {rectangular && (
        <Skeleton variant="rectangular" width="100%" height="200px">
          <div style={{ paddingTop: "57%" }} />
        </Skeleton>
      )}
    </div>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function Loader(props) {
  return (
    <div className="Loader">
      <Grid container spacing={8} style={{width:"80%"}}>
        <Grid item xs>
          <SkeletonChildrenDemo circular={props.circular} text={props.text} rectangular={props.rectangular}/>
        </Grid>
      </Grid>
    </div>
  );
}
