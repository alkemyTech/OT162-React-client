import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = (props) => {
  const { slides } = props;
  console.log(slides);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 15;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {slides.length > 0 && (
          <Grid item xs={12} md={10} lg={8}>
            <Paper square elevation={2} sx={{ marginTop: "10px" }}>
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
                      display: "flex",
                      alignItems: "center",
                      height: 50,
                      bgcolor: "background.default",
                    }}
                  >
                    <Typography
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      {slides[activeStep].name}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {slides.slice(0, maxSteps).map((step, index) => (
                      <div key={step.name}>
                        <Box
                          component="img"
                          sx={{
                            height: "100%",
                            alignItems:"center",
                            justifyContent:"center",
                            maxHeight: matches ? "500px" : "200px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "flex",
                            overflow: "hidden",
                            width: "auto",
                            maxWidth: "100%",
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
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                      >
                        Next
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
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
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
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
  );
};
export default Carousel;
