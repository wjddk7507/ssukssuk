import React from 'react';

// material-ui
import { Box, Grid, Typography } from '@mui/material';

class Status extends React.Component {
  render() {
    const temp = this.props.curSensorData.temp;
    const humi = this.props.curSensorData.humi;
    const sensor_date = this.props.curSensorData.sensor_date;
    const isGood=this.props.isGood;

    return (
      <>
        <div className='status-card'>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="row">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <img
                    className="emoji_img"
                    src={
                    (isGood==1)
                      ? 'images/smile.png'
                      : 'images/bad.png'
                  }
                  alt="logo"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ ml: 2 }}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: '20px',
                        fontWeight: 700,
                        mb: 0.75,
                      }}
                    >
                      온도 : {temp}°C
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '20px',
                        fontWeight: 700,
                        mb: 0.75,
                      }}
                    >
                      습도 : {humi}%
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mb: 1 }}>
              <Typography>{sensor_date}</Typography>
            </Grid>
          </Box>
        </div>
      </>
    );
  }
}

export default Status;
