import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
import Layout from '../../layout';
import Wrapper from './styles';
import '../../App.css';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const image = {
  height: 55,
  my: 4,
};

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

const Main = () => {
  let history = useHistory();
  const user = useSelector(state => state.Auth.user);

  const myfarmClickHandler = () => {
    if (!user.status) {
      history.push('/Auth');
    } else {
      history.push('/MyFarm');
    }
  };

  return (
    <Layout>
      <Wrapper>
        <Container
          sx={{
            mt: 3,
            mb: 14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Background
            sx={{
              backgroundColor: '#FBF7F2',
              backgroundPosition: 'center',
            }}
          />
          <Container
            component="section"
            sx={{ mt: 20, display: 'flex' }}
            className="top-area"
          >
            <Grid container>
              <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#ffd49e',
                    py: 6,
                    px: 3,
                    boxShadow: 3,
                  }}
                >
                  <Box component="form" sx={{ maxWidth: 380, maxHeight: 200 }}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      className="title1"
                      sx={{ fontFamily: `'Do Hyeon', sans-serif` }}
                    >
                      ??? ?????? ??? IoT
                    </Typography>
                    <Typography
                      variant="h3"
                      gutterBottom
                      className="title2"
                      sx={{ fontFamily: `'Do Hyeon', sans-serif` }}
                    >
                      ??????
                    </Typography>
                    <Typography
                      variant="h5"
                      className="title_desc"
                      sx={{ fontFamily: `'Do Hyeon', sans-serif` }}
                    >
                      ????????? ?????? ?????? ???????????? ?????? ??????
                    </Typography>
                    <Typography
                      variant="h5"
                      className="title_desc"
                      sx={{ fontFamily: `'Do Hyeon', sans-serif` }}
                    >
                      ?????? ????????? ???????????? ?????????
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { md: 'block', xs: 'none' },
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -67,
                    left: -67,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    boxShadow: 3,
                    background:
                      'url(https://mui.com/static/themes/onepirate/productCTAImageDots.png)',
                  }}
                />
                <Box
                  component="img"
                  src="https://www.kenan-asia.org/wp-content/uploads/2021/02/farmers-thailand.png.webp"
                  alt="call to action"
                  sx={{
                    position: 'absolute',
                    top: -28,
                    left: -28,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    maxWidth: 600,
                    boxShadow: 3,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Container>
        <Box
          component="section"
          sx={{
            display: 'flex',
            bgcolor: '#FFF2E2',
            overflow: 'hidden',
          }}
        >
          <Container
            sx={{
              mt: 10,
              mb: 10,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="/static/themes/onepirate/productCurvyLines.png"
              alt="curvy lines"
              sx={{
                pointerEvents: 'none',
                position: 'absolute',
                top: -180,
                opacity: 0.7,
              }}
            />
            <p sx={{ mb: 14 }} className="what_to_do">
              ????????? ??? ??? ??????????
            </p>
            <div className="desc">
              <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                  <Box sx={item}>
                    <p className="sub_title">1. ????????? ??????</p>
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/128/4478/4478100.png"
                      alt="suitcase"
                      sx={image}
                    />
                    <p>Kiosk??? ?????? ???????????? ?????? ????????? ????????????</p>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={item}>
                    <p className="sub_title">2. ????????? ??????</p>
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/128/4481/4481323.png"
                      alt="graph"
                      sx={image}
                    />
                    <p>
                      IoT ????????? ?????????
                      <br />
                      ???????????? ????????????
                      <br />
                      ????????? ????????????
                    </p>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={item}>
                    <p className="sub_title">3. ????????? ????????????</p>
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/128/4185/4185445.png"
                      alt="clock"
                      sx={image}
                    />
                    <p>
                      ????????? ????????? ???<br />
                      ????????? ????????????
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </div>
            <img
              src="/images/start_button.png"
              alt="?????? ????????????"
              onClick={() => myfarmClickHandler()}
              className="mouse-cursor"
              style={{ width: '240px', marginTop: '35px' }}
            />
          </Container>
        </Box>
      </Wrapper>
    </Layout>
  );
};

export default Main;
