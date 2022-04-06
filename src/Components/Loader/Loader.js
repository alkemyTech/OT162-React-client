import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
          {loading && (
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
          ) }
        </Box>
        <Box sx={{ width: '100%' }}>
          {loading && (
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
          ) }
        </Box>
      </Box>
      {loading && (
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>
      ) }
    </div>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function Loader() {
  return (
    <Grid container spacing={8}>     
      <Grid item xs>
        <SkeletonChildrenDemo loading/>
      </Grid>
    </Grid>
  );
}
