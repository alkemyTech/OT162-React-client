import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Grid } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import '../Carousel.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Carousel = (props) => {
  const { slides, background } = props
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = 10

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {slides.length > 0 && (
          <Grid item xs={12}>
            <Paper
              square
              elevation={10}
              sx={{ marginTop: '10px' }}
              style={{ background }}
            >
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Paper
                    square
                    elevation={0}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 50,
                      bgcolor: 'background.default'
                    }}
                    style={{
                      background,
                      color: '#ffffff',
                      textShadow: '1px 1px 2px black'
                    }}
                  >
                    <Typography
                      variant="h5"
                      style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    >
                      {slides[activeStep].name}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    interval={5000}
                  >
                    {slides.slice(0, maxSteps).map((step, index) => (
                      <div key={step.name} style={{ placeItems: 'center' }}>
                        <Box
                          component="img"
                          sx={{
                            height: matches ? '500px' : '250px',
                            width: '100%',
                            maxWidth: '100%',
                            margin: 'auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            display: 'flex',
                            textAlign: 'center',
                            objectFit: 'cover'
                          }}
                          src={step.image}
                          alt={step.name}
                        />
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                </Grid>
                <Grid item xs={12}>
                  <MobileStepper
                    steps={matches ? maxSteps : 0}
                    position="static"
                    activeStep={activeStep}
                    style={{ background }}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                      >
                        Next
                        {theme.direction === 'rtl'
                          ? (
                          <KeyboardArrowLeft />
                            )
                          : (
                          <KeyboardArrowRight />
                            )}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === 'rtl'
                          ? (
                          <KeyboardArrowRight />
                            )
                          : (
                          <KeyboardArrowLeft />
                            )}
                        Back
                      </Button>
                    }
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  )
}
export default Carousel
